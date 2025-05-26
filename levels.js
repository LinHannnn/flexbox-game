const levels = [
  {
    id: 1,
    title: "基础：让盒子横向排列",
    description: "使用 Flexbox 让所有小方块横向排列。",
    html: `<div class='flex-preview' id='preview'><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { }",
    goalCSS: "#preview { display: flex; }",
    hint: "使用 display: flex;"
  },
  {
    id: 2,
    title: "主轴居中",
    description: "让所有小方块在水平方向居中对齐。",
    html: `<div class='flex-preview' id='preview'><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; }",
    goalCSS: "#preview { display: flex; justify-content: center; }",
    hint: "justify-content 控制主轴对齐方式。"
  },
  {
    id: 3,
    title: "交叉轴居中",
    description: "让所有小方块在垂直方向居中对齐。",
    html: `<div class='flex-preview' id='preview' style='height:120px'><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; height: 120px; }",
    goalCSS: "#preview { display: flex; height: 120px; align-items: center; }",
    hint: "align-items 控制交叉轴对齐方式。"
  },
  {
    id: 4,
    title: "主轴两端对齐",
    description: "让小方块分布在两端。",
    html: `<div class='flex-preview' id='preview'><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; }",
    goalCSS: "#preview { display: flex; justify-content: space-between; }",
    hint: "justify-content: space-between;"
  },
  {
    id: 5,
    title: "主轴等间距",
    description: "让小方块之间间距相等。",
    html: `<div class='flex-preview' id='preview'><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; }",
    goalCSS: "#preview { display: flex; justify-content: space-around; }",
    hint: "justify-content: space-around;"
  },
  {
    id: 6,
    title: "反向排列",
    description: "让小方块从右到左排列。",
    html: `<div class='flex-preview' id='preview'><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; }",
    goalCSS: "#preview { display: flex; flex-direction: row-reverse; }",
    hint: "flex-direction: row-reverse;"
  },
  {
    id: 7,
    title: "垂直排列",
    description: "让小方块垂直排列。",
    html: `<div class='flex-preview' id='preview' style='height:120px'><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; height: 120px; }",
    goalCSS: "#preview { display: flex; height: 120px; flex-direction: column; }",
    hint: "flex-direction: column;"
  },
  {
    id: 8,
    title: "换行排列",
    description: "让小方块自动换行。",
    html: `<div class='flex-preview' id='preview' style='width:180px'><div class='box'></div><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; width: 180px; }",
    goalCSS: "#preview { display: flex; width: 180px; flex-wrap: wrap; }",
    hint: "flex-wrap: wrap;"
  },
  {
    id: 9,
    title: "子项放大",
    description: "让第一个小方块占据更多空间。",
    html: `<div class='flex-preview' id='preview'><div class='box' id='b1'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; } #b1 { }",
    goalCSS: "#preview { display: flex; } #b1 { flex: 2; }",
    hint: "flex 属性可以让子项放大。"
  },
  {
    id: 10,
    title: "子项缩小",
    description: "让最后一个小方块缩小。",
    html: `<div class='flex-preview' id='preview'><div class='box'></div><div class='box'></div><div class='box' id='b3'></div></div>`,
    initialCSS: "#preview { display: flex; } #b3 { width: 80px; }",
    goalCSS: "#preview { display: flex; } #b3 { width: 80px; flex-shrink: 2; }",
    hint: "flex-shrink 控制子项缩小比例。"
  },
  {
    id: 11,
    title: "子项对齐",
    description: "让第二个小方块在交叉轴底部对齐。",
    html: `<div class='flex-preview' id='preview' style='height:120px'><div class='box'></div><div class='box' id='b2'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; height: 120px; align-items: flex-start; } #b2 { }",
    goalCSS: "#preview { display: flex; height: 120px; align-items: flex-start; } #b2 { align-self: flex-end; }",
    hint: "align-self 可以单独对齐子项。"
  },
  {
    id: 12,
    title: "间距控制",
    description: "让小方块之间有固定间距。",
    html: `<div class='flex-preview' id='preview'><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; } .box { }",
    goalCSS: "#preview { display: flex; gap: 16px; } .box { }",
    hint: "gap 属性可以直接设置间距。"
  },
  {
    id: 13,
    title: "主轴反向居中",
    description: "让小方块在主轴反向居中。",
    html: `<div class='flex-preview' id='preview'><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; flex-direction: row-reverse; }",
    goalCSS: "#preview { display: flex; flex-direction: row-reverse; justify-content: center; }",
    hint: "justify-content 结合 row-reverse 使用。"
  },
  {
    id: 14,
    title: "多行垂直居中",
    description: "让多行小方块在交叉轴居中。",
    html: `<div class='flex-preview' id='preview' style='width:180px; height:120px'><div class='box'></div><div class='box'></div><div class='box'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; flex-wrap: wrap; width: 180px; height: 120px; }",
    goalCSS: "#preview { display: flex; flex-wrap: wrap; width: 180px; height: 120px; align-content: center; }",
    hint: "align-content 控制多行对齐。"
  },
  {
    id: 15,
    title: "综合挑战",
    description: "让第一个小方块放大，第二个小方块底部对齐，所有小方块居中。",
    html: `<div class='flex-preview' id='preview' style='height:120px'><div class='box' id='b1'></div><div class='box' id='b2'></div><div class='box'></div></div>`,
    initialCSS: "#preview { display: flex; height: 120px; justify-content: center; align-items: center; } #b1 { } #b2 { }",
    goalCSS: "#preview { display: flex; height: 120px; justify-content: center; align-items: center; } #b1 { flex: 2; } #b2 { align-self: flex-end; }",
    hint: "综合运用 flex、align-self、justify-content、align-items。"
  }
];

// 渲染关卡按钮
document.addEventListener('DOMContentLoaded', () => {
  const levelsGrid = document.getElementById('levels');
  if (levelsGrid) {
    levels.forEach(level => {
      const btn = document.createElement('button');
      btn.className = 'level-btn';
      btn.textContent = `关卡 ${level.id}`;
      btn.onclick = () => window.showLevel(level.id);
      levelsGrid.appendChild(btn);
    });
  }
});