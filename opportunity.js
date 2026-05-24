const OPPORTUNITIES = {
  needle: {
    type: "针尖型机会",
    title: "小格子里的一个参数，刺穿旧格局。",
    text: "它起点通常很小，但有一个可量化参数跨过阈值。真正要看的不是今天有多大，而是这根针是否已经有可靠方向。",
    signals: [
      ["看参数", "成本、性能、渗透率或体验跨过临界阈值。"],
      ["看传导", "这个参数能不能沿棋盘传到相邻维度。"],
      ["看误判", "主流玩家是否仍用当前规模低估它。"]
    ],
    link: `./index.html?case=${encodeURIComponent("英伟达")}#generator`
  },
  stick: {
    type: "绕棒型机会",
    title: "几条不够强的弱线，缠成一条新主线。",
    text: "它不靠单点爆发，而靠多个格子以特定方式互相补位。单看每一格都平庸，连起来才成立。",
    signals: [
      ["看组合", "几个弱信号是否刚好互相补短板。"],
      ["看连接", "分发、供给、客群之间是否出现新通路。"],
      ["看错位", "巨头是不是不愿意按这套结构重做自己。"]
    ],
    link: `./index.html?case=${encodeURIComponent("拼多多")}#generator`
  },
  dam: {
    type: "大坝型机会",
    title: "关键位置已经成坝，只等行业水位上涨。",
    text: "它往往不神秘，甚至很显眼。难点在于判断这座大坝是否继续变厚，以及上涨的水会不会真的流向它。",
    signals: [
      ["看坝体", "供应链、生态、渠道或客户关系是否足够难绕开。"],
      ["看水位", "需求是否还在长期上涨。"],
      ["看裂缝", "替代路线、政策或客户自建是否正在削坝。"]
    ],
    link: `./index.html?case=${encodeURIComponent("宁德时代")}#generator`
  },
  pivot: {
    type: "转轴型机会",
    title: "不是某个格子变强，而是比较单位变了。",
    text: "当用户、技术或规则迫使行业换一种单位来比较，旧棋盘就开始失效。先画出新坐标的人，会先占住新位置。",
    signals: [
      ["看旧指标", "旧指标是否解释不了用户行为。"],
      ["看新单位", "行业是否出现新的基本分析单元。"],
      ["看站位", "谁最早在新轴上建立默认位置。"]
    ],
    link: `./index.html?case=${encodeURIComponent("苹果")}#generator`
  }
};

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    themeToggle.textContent = next === "dark" ? "浅色" : "深色";
  });
}

const inspectorType = document.getElementById("inspectorType");
const inspectorTitle = document.getElementById("inspectorTitle");
const inspectorText = document.getElementById("inspectorText");
const inspectorSignals = document.getElementById("inspectorSignals");
const inspectorCaseLink = document.getElementById("inspectorCaseLink");

function renderOpportunity(key) {
  const item = OPPORTUNITIES[key];
  if (!item || !inspectorType) return;
  inspectorType.textContent = item.type;
  inspectorTitle.textContent = item.title;
  inspectorText.textContent = item.text;
  inspectorSignals.innerHTML = item.signals.map(([title, text]) => (
    `<article><strong>${title}</strong><span>${text}</span></article>`
  )).join("");
  inspectorCaseLink.href = item.link;

  document.querySelectorAll("[data-opportunity]").forEach((node) => {
    node.classList.toggle("active", node.dataset.opportunity === key);
  });
  document.querySelectorAll("[data-opportunity-card]").forEach((node) => {
    node.classList.toggle("active", node.dataset.opportunityCard === key);
  });
}

document.querySelectorAll("[data-opportunity]").forEach((node) => {
  node.addEventListener("click", () => renderOpportunity(node.dataset.opportunity));
});

renderOpportunity("needle");
