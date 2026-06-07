import type { 
  KnowledgeItem, 
  Equipment, 
  EquipmentCategory, 
  ChecklistCategory, 
  ChecklistTemplate, 
  CommunityPost,
  Comment 
} from '../../src/types'

export const sensitiveWords = [
  '违禁词', '敏感词', '暴力', '恐怖', '极端',
  'fuck', 'shit', 'bitch', 'cunt', 'nigger',
  '毒品', '赌博', '色情', '诈骗', '传销'
]

export const knowledgeItems: KnowledgeItem[] = [
  {
    id: 'k1',
    title: '城市应急包怎么配',
    description: '学习如何配置一个基础的城市应急包，应对常见城市突发事件',
    level: 'beginner',
    scenario: 'urban',
    category: '应急准备',
    content: `
## 为什么需要城市应急包

在城市生活中，我们可能会遇到各种突发状况：地震、火灾、暴雨内涝、公共卫生事件等。一个准备充分的应急包可以在关键时刻挽救生命。

## 核心物品清单

### 1. 基础生存物品
- **水**：每人每天至少2升，准备3天量
- **食物**：高热量、不易变质的压缩饼干、能量棒
- **多功能工具**：瑞士军刀或多功能钳
- **手电筒**：带备用电池，建议手摇式
- **口哨**：用于求救，声音传得更远

### 2. 医疗用品
- 创可贴、纱布、医用胶带
- 碘伏、酒精棉片
- 常用药品：感冒药、止泻药、止痛药
- 个人特殊药品

### 3. 个人物品
- 备用衣物和保暖毯
- 个人卫生用品
- 重要证件复印件
- 现金和硬币

### 4. 通讯设备
- 备用手机电池或充电宝
- 收音机（手摇式最佳）

## 存放建议

应急包应放在易于取用的地方，如家门口、办公室抽屉。每6个月检查更换一次食物和药品。
`,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=emergency%20preparedness%20kit%20urban%20survival%20backpack%20with%20supplies&image_size=square_hd',
    estimatedTime: 30,
    quiz: {
      id: 'q1',
      questions: [
        {
          id: 'qq1',
          question: '城市应急包中，每人每天至少需要准备多少水？',
          options: ['0.5升', '1升', '2升', '5升'],
          correctAnswerIndex: 2,
          explanation: '每人每天至少需要2升水用于饮用和基本卫生需求。'
        },
        {
          id: 'qq2',
          question: '应急包中的食物和药品应该多久检查更换一次？',
          options: ['1个月', '3个月', '6个月', '1年'],
          correctAnswerIndex: 2,
          explanation: '建议每6个月检查一次，确保食物和药品在有效期内。'
        },
        {
          id: 'qq3',
          question: '以下哪种物品不建议放在应急包中？',
          options: ['口哨', '打火机', '重要证件复印件', '玻璃瓶饮料'],
          correctAnswerIndex: 3,
          explanation: '玻璃瓶饮料重量大且易破碎，不适合放入应急包。'
        }
      ],
      passingScore: 60
    },
    createdAt: '2024-01-15'
  },
  {
    id: 'k2',
    title: '野外取火全攻略',
    description: '掌握多种野外取火方法，应对不同环境条件',
    level: 'intermediate',
    scenario: 'wilderness',
    category: '野外生存',
    content: `
## 火在野外生存中的作用

火不仅能提供温暖，还能烹饪食物、净化水源、驱赶野兽、发出求救信号。

## 取火三要素

1. **燃料**：干草、枯叶、树皮
2. **氧气**：保证空气流通
3. **热量**：达到燃点

## 取火方法

### 1. 摩擦取火
- **钻木取火**：需要干燥的木材和耐心
- **弓弦取火**：提高效率的改良方法
- **火犁法**：适用于较软的木材

### 2. 聚焦取火
- 利用凸透镜、放大镜
- 冰透镜（在寒冷环境中）

### 3. 化学取火
- 火柴、打火机
- 火石和镁棒（最可靠）

### 4. 其他方法
- 电池短路产生火花
- 撞击坚硬岩石产生火星

## 安全注意事项

- 选择合适的地点，远离易燃物
- 准备好灭火措施
- 离开时确保火完全熄灭
`,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wilderness%20survival%20campfire%20bushcraft%20flint%20and%20steel&image_size=square_hd',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    estimatedTime: 45,
    quiz: {
      id: 'q2',
      questions: [
        {
          id: 'qq4',
          question: '取火三要素是什么？',
          options: ['木柴、氧气、温度', '燃料、氧气、热量', '干草、火石、风', '燃料、温度、压力'],
          correctAnswerIndex: 1,
          explanation: '取火需要三个基本条件：燃料（可燃物）、氧气（助燃剂）、热量（达到燃点）。'
        },
        {
          id: 'qq5',
          question: '以下哪种取火方法最可靠？',
          options: ['钻木取火', '放大镜取火', '火石和镁棒', '电池短路'],
          correctAnswerIndex: 2,
          explanation: '火石和镁棒防水、耐用，是最可靠的野外取火工具。'
        }
      ],
      passingScore: 50
    },
    createdAt: '2024-02-20'
  },
  {
    id: 'k3',
    title: '水源净化技术',
    description: '学习如何在野外找到并净化安全饮用水',
    level: 'intermediate',
    scenario: 'wilderness',
    category: '野外生存',
    content: `
## 为什么水的净化很重要

不干净的水中可能含有细菌、病毒、寄生虫和化学污染物，会导致严重疾病。

## 寻找水源

### 可能的水源
- 流动的溪流和河流（首选）
- 泉水
- 雨水收集
- 露水
- 植物中的水分

### 避免的水源
- 静止的池塘（尤其是有蓝藻的）
- 有异味或颜色异常的水
- 动物尸体附近的水

## 净化方法

### 1. 煮沸法
- 煮沸1-3分钟
- 海拔每升高1000米，延长1分钟

### 2. 过滤法
- 陶瓷过滤器
- 活性炭过滤
- 自制沙滤器

### 3. 化学法
- 漂白粉
- 净水药片
- 碘酊（不建议长期使用）

### 4. 紫外线法
- 专用紫外线消毒器
- 阳光照射6小时以上

## 自制简易过滤器

1. 底部放一层细沙
2. 中间放一层活性炭
3. 上层放一层细沙和碎石
4. 底部钻孔让水流出
`,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=water%20purification%20outdoor%20survival%20filter%20system%20nature&image_size=square_hd',
    estimatedTime: 40,
    quiz: {
      id: 'q3',
      questions: [
        {
          id: 'qq6',
          question: '在平原地区，水煮沸后需要保持沸腾多久才能安全饮用？',
          options: ['30秒', '1-3分钟', '5-10分钟', '15分钟以上'],
          correctAnswerIndex: 1,
          explanation: '在平原地区，煮沸1-3分钟足以杀死大多数病原体。'
        },
        {
          id: 'qq7',
          question: '以下哪种水源相对最安全？',
          options: ['静止的池塘', '流动的溪流', '路边的水坑', '动物脚印中的积水'],
          correctAnswerIndex: 1,
          explanation: '流动的溪流相对更安全，但仍需净化后饮用。'
        }
      ],
      passingScore: 50
    },
    createdAt: '2024-03-10'
  },
  {
    id: 'k4',
    title: '应急医疗处理',
    description: '学习常见伤害和突发疾病的应急处理方法',
    level: 'advanced',
    scenario: 'medical',
    category: '急救医疗',
    content: `
## 急救的基本原则

### 黄金时间
- 心跳骤停：4-6分钟内开始心肺复苏
- 严重出血：10分钟内止血
- 中毒：1小时内就医

## 常见伤害处理

### 1. 外伤出血
- **加压止血**：用干净布料按压伤口
- **抬高患肢**：高于心脏位置
- **止血带**：仅在肢体严重受伤时使用

### 2. 骨折和脱臼
- 不要随意移动伤员
- 固定伤处，避免活动
- 冰敷减轻肿胀

### 3. 烧伤
- 一度烧伤（红肿）：冷水冲洗15分钟
- 二度烧伤（水泡）：不要挑破水泡
- 三度烧伤：覆盖干净敷料，立即就医

### 4. 中暑
- 转移到阴凉处
- 降温处理
- 补充水分和电解质

### 5. 低温症
- 转移到温暖处
- 缓慢复温（不要用热水）
- 给予温热饮料

## CPR（心肺复苏）步骤

1. 确认环境安全
2. 检查意识和呼吸
3. 拨打急救电话
4. 胸外按压（100-120次/分钟）
5. 人工呼吸（每30次按压后2次呼吸）
`,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=emergency%20medical%20first%20aid%20kit%20supplies%20professional&image_size=square_hd',
    estimatedTime: 60,
    quiz: {
      id: 'q4',
      questions: [
        {
          id: 'qq8',
          question: '对于严重外伤出血，首先应该怎么做？',
          options: ['拨打120', '加压止血', '检查伤口', '抬高患肢'],
          correctAnswerIndex: 1,
          explanation: '严重出血可能在几分钟内致命，应立即加压止血。'
        },
        {
          id: 'qq9',
          question: 'CPR胸外按压的频率是多少？',
          options: ['60-80次/分钟', '80-100次/分钟', '100-120次/分钟', '120-140次/分钟'],
          correctAnswerIndex: 2,
          explanation: '胸外按压频率应为100-120次/分钟，深度5-6厘米。'
        },
        {
          id: 'qq10',
          question: '对于二度烧伤的水泡，应该怎么处理？',
          options: ['挑破放水', '不要挑破', '涂抹牙膏', '用酒精消毒'],
          correctAnswerIndex: 1,
          explanation: '水泡可以保护伤口，挑破可能导致感染，应让其自行吸收。'
        }
      ],
      passingScore: 60
    },
    createdAt: '2024-04-05'
  },
  {
    id: 'k5',
    title: '家庭应急物资储备',
    description: '如何为家庭储备足够的应急物资',
    level: 'beginner',
    scenario: 'home',
    category: '应急准备',
    content: `
## 为什么需要家庭储备

自然灾害、公共卫生事件等突发情况可能导致停水停电、物资供应中断。建议家庭至少储备72小时的应急物资。

## 物资清单

### 1. 饮用水
- 每人每天2升
- 储备14天用量
- 瓶装水或储水容器

### 2. 食物
- 不易变质的罐头食品
- 压缩饼干、方便面
- 干果、坚果
- 婴儿和老人的特殊食物

### 3. 照明和通讯
- 手电筒和备用电池
- 应急蜡烛和打火机
- 手摇收音机
- 充电宝

### 4. 卫生用品
- 卫生纸、湿纸巾
- 垃圾袋
- 个人卫生用品
- 消毒用品

### 5. 工具
- 多功能工具
- 开罐器
- 打火机或火柴
- 绳索

## 定期检查

每月检查一次物资保质期，轮换更新。建议建立家庭紧急预案，确定集合地点和联系方式。
`,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=home%20emergency%20supply%20kit%20food%20water%20storage%20disaster%20preparedness&image_size=square_hd',
    estimatedTime: 25,
    createdAt: '2024-05-12'
  },
  {
    id: 'k6',
    title: '车辆应急装备配置',
    description: '在车辆中准备必要的应急装备',
    level: 'beginner',
    scenario: 'vehicle',
    category: '应急准备',
    content: `
## 为什么需要车载应急装备

车辆故障、交通事故、恶劣天气被困等情况都可能发生。车载应急装备可以帮助你在等待救援时保持安全。

## 必备装备清单

### 1. 安全装备
- 三角警示牌
- 反光背心
- 灭火器（定期检查压力）
- 安全锤

### 2. 自救装备
- 千斤顶和轮胎扳手
- 备胎（检查胎压）
- 搭电线
- 拖车绳
- 工兵铲

### 3. 生存装备
- 饮用水和高热量食物
- 急救包
- 保暖毯
- 手电筒和备用电池
- 手机充电宝

### 4. 应对不同季节
- **夏季**：遮阳伞、降温用品
- **冬季**：防滑链、雪地靴、雪铲

## 使用注意事项

定期检查装备是否完好有效，特别是灭火器、急救包等有保质期的物品。
`,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=car%20emergency%20kit%20vehicle%20safety%20equipment%20roadside%20assistance&image_size=square_hd',
    estimatedTime: 20,
    createdAt: '2024-06-01'
  }
]

