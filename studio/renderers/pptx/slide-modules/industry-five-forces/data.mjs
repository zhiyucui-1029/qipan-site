const DEFAULT_DATA = {
  title: "中国运动鞋服行业五力分析",
  subtitle: "以 Nike 中国为参照，判断行业利润池被谁挤压",
  caseLabel: "运动鞋服行业五力分析 · 2026",
  industry: "中国运动鞋服",
  targetCompany: "Nike 中国",
  attractiveness: {
    score: "6.2",
    label: "中等偏高",
    claim: "行业仍有增长，但利润池正在被竞争、消费者议价和场景替代共同压缩。",
    pressureSummary: ["现有竞争者强", "下游议价增强", "专业细分替代加速"],
  },
  sources: [
    "S1 KPMG 2025H2 消费零售报告",
    "S2 Nike FY2025 10-K",
    "S3 ANTA 2025 Results",
    "S4 adidas 2025 Greater China",
    "S5 On Holding FY2025 20-F",
  ],
  forceScores: [
    { id: "rivalry", name: "现有竞争者", score: 8.5, level: "高", color: "#B84A3A" },
    { id: "buyers", name: "下游议价力", score: 8.0, level: "高", color: "#B84A3A" },
    { id: "substitutes", name: "替代品威胁", score: 6.8, level: "中高", color: "#B98500" },
    { id: "entrants", name: "新进入者", score: 6.0, level: "中", color: "#B98500" },
    { id: "suppliers", name: "上游议价力", score: 4.6, level: "中低", color: "#71B300" },
  ],
  forces: {
    rivalry: {
      pageTitle: "现有竞争者",
      headline: "本土龙头和国际品牌同时挤压，竞争焦点从份额转向利润质量。",
      score: 8.5,
      level: "高",
      icon: "Swords",
      questions: ["谁在扩大规模和渠道密度？", "价格战会不会持续？", "品牌差异还能否支撑溢价？"],
      definition: "行业内既有玩家之间争夺消费者、渠道、流量和品牌心智的强度。",
      evidence: [
        { num: "802.2 亿", note: "安踏 2025 年收入 802.2 亿元，同比增长 13.3%。", source: "S3" },
        { num: "+15%", note: "adidas 2025 年大中华区收入按汇率中性口径增长 15%。", source: "S4" },
        { num: "-13%", note: "Nike FY2025 大中华区收入同比下降 13%。", source: "S2" },
      ],
      drivers: ["本土多品牌集团规模化", "国际品牌重新投入中国", "线上折扣和渠道清货扰动", "专业跑步、户外等场景分流"],
      implication: "行业有增长，但利润更向具备品牌组合、渠道效率和场景占位的玩家集中。",
    },
    substitutes: {
      pageTitle: "替代品威胁",
      headline: "消费者买的是运动生活方式，支出可以流向户外、潮流、专业跑步和性价比品牌。",
      score: 6.8,
      level: "中高",
      icon: "Shuffle",
      questions: ["用户是否必须买传统运动巨头？", "哪些场景正在替代原有品类？", "替代者是否拥有更强心智？"],
      definition: "不同产品、品牌或生活方式对同一消费预算和使用场景的替代。",
      evidence: [
        { num: "5870 亿", note: "KPMG 引用 Euromonitor：2024 年中国运动鞋服零售市场约 5870 亿元。", source: "S1" },
        { num: "+32.6%", note: "On Holding 2025 年净销售额同比增长 32.6%。", source: "S5" },
        { num: "专业化", note: "跑步、户外、训练等场景品牌正在切走更高质量需求。", source: "S1/S5" },
      ],
      drivers: ["运动生活方式泛化", "专业跑步和户外心智增强", "国货与新品牌降低选择门槛", "消费者更愿意在具体场景付费"],
      implication: "替代威胁不来自一个单一品类，而来自消费者把预算重新分配给更清晰的场景价值。",
    },
    entrants: {
      pageTitle: "新进入者威胁",
      headline: "规模化进入门槛高，但细分场景和内容渠道降低了新品牌起步门槛。",
      score: 6.0,
      level: "中",
      icon: "DoorOpen",
      questions: ["新品牌能否绕开传统渠道？", "供应链是否足以支持小步快跑？", "细分场景能不能形成品牌心智？"],
      definition: "新玩家进入行业并争夺利润池的可能性与强度。",
      evidence: [
        { num: "318 家", note: "Nike FY2025 服装产品来自 318 家独立工厂，供应链能力外部化。", source: "S2" },
        { num: "99 家", note: "Nike FY2025 鞋类产品来自 99 家独立工厂，制造资源并非完全封闭。", source: "S2" },
        { num: "场景切入", note: "新品牌更容易从跑步、户外、训练等窄场景切入。", source: "S1/S5" },
      ],
      drivers: ["代工与材料供应链成熟", "内容电商降低冷启动成本", "细分运动场景持续增长", "但品牌、研发、渠道和库存仍是高门槛"],
      implication: "新进入者难以全面挑战巨头，但可以在高增长场景中切走溢价利润。",
    },
    suppliers: {
      pageTitle: "上游议价力",
      headline: "整体供应商议价力不高，但关键材料、技术工厂和交期能力会影响毛利。",
      score: 4.6,
      level: "中低",
      icon: "Factory",
      questions: ["供应商是否集中？", "关键材料是否稀缺？", "品牌方能否切换产能？"],
      definition: "上游材料、制造、物流和技术供应商对成本、交期和质量的影响力。",
      evidence: [
        { num: "99 / 318", note: "Nike FY2025 鞋类 / 服装分别来自 99 / 318 家独立工厂。", source: "S2" },
        { num: "9%", note: "Nike 最大鞋类工厂约占 FY2025 鞋类产量 9%。", source: "S2" },
        { num: "材料升级", note: "功能面料、缓震科技和环保材料会抬高差异化供应要求。", source: "S1/S2" },
      ],
      drivers: ["代工厂选择较多", "头部品牌可分散产能", "高端材料和技术工艺仍有约束", "库存和交期管理影响利润"],
      implication: "上游不是最大压力源，但会通过成本结构、产品创新速度和库存周转影响利润质量。",
    },
    buyers: {
      pageTitle: "下游议价力",
      headline: "消费者、平台和渠道伙伴都在提高议价力，品牌溢价需要重新证明。",
      score: 8.0,
      level: "高",
      icon: "Users",
      questions: ["消费者切换成本高不高？", "平台是否掌握流量和价格？", "渠道库存是否倒逼折扣？"],
      definition: "消费者、零售商、平台和渠道伙伴对价格、折扣、库存和品牌呈现的影响力。",
      evidence: [
        { num: "-22%", note: "Nike FY2025 大中华区 Digital 销售同比下降 22%。", source: "S2" },
        { num: "价值感", note: "KPMG 指出中国消费者更关注性价比、功能和情绪价值。", source: "S1" },
        { num: "低切换", note: "运动鞋服可选品牌多，消费者跨品牌切换成本低。", source: "S1/S3/S4" },
      ],
      drivers: ["平台透明比价", "库存清理带来折扣预期", "国货品牌提升替代选择", "年轻消费者更看场景和价值感"],
      implication: "下游议价力正在压缩溢价，品牌必须用明确场景、产品性能和社区关系重建支付理由。",
    },
  },
  profitDrivers: [
    { name: "市场容量", value: "增长仍在", note: "运动鞋服大盘仍有长期空间", color: "#71B300" },
    { name: "价格实现", value: "承压", note: "溢价理由和折扣纪律决定毛利", color: "#B84A3A" },
    { name: "成本结构", value: "可控", note: "供应商分散，但功能材料约束创新", color: "#B98500" },
    { name: "竞争损耗", value: "高", note: "价格战、营销战、渠道战持续消耗利润", color: "#B84A3A" },
    { name: "资本效率", value: "分化", note: "库存、门店和渠道周转决定现金质量", color: "#B98500" },
  ],
  validationQuestions: ["价格权能否修复？", "高利润客群在哪里？", "哪个渠道正在消耗利润？", "哪个场景最值得重构？"],
};

export function loadFiveForcesData() {
  if (!process.env.FIVE_FORCES_DATA_JSON) return DEFAULT_DATA;
  try {
    return {
      ...DEFAULT_DATA,
      ...JSON.parse(process.env.FIVE_FORCES_DATA_JSON),
    };
  } catch {
    return DEFAULT_DATA;
  }
}
