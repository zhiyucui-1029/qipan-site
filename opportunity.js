const OPPORTUNITIES = {
  rift: {
    title: "当前选中 — 裂口型 · 英伟达 · AI 算力",
    peerTitle: "同类候选公司 — 裂口型 · 供给侧断点",
    tags: ["裂口型", "供给侧断点", "AI 算力"],
    score: "8.6",
    positive: [
      "GPU 架构领先，性能代际优势明显",
      "CUDA 生态与开发者护城河深厚",
      "AI 训练与推理需求指数级增长",
      "数据中心资本开支持续上修",
      "Blackwell 放量，供给紧俏延续"
    ],
    negative: [
      "算力需求增速显著放缓",
      "国产替代突破生态壁垒",
      "竞争对手实现代际反超",
      "客户自研芯片大规模替代",
      "先进制程供给出现过剩"
    ],
    actions: [
      ["◉", "跟踪关键变量", "跟踪供给、需求与竞争格局的关键指标"],
      ["▥", "验证市场定价", "评估当前预期与实际变化的偏离程度"],
      ["▤", "建立跟踪清单", "持续跟踪信号变化，更新判断"]
    ],
    peers: [
      ["tsmc", "台积电", "先进制程"],
      ["ASML", "ASML", "EUV 光刻"],
      ["SK hynix", "SK 海力士", "HBM"],
      ["AMD", "AMD", "GPU 替代"]
    ]
  },
  burst: {
    title: "当前选中 — 爆发型 · 拼多多 · 下沉电商",
    peerTitle: "同类候选公司 — 爆发型 · 需求侧跃迁",
    tags: ["爆发型", "需求侧突变", "新交易结构"],
    score: "8.1",
    positive: [
      "被低估客群出现快速线上化",
      "社交分发显著降低获客成本",
      "白牌供给与低价心智互相强化",
      "用户频次与复购持续抬升",
      "对手在旧货架逻辑中反应迟缓"
    ],
    negative: [
      "需求只是短期补贴驱动",
      "获客成本快速回归行业均值",
      "供给质量无法支撑复购",
      "平台信任难以向上迁移",
      "主流平台完成同结构反击"
    ],
    actions: [
      ["◎", "拆解需求来源", "判断需求来自真实迁移还是短期刺激"],
      ["↗", "观察扩散速度", "看新增用户是否沿场景继续外溢"],
      ["▤", "比较对手反应", "记录主流平台是否被迫改变打法"]
    ],
    peers: [
      ["Temu", "Temu", "跨境低价"],
      ["TikTok", "TikTok Shop", "内容电商"],
      ["美团", "美团优选", "社区团购"],
      ["抖音", "抖音电商", "兴趣交易"]
    ]
  },
  compound: {
    title: "当前选中 — 复利型 · Costco · 会员零售",
    peerTitle: "同类候选公司 — 复利型 · 供给侧累积",
    tags: ["复利型", "供给侧效率", "长期加深"],
    score: "7.9",
    positive: [
      "采购纪律持续带来价格优势",
      "会员信任与复购形成正循环",
      "SKU 收敛降低选择与运营成本",
      "规模扩大继续增强谈判能力",
      "低毛利规则强化品牌信用"
    ],
    negative: [
      "效率改善进入边际递减",
      "会员增长与续费开始放缓",
      "本地化供给能力不足",
      "线上替代削弱线下频次",
      "品类扩张破坏原有纪律"
    ],
    actions: [
      ["▥", "跟踪复利变量", "观察效率、周转、复购是否持续改善"],
      ["◌", "寻找边界条件", "判断复利机制在哪些场景失效"],
      ["▤", "沉淀运营模板", "把稳定动作拆成可复用清单"]
    ],
    peers: [
      ["Costco", "Costco", "会员制"],
      ["山姆", "山姆会员店", "精选零售"],
      ["优衣库", "优衣库", "供应链纪律"],
      ["宜家", "IKEA", "场景零售"]
    ]
  },
  penetration: {
    title: "当前选中 — 渗透型 · 宁德时代 · 动力电池",
    peerTitle: "同类候选公司 — 渗透型 · 需求侧加深",
    tags: ["渗透型", "需求侧渗透", "关键位置"],
    score: "8.3",
    positive: [
      "下游电动化渗透率持续提升",
      "头部客户绑定增强份额稳定性",
      "规模与工艺能力持续摊薄成本",
      "供应链纵深形成交付优势",
      "新技术路线仍能被体系吸收"
    ],
    negative: [
      "终端渗透率提前触顶",
      "客户自建或多供应商分散风险",
      "技术路线出现不可吸收替代",
      "价格战侵蚀长期回报",
      "政策与贸易摩擦削弱外延"
    ],
    actions: [
      ["⚑", "跟踪渗透斜率", "观察行业水位是否仍在上升"],
      ["▥", "评估份额稳定", "比较客户绑定与替代路线的强弱"],
      ["▤", "复盘大坝裂缝", "列出可能削弱关键位置的风险"]
    ],
    peers: [
      ["宁德", "宁德时代", "动力电池"],
      ["比亚迪", "比亚迪", "刀片电池"],
      ["隆基", "隆基绿能", "光伏组件"],
      ["微软", "Microsoft", "云基础设施"]
    ]
  }
};

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    const label = themeToggle.querySelector("strong") || themeToggle;
    label.textContent = next === "dark" ? "浅色" : "深色";
  });
}

const selectedTitle = document.getElementById("selectedTitle");
const selectedTags = document.getElementById("selectedTags");
const selectedScore = document.getElementById("selectedScore");
const positiveSignals = document.getElementById("positiveSignals");
const negativeSignals = document.getElementById("negativeSignals");
const actionList = document.getElementById("actionList");
const peerGrid = document.getElementById("peerGrid");
const peerTitle = document.getElementById("peerTitle");

function renderOpportunity(key) {
  const item = OPPORTUNITIES[key];
  if (!item || !selectedTitle) return;

  selectedTitle.textContent = item.title;
  selectedScore.textContent = item.score;
  peerTitle.textContent = item.peerTitle;
  selectedTags.innerHTML = item.tags.map((tag) => `<span>${tag}</span>`).join("");
  positiveSignals.innerHTML = item.positive.map((signal) => `<li><span>✓</span>${signal}</li>`).join("");
  negativeSignals.innerHTML = item.negative.map((signal) => `<li><span>×</span>${signal}</li>`).join("");
  actionList.innerHTML = item.actions.map(([icon, title, text]) => (
    `<article>
      <span>${icon}</span>
      <div><strong>${title}</strong><p>${text}</p></div>
      <b>›</b>
    </article>`
  )).join("");
  peerGrid.innerHTML = item.peers.map(([logo, name, note]) => (
    `<article>
      <strong>${logo}</strong>
      <div>
        <h3>${name}</h3>
        <p>${note}</p>
      </div>
      <span>${item.tags[0]} · ${item.tags[1]}</span>
    </article>`
  )).join("");

  document.querySelectorAll("[data-opportunity]").forEach((node) => {
    node.classList.toggle("active", node.dataset.opportunity === key);
  });
}

document.querySelectorAll("[data-opportunity]").forEach((node) => {
  node.addEventListener("click", () => renderOpportunity(node.dataset.opportunity));
});

renderOpportunity("rift");