export const equipmentCategories: EquipmentCategory[] = [
  { id: 'ec1', name: '背包与收纳', icon: 'backpack', description: '各种容量的生存背包和收纳系统' },
  { id: 'ec2', name: '取火工具', icon: 'flame', description: '打火机、火石、镁棒等取火装备' },
  { id: 'ec3', name: '水具与净化', icon: 'droplets', description: '水壶、净水器等饮水相关装备' },
  { id: 'ec4', name: '刀具与工具', icon: 'axe', description: '生存刀、多功能工具、斧头' },
  { id: 'ec5', name: '急救医疗', icon: 'heart-pulse', description: '急救包、药品、医疗用品' },
  { id: 'ec6', name: '照明设备', icon: 'flashlight', description: '手电筒、头灯、营地灯' },
  { id: 'ec7', name: '通讯设备', icon: 'radio', description: '对讲机、收音机、卫星定位' },
  { id: 'ec8', name: '户外服装', icon: 'shirt', description: '冲锋衣、登山鞋、保暖装备' }
]

export const equipments: Equipment[] = [
  {
    id: 'e1',
    name: '生存者72小时应急背包',
    categoryId: 'ec1',
    brand: 'SurvivalPro',
    price: 899,
    rating: 4.6,
    pros: ['空间设计合理', '防水材质', '背负系统舒适', '附多处外挂点'],
    cons: ['重量略大', '价格偏高', '颜色选择少'],
    scenarios: ['urban', 'wilderness', 'disaster'],
    valueScore: 4.2,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tactical%20survival%20backpack%20military%20green%20outdoor%20gear&image_size=square_hd',
    description: '这款45L应急背包采用500D防水尼龙材质，专为72小时生存设计。主仓容量大，分隔合理，可容纳水、食物、急救包等物资。',
    specs: {
      '容量': '45L',
      '材质': '500D防水尼龙',
      '重量': '1.8kg',
      '尺寸': '55x30x25cm',
      '颜色': '军绿色/黑色'
    },
    reviews: [
      {
        id: 'er1',
        equipmentId: 'e1',
        userId: 'u1',
        userName: '荒野求生者',
        rating: 5,
        title: '非常实用的生存背包',
        content: '用了半年，背负系统很舒服，长时间背也不累。防水性能很好，下雨天里面东西都没湿。',
        usageDuration: '6个月',
        createdAt: '2024-03-15',
        verified: true
      },
      {
        id: 'er2',
        equipmentId: 'e1',
        userId: 'u2',
        userName: '城市预备者',
        rating: 4,
        title: '性价比不错',
        content: '空间足够放3天的物资，只是自重有点大。整体来说还是很满意的。',
        usageDuration: '3个月',
        createdAt: '2024-04-20',
        verified: true
      }
    ],
    createdAt: '2024-01-10'
  },
  {
    id: 'e2',
    name: '镁棒打火石套装',
    categoryId: 'ec2',
    brand: 'FireMaster',
    price: 89,
    rating: 4.8,
    pros: ['防水防潮', '使用寿命长', '适用各种天气', '价格实惠'],
    cons: ['需要练习掌握技巧', '低温下火花稍弱'],
    scenarios: ['wilderness', 'disaster'],
    valueScore: 4.9,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=magnesium%20fire%20starter%20flint%20rod%20bushcraft%20tool&image_size=square_hd',
    description: '专业级镁棒打火石，可产生3000℃高温火花，在任何天气条件下都能可靠点火。套装包含刮片和防失手绳。',
    specs: {
      '长度': '12.7cm',
      '直径': '1.27cm',
      '材质': '镁合金',
      '点火次数': '约12000次',
      '工作温度': '-40℃至800℃'
    },
    reviews: [
      {
        id: 'er3',
        equipmentId: 'e2',
        userId: 'u3',
        userName: '丛林探险家',
        rating: 5,
        title: '户外必备神器',
        content: '在雨中也能轻松点火，比打火机可靠多了。新手需要多练习几次就能掌握。',
        usageDuration: '1年',
        createdAt: '2024-02-28',
        verified: true
      }
    ],
    createdAt: '2024-01-15'
  },
  {
    id: 'e3',
    name: '便携式户外净水器',
    categoryId: 'ec3',
    brand: 'PureH2O',
    price: 399,
    rating: 4.5,
    pros: ['过滤精度高', '重量轻便', '无需电力', '出水量大'],
    cons: ['滤芯需要定期更换', '低温环境可能结冰', '价格较高'],
    scenarios: ['wilderness', 'disaster'],
    valueScore: 4.3,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portable%20water%20filter%20outdoor%20survival%20purification%20system&image_size=square_hd',
    description: '采用0.1微米中空纤维超滤膜，可滤除99.9999%的细菌和99.9%的寄生虫。一分钟可净化1.5升水。',
    specs: {
      '过滤精度': '0.1微米',
      '重量': '110g',
      '滤芯寿命': '4000升',
      '流速': '1.5L/分钟',
      '尺寸': '16x3.8cm'
    },
    reviews: [
      {
        id: 'er4',
        equipmentId: 'e3',
        userId: 'u4',
        userName: '徒步爱好者',
        rating: 5,
        title: '救了我一命',
        content: '上次徒步水源喝完了，靠这个过滤器喝了溪流水，完全没问题。',
        usageDuration: '8个月',
        createdAt: '2024-05-10',
        verified: true
      }
    ],
    createdAt: '2024-02-01'
  },
  {
    id: 'e4',
    name: '多功能生存刀具',
    categoryId: 'ec4',
    brand: 'BladeMaster',
    price: 599,
    rating: 4.7,
    pros: ['钢材硬度高', '做工精良', '手感舒适', '功能多样'],
    cons: ['价格偏高', '需要定期保养', '不适合新手'],
    scenarios: ['wilderness', 'urban', 'disaster'],
    valueScore: 4.4,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=survival%20knife%20bushcraft%20tactical%20blade%20outdoor%20tool&image_size=square_hd',
    description: '采用440C不锈钢，硬度达到HRC58-60。刀柄采用防滑G10材质，附打火石、磨刀器、哨子等多功能配件。',
    specs: {
      '全长': '23cm',
      '刃长': '10.5cm',
      '材质': '440C不锈钢',
      '硬度': 'HRC58-60',
      '重量': '220g'
    },
    reviews: [
      {
        id: 'er5',
        equipmentId: 'e4',
        userId: 'u5',
        userName: '刀具收藏者',
        rating: 5,
        title: '性价比很高的生存刀',
        content: '钢材不错，保持性很好。刀柄手感一流，长时间使用也不累。',
        usageDuration: '6个月',
        createdAt: '2024-04-15',
        verified: true
      }
    ],
    createdAt: '2024-02-20'
  },
  {
    id: 'e5',
    name: '专业急救包(200件)',
    categoryId: 'ec5',
    brand: 'MedCare',
    price: 259,
    rating: 4.6,
    pros: ['物品齐全', '分类清晰', '防水包装', '质量可靠'],
    cons: ['体积较大', '部分物品可能用不上', '重量偏重'],
    scenarios: ['urban', 'wilderness', 'home', 'vehicle', 'disaster', 'medical'],
    valueScore: 4.7,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=first%20aid%20kit%20medical%20supplies%20emergency%20bag&image_size=square_hd',
    description: '包含200件急救用品，覆盖外伤处理、心肺复苏、烧伤处理等多种场景。采用防水牛津布包装。',
    specs: {
      '件数': '200件',
      '尺寸': '22x15x8cm',
      '重量': '0.8kg',
      '材质': '防水牛津布',
      '保质期': '3年'
    },
    reviews: [
      {
        id: 'er6',
        equipmentId: 'e5',
        userId: 'u6',
        userName: '户外领队',
        rating: 5,
        title: '领队必备',
        content: '带队员出去徒步必备，上次有队员受伤，里面用品很全，处理得很及时。',
        usageDuration: '1年',
        createdAt: '2024-03-20',
        verified: true
      }
    ],
    createdAt: '2024-03-05'
  },
  {
    id: 'e6',
    name: '强光战术手电筒',
    categoryId: 'ec6',
    brand: 'BrightPro',
    price: 199,
    rating: 4.5,
    pros: ['亮度高', '续航时间长', '防水耐用', '多功能模式'],
    cons: ['体积较大', '重量偏重', '价格偏高'],
    scenarios: ['urban', 'wilderness', 'home', 'vehicle', 'disaster'],
    valueScore: 4.5,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tactical%20flashlight%20led%20bright%20rechargeable%20outdoor&image_size=square_hd',
    description: '1200流明强光，射程300米。IPX6防水等级，支持强光、弱光、爆闪、SOS四种模式。USB充电。',
    specs: {
      '亮度': '1200流明',
      '射程': '300米',
      '续航': '8小时(弱光)',
      '防水等级': 'IPX6',
      '重量': '180g'
    },
    reviews: [],
    createdAt: '2024-03-15'
  }
]

