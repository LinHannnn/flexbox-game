window.showLevel = function(levelId) {
  const level = levels.find(l => l.id === levelId);
  if (!level) return;

  // 创建弹窗
  const modal = document.createElement('div');
  modal.className = 'game-modal';
  modal.innerHTML = `
    <div class='game-content'>
      <h2>${level.title}</h2>
      <p>${level.description}</p>
      ${level.html}
      <textarea class='code-input' id='cssInput' rows='4' spellcheck='false'>${level.initialCSS}</textarea>
      <div style='margin-top:10px;'>
        <button class='btn' id='nextBtn' style='background:#00ffae;color:#222;' disabled>下一关</button>
        <button class='btn' id='closeBtn' style='margin-left:12px;background:#333;'>关闭</button>
      </div>
      <div id='hint' style='margin-top:10px;color:#ffd200;'></div>
      <div id='result'></div>
    </div>
  `;
  document.body.appendChild(modal);

  // 预览区样式
  const preview = modal.querySelector('#preview');
  const cssInput = modal.querySelector('#cssInput');
  const result = modal.querySelector('#result');
  const hint = modal.querySelector('#hint');
  const nextBtn = modal.querySelector('#nextBtn');

  // 关卡提示
  let hintShown = false;
  function showHint() {
    if (!hintShown) {
      hint.textContent = '提示：' + level.hint;
      hintShown = true;
    }
  }

  // 预览区样式管理
  let previewStyleTag = null;
  function setPreviewStyle(css) {
    if (!previewStyleTag) {
      previewStyleTag = document.createElement('style');
      previewStyleTag.setAttribute('data-preview', '1');
      modal.appendChild(previewStyleTag);
    }
    previewStyleTag.innerHTML = css;
  }

  // 初始应用 initialCSS
  setPreviewStyle(cssInput.value);

  // 实时应用CSS
  cssInput.addEventListener('input', function() {
    setPreviewStyle(cssInput.value);
    checkAnswer();
  });

  // 实时校验答案
  function checkAnswer() {
    const userCSS = cssInput.value.replace(/\s+/g, '').toLowerCase();
    const goalCSS = level.goalCSS.replace(/\s+/g, '').toLowerCase();
    if (userCSS === goalCSS) {
      result.innerHTML = "<div class='success'>恭喜你，通关成功！</div>";
      nextBtn.disabled = false;
      nextBtn.focus();
    } else {
      result.innerHTML = "<div class='error'>还没通过哦，再试试！</div>";
      showHint();
      nextBtn.disabled = true;
    }
  }
  checkAnswer();

  // 选择器高亮功能
  let highlightEls = [];
  function clearHighlight() {
    highlightEls.forEach(el => el.classList.remove('css-highlight'));
    highlightEls = [];
  }
  function highlightSelector(selector) {
    clearHighlight();
    if (!selector) return;
    try {
      // 只在预览区内查找
      const els = preview.parentNode.querySelectorAll(selector);
      els.forEach(el => el.classList.add('css-highlight'));
      highlightEls = Array.from(els);
    } catch (e) {}
  }
  // 监听输入框选中内容
  cssInput.addEventListener('select', function(e) {
    const value = cssInput.value;
    const selStart = cssInput.selectionStart;
    const selEnd = cssInput.selectionEnd;
    // 获取当前行
    const before = value.lastIndexOf('\n', selStart - 1) + 1;
    const after = value.indexOf('\n', selEnd);
    const line = value.substring(before, after === -1 ? value.length : after);
    // 匹配选择器（如 #b1, .box, #preview）
    const match = line.match(/^([^{]+){/);
    if (match) {
      const selector = match[1].trim();
      highlightSelector(selector);
    } else {
      clearHighlight();
    }
  });
  // 失焦时清除高亮
  cssInput.addEventListener('blur', clearHighlight);

  modal.querySelector('#closeBtn').onclick = () => {
    clearHighlight();
    document.body.removeChild(modal);
  };
  nextBtn.onclick = () => {
    clearHighlight();
    document.body.removeChild(modal);
    const nextLevel = levels.find(l => l.id === levelId + 1);
    if (nextLevel) {
      window.showLevel(levelId + 1);
    } else {
      // 已是最后一关
      const finishModal = document.createElement('div');
      finishModal.className = 'game-modal';
      finishModal.innerHTML = `<div class='game-content'><h2>全部通关！</h2><p>你已经完成所有关卡，Flexbox 技能大大提升！</p><button class='btn' id='closeFinishBtn'>关闭</button></div>`;
      document.body.appendChild(finishModal);
      finishModal.querySelector('#closeFinishBtn').onclick = () => document.body.removeChild(finishModal);
    }
  };
};

// 关卡预览样式和高亮样式
const style = document.createElement('style');
style.innerHTML = `
  .box {
    width: 40px; height: 40px;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    border-radius: 8px;
    margin: 0 4px;
    display: inline-block;
    box-shadow: 0 2px 8px rgba(0,198,255,0.18);
    transition: transform 0.2s;
  }
  .box:hover {
    transform: scale(1.12) rotate(-6deg);
    box-shadow: 0 8px 32px rgba(255,210,0,0.18);
  }
  .css-highlight {
    outline: 3px solid #ffd200;
    box-shadow: 0 0 16px 4px #ffd20099 !important;
    z-index: 2;
    position: relative;
    animation: highlight-flash 0.7s linear infinite alternate;
  }
  @keyframes highlight-flash {
    0% { outline-color: #ffd200; box-shadow: 0 0 16px 4px #ffd20099; }
    100% { outline-color: #00c6ff; box-shadow: 0 0 24px 8px #00c6ff99; }
  }
`;
document.head.appendChild(style);