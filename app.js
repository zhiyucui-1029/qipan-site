const CASES = {
  "拼多多": {
    type: "好机会 × 好公司",
    frame: "绕开主战场，从低价心智、社交分发和供给重组切入。",
    badge: "样板案例",
    tags: ["绕棒型机会", "下沉市场", "社交分发", "供给重组"],
    metrics: [76, 82, 68],
    headlines: {
      opportunity: "这不是简单低价，而是换边打出来的新棋局。",
      company: "好公司不一定一开始最强，但它先站到了别人没重视的位置。",
      strategy: "它赢，不是因为更像阿里，而是因为它先换了打法。"
    },
    verdicts: {
      investor: "对投资者来说，重点不是“低价电商”这个标签，而是它能不能把原来分散的人、货和流量重新组织起来。",
      founder: "对创业者来说，最值得看的不是规模，而是它如何从一个被主流忽视的位置切入，再慢慢把路径走宽。",
      manager: "对管理者来说，这个案例提醒你：真正危险的对手常常不是在主战场正面打，而是在旁边重画棋盘。"
    },
    oneLine: "拼多多先踩中被低估的需求格，再把分发和供给重做成自己的通道。",
    cells: [
      ["下沉客群", "需求厚、服务弱、旧平台不愿深耕。", "deep"],
      ["低价心智", "不是便宜本身，而是新交易场的入口。", "deep"],
      ["社交分发", "用关系链降低获客成本，绕过传统货架。", "path"],
      ["供给重组", "把产业带、白牌和小商家重新组织起来。", "path"],
      ["履约效率", "早期短板，决定路径能否向上延展。", "risk"],
      ["品类外延", "从低价高频向更宽消费场景扩张。", "option"],
      ["用户频次", "交易越密，棋盘越能变厚。", "deep"],
      ["平台防守", "对手跟进越晚，换边优势越厚。", "risk"]
    ],
    paths: [
      ["起点", "先抓住主流平台低估的客群和价格带。"],
      ["放大", "用社交分发和供给组织，让小格子不断变深。"],
      ["延展", "再向履约、品类和更高价值场景推进。"]
    ],
    risks: [
      ["低价锁定", "如果用户心智只停在便宜，上限会被压住。"],
      ["履约补课", "履约和品控补不上，机会格会变成低毛利陷阱。"],
      ["对手换边", "主流平台如果足够早跟进，路径优势会快速变薄。"]
    ]
  },
  "英伟达": {
    type: "好公司 × 好策略",
    frame: "从单点硬件到软硬生态，站在算力时代别人绕不过去的位置。",
    badge: "样板案例",
    tags: ["大坝加深", "算力基础设施", "生态位", "CUDA"],
    metrics: [88, 92, 74],
    headlines: {
      opportunity: "它真正抓住的不是显卡，而是算力时代的总闸门。",
      company: "好公司不是业务多，而是站在一个别人绕不过去的大坝上。",
      strategy: "它不是一夜成为平台，而是先占点、再连线、最后织网。"
    },
    verdicts: {
      investor: "对投资者来说，关键是它从单点硬件演化成了一个越用越难绕开的算力生态位。",
      founder: "对创业者来说，这个案例最值得学的是先在关键节点建立不可替代性，再谈平台化。",
      manager: "对管理者来说，它展示的是如何把一个强产品逐步推进成一个强系统。"
    },
    oneLine: "英伟达的棋局不只在芯片性能，而在软硬协同、开发者生态和客户迁移成本。",
    cells: [
      ["GPU 性能", "产品起点足够强，先占住高价值节点。", "deep"],
      ["CUDA 生态", "开发者和软件栈形成核心大坝。", "deep"],
      ["开发者心智", "越多人使用，替换成本越高。", "path"],
      ["云厂商依赖", "客户知道昂贵，但短期很难绕开。", "deep"],
      ["系统方案", "从芯片到整机、软件和服务。", "path"],
      ["替代路线", "客户自研和开源生态会持续挑战。", "risk"],
      ["景气周期", "需求强，但估值会放大周期波动。", "risk"],
      ["新边界", "推理、机器人和行业应用都是延展边。", "option"]
    ],
    paths: [
      ["起点", "先把高性能计算里的关键点做成强产品。"],
      ["连线", "围绕开发者、软件栈、生态伙伴不断加连接。"],
      ["织网", "让客户买的不是一块芯片，而是一整套迁移成本。"]
    ],
    risks: [
      ["生态松动", "如果软件生态锁定下降，硬件优势更容易被追平。"],
      ["客户分散", "云厂商自研会削弱单一供应商位置。"],
      ["估值回撤", "景气度退潮时，市场会重新审视增长质量。"]
    ]
  },
  "美团 vs 饿了么": {
    type: "好策略",
    frame: "不是两家外卖平台打架，而是多战场联动和能力迁移。",
    badge: "样板案例",
    tags: ["多战场", "能力迁移", "平台竞争", "以弱胜强"],
    metrics: [72, 78, 80],
    headlines: {
      opportunity: "这不是外卖平台打架，而是一场本地生活机会争夺。",
      company: "真正更强的一方，往往不是单点更强，而是能把左边能力接到右边战场。",
      strategy: "它赢在更早把几场仗连成了一盘棋。"
    },
    verdicts: {
      investor: "对投资者来说，这类案例的关键不是看补贴数字，而是看谁的能力可以跨战场复用。",
      founder: "对创业者来说，真正有价值的是看以弱胜强时，先该打哪一边，再接哪一条线。",
      manager: "对管理者来说，这个案例能帮你看懂组织能力如果只在局部强，很难赢整盘棋。"
    },
    oneLine: "外卖只是表层战场，真正的胜负在高频入口、配送网络和本地供给的连接能力。",
    cells: [
      ["高频入口", "先占住用户每天会打开的入口。", "deep"],
      ["配送网络", "从单点能力变成跨场景基础设施。", "deep"],
      ["商家覆盖", "供给密度决定体验稳定性。", "path"],
      ["补贴战", "能抢时间，但不是最终大坝。", "risk"],
      ["流量组织", "把用户、商家和场景连成系统。", "path"],
      ["场景扩展", "从外卖扩到酒旅、到店和即时零售。", "option"],
      ["组织效率", "多战场会放大组织能力差距。", "deep"],
      ["对手跟进", "一旦对手完成关键连接，优势会被重估。", "risk"]
    ],
    paths: [
      ["入口", "在高频场景建立用户和商家心智。"],
      ["迁移", "把配送、流量和供给组织迁移到相邻战场。"],
      ["系统", "让竞争从单点外卖，变成整个平台效率对抗。"]
    ],
    risks: [
      ["补贴误判", "如果只看补贴，会错过真正的能力迁移。"],
      ["协同失灵", "多战场无法互相供血时，会拖垮组织。"],
      ["心智丢失", "高频入口守不住，后续连接会失去着力点。"]
    ]
  },
  "苹果": {
    type: "好公司",
    frame: "软硬一体、身份入口和生态迁移成本共同构成位置。",
    badge: "扩展示例",
    tags: ["生态大坝", "用户粘性", "软硬一体"],
    metrics: [70, 90, 72],
    headlines: {
      opportunity: "它抓住的不是单个终端，而是个人数字生活的默认入口。",
      company: "苹果的位置来自生态迁移成本，而不是某一代硬件参数。",
      strategy: "先做强产品，再把产品变成一套难以离开的关系网。"
    },
    verdicts: {
      investor: "对投资者来说，核心是生态粘性是否继续支撑利润池和新边界。",
      founder: "对创业者来说，它示范了如何把体验优势沉淀成长期控制点。",
      manager: "对管理者来说，苹果提醒你：好产品要尽快变成可复用系统。"
    },
    oneLine: "苹果的棋局是把硬件、系统、服务和身份入口连成一个高迁移成本生态。",
    cells: [
      ["产品定义", "体验优势是进入棋盘的第一步。", "deep"],
      ["操作系统", "控制底层接口和用户关系。", "deep"],
      ["生态服务", "支付、订阅、云和内容不断加边。", "path"],
      ["品牌心智", "用户愿意为确定性支付溢价。", "deep"],
      ["换机周期", "增长节奏受硬件周期影响。", "risk"],
      ["AI 入口", "下一代交互是否改写入口位置。", "option"],
      ["开发者生态", "平台价值来自持续供给。", "path"],
      ["监管压力", "生态控制会带来规则挑战。", "risk"]
    ],
    paths: [
      ["起点", "用硬件体验建立高信任入口。"],
      ["加坝", "用系统、账号和服务提高迁移成本。"],
      ["延展", "向支付、内容、健康和 AI 入口继续长边。"]
    ],
    risks: [
      ["入口迁移", "新交互范式可能削弱手机中心性。"],
      ["监管拆墙", "平台规则受限会影响生态变现。"],
      ["创新节奏", "硬件惊喜不足会降低品牌溢价。"]
    ]
  },
  "Costco": {
    type: "好策略",
    frame: "会员信任、极简 SKU 和供应链纪律组合成反卷路径。",
    badge: "扩展示例",
    tags: ["会员制", "反卷策略", "供应链纪律"],
    metrics: [64, 84, 78],
    headlines: {
      opportunity: "它看到的机会不是卖更多货，而是重建零售信任。",
      company: "Costco 的位置来自用户相信它替自己筛过一遍。",
      strategy: "用少 SKU、低毛利和会员费，把零售做成一条反卷路径。"
    },
    verdicts: {
      investor: "对投资者来说，关键是会员信任和复购是否持续巩固利润结构。",
      founder: "对创业者来说，它提示你少做选择也可以成为一种强策略。",
      manager: "对管理者来说，它展示了纪律比灵感更能形成复利。"
    },
    oneLine: "Costco 的棋局是把用户信任、采购纪律和会员模型连成一个长期低摩擦系统。",
    cells: [
      ["会员信任", "用户相信它替自己做选择。", "deep"],
      ["极简 SKU", "减少选择成本，提高采购效率。", "path"],
      ["低毛利纪律", "用规则守住用户心智。", "deep"],
      ["会员费", "利润结构与用户关系绑定。", "deep"],
      ["供应链谈判", "规模和纪律共同形成价格优势。", "path"],
      ["本地化", "跨市场复制需要重新校准供给。", "risk"],
      ["体验边界", "不是所有品类都适合极简逻辑。", "risk"],
      ["线上延展", "线上能力决定新一轮边界。", "option"]
    ],
    paths: [
      ["选择", "先替用户减少选择，而不是增加货架。"],
      ["纪律", "用低毛利和高周转守住可信价格。"],
      ["复利", "会员费让信任关系变成经营结构。"]
    ],
    risks: [
      ["复制难度", "会员信任不是开店数量自然带来的。"],
      ["品类边界", "极简 SKU 需要非常强的选择能力。"],
      ["线上冲击", "即时零售会改写部分消费场景。"]
    ]
  },
  "Shein": {
    type: "好机会",
    frame: "跨境流量、小单快反和供应链组织共同构成供给绕棒。",
    badge: "扩展示例",
    tags: ["供给绕棒", "出海", "小单快反"],
    metrics: [78, 72, 70],
    headlines: {
      opportunity: "它抓住的不是便宜衣服，而是全球快时尚供给方式的重做。",
      company: "Shein 的关键位置在于把需求信号快速打回供给端。",
      strategy: "它从流量和供应链两侧绕开传统品牌节奏。"
    },
    verdicts: {
      investor: "对投资者来说，重点是供应链效率能否抵消合规、品牌和平台压力。",
      founder: "对创业者来说，它说明出海不只是卖到海外，而是重做一条供需链。",
      manager: "对管理者来说，它提醒你：速度优势如果不沉淀成系统，很快会被追平。"
    },
    oneLine: "Shein 的棋局是把前端需求测试和后端小单快反连成一条跨境供给通道。",
    cells: [
      ["需求测试", "用数据快速识别细分需求。", "path"],
      ["小单快反", "降低试错成本，提高上新速度。", "deep"],
      ["跨境流量", "绕开传统渠道和门店节奏。", "path"],
      ["供应链组织", "把分散产能编织成响应系统。", "deep"],
      ["品牌心智", "低价心智能否升级仍需验证。", "risk"],
      ["合规压力", "劳动、税务和平台规则会持续加压。", "risk"],
      ["本地化履约", "决定体验稳定性和复购。", "option"],
      ["平台化边界", "能否从品牌走向生态仍是问题。", "option"]
    ],
    paths: [
      ["试探", "用低成本流量和小批量供应快速测试。"],
      ["反馈", "把前端数据压回设计、生产和补货。"],
      ["扩张", "在更多市场复制供需响应系统。"]
    ],
    risks: [
      ["低价锁定", "如果品牌无法升级，利润结构会受限。"],
      ["合规摩擦", "全球化越深，规则成本越高。"],
      ["平台依赖", "流量入口变化会影响增长效率。"]
    ]
  }
};