export const checklistCategories: ChecklistCategory[] = [
  { id: 'cc1', name: '应急生存包', scenario: 'disaster', description: '应对各种灾难的生存包清单', icon: 'backpack' },
  { id: 'cc2', name: '户外探险', scenario: 'wilderness', description: '野外活动必备物品清单', icon: 'tent' },
  { id: 'cc3', name: '车辆应急', scenario: 'vehicle', description: '车载应急装备清单', icon: 'car' },
  { id: 'cc4', name: '家庭储备', scenario: 'home', description: '家庭应急物资储备清单', icon: 'home' }
]

export const checklistTemplates: ChecklistTemplate[] = [
  {
    id: 'ct1',
    name: '72小时求生包',
    categoryId: 'cc1',
    description: '应对突发灾难，能够独立生存72小时的必备物品',
    duration: '3天',
    icon: 'clock',
    items: [
      { id: 'ci1', name: '饮用水', description: '每人每天2升', priority: 'critical', quantity: '6升/人', notes: '瓶装水或储水袋' },
      { id: 'ci2', name: '高热量食物', description: '压缩饼干、能量棒等', priority: 'critical', quantity: '3天量', notes: '注意保质期' },
      { id: 'ci3', name: '急救包', description: '包含常用药品和包扎用品', priority: 'critical', quantity: '1个', notes: '定期检查更新' },
      { id: 'ci4', name: '手电筒', description: '带备用电池', priority: 'critical', quantity: '1个', notes: '建议手摇式' },
      { id: 'ci5', name: '多功能工具', description: '瑞士军刀或类似工具', priority: 'high', quantity: '1个' },
      { id: 'ci6', name: '口哨', description: '用于发出求救信号', priority: 'high', quantity: '1个' },
      { id: 'ci7', name: '应急毯', description: '保暖和急救使用', priority: 'high', quantity: '1条' },
      { id: 'ci8', name: '重要证件复印件', description: '身份证、银行卡等', priority: 'high', quantity: '1套', notes: '防水袋密封' },
      { id: 'ci9', name: '现金', description: '小额钞票和硬币', priority: 'medium', quantity: '500-1000元' },
      { id: 'ci10', name: '备用衣物', description: '保暖内衣、外套', priority: 'medium', quantity: '1套' },
      { id: 'ci11', name: '卫生用品', description: '卫生纸、湿纸巾', priority: 'low', quantity: '适量' }
    ]
  },
  {
    id: 'ct2',
    name: '车上常备物',
    categoryId: 'cc3',
    description: '车辆必备的应急和安全装备',
    duration: '长期',
    icon: 'car',
    items: [
      { id: 'ci12', name: '三角警示牌', description: '车辆故障时放置', priority: 'critical', quantity: '1个' },
      { id: 'ci13', name: '反光背心', description: '车外作业时穿着', priority: 'critical', quantity: '2件' },
      { id: 'ci14', name: '车载灭火器', description: '初期火灾扑救', priority: 'critical', quantity: '1个', notes: '定期检查压力' },
      { id: 'ci15', name: '安全锤', description: '紧急破窗逃生', priority: 'critical', quantity: '1个' },
      { id: 'ci16', name: '搭电线', description: '电瓶亏电时使用', priority: 'high', quantity: '1套' },
      { id: 'ci17', name: '拖车绳', description: '车辆脱困使用', priority: 'high', quantity: '1条' },
      { id: 'ci18', name: '千斤顶和扳手', description: '更换备胎', priority: 'high', quantity: '1套' },
      { id: 'ci19', name: '车载急救包', description: '简单医疗用品', priority: 'high', quantity: '1个' },
      { id: 'ci20', name: '工兵铲', description: '车辆陷车时使用', priority: 'medium', quantity: '1把' },
      { id: 'ci21', name: '饮用水和食物', description: '等待救援时用', priority: 'medium', quantity: '适量' }
    ]
  },
  {
    id: 'ct3',
    name: '城市应急包',
    categoryId: 'cc1',
    description: '适合城市居民的应急包配置',
    duration: '3天',
    icon: 'building-2',
    items: [
      { id: 'ci22', name: '防毒面具/口罩', description: '防止烟雾和有害气体', priority: 'critical', quantity: '2个/人' },
      { id: 'ci23', name: '防滑鞋', description: '在废墟中行走', priority: 'high', quantity: '1双' },
      { id: 'ci24', name: '安全帽', description: '防止坠物砸伤', priority: 'high', quantity: '1个' },
      { id: 'ci25', name: '瓶装水', description: '应急饮用', priority: 'critical', quantity: '6升/人' },
      { id: 'ci26', name: '压缩食品', description: '高热量应急食品', priority: 'critical', quantity: '3天量' },
      { id: 'ci27', name: '急救包', description: '医疗急救用品', priority: 'critical', quantity: '1个' },
      { id: 'ci28', name: '手电筒', description: '停电时照明', priority: 'critical', quantity: '1个' },
      { id: 'ci29', name: '手摇收音机', description: '获取应急信息', priority: 'high', quantity: '1个' },
      { id: 'ci30', name: '哨子', description: '求救信号', priority: 'high', quantity: '1个' },
      { id: 'ci31', name: '多功能工具', description: '应急工具', priority: 'medium', quantity: '1个' },
      { id: 'ci32', name: '雨衣', description: '雨天应急', priority: 'low', quantity: '1件' }
    ]
  },
  {
    id: 'ct4',
    name: '一日徒步装备',
    categoryId: 'cc2',
    description: '单日户外徒步所需装备',
    duration: '1天',
    icon: 'footprints',
    items: [
      { id: 'ci33', name: '徒步鞋', description: '舒适防滑', priority: 'critical', quantity: '1双' },
      { id: 'ci34', name: '背包', description: '20-30L容量', priority: 'critical', quantity: '1个' },
      { id: 'ci35', name: '饮用水', description: '至少2升', priority: 'critical', quantity: '2-3升' },
      { id: 'ci36', name: '能量补给', description: '能量棒、巧克力', priority: 'high', quantity: '适量' },
      { id: 'ci37', name: '防晒用品', description: '帽子、防晒霜', priority: 'high', quantity: '1套' },
      { id: 'ci38', name: '雨具', description: '雨衣或雨伞', priority: 'high', quantity: '1件' },
      { id: 'ci39', name: '头灯', description: '备用照明', priority: 'medium', quantity: '1个' },
      { id: 'ci40', name: '急救包', description: '简单外伤处理', priority: 'medium', quantity: '1个' },
      { id: 'ci41', name: '登山杖', description: '减轻腿部负担', priority: 'low', quantity: '1-2根' },
      { id: 'ci42', name: '手机和充电宝', description: '通讯和导航', priority: 'high', quantity: '1套' }
    ]
  }
]

export const communityPosts: CommunityPost[] = [
  {
    id: 'cp1',
    userId: 'u1',
    userName: '硬核生存者',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=survivor1',
    title: '2023年北京暴雨被困24小时真实经历',
    content: '去年7月那场暴雨，我被困在公司地下停车场。水涨得很快，幸好我平时车上备有应急包。分享一下当时的情况和经验：\n\n1. 不要试图驾车通过积水区，我的车就是因为这个熄火的\n2. 车窗留一点缝隙，防止水压太大无法开门\n3. 应急包一定要放在随手能拿到的地方\n4. 保持手机电量，不要一直刷视频\n5. 不要慌张，耐心等待救援\n\n最后救援队用皮划艇把我们救出来的。从那以后，我车上的应急装备又增加了好几样。',
    category: 'experience',
    tags: ['暴雨', '城市内涝', '真实经历', '北京'],
    region: '北京',
    likes: 328,
    comments: 56,
    createdAt: '2024-05-15 14:30',
    isEmergency: false
  },
  {
    id: 'cp2',
    userId: 'u2',
    userName: '户外老驴',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=hiker',
    title: '穿越秦岭时迷路了，靠这些技能脱险',
    content: '上个月和朋友穿越秦岭，中途走错路迷路了。手机没有信号，天也快黑了。\n\n幸好我学过野外生存知识：\n- 找到水源，沿着河流走（河流通常会通向有人的地方）\n- 用手表和太阳辨别方向\n- 晚上在背风处生火取暖\n- 用哨子发出求救信号\n\n第二天中午被护林员发现了。提醒大家：户外探险一定要做好功课，不要单独行动。',
    category: 'experience',
    tags: ['野外生存', '迷路', '秦岭', '户外经验'],
    likes: 512,
    comments: 89,
    createdAt: '2024-05-20 09:15'
  },
  {
    id: 'cp3',
    userId: 'u3',
    userName: '上海预备者',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=shanghai',
    title: '上海地区的朋友，你们的应急包准备好了吗？',
    content: '最近台风季节快到了，提醒上海的小伙伴们检查一下应急物资。\n\n上海经常遇到的情况：\n1. 台风导致停水停电\n2. 地铁停运\n3. 超市抢购\n\n建议准备：\n- 至少3天的饮用水和食物\n- 手电筒和备用电池\n- 充电宝\n- 常用药品\n\n上海的朋友可以来交流一下你们的准备情况。',
    category: 'regional',
    tags: ['台风', '上海', '应急准备', '区域讨论'],
    region: '上海',
    likes: 178,
    comments: 45,
    createdAt: '2024-06-01 16:45'
  },
  {
    id: 'cp4',
    userId: 'u4',
    userName: '装备测评师',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer',
    title: '讨论：国产生存装备真的不如进口的吗？',
    content: '最近看到很多人说国产的生存装备质量不好，我有些不同看法。\n\n我用过的国产装备中，很多质量并不比进口的差，价格却便宜很多。比如某品牌的打火石，我用了两年多，点火依然很顺。\n\n当然，确实有些小品牌质量参差不齐。大家可以分享一下用过的靠谱国产装备品牌，避避坑。',
    category: 'discussion',
    tags: ['装备讨论', '国产装备', '性价比'],
    likes: 245,
    comments: 78,
    createdAt: '2024-06-05 11:20'
  },
  {
    id: 'cp5',
    userId: 'u5',
    userName: '新手小白',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=newbie',
    title: '新手求助：第一次露营需要准备什么？',
    content: '大家好，我是新手，最近想和朋友去露营，但是完全不知道该准备什么。\n\n想问一下：\n1. 帐篷选哪种比较好？（预算1000以内）\n2. 睡袋需要买什么样的？\n3. 有没有什么必带的小物件容易被忽略？\n4. 需要学习什么基础技能？\n\n希望老玩家指点一下，谢谢！',
    category: 'question',
    tags: ['新手求助', '露营', '装备推荐'],
    likes: 89,
    comments: 34,
    createdAt: '2024-06-08 20:10'
  },
  {
    id: 'cp6',
    userId: 'u6',
    userName: '广东生存党',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=guangdong',
    title: '【紧急】广东地区台风预警，请做好准备',
    content: '紧急通知：今年第X号台风预计明天登陆广东沿海，风力可达12级以上。\n\n请广东的朋友们：\n1. 储备足够的饮用水和食物（建议3-5天）\n2. 检查门窗，做好防风措施\n3. 不要去海边活动\n4. 充电宝充好电\n5. 把阳台上的花盆等物品移到室内\n\n希望大家都平安！',
    category: 'regional',
    tags: ['台风', '紧急通知', '广东', '预警'],
    region: '广东',
    likes: 567,
    comments: 123,
    createdAt: '2024-06-10 08:00',
    isEmergency: true
  }
]

