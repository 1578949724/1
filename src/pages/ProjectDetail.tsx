import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronDown, ChevronRight, Play, Copy, Trash2, FileText, CheckCircle, AlertCircle, Book, Code, BookOpen, Maximize2, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [sectionsCollapsed, setSectionsCollapsed] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const projectData: Record<string, any> = {
    '01': {
      title: '数据清洗实战',
      difficulty: '入门',
      duration: '约 30 分钟',
      sectionGroups: [
        {
          title: '基础概念',
          sections: [
            {
              title: '什么是数据清洗？',
              content: '数据清洗（Data Cleaning）是数据预处理的核心环节，旨在识别并修正数据中的错误、不一致和缺失值。在电商场景中，来自不同系统的订单数据往往存在格式不统一、字段错位、空值逻辑各异等问题。',
              tips: ['建议先使用 df.info() 和 df.describe() 了解数据基本情况，再制定清洗策略。'],
              warnings: ['切勿跳过数据诊断直接清洗。不了解数据问题就动手，可能导致错误的数据转换。'],
              exampleCode: '# 示例：使用 info() 诊断数据\nimport pandas as pd\n\n# 加载数据集\ndf = pd.read_csv("datasets/retail_orders.csv")\nprint(f"数据加载完成，共 {len(df)} 行 {len(df.columns)} 列")\nprint(df.head())\nprint(df.info())',
            },
            {
              title: '数据清洗的完整流程',
              content: '经典四步走：1) 读取文件 → 2) 诊断探索 → 3) 逐列清洗 → 4) 验证导出。',
              tips: ['清洗过程中多保存中间版本，以便可以回滚。'],
              warnings: [],
              exampleCode: '# 数据清洗流程概览\nimport pandas as pd\n\n# 1. 读取\ndf = pd.read_csv("datasets/retail_orders.csv")\n\n# 2. 诊断\nprint(df.head())\nprint(df.info())\n\n# 3. 清洗\n# ... 具体清洗步骤 ...\n\n# 4. 保存\ndf.to_csv("cleaned_orders.csv", index=False)\nprint("数据已保存！")',
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '1.1 导入必要工具库',
              content: '先确保环境已装好 pandas。本项目还会用到 numpy，主要是处理缺失值，以及 re 用于正则表达式。',
              tips: ['如果报错找不到 pandas，请在终端运行 pip install pandas。'],
              warnings: [],
              exampleCode: 'import pandas as pd\nimport numpy as np\nimport re\n\nprint("库加载成功！")',
            },
            {
              title: '1.2 读取原始数据',
              content: '使用 pd.read_csv 读取数据。注意：原数据可能有编码问题，我们可以使用 utf-8-sig 处理带 BOM 的 csv。',
              tips: ['如果遇到乱码，尝试 encoding="gbk" 或 encoding="utf-8-sig"。'],
              warnings: ['直接在内存中直接操作处理，不要修改源文件，始终保持原始数据文件只读。'],
              exampleCode: 'import pandas as pd\n\ndf = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")\n\nprint(f"读取成功：共 {len(df)} 条订单")\nprint(df.head())',
            },
          ],
        },
        {
          title: '核心清洗',
          sections: [
            {
              title: '2.0 数据诊断与探索',
              content: '先用 info() 看看有多少缺失值，用 describe() 看看分布，再按需用 value_counts 或 unique 查看分类数据。',
              tips: ['对于 object 类型的列，多用 df["列名"].value_counts(dropna=False) 查看有哪些奇怪的值。'],
              warnings: [],
              exampleCode: '# 数据诊断\nprint("=== 数据基本信息 ===")\nprint(df.info())\n\nprint("\\n=== 数据统计摘要 ===")\nprint(df.describe(include="all"))\n\nprint("\\n=== 仓库列唯一值 ===")\nprint(df["warehouse"].value_counts(dropna=False))',
            },
            {
              title: '2.1 清洗金额格式',
              content: '金额字段通常包含货币符号、千位分隔符或多个小数点，直接转为数值会报错。这是一个最常见的数据清洗场景。',
              tips: ['建议写个 helper 函数专门处理金额，配合 apply 按行处理。', '正则表达式 str.replace(r"[^\\d.-]", "") 是最稳健的做法。'],
              warnings: ['直接处理时注意有些字段可能已经是数字，要加 try-except 判断。'],
              exampleCode: '# 清洗金额列\ndef clean_amount(val):\n    if pd.isna(val):\n        return np.nan\n    s = str(val)\n    s = re.sub(r"[^\\d.-]", "", s)\n    try:\n        return float(s)\n    except:\n        return np.nan\n\ndf["amount"] = df["amount"].apply(clean_amount)\nprint(df["amount"].head())\nprint(f"金额清洗完成，缺失值：{df["amount"].isna().sum()}")',
            },
            {
              title: '2.2 填充缺失客户ID',
              content: '可以填 "Unknown"、"Guest" 等，根据业务决定。我们可以用 fillna 或 mask/where。',
              tips: ['对不同列分别制定填充策略：数值型可用均值，类别型用众数或者 "Other"。'],
              warnings: ['不要对整个 DataFrame 统一 fillna，否则会把本该保留的空值都覆盖掉。'],
              exampleCode: '# 填充缺失客户ID\ndf["customer_id"] = df["customer_id"].fillna("Guest")\nprint("客户ID缺失值已填充为 Guest")\nprint(df["customer_id"].value_counts())',
            },
            {
              title: '2.3 统一日期格式',
              content: '使用 pd.to_datetime。可以通过 errors="coerce" 把无法解析的日期设为空值，后续再单独处理。',
              tips: ['可以用 dt.dayofweek、dt.month 等提取时间特征。', '推荐直接按 datetime 处理，不要手动切片字符串。'],
              warnings: ['不同地区年月日顺序不一致时，要指定 format 参数或使用 dayfirst=True，避免解析错误。'],
              exampleCode: '# 统一日期格式\ndf["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")\n\nprint("日期清洗后前10条：")\nprint(df["order_date"].head(10))\n\n# 简单过滤未来日期\ntoday = pd.Timestamp.now().normalize()\ndf = df[df["order_date"] <= today].copy()\n\nprint(f"剔除未来日期后剩余：{len(df)} 条")',
            },
            {
              title: '2.4 处理重复数据',
              content: '使用 drop_duplicates，配合 subset 参数可以只针对特定列去重。',
              tips: ['去重前先 sort_values，决定保留哪一行。', '在清洗最后一步再去重，防止中间变换产生新的重复。'],
              warnings: ['如果不加 subset，可能会误删行。建议显示打印 df.duplicated().sum() 确认。'],
              exampleCode: '# 处理重复数据\nprint(f"去重前：{len(df)}")\ndf = df.sort_values("order_date", ascending=False)\ndf = df.drop_duplicates(subset=["order_id"], keep="first")\nprint(f"去重后：{len(df)}")',
            },
            {
              title: '2.5 数值异常值检测',
              content: '可以用 IQR（四分位距）判断：超出 Q1-1.5*IQR 或 Q3+1.5*IQR 视为离群值，也可以直接用 describe 结合业务经验看是否合理。',
              tips: ['不要盲目删除异常值，要看业务场景：可能是真实的大订单，也可能是错漏数据标记出来即可。'],
              warnings: [],
              exampleCode: '# 异常值检测\nQ1 = df["amount"].quantile(0.25)\nQ3 = df["amount"].quantile(0.75)\nIQR = Q3 - Q1\n\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\n\nprint(f"金额合理范围：{lower:.2f} ~ {upper:.2f}")\n\noutliers = df[(df["amount"] < lower) | (df["amount"] > upper)]\nprint(f"发现异常值：{len(outliers)} 条")\nprint(outliers[["order_id", "amount"]])',
            },
            {
              title: '2.6 数据类型优化',
              content: '把 category 类型的列转成 category，能省内存；对于整数列，确认无小数后可以转成 int。',
              tips: ['对重复值较多的字符串列（如仓库、地区等）转 category 性价比最高。'],
              warnings: [],
              exampleCode: '# 数据类型优化\nbefore = df.memory_usage(deep=True).sum()\ndf["warehouse"] = df["warehouse"].astype("category")\nafter = df.memory_usage(deep=True).sum()\n\nprint(f"内存占用：{before/1024/1024:.2f}MB → {after/1024/1024:.2f}MB")\nprint(f"节省了 {(1 - after/before)*100:.1f}%")',
            },
            {
              title: '2.7 创建衍生列',
              content: '有了清洗好的日期、金额，可以派生星期几、月份、订单金额区间、是否 VIP 等特征。',
              tips: ['在建模前再做特征工程，这里保留原始清洗结果以便复用。'],
              warnings: [],
              exampleCode: '# 创建衍生列\ndf["order_month"] = df["order_date"].dt.month\ndf["is_vip"] = df["amount"] > 500\ndf["amount_bin"] = pd.cut(df["amount"], bins=3, labels=["低", "中", "高"])\n\nprint("衍生列创建完成：")\nprint(df[["order_month", "is_vip", "amount_bin"]].head())',
            },
          ],
        },
        {
          title: '结果验证',
          sections: [
            {
              title: '3.1 验证清洗结果',
              content: '最后查看整体 info，检查是否还有空值，抽样看一下数据是否正确。',
              tips: ['把检查写成 assert 方便后续回归验证。'],
              warnings: [],
              exampleCode: '# 验证清洗结果\nprint("=== 最终数据信息 ===")\nprint(df.info())\n\nprint("\\n=== 缺失值统计 ===")\nprint(df.isna().sum())\n\nprint("\\n=== 最终数据样本 ===")\nprint(df.sample(5))',
            },
            {
              title: '3.2 保存清洗后数据',
              content: '可以 to_csv 也可以 to_excel，to_parquet 等。这里我们保存为 csv。',
              tips: ['to_csv 时带上 index=False，避免多出一列 Unnamed:0。'],
              warnings: [],
              exampleCode: '# 保存清洗后数据\ndf.to_csv("cleaned_orders.csv", index=False, encoding="utf-8-sig")\nprint("已保存至：cleaned_orders.csv")\nprint(f"最终数据量：{len(df)} 条")',
            },
          ],
        },
      ],
      practiceTitle: '实战练习：数据清洗验证',
      practiceDesc: '动手编写代码完成清洗与验证',
      initialCode: '# 数据清洗实战练习\nimport pandas as pd\nimport numpy as np\nimport re\n\n# 1. 加载数据\ndf = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")\n\n# 2. 诊断数据\nprint("数据加载完成，开始诊断...")\nprint(df.info())\n\n# 3. 清洗金额\ndef clean_amount(val):\n    if pd.isna(val):\n        return np.nan\n    s = str(val)\n    s = re.sub(r"[^\\d.-]", "", s)\n    try:\n        return float(s)\n    except:\n        return np.nan\ndf["amount"] = df["amount"].apply(clean_amount)\n\n# 4. 填充客户ID\ndf["customer_id"] = df["customer_id"].fillna("Guest")\n\n# 5. 处理日期\ndf["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")\n\n# 6. 去重\ndf = df.drop_duplicates(subset=["order_id"], keep="first")\n\n# 7. 保存\ndf.to_csv("cleaned_orders.csv", index=False)\nprint("清洗完成！共保存", len(df), "条数据")',
    },
    '02': {
      title: '分组聚合分析',
      difficulty: '入门',
      duration: '约 40 分钟',
      sectionGroups: [
        {
          title: '分组基础',
          sections: [
            {
              title: '什么是分组聚合？',
              content: '分组聚合是数据分析中最常用的操作之一。简单来说，就是按照某个维度将数据分组，然后对每组进行聚合计算（如计数、求和、平均值等）。',
              tips: ['groupby 对象不会立即执行计算，只有调用聚合函数时才执行。'],
              warnings: ['分组列中的缺失值会被自动忽略，不参与分组。'],
              exampleCode: '# 简单分组示例\nimport pandas as pd\n\n# 加载用户行为数据\ndf = pd.read_csv("datasets/user_behavior.csv")\nprint("数据加载成功！")\n\n# 按用户分组，统计行为数\nuser_actions = df.groupby("user_id")["behavior"].count().sort_values(ascending=False)\nprint("\\n用户行为 Top 10：")\nprint(user_actions.head(10))',
            },
            {
              title: 'groupby 核心语法',
              content: 'groupby 后面跟列名或列名列表，表示按哪些维度分组。然后接聚合函数。',
              tips: ['可以用 size() 或 count() 计数，用 agg() 同时聚合多个指标。'],
              warnings: [],
              exampleCode: '# groupby 语法演示\n# 单个列分组\ngrouped = df.groupby("behavior")\nprint("按行为类型分组：")\nprint(grouped.size())\n\n# 多个列分组\nmulti_group = df.groupby(["user_id", "behavior"]).size().unstack(fill_value=0)\nprint("\\n用户-行为矩阵：")\nprint(multi_group.head())',
            },
          ],
        },
        {
          title: '聚合函数',
          sections: [
            {
              title: '常用聚合函数',
              content: 'count(计数)、sum(求和)、mean(平均值)、median(中位数)、min(最小)、max(最大)、std(标准差)、var(方差) 等。',
              tips: ['用 agg() 可以同时对不同列应用不同聚合函数。'],
              warnings: [],
              exampleCode: '# 聚合函数演示\nagg_result = df.groupby("user_id").agg(\n    total_actions=("behavior", "count"),\n    unique_products=("product_id", "nunique")\n)\n\nprint("用户聚合结果：")\nprint(agg_result.head())',
            },
            {
              title: '数据透视表',
              content: 'pivot_table 可以直接做出类似 Excel 的透视表效果，非常适合交叉分析。',
              tips: ['columns 参数可以把某列的值扩展为多列。'],
              warnings: [],
              exampleCode: '# 数据透视表\npivot = pd.pivot_table(\n    df,\n    values="product_id",\n    index="user_id",\n    columns="behavior",\n    aggfunc="count",\n    fill_value=0\n)\nprint("行为透视表：")\nprint(pivot.head())',
            },
            {
              title: '交叉表',
              content: 'crosstab 适合计算两列或多列之间的频数分布。',
              tips: [],
              warnings: [],
              exampleCode: '# 交叉表示例\ncross = pd.crosstab(df["user_id"], df["behavior"])\nprint("用户行为交叉表：")\nprint(cross.head())',
            },
          ],
        },
        {
          title: '高级应用',
          sections: [
            {
              title: '会话窗口计算',
              content: '计算行为间隔，识别用户会话。通过时间差判断是否属于同一会话。',
              tips: ['配合 diff() 和 cumsum() 可以创建会话编号。'],
              warnings: [],
              exampleCode: '# 会话窗口计算\ndf["timestamp"] = pd.to_datetime(df["timestamp"])\ndf = df.sort_values(["user_id", "timestamp"])\n\n# 计算行为间隔（小时）\ndf["time_diff"] = df.groupby("user_id")["timestamp"].diff().dt.total_seconds() / 3600\n\n# 会话分割：间隔>1小时视为新会话\ndf["session_id"] = (df["time_diff"] > 1).groupby(df["user_id"]).cumsum() + 1\n\nprint("会话统计前10条：")\nprint(df[["user_id", "session_id", "timestamp", "behavior"]].head(10))',
            },
          ],
        },
      ],
      practiceTitle: '实战练习：用户行为分析',
      practiceDesc: '计算用户行为间隔与会话窗口',
      initialCode: '# 分组聚合分析练习\nimport pandas as pd\n\n# 加载数据\ndf = pd.read_csv("datasets/user_behavior.csv")\n\n# 1. 按用户统计行为数\nuser_counts = df.groupby("user_id")["behavior"].count()\nprint("用户行为数统计：")\nprint(user_counts.head())\n\n# 2. 统计各类行为数量\nbehavior_dist = df["behavior"].value_counts()\nprint("\\n行为分布：")\nprint(behavior_dist)\n\n# 3. 用户-行为矩阵\nmatrix = df.groupby(["user_id", "behavior"]).size().unstack(fill_value=0)\nprint("\\n用户行为矩阵：")\nprint(matrix.head())',
    },
    '03': {
      title: '购物篮关联分析',
      difficulty: '中级',
      duration: '约 50 分钟',
      sectionGroups: [
        {
          title: '概念入门',
          sections: [
            {
              title: '什么是购物篮分析？',
              content: '购物篮分析是数据挖掘中的经典应用，旨在发现商品之间的关联规则，如"买了尿布的顾客通常也会买啤酒"。',
              tips: ['三个核心指标：支持度、置信度、提升度。'],
              warnings: ['不要只看高置信度，要结合业务场景判断规则是否有意义。'],
              exampleCode: '# 购物篮数据加载\nimport pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("datasets/transaction_data.csv")\nprint(f"订单数据：{df.shape[0]} 条记录")\nprint(df.head())\n\n# 查看订单数量\nprint("\\n订单数：", df["order_id"].nunique())\nprint("商品数：", df["product"].nunique())',
            },
            {
              title: '核心指标定义',
              content: '支持度：商品组合出现的频率；置信度：买A后买B的概率；提升度：规则的有效性（>1才有价值）。',
              tips: ['三个指标需要综合考虑，不是越高越好。'],
              warnings: [],
              exampleCode: '# 指标计算示例\n# 先做一个简单的统计：商品出现频率\nproduct_freq = df["product"].value_counts(normalize=True)\nprint("商品频率 Top 10：")\nprint(product_freq.head(10))',
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '数据格式转换',
              content: '将长格式交易数据转换为宽格式的订单商品矩阵。',
              tips: ['用 pivot_table 或 crosstab 可以快速转换。'],
              warnings: ['数据量大时要注意内存使用。'],
              exampleCode: '# 格式转换\n# 每个订单的商品清单\nbasket = df.groupby("order_id")["product"].apply(list).reset_index()\nbasket.columns = ["order_id", "products"]\n\nprint("购物篮数据前5条：")\nprint(basket.head())',
            },
            {
              title: '生成商品对',
              content: '从购物篮中提取商品组合，计算共同出现的次数。',
              tips: ['用 itertools.combinations 可以生成所有可能的商品对。'],
              warnings: [],
              exampleCode: '# 商品对生成示例\nfrom itertools import combinations\n\ndef get_pairs(products):\n    return list(combinations(sorted(products), 2))\n\n# 简单演示\nbasket["pairs"] = basket["products"].apply(get_pairs)\nall_pairs = [pair for pairs in basket["pairs"] for pair in pairs]\n\nprint(f"总商品对：{len(all_pairs)}")',
            },
          ],
        },
        {
          title: '规则挖掘',
          sections: [
            {
              title: '计算关联规则',
              content: '统计商品对出现次数，计算各项指标，筛选有价值的规则。',
              tips: ['先设定最小支持度和置信度阈值，过滤大量无意义的规则。'],
              warnings: [],
              exampleCode: '# 计算规则示例（简化版）\n# 1. 统计单品频次\nsingle_counts = df["product"].value_counts()\n\n# 2. 统计商品对频次\nfrom collections import Counter\npair_counts = Counter(all_pairs)\n\nprint("Top 10 商品对：")\nfor pair, count in pair_counts.most_common(10):\n    print(f"{pair}: {count}")',
            },
            {
              title: '业务规则解读',
              content: '将挖掘到的规则转化为业务建议，如捆绑销售、货架摆放等。',
              tips: ['结合提升度>1的规则，考虑业务场景的可行性。'],
              warnings: [],
              exampleCode: '# 规则解读示例\nprint("规则示例分析：")\nprint("规则：买牛奶→买面包")\nprint("建议：将牛奶和面包放在相邻货架，或做组合优惠")',
            },
          ],
        },
      ],
      practiceTitle: '实战练习：购物篮规则挖掘',
      practiceDesc: '从交易数据中发现商品关联规则',
      initialCode: '# 购物篮分析练习\nimport pandas as pd\nimport numpy as np\nfrom collections import Counter\nfrom itertools import combinations\n\n# 1. 加载数据\ndf = pd.read_csv("datasets/transaction_data.csv")\nprint(f"数据加载成功：{len(df)} 条记录")\n\n# 2. 基础统计\nprint("\\n商品数：", df["product"].nunique())\nprint("订单数：", df["order_id"].nunique())\n\n# 3. 商品频次统计\nproduct_freq = df["product"].value_counts()\nprint("\\n热门商品 Top 10：")\nprint(product_freq.head(10))',
    },
    '04': {
      title: '客户聚类分群分析',
      difficulty: '中级',
      duration: '约 60 分钟',
      sectionGroups: [
        {
          title: 'RFM 基础',
          sections: [
            {
              title: '什么是RFM模型？',
              content: 'R(Recency)：最近消费时间、F(Frequency)：消费频率、M(Monetary)：消费金额，三个维度评估客户价值。',
              tips: ['R值越小越好（最近消费），F和M越大越好。'],
              warnings: ['三个维度要根据业务场景合理加权。'],
              exampleCode: '# RFM数据准备\nimport pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("datasets/customer_transactions.csv")\nprint("订单数据：")\nprint(df.head())',
            },
            {
              title: '计算RFM指标',
              content: '从原始订单数据中计算每个用户的R、F、M值。',
              tips: ['注意R值通常用距离今天的天数表示。'],
              warnings: [],
              exampleCode: '# RFM计算\nimport datetime as dt\n\ntoday = dt.datetime.now()\n\n# 聚合用户数据\nrfm = df.groupby("customer_id").agg(\n    recency=("order_date", lambda x: (today - pd.to_datetime(x).max()).days),\n    frequency=("order_id", "nunique"),\n    monetary=("amount", "sum")\n).reset_index()\n\nprint("RFM数据：")\nprint(rfm.head())',
            },
          ],
        },
        {
          title: '数据预处理',
          sections: [
            {
              title: '特征标准化',
              content: 'R、F、M三个指标的量纲不同，需要标准化后再聚类。',
              tips: ['常用 StandardScaler 进行 Z-Score 标准化。'],
              warnings: ['要先标准化再聚类，不要直接用原始值。'],
              exampleCode: '# 标准化示例\nfrom sklearn.preprocessing import StandardScaler\n\n# 只提取数值列\nrfm_features = rfm[["recency", "frequency", "monetary"]]\n\nscaler = StandardScaler()\nrfm_scaled = scaler.fit_transform(rfm_features)\n\nprint("标准化后的RFM：")\nprint(pd.DataFrame(rfm_scaled, columns=["R_scaled", "F_scaled", "M_scaled"]).head())',
            },
            {
              title: '确定聚类数',
              content: '用肘部法则或轮廓系数确定最佳聚类数量。',
              tips: ['一般客户分群用4-8类比较合适。'],
              warnings: [],
              exampleCode: '# 肘部法则（简化版）\nfrom sklearn.cluster import KMeans\n\n# 尝试不同聚类数\ninertias = []\nfor k in range(2, 10):\n    kmeans = KMeans(n_clusters=k, random_state=42)\n    kmeans.fit(rfm_scaled)\n    inertias.append(kmeans.inertia_)\n\nprint("不同k值的inertia：", inertias)',
            },
          ],
        },
        {
          title: '聚类与分析',
          sections: [
            {
              title: 'K-Means 聚类',
              content: '使用K-Means对用户进行聚类分组。',
              tips: ['随机种子要固定，保证结果可复现。'],
              warnings: [],
              exampleCode: '# 执行聚类\nk = 5\nkmeans = KMeans(n_clusters=k, random_state=42)\nrfm["cluster"] = kmeans.fit_predict(rfm_scaled)\n\nprint("聚类结果：")\nprint(rfm["cluster"].value_counts().sort_index())',
            },
            {
              title: '解读客户群特征',
              content: '分析每个簇的R、F、M平均值，给客户群命名（如价值客户、流失客户等）。',
              tips: ['可视化能帮助更好地理解聚类结果。'],
              warnings: [],
              exampleCode: '# 聚类分析\ncluster_analysis = rfm.groupby("cluster").agg(\n    size=("customer_id", "count"),\n    avg_recency=("recency", "mean"),\n    avg_frequency=("frequency", "mean"),\n    avg_monetary=("monetary", "mean")\n)\n\nprint("各群特征：")\nprint(cluster_analysis.round(2))',
            },
          ],
        },
      ],
      practiceTitle: '实战练习：客户RFM聚类',
      practiceDesc: '对客户进行RFM分析和K-Means聚类',
      initialCode: '# 客户聚类练习\nimport pandas as pd\nimport numpy as np\nimport datetime as dt\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\n\n# 1. 加载数据\ndf = pd.read_csv("datasets/customer_transactions.csv")\nprint("订单数据加载成功！")\n\n# 2. 计算RFM\ntoday = dt.datetime.now()\nrfm = df.groupby("customer_id").agg(\n    recency=("order_date", lambda x: (today - pd.to_datetime(x).max()).days),\n    frequency=("order_id", "nunique"),\n    monetary=("amount", "sum")\n)\nprint("\\nRFM数据前5条：")\nprint(rfm.head())',
    },
    '05': {
      title: '专业数据可视化',
      difficulty: '中级',
      duration: '约 45 分钟',
      sectionGroups: [
        {
          title: 'Matplotlib 基础',
          sections: [
            {
              title: '图表类型选择',
              content: '不同的数据类型和分析目标，适合不同的图表：比较用柱状图，趋势用折线图，占比用饼图，关系用散点图。',
              tips: ['简单清晰永远是第一优先级，不要过度装饰。'],
              warnings: ['三维图表、动态特效要谨慎使用，可能适得其反。'],
              exampleCode: '# Matplotlib 基础\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\n# 数据准备\nsales = pd.DataFrame({\n    "month": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],\n    "sales": [100, 120, 90, 130, 150, 140]\n})\n\nprint("数据准备好了！")',
            },
            {
              title: '绘图基本设置',
              content: 'figure大小、中文字体设置、标题、坐标轴标签等基础配置。',
              tips: ['中文乱码是常见问题，要先配置好字体。'],
              warnings: [],
              exampleCode: '# 绘图设置\nplt.figure(figsize=(10, 6))\n\nplt.plot(sales["month"], sales["sales"], marker="o", linewidth=2)\nplt.title("月度销售额趋势", fontsize=14)\nplt.xlabel("月份", fontsize=12)\nplt.ylabel("销售额", fontsize=12)\nplt.grid(True, alpha=0.3)\nplt.show()',
            },
          ],
        },
        {
          title: '常用图表类型',
          sections: [
            {
              title: '柱状图/条形图',
              content: '用于类别之间的比较，如各品类销售额对比。',
              tips: ['类别较多时用横向条形图更美观。'],
              warnings: [],
              exampleCode: '# 柱状图\nplt.figure(figsize=(10, 6))\nplt.bar(sales["month"], sales["sales"], color="skyblue", edgecolor="navy")\nplt.title("月度销售额")\nplt.xlabel("月份")\nplt.ylabel("销售额")\nplt.xticks(rotation=45)\nplt.tight_layout()\nplt.show()',
            },
            {
              title: '折线图',
              content: '用于展示趋势变化，如时间序列数据。',
              tips: ['多条折线要注意配色和图例清晰。'],
              warnings: [],
              exampleCode: '# 折线图\nplt.figure(figsize=(10, 6))\nplt.plot(sales["month"], sales["sales"], marker="s", linewidth=2, color="red", label="销售额")\nplt.title("销售趋势")\nplt.legend()\nplt.grid(alpha=0.3)\nplt.show()',
            },
            {
              title: '饼图',
              content: '用于展示占比关系，如各品类贡献占比。',
              tips: ['类别不要太多，3-7类比较合适。'],
              warnings: [],
              exampleCode: '# 饼图\ncategories = pd.DataFrame({\n    "category": ["服装", "电子产品", "食品", "家居"],\n    "sales": [350, 280, 420, 180]\n})\n\nplt.figure(figsize=(8, 8))\nplt.pie(categories["sales"], labels=categories["category"], autopct="%.1f%%", \n        startangle=90, colors=["#ff9999", "#66b3ff", "#99ff99", "#ffcc99"])\nplt.title("品类销售占比")\nplt.show()',
            },
            {
              title: '散点图/热力图',
              content: '散点图看变量关系，热力图看相关性矩阵。',
              tips: ['散点图适合展示两个连续变量的关系。'],
              warnings: [],
              exampleCode: '# 相关性热力图示例\nimport numpy as np\ncorr_matrix = np.random.rand(4, 4)\n\nplt.figure(figsize=(8, 6))\nplt.imshow(corr_matrix, cmap="YlGnBu", aspect="auto")\nplt.colorbar()\nplt.title("相关系数热力图")\nplt.show()',
            },
          ],
        },
        {
          title: '高级可视化',
          sections: [
            {
              title: '组合图表',
              content: '将多个图表组合在一个figure中，形成dashboard。',
              tips: ['用 plt.subplots() 可以创建子图网格。'],
              warnings: [],
              exampleCode: '# 组合图表\nfig, axes = plt.subplots(2, 2, figsize=(14, 10))\n\n# 子图1\naxes[0,0].bar(sales["month"], sales["sales"])\naxes[0,0].set_title("柱状图")\n\n# 子图2\naxes[0,1].plot(sales["month"], sales["sales"])\naxes[0,1].set_title("折线图")\n\n# 子图3\naxes[1,0].pie(categories["sales"], labels=categories["category"], autopct="%.1f%%")\naxes[1,0].set_title("饼图")\n\nplt.tight_layout()\nplt.show()',
            },
          ],
        },
      ],
      practiceTitle: '实战练习：销售数据可视化',
      practiceDesc: '使用Matplotlib绘制各类分析图表',
      initialCode: '# 数据可视化练习\nimport matplotlib.pyplot as plt\nimport pandas as pd\nimport numpy as np\n\n# 1. 准备示例数据\nsales = pd.DataFrame({\n    "month": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],\n    "sales": [100, 120, 90, 130, 150, 140],\n    "orders": [40, 55, 35, 60, 70, 65]\n})\n\nprint("数据准备好了！")\nprint(sales)',
    },
    '06': {
      title: '业务A/B测试数据分析',
      difficulty: '中级',
      duration: '约 55 分钟',
      sectionGroups: [
        {
          title: 'A/B测试基础',
          sections: [
            {
              title: '什么是A/B测试？',
              content: '同时为用户展示两个版本（A对照组、B实验组），通过数据判断哪个版本表现更好。',
              tips: ['关键是保证随机性和样本量充足。'],
              warnings: ['不要频繁查看数据，容易导致统计显著性误判。'],
              exampleCode: '# A/B测试数据加载\nimport pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("datasets/ab_test_data.csv")\nprint("测试数据：")\nprint(df.head())\nprint("\\n分组人数：")\nprint(df["group"].value_counts())',
            },
            {
              title: '核心指标确定',
              content: '确定主要指标（如转化率）和辅助指标（如参与度），避免只看单一指标。',
              tips: ['指标要可量化、可比较、有业务含义。'],
              warnings: [],
              exampleCode: '# 指标描述性统计\nprint("总体转化情况：")\nprint(f"总用户：{len(df)}")\nprint(f"总转化：{df["converted"].sum()}")\nprint(f"总转化率：{df["converted"].mean():.2%}")',
            },
          ],
        },
        {
          title: '统计分析',
          sections: [
            {
              title: '描述性分析',
              content: '先看各组的基础指标：样本量、转化率、标准差等。',
              tips: ['先看描述性统计，再做假设检验。'],
              warnings: [],
              exampleCode: '# 分组统计\nab_stats = df.groupby("group").agg(\n    users=("user_id", "count"),\n    conversions=("converted", "sum"),\n    conversion_rate=("converted", "mean")\n)\n\nprint("分组统计：")\nprint(ab_stats.round(4))',
            },
            {
              title: '假设检验',
              content: '使用卡方检验或t检验，判断两组差异是否统计显著。',
              tips: ['p值<0.05是常用的显著性阈值。'],
              warnings: ['统计显著≠业务重要，要结合差异大小判断。'],
              exampleCode: '# 卡方检验示例\nfrom scipy import stats\n\n# 构建列联表\ncontingency = pd.crosstab(df["group"], df["converted"])\nprint("列联表：")\nprint(contingency)\n\n# 卡方检验\nchi2, p_value, dof, expected = stats.chi2_contingency(contingency)\nprint(f"\\n卡方值：{chi2:.4f}")\nprint(f"p值：{p_value:.4f}")',
            },
          ],
        },
        {
          title: '结果解读',
          sections: [
            {
              title: '效应量与置信区间',
              content: 'p值只告诉我们有没有差异，效应量告诉我们差异有多大，置信区间给我们不确定性范围。',
              tips: ['置信区间比单纯的p值能提供更多信息。'],
              warnings: [],
              exampleCode: '# 置信区间计算\nfrom statsmodels.stats.proportion import proportion_confint\n\nfor group in ["A", "B"]:\n    conv = df[df["group"]==group]["converted"]\n    ci_low, ci_high = proportion_confint(conv.sum(), len(conv), alpha=0.05)\n    print(f"组{group} 转化率 95% CI：[{ci_low:.2%}, {ci_high:.2%}]")',
            },
            {
              title: '业务结论',
              content: '将统计结果转化为业务建议：是否上线新版本？需要更多测试？',
              tips: ['要考虑实施成本、潜在风险等非统计因素。'],
              warnings: [],
              exampleCode: '# 结论示例\nlift = (ab_stats.loc["B", "conversion_rate"] / ab_stats.loc["A", "conversion_rate"] - 1) * 100\nprint(f"实验组提升：{lift:.1f}%")\n\nif p_value < 0.05 and lift > 0:\n    print("✓ 结果显著，建议上线B版本！")\nelse:\n    print("✗ 建议继续测试或重新设计方案")',
            },
          ],
        },
      ],
      practiceTitle: '实战练习：A/B测试分析',
      practiceDesc: '对A/B测试数据进行完整的统计分析',
      initialCode: '# A/B测试分析练习\nimport pandas as pd\nimport numpy as np\nfrom scipy import stats\nfrom statsmodels.stats.proportion import proportion_confint\n\n# 1. 加载数据\ndf = pd.read_csv("datasets/ab_test_data.csv")\nprint("A/B测试数据加载成功！")\nprint(df.head())\n\n# 2. 分组统计\nab_stats = df.groupby("group").agg(\n    users=("user_id", "count"),\n    conversions=("converted", "sum"),\n    conversion_rate=("converted", "mean")\n)\nprint("\\n分组统计：")\nprint(ab_stats.round(4))',
    },
    '07': {
      title: '销量时间序列分析',
      difficulty: '中级',
      duration: '约 50 分钟',
      sectionGroups: [
        {
          title: '时间序列基础',
          sections: [
            {
              title: '什么是时间序列？',
              content: '按时间顺序排列的数据点序列，常见的有日销量、月活跃用户、股价等。',
              tips: ['时间序列四大成分：趋势、季节、周期、随机波动。'],
              warnings: ['不要忽略日期格式，要先转为datetime类型。'],
              exampleCode: '# 时间序列数据加载\nimport pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("datasets/daily_sales.csv")\nprint("原始数据：")\nprint(df.head())\n\n# 转换日期\nprint("\\n日期转换中...")\ndf["date"] = pd.to_datetime(df["date"])\ndf = df.set_index("date").sort_index()\nprint(df.head())',
            },
            {
              title: '日期处理技巧',
              content: '提取年、季、月、日、周几等特征，方便后续分析。',
              tips: ['dt 访问器是处理时间的利器。'],
              warnings: [],
              exampleCode: '# 日期特征提取\ndf["year"] = df.index.year\ndf["month"] = df.index.month\ndf["dayofweek"] = df.index.dayofweek  # 0=周一\ndf["quarter"] = df.index.quarter\n\nprint("添加日期特征后：")\nprint(df[["sales", "year", "month", "dayofweek"]].head())',
            },
          ],
        },
        {
          title: '探索性分析',
          sections: [
            {
              title: '时间序列可视化',
              content: '先画出整体趋势图，再按周期分解观察。',
              tips: ['用 matplotlib 或 seaborn 画图。'],
              warnings: [],
              exampleCode: '# 时间序列图\nimport matplotlib.pyplot as plt\n\nplt.figure(figsize=(14, 6))\nplt.plot(df.index, df["sales"], linewidth=1)\nplt.title("日销量趋势")\nplt.xlabel("日期")\nplt.ylabel("销量")\nplt.grid(True, alpha=0.3)\nplt.show()',
            },
            {
              title: '滚动统计',
              content: '计算移动平均、滚动标准差，观察数据的平滑趋势和波动变化。',
              tips: ['窗口大小根据业务周期选择（7天/30天等）。'],
              warnings: [],
              exampleCode: '# 滚动统计\nwindow = 7\ndf["ma7"] = df["sales"].rolling(window).mean()\ndf["std7"] = df["sales"].rolling(window).std()\n\nplt.figure(figsize=(14, 6))\nplt.plot(df.index, df["sales"], alpha=0.4, label="原始销量")\nplt.plot(df.index, df["ma7"], linewidth=2, label="7日移动平均")\nplt.fill_between(df.index, df["ma7"]-df["std7"], df["ma7"]+df["std7"], alpha=0.2, label="±1标准差")\nplt.legend()\nplt.title("销量与滚动平均")\nplt.show()',
            },
            {
              title: '周期性分析',
              content: '分析周几效应、月度效应等周期性规律。',
              tips: ['用 groupby 按周几/月份聚合。'],
              warnings: [],
              exampleCode: '# 周几效应\nday_stats = df.groupby("dayofweek")["sales"].mean()\nday_names = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]\n\nplt.figure(figsize=(10, 5))\nplt.bar(day_names, day_stats.values)\nplt.title("周几平均销量")\nplt.ylabel("平均销量")\nplt.show()',
            },
          ],
        },
        {
          title: '同比环比',
          sections: [
            {
              title: '计算同比环比',
              content: '同比：与去年同期比；环比：与上月/上周比。',
              tips: ['shift() 函数可以帮助我们取前几期数据。'],
              warnings: [],
              exampleCode: '# 计算变化率\n# 日环比\ndf["sales_dod"] = df["sales"].pct_change(1) * 100\n\n# 假设是月度数据，计算月同比\n# df["sales_yoy"] = df["sales"].pct_change(12) * 100\n\nprint("变化率示例：")\nprint(df[["sales", "sales_dod"]].tail(10))',
            },
            {
              title: '异常检测',
              content: '基于滚动统计，找出销量突增或突降的异常日期。',
              tips: ['结合业务原因分析异常，不要直接删除。'],
              warnings: [],
              exampleCode: '# 异常检测（简化版）\nmean_sales = df["ma7"].dropna()\nstd_sales = df["std7"].dropna()\n\ndf["is_anomaly"] = (df["sales"] > df["ma7"] + 2*df["std7"]) | \\\n                  (df["sales"] < df["ma7"] - 2*df["std7"])\n\nprint(f"发现 {df["is_anomaly"].sum()} 个异常点")',
            },
          ],
        },
      ],
      practiceTitle: '实战练习：销量时间序列分析',
      practiceDesc: '分析日销量数据的趋势、周期和异常',
      initialCode: '# 时间序列分析练习\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# 1. 加载数据\ndf = pd.read_csv("datasets/daily_sales.csv")\ndf["date"] = pd.to_datetime(df["date"])\ndf = df.set_index("date").sort_index()\nprint("销量数据加载成功！")\nprint(df.head())\n\n# 2. 基本可视化\nplt.figure(figsize=(14, 5))\nplt.plot(df.index, df["sales"], linewidth=1)\nplt.title("日销量趋势")\nplt.show()',
    },
    '08': {
      title: '数据分析特征工程',
      difficulty: '高级',
      duration: '约 70 分钟',
      sectionGroups: [
        {
          title: '特征工程基础',
          sections: [
            {
              title: '什么是特征工程？',
              content: '特征工程是从原始数据中提取、构造、筛选出对建模有用的特征的过程。数据和特征决定了机器学习的上限，模型只是逼近这个上限。',
              tips: ['好的特征应具有：预测能力、区分度、稳定性、业务解释性。'],
              warnings: ['不要盲目构造大量特征，避免维度灾难。'],
              exampleCode: '# 数据加载\nimport pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("datasets/features_data.csv")\nprint("原始数据：")\nprint(df.head())\nprint("\\n数据形状：", df.shape)',
            },
            {
              title: '特征类型',
              content: '数值特征、类别特征、时间特征、文本特征等，不同类型处理方式不同。',
              tips: ['先把所有特征分类，再针对性处理。'],
              warnings: [],
              exampleCode: '# 特征分类\nnumerical_cols = ["age", "income", "spending_score"]\ncategorical_cols = ["gender", "city", "membership"]\ndate_cols = ["registration_date"]\n\nprint("数值特征：", numerical_cols)\nprint("类别特征：", categorical_cols)',
            },
          ],
        },
        {
          title: '特征构造',
          sections: [
            {
              title: '数值特征处理',
              content: '分箱、对数变换、标准化、归一化、交互特征等。',
              tips: ['分箱可以捕捉非线性关系。'],
              warnings: [],
              exampleCode: '# 数值特征处理\n# 分箱\ndf["age_bin"] = pd.cut(df["age"], bins=[0, 20, 30, 40, 50, 100], labels=["青少年", "青年", "中年", "中老年", "老年"])\n\n# 对数变换（处理右偏分布）\ndf["income_log"] = np.log1p(df["income"])\n\nprint("数值特征处理后：")\nprint(df[["age", "age_bin", "income", "income_log"]].head())',
            },
            {
              title: '类别特征编码',
              content: 'One-Hot编码、Label编码、目标编码等。',
              tips: ['类别多的用目标编码，类别少的用One-Hot。'],
              warnings: [],
              exampleCode: '# One-Hot编码\ndf_encoded = pd.get_dummies(df, columns=["gender", "city"], drop_first=True)\nprint("编码后形状：", df_encoded.shape)\nprint("新增列：", [col for col in df_encoded.columns if col not in df.columns])',
            },
            {
              title: '时间特征提取',
              content: '从时间戳中提取各种特征。',
              tips: ['除了年月日，还可以提取节假日、工作日、距离事件的天数等。'],
              warnings: [],
              exampleCode: '# 时间特征提取\nif "registration_date" in df.columns:\n    df["reg_date"] = pd.to_datetime(df["registration_date"])\n    df["reg_year"] = df["reg_date"].dt.year\n    df["reg_month"] = df["reg_date"].dt.month\n    df["reg_days"] = (pd.to_datetime("today") - df["reg_date"]).dt.days\n    print("时间特征提取完成")',
            },
            {
              title: '聚合特征',
              content: '按某些维度分组，统计聚合特征，如用户历史平均消费。',
              tips: ['可以统计历史N天/月的滚动特征。'],
              warnings: [],
              exampleCode: '# 聚合特征示例（假设数据格式合适）\n# user_level_agg = df.groupby("user_level").agg(...)  # 类似之前的例子',
            },
          ],
        },
        {
          title: '特征选择',
          sections: [
            {
              title: '过滤法',
              content: '基于统计指标选择特征，如相关性、方差阈值等。',
              tips: ['先删方差为0的特征，再看相关性。'],
              warnings: [],
              exampleCode: '# 相关性分析（数值特征）\ncorr_matrix = df[numerical_cols].corr()\nprint("相关系数矩阵：")\nprint(corr_matrix.round(3))\n\n# 找出高相关特征对\nthreshold = 0.7\nhigh_corr_pairs = []\nfor i in range(len(numerical_cols)):\n    for j in range(i+1, len(numerical_cols)):\n        if abs(corr_matrix.iloc[i,j]) > threshold:\n            high_corr_pairs.append((numerical_cols[i], numerical_cols[j], corr_matrix.iloc[i,j]))\n\nprint(f"\\n高相关特征对({threshold}阈值)：", high_corr_pairs)',
            },
            {
              title: '特征缩放',
              content: 'StandardScaler、MinMaxScaler、RobustScaler 等。',
              tips: ['要在训练集上fit，再同时transform训练集和测试集。'],
              warnings: [],
              exampleCode: '# 标准化示例\nfrom sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\ndf_scaled = df.copy()\ndf_scaled[numerical_cols] = scaler.fit_transform(df[numerical_cols])\nprint("标准化完成")',
            },
          ],
        },
      ],
      practiceTitle: '实战练习：特征工程实战',
      practiceDesc: '对原始数据进行完整的特征工程处理',
      initialCode: '# 特征工程练习\nimport pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\n\n# 1. 加载数据\ndf = pd.read_csv("datasets/features_data.csv")\nprint("原始数据：")\nprint(df.head())\n\n# 2. 基本检查\nprint("\\n数据类型：")\nprint(df.info())\nprint("\\n缺失值：")\nprint(df.isna().sum())',
    },
    '09': {
      title: '全域数据异常值检测',
      difficulty: '高级',
      duration: '约 65 分钟',
      sectionGroups: [
        {
          title: '异常检测基础',
          sections: [
            {
              title: '什么是异常值？',
              content: '异常值是偏离正常模式的数据点，可能是数据错误，也可能是真实的特殊情况。',
              tips: ['没有绝对的"正确"方法，要结合业务判断。'],
              warnings: ['不要盲目删除异常值，先分析原因。'],
              exampleCode: '# 数据加载\nimport pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("datasets/anomaly_data.csv")\nprint("数据：")\nprint(df.head())',
            },
            {
              title: '可视化发现异常',
              content: '箱线图、散点图、直方图等可视化是发现异常的第一步。',
              tips: ['先画图再用算法。'],
              warnings: [],
              exampleCode: '# 箱线图示例\nimport matplotlib.pyplot as plt\n\nplt.figure(figsize=(12, 5))\nplt.boxplot(df["amount"].dropna(), vert=False)\nplt.title("金额箱线图")\nplt.show()\n\n# 看一下描述性统计\nprint("描述统计：")\nprint(df["amount"].describe())',
            },
          ],
        },
        {
          title: '统计方法',
          sections: [
            {
              title: '3σ原则',
              content: '假设数据服从正态分布，超出μ±3σ的视为异常。',
              tips: ['适合近似正态分布的数据。'],
              warnings: ['不适合偏态分布数据。'],
              exampleCode: '# 3σ原则\nmean = df["amount"].mean()\nstd = df["amount"].std()\n\nlower = mean - 3 * std\nupper = mean + 3 * std\n\ndf["anomaly_3sigma"] = (df["amount"] < lower) | (df["amount"] > upper)\nprint(f"3σ异常数：{df["anomaly_3sigma"].sum()}")\nprint(f"范围：[{lower:.2f}, {upper:.2f}]")',
            },
            {
              title: 'IQR方法',
              content: '四分位距法，超出Q1-1.5*IQR或Q3+1.5*IQR为异常。',
              tips: ['对偏态分布比3σ更稳健。'],
              warnings: [],
              exampleCode: '# IQR方法\nQ1 = df["amount"].quantile(0.25)\nQ3 = df["amount"].quantile(0.75)\nIQR = Q3 - Q1\n\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\n\ndf["anomaly_iqr"] = (df["amount"] < lower) | (df["amount"] > upper)\nprint(f"IQR异常数：{df["anomaly_iqr"].sum()}")\nprint(f"范围：[{lower:.2f}, {upper:.2f}]")',
            },
          ],
        },
        {
          title: '高级方法',
          sections: [
            {
              title: 'Z-Score',
              content: '计算每个点的标准化分数，绝对值大于阈值为异常。',
              tips: ['可以使用modified Z-score，对异常值更稳健。'],
              warnings: [],
              exampleCode: '# Z-score\nfrom scipy import stats\n\nz_scores = np.abs(stats.zscore(df["amount"].dropna()))\nthreshold = 3\nprint(f"Z-score > {threshold} 的样本数：{(z_scores > threshold).sum()}")',
            },
            {
              title: '业务规则',
              content: '结合业务知识制定规则，如订单金额不能为负、日期不能是未来等。',
              tips: ['业务规则往往比算法更可靠、更易解释。'],
              warnings: [],
              exampleCode: '# 业务规则示例\n# 假设业务规则：金额 > 100000 或 < 0 异常\n# df["anomaly_business"] = (df["amount"] > 100000) | (df["amount"] < 0)\nprint("业务规则检测需要根据具体业务定义")',
            },
          ],
        },
        {
          title: '帕累托分析',
          sections: [
            {
              title: '20/80分析',
              content: '找出贡献80%销售额的前20%商品/客户。',
              tips: ['不仅是为了找异常，更是业务洞察。'],
              warnings: [],
              exampleCode: '# 帕累托分析（简化版）\nsorted_df = df.sort_values("amount", ascending=False)\nsorted_df["cum_pct"] = sorted_df["amount"].cumsum() / sorted_df["amount"].sum()\n\np80 = sorted_df[sorted_df["cum_pct"] <= 0.8]\nprint(f"前 {len(p80)/len(df)*100:.1f}% 的记录贡献了80%的金额")',
            },
          ],
        },
      ],
      practiceTitle: '实战练习：异常值检测',
      practiceDesc: '综合使用多种方法检测数据异常值',
      initialCode: '# 异常检测练习\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy import stats\n\n# 1. 加载数据\ndf = pd.read_csv("datasets/anomaly_data.csv")\nprint("数据加载成功！")\nprint(df.head())\n\n# 2. 描述性统计\nprint("\\n描述统计：")\nprint(df["amount"].describe())',
    },
    '10': {
      title: '多源数据集融合整合',
      difficulty: '高级',
      duration: '约 75 分钟',
      sectionGroups: [
        {
          title: '数据合并基础',
          sections: [
            {
              title: '为什么要数据融合？',
              content: '业务数据往往分散在多个表中（用户表、订单表、商品表等），需要关联起来才能做完整分析。',
              tips: ['理解数据模型、主键外键关系是关键。'],
              warnings: ['关联时注意数据膨胀（一对多关系）。'],
              exampleCode: '# 加载多表数据\nimport pandas as pd\nimport numpy as np\n\nusers = pd.read_csv("datasets/users.csv")\norders = pd.read_csv("datasets/orders.csv")\nproducts = pd.read_csv("datasets/products.csv")\n\nprint(f"用户表：{users.shape}")\nprint(f"订单表：{orders.shape}")\nprint(f"商品表：{products.shape}")',
            },
            {
              title: 'merge 基本用法',
              content: 'pd.merge() 类似于 SQL 的 join，可以指定连接键、连接方式。',
              tips: ['how参数：inner(内连接)、left(左连接)、right(右连接)、outer(全连接)。'],
              warnings: [],
              exampleCode: '# 订单与用户合并\norders_with_users = pd.merge(\n    orders,\n    users,\n    on="user_id",\n    how="left"\n)\nprint(f"合并后：{orders_with_users.shape}")\nprint(orders_with_users.head(2))',
            },
          ],
        },
        {
          title: '高级合并技巧',
          sections: [
            {
              title: '多键合并',
              content: '用多个列作为连接键。',
              tips: ['确认两表中连接键的数据类型一致。'],
              warnings: [],
              exampleCode: '# 多键合并示例\n# df_merged = pd.merge(df1, df2, on=["key1", "key2"], how="inner")\nprint("多键合并语法如上")',
            },
            {
              title: 'concat 与 append',
              content: '纵向拼接多个结构相同的表。',
              tips: ['append是concat的特例，已逐渐推荐直接用concat。'],
              warnings: [],
              exampleCode: '# 数据追加示例\n# df_total = pd.concat([df1, df2, df3], ignore_index=True)\nprint("数据追加用 concat")',
            },
            {
              title: '处理冲突字段',
              content: '两表中有同名字段时，merge会自动加后缀区分。',
              tips: ['用 suffixes 参数自定义后缀。'],
              warnings: [],
              exampleCode: '# 冲突字段处理\ndf_merged = pd.merge(orders, users, on="user_id", suffixes=("_order", "_user"))\nprint("同名字段会自动加后缀，也可自定义")',
            },
          ],
        },
        {
          title: '数据质量检查',
          sections: [
            {
              title: '连接后的数据校验',
              content: '检查关联率、缺失值、数据一致性。',
              tips: ['关联后一定要做检查，不要假设100%关联上。'],
              warnings: [],
              exampleCode: '# 数据检查\nprint(f"订单用户关联率：{orders_with_users["user_name"].notna().mean():.1%}")\nprint("\\n缺失值统计：")\nprint(orders_with_users.isna().sum())',
            },
            {
              title: '宽表 vs 长表',
              content: '根据需求选择合适的数据格式，melt() 和 pivot() 可以互相转换。',
              tips: ['分析一般用长表方便，展示可能用宽表。'],
              warnings: [],
              exampleCode: '# 长宽转换示例\n# 宽到长：melt\n# df_long = df_wide.melt(id_vars="user_id", var_name="month", value_name="value")\n\n# 长到宽：pivot 或 unstack\n# df_wide = df_long.pivot(index="user_id", columns="month", values="value")\nprint("数据格式转换根据需求选择")',
            },
          ],
        },
        {
          title: '综合案例',
          sections: [
            {
              title: '构建分析宽表',
              content: '整合多表信息，构建一张包含用户、订单、商品信息的大宽表。',
              tips: ['先理清关联关系，画一下ER图。'],
              warnings: [],
              exampleCode: '# 综合融合示例\n# 1. 订单 + 用户\n# 2. + 商品\n# 3. 聚合特征\n# 4. 最终分析表\nprint("综合融合需要一步步构建，每步都做检查")',
            },
          ],
        },
      ],
      practiceTitle: '实战练习：多源数据融合',
      practiceDesc: '将多表数据整合成一张分析宽表',
      initialCode: '# 数据融合练习\nimport pandas as pd\nimport numpy as np\n\n# 1. 加载多表\nusers = pd.read_csv("datasets/users.csv")\norders = pd.read_csv("datasets/orders.csv")\nproducts = pd.read_csv("datasets/products.csv")\n\nprint("表加载完成！")\nprint(f"用户：{users.shape}, 订单：{orders.shape}, 商品：{products.shape}")\n\n# 2. 查看各表内容\nprint("\\n用户表示例：")\nprint(users.head(2))',
    },
  };

  const project = projectData[id as keyof typeof projectData];

  useEffect(() => {
    if (project) {
      setCode(project.initialCode);
      setActiveSection(0);
      setShowAnswer(false);
      setSectionsCollapsed(false);
      
      const initialExpanded: Record<string, boolean> = {};
      project.sectionGroups?.forEach((group: any, idx: number) => {
        initialExpanded[group.title] = idx === 0;
      });
      setExpandedGroups(initialExpanded);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">项目不存在</h1>
          <Link to="/pandas" className="text-blue-400 hover:text-blue-300">返回项目列表</Link>
        </div>
      </div>
    );
  }

  const allSections = project.sectionGroups?.flatMap((group: any) => group.sections) || [];
  const currentSection = allSections[activeSection];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSection?.exampleCode || code);
  };

  const handleCopyMainCode = () => {
    navigator.clipboard.writeText(code);
  };

  const handleClearCode = () => {
    setCode('');
  };

  const handleResetCode = () => {
    setCode(project.initialCode);
    setOutput([]);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const outputs: string[] = [];
      outputs.push('代码执行中...');
      outputs.push('');
      outputs.push('模拟运行结果：');
      outputs.push('执行完成！');
      setOutput(outputs);
      setIsRunning(false);
    }, 1000);
  };

  const handleUseExampleCode = () => {
    if (currentSection?.exampleCode) {
      setCode(currentSection.exampleCode);
    }
  };

  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupTitle]: !prev[groupTitle],
    }));
  };

  let globalSectionIndex = 0;

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-12 px-4">
      <div className="max-w-[1800px] mx-auto">
        <Link 
          to="/pandas" 
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          返回项目列表
        </Link>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                  {project.difficulty}
                </span>
                <span>⏱ {project.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 relative">
          {sectionsCollapsed && (
            <button
              onClick={() => setSectionsCollapsed(false)}
              className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white px-2 py-8 rounded-r-lg shadow-lg transition-all"
              style={{ top: '50%' }}
            >
              <PanelLeftOpen className="w-5 h-5" />
            </button>
          )}

          <div className={`${sectionsCollapsed ? 'w-0 overflow-hidden' : 'w-80'} transition-all duration-300 flex-shrink-0`}>
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 sticky top-24 max-h-[calc(100vh-12rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  学习章节
                </h2>
                <button
                  onClick={() => setSectionsCollapsed(true)}
                  className="p-1 hover:bg-slate-700 rounded transition-colors"
                  title="收起目录"
                >
                  <PanelLeftClose className="w-4 h-4 text-slate-400" />
                </button>
              </div>
              
              <div className="space-y-2">
                {project.sectionGroups?.map((group: any, groupIdx: number) => (
                  <div key={groupIdx}>
                    <button
                      onClick={() => toggleGroup(group.title)}
                      className="w-full flex items-center justify-between p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors text-left"
                    >
                      <span className="text-sm font-semibold text-slate-200">{group.title}</span>
                      {expandedGroups[group.title] ? (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    
                    {expandedGroups[group.title] && (
                      <div className="mt-1 ml-2 space-y-1">
                        {group.sections.map((section: any, sectionIdx: number) => {
                          const sectionIndex = globalSectionIndex++;
                          return (
                            <button
                              key={sectionIdx}
                              onClick={() => setActiveSection(sectionIndex)}
                              className={`w-full text-left p-2 rounded-lg transition-all ${
                                activeSection === sectionIndex
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-700/30 text-slate-300 hover:bg-slate-700/50'
                              }`}
                            >
                              <div className="flex items-start gap-2">
                                <span className="text-xs font-bold opacity-60 mt-0.5">
                                  {String(sectionIndex + 1).padStart(2, '0')}
                                </span>
                                <span className="text-xs">{section.title}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700">
                <h3 className="text-base font-bold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  {project.practiceTitle}
                </h3>
                <p className="text-slate-400 text-sm">{project.practiceDesc}</p>
                <Link
                  to={`/practice/${id}/0`}
                  className="block w-full mt-3 py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors text-center"
                >
                  开始练习
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {currentSection && (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Book className="w-6 h-6 text-blue-400" />
                  {currentSection.title}
                </h2>
                
                <div className="bg-slate-700/50 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <p className="text-slate-200 leading-relaxed">{currentSection.content}</p>
                </div>

                {currentSection.tips && currentSection.tips.length > 0 && (
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      学习提示
                    </h4>
                    <ul className="space-y-1">
                      {currentSection.tips.map((tip: string, i: number) => (
                        <li key={i} className="text-blue-200 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentSection.warnings && currentSection.warnings.length > 0 && (
                  <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      注意事项
                    </h4>
                    <ul className="space-y-1">
                      {currentSection.warnings.map((warning: string, i: number) => (
                        <li key={i} className="text-red-200 text-sm flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          {warning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentSection.exampleCode && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-300 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        示例代码
                      </h4>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(currentSection.exampleCode);
                          }}
                          className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs flex items-center gap-1 transition-colors"
                        >
                          <Copy className="w-3 h-3" />
                          复制
                        </button>
                        <button
                          onClick={handleUseExampleCode}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs flex items-center gap-1 transition-colors"
                        >
                          使用
                        </button>
                      </div>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4 overflow-y-auto" style={{ maxHeight: '300px' }}>
                      <pre className="text-sm font-mono text-green-400">
                        <code>{currentSection.exampleCode}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="w-1/3 flex-shrink-0">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 sticky top-24">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-slate-400 text-sm ml-2">📄 Python - 可编辑</span>
                </div>
                <span className="text-slate-500 text-xs">📏 20px</span>
              </div>

              <div className="bg-slate-900 rounded-lg min-h-[250px] relative">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-[250px] bg-transparent text-green-400 font-mono text-sm p-4 resize-none focus:outline-none"
                  spellCheck={false}
                  placeholder="# 在此编写你的代码..."
                />
              </div>

              <div className="flex flex-wrap items-center justify-between mt-3 gap-2">
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={handleCopyMainCode}
                    className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-xs flex items-center gap-1 transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    复制
                  </button>
                  <button
                    onClick={handleClearCode}
                    className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-xs flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                    清空
                  </button>
                  <button
                    onClick={handleResetCode}
                    className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-xs flex items-center gap-1 transition-colors"
                  >
                    重置
                  </button>
                  <button
                    onClick={handleShowAnswer}
                    className={`px-3 py-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                      showAnswer 
                        ? 'bg-green-600/20 text-green-300 border border-green-500/30' 
                        : 'bg-yellow-600/20 text-yellow-300 border border-yellow-500/30'
                    }`}
                  >
                    {showAnswer ? '收起答案' : '答案'}
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg text-sm flex items-center gap-2 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    {isRunning ? '运行中...' : '运行'}
                  </button>
                  <button className="px-4 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-300 border border-green-500/30 rounded-lg text-sm flex items-center gap-2 transition-colors">
                    <FileText className="w-4 h-4" />
                    测试
                  </button>
                </div>
              </div>

              {showAnswer && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-yellow-300 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      参考答案
                    </h4>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4 overflow-y-auto" style={{ maxHeight: '200px' }}>
                    <pre className="text-sm font-mono text-yellow-300">
                      <code>{project.initialCode}</code>
                    </pre>
                  </div>
                </div>
              )}

              {output.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <span className="text-green-400">▶</span>
                    运行结果
                  </h4>
                  <div className="bg-slate-900 rounded-lg p-4 overflow-y-auto" style={{ maxHeight: '150px' }}>
                    <pre className="text-sm font-mono">
                      {output.map((line, idx) => (
                        <div key={idx} className={line.startsWith('===') ? 'text-blue-400 mt-2' : 'text-slate-300'}>
                          {line || '\u00A0'}
                        </div>
                      ))}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}