const state = {
  caseName: "拼多多",
  intent: "opportunity",
  persona: "investor",
  selectedCell: 0
};

const form = document.getElementById("caseForm");
const companyInput = document.getElementById("companyInput");
const personaSelect = document.getElementById("personaSelect");
const quickCases = document.getElementById("quickCases");
const caseGrid = document.getElementById("caseGrid");
const tagRow = document.getElementById("tagRow");
const boardGrid = document.getElementById("boardGrid");
const pathList = document.getElementById("pathList");
const riskList = document.getElementById("riskList");
const cellDetail = document.getElementById("cellDetail");
const sliders = [
  ["space", document.getElementById("spaceSlider"), document.getElementById("spaceValue")],
  ["position", document.getElementById("positionSlider"), document.getElementById("positionValue")],
  ["execution", document.getElementById("executionSlider"), document.getElementById("executionValue")]
];

function normalizeName(name) {
  return name.replace(/\s+/g, "").toLowerCase();
}

function findCase(input) {
  const raw = input.trim();
  if (!raw) return CASES["拼多多"];
  const normalized = normalizeName(raw);
  const aliases = {
    "pdd": "拼多多",
    "pinduoduo": "拼多多",
    "nvidia": "英伟达",
    "nvda": "英伟达",
    "meituanvseleme": "美团 vs 饿了么",
    "美团vs饿了么": "美团 vs 饿了么",
    "美团饿了么": "美团 vs 饿了么",
    "apple": "苹果",
    "aapl": "苹果",
    "开市客": "Costco",
    "cost": "Costco",
    "希音": "Shein"
  };
  const direct = Object.keys(CASES).find((key) => normalizeName(key) === normalized);
  const key = direct || aliases[normalized];
  return key ? CASES[key] : makeDraftCase(raw);
}