export const comments: Comment[] = [
  {
    id: 'cm1',
    postId: 'cp1',
    userId: 'u7',
    userName: '天津车友',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tianjin',
    content: '太惊险了！我车上也有应急包，但是很多东西都过期了，今晚就回去检查。',
    likes: 23,
    createdAt: '2024-05-15 15:00'
  },
  {
    id: 'cm2',
    postId: 'cp1',
    userId: 'u8',
    userName: '安全员小李',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=safety',
    content: '补充一点：如果被困在车里，不要一直开空调，会消耗电瓶电量。可以每隔一段时间发动一下车。',
    likes: 45,
    createdAt: '2024-05-15 15:30'
  },
  {
    id: 'cm3',
    postId: 'cp2',
    userId: 'u9',
    userName: '救援队老王',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rescue',
    content: '楼主的做法很正确。补充一点：迷路后最好在原地等待，不要乱走，这样更容易被救援人员找到。',
    likes: 67,
    createdAt: '2024-05-20 10:00'
  },
  {
    id: 'cm4',
    postId: 'cp3',
    userId: 'u10',
    userName: '浦东居民',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pudong',
    content: '上海徐汇的，我家已经备了10桶5升的水，还有两箱压缩饼干。今年准备得特别充分。',
    likes: 12,
    createdAt: '2024-06-01 17:00'
  },
  {
    id: 'cm5',
    postId: 'cp4',
    userId: 'u11',
    userName: '国货支持者',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=madeinchina',
    content: '我用的都是国产的，质量真的不错。比如汉道的刀、神火的手电，性价比很高。',
    likes: 34,
    createdAt: '2024-06-05 12:00'
  }
]