function getCaseKey(input) {
  const item = findCase(input);
  const known = Object.entries(CASES).find(([, value]) => value === item);
  return known ? known[0] : input.trim() || "未命名公司";
}

function makeDraftCase(name) {
  const title = name || "这家公司";
  return {
    type: "即时草稿",
    frame: "还没有接入证据库，先生成一张可追问的第一版棋盘。",
    badge: "需补证据",
    tags: ["自动草稿", "待校验", "可定制"],
    metrics: [55, 52, 48],
    headlines: {
      opportunity: `先判断“${title}”踩中的机会格是否真的在变深。`,
      company: `先看“${title}”有没有站住一个别人绕不过去的位置。`,
      strategy: `先拆“${title}”的路径：它是正面强攻，还是换边落子。`
    },
    verdicts: {
      investor: "对投资者来说，这一步只能形成假设清单，不能替代财报、公告和行业证据。",
      founder: "对创业者来说，这一版适合用来找对标、找切口、找反方问题。",
      manager: "对管理者来说，这一版适合做内部战略讨论的开场白，再接真实数据校验。"
    },
    oneLine: `${title} 的第一版棋局需要先回答：它会什么、站哪里、靠什么变轻、能不能长出新边。`,
    cells: [
      ["需求来源", "需求是短期情绪，还是长期结构。", "option"],
      ["能力基座", "把最热业务拿掉，还剩什么能力。", "deep"],
      ["关键位置", "是否站在别人很难绕开的节点上。", "deep"],
      ["增长通道", "流量、渠道、供给或技术是否能复用。", "path"],
      ["大坝厚度", "用户离开会损失什么。", "option"],
      ["竞争改写", "对手是否能快速复制同一路径。", "risk"],
      ["证据缺口", "需要补公告、访谈、组织和历史节点。", "risk"],
      ["下一步", "把假设拆成证据清单和反事实分支。", "path"]
    ],
    paths: [
      ["提出假设", "先判断它可能踩中的机会格和关键位置。"],
      ["补足证据", "接入财报、公告、产品、组织和竞争资料。"],
      ["形成深案", "输出带时间线、人员、证据和反方质疑的案例页。"]
    ],
    risks: [
      ["证据不足", "当前只是结构化草稿，不能当成事实结论。"],
      ["概念误判", "热门概念可能掩盖真实能力缺口。"],
      ["路径不明", "如果动作不能连成路径，机会很难转成公司价值。"]
    ]
  };
}

function renderQuickCases() {
  quickCases.innerHTML = Object.keys(CASES).map((name) => (
    `<button class="quick-case${name === state.caseName ? " active" : ""}" type="button" data-name="${name}">${name}</button>`
  )).join("");
}

function renderCaseCards() {
  caseGrid.innerHTML = Object.entries(CASES).map(([name, item]) => (
    `<button class="case-card" type="button" data-name="${name}">
      <span class="case-type">${item.type}</span>
      <div>
        <h3>${name}</h3>
        <p>${item.frame}</p>
      </div>
      <span class="case-link">放进棋盘</span>
    </button>`
  )).join("");
}

function render() {
  const item = findCase(state.caseName);
  const isKnown = Boolean(CASES[state.caseName]);
  document.getElementById("caseTitle").textContent = state.caseName;
  document.getElementById("caseFrame").textContent = item.frame;
  document.getElementById("boardHeadline").textContent = item.headlines[state.intent];
  document.getElementById("sourceBadge").textContent = item.badge;
  document.getElementById("verdictTitle").textContent = item.oneLine;
  document.getElementById("verdictText").textContent = item.verdicts[state.persona];

  tagRow.innerHTML = item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  pathList.innerHTML = item.paths.map(([title, text]) => (
    `<article class="path-item"><strong>${title}</strong><span>${text}</span></article>`
  )).join("");
  riskList.innerHTML = item.risks.map(([title, text]) => (
    `<article class="risk-item"><strong>${title}</strong><span>${text}</span></article>`
  )).join("");

  boardGrid.innerHTML = item.cells.map(([title, text, kind], index) => (
    `<button class="board-cell kind-${kind}${index === state.selectedCell ? " active" : ""}" type="button" data-index="${index}">
      <b aria-hidden="true"></b>
      <strong>${title}</strong>
      <span>${text}</span>
    </button>`
  )).join("");

  if (state.selectedCell >= item.cells.length) state.selectedCell = 0;
  const [cellTitle, cellText] = item.cells[state.selectedCell];
  cellDetail.innerHTML = `<strong>${cellTitle}</strong><p>${cellText}</p>`;

  sliders.forEach(([, input, value], index) => {
    input.value = item.metrics[index];
    value.textContent = item.metrics[index];
  });
  updateScore();
  renderQuickCases();
  if (!isKnown) companyInput.value = state.caseName;
}

function updateScore() {
  const space = Number(document.getElementById("spaceSlider").value);
  const position = Number(document.getElementById("positionSlider").value);
  const execution = Number(document.getElementById("executionSlider").value);
  document.getElementById("spaceValue").textContent = space;
  document.getElementById("positionValue").textContent = position;
  document.getElementById("executionValue").textContent = execution;
  const score = ((space * 0.32 + position * 0.42 + execution * 0.26) / 10).toFixed(1);
  document.getElementById("scoreOutput").textContent = score;
  const scoreText = Number(score) >= 8
    ? "这盘棋的位置质量很高，重点看兑现和反方证据。"
    : Number(score) >= 6.5
      ? "机会已经被打深，关键看大坝能否继续变厚。"
      : "这更像待验证棋局，需要先补证据再判断。";
  document.getElementById("scoreText").textContent = scoreText;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = getCaseKey(companyInput.value);
  state.caseName = name;
  state.selectedCell = 0;
  render();
});

personaSelect.addEventListener("change", () => {
  state.persona = personaSelect.value;
  render();
});

document.querySelectorAll("[data-intent]").forEach((button) => {
  button.addEventListener("click", () => {
    state.intent = button.dataset.intent;
    document.querySelectorAll("[data-intent]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    render();
  });
});

quickCases.addEventListener("click", (event) => {
  const button = event.target.closest("[data-name]");
  if (!button) return;
  state.caseName = button.dataset.name;
  state.selectedCell = 0;
  companyInput.value = state.caseName;
  render();
});

caseGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-name]");
  if (!button) return;
  state.caseName = button.dataset.name;
  state.selectedCell = 0;
  companyInput.value = state.caseName;
  render();
  document.getElementById("top").scrollIntoView({ behavior: "smooth" });
});

boardGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-index]");
  if (!button) return;
  state.selectedCell = Number(button.dataset.index);
  render();
});

sliders.forEach(([, input, value]) => {
  input.addEventListener("input", () => {
    value.textContent = input.value;
    updateScore();
  });
});

document.getElementById("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  document.getElementById("themeToggle").textContent = next === "dark" ? "浅色" : "深色";
});

document.getElementById("waitlistForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("waitlistInput");
  const name = input.value.trim() || "你关心的公司";
  document.getElementById("waitlistStatus").textContent = `已记录本地意向：下一版可以优先做「${name}」的深度棋局样例。`;
  input.value = "";
});

renderCaseCards();
render();
