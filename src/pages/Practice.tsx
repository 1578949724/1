import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle, XCircle, AlertCircle, Play, Trash2, FileText, Clock, Circle, Check } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  commonMistake: string;
}

interface JudgmentQuestion {
  id: number;
  question: string;
  correctAnswer: boolean;
  explanation: string;
  commonMistake: string;
}

interface CodingChallenge {
  id: number;
  description: string;
  initialCode: string;
  expectedOutput: string;
  correctAnswer: string;
  commonMistake: string;
}

interface PracticeData {
  title: string;
  quizQuestions: QuizQuestion[];
  judgmentQuestions: JudgmentQuestion[];
  codingChallenges: CodingChallenge[];
}

const practiceData: Record<string, PracticeData> = {
  '01-0': {
    title: '数据清洗实战 - 综合练习',
    quizQuestions: [
      {
        id: 1,
        question: '数据清洗的第一步应该是什么？',
        options: ['直接开始修改数据', '了解数据的基本信息（行数、列数、数据类型）', '删除所有空值', '保存数据为Excel'],
        correctAnswer: 1,
        explanation: '数据清洗第一步应该是了解数据的基本信息，使用 df.info() 和 df.describe() 来查看数据的结构、类型和统计情况。',
        commonMistake: '很多初学者直接开始修改数据，没有先了解数据的整体情况，容易导致不可逆的错误。'
      },
      {
        id: 2,
        question: '以下哪个命令可以查看数据的基本信息？',
        options: ['df.show()', 'df.head()', 'df.info()', 'df.describe()'],
        correctAnswer: 2,
        explanation: 'df.info() 显示数据的行数、列数、每列的数据类型和非空值数量，是了解数据结构的关键命令。',
        commonMistake: '混淆 df.info() 和 df.describe()。df.describe() 主要显示数值列的统计信息。'
      },
      {
        id: 3,
        question: '在数据清洗过程中，原始数据文件应该？',
        options: ['直接修改', '在内存中操作，保持原始文件只读', '删除后重建', '重命名即可'],
        correctAnswer: 1,
        explanation: '原始数据文件应该保持只读，所有操作都在内存中进行，这样可以保证数据的可追溯性，出问题时可以恢复。',
        commonMistake: '直接修改原始数据文件，一旦出错无法恢复。'
      },
      {
        id: 4,
        question: 'pandas中读取CSV文件的命令是？',
        options: ['pd.read_excel()', 'pd.read_csv()', 'pd.load_csv()', 'pd.open_csv()'],
        correctAnswer: 1,
        explanation: 'pandas中使用 pd.read_csv() 来读取CSV文件。',
        commonMistake: '混淆 read_excel 和 read_csv，或者错误地使用 load_csv。'
      },
      {
        id: 5,
        question: 'df.describe() 和 df.info() 的主要区别是？',
        options: ['两者功能完全相同', 'describe显示数值统计信息，info显示数据类型和缺失值', 'info显示数值统计信息，describe显示数据类型', 'describe只能用于字符串列'],
        correctAnswer: 1,
        explanation: 'df.describe() 主要显示数值列的统计描述，df.info() 显示数据类型、内存占用和缺失值情况。',
        commonMistake: '不清楚两者各有分工，需要结合使用才能全面了解数据。'
      },
      {
        id: 6,
        question: '处理异常值时，以下哪种做法是正确的？',
        options: ['直接删除所有异常值', '根据业务场景判断是真实异常还是数据错误，再决定处理方式', '异常值不影响分析结果，可以忽略', '所有异常值都替换为均值'],
        correctAnswer: 1,
        explanation: '处理异常值需要结合业务场景判断，有些异常值可能是真实的极端情况，不应直接删除。',
        commonMistake: '一刀切地删除或替换异常值，忽略业务逻辑。'
      },
      {
        id: 7,
        question: 'fillna() 和 dropna() 的区别是？',
        options: ['两者功能相同，只是写法不同', 'fillna用于填充缺失值，dropna用于删除缺失值', 'fillna用于删除缺失值，dropna用于填充缺失值', '两者都用于删除缺失值'],
        correctAnswer: 1,
        explanation: 'fillna() 填充缺失值，dropna() 删除包含缺失值的行或列。',
        commonMistake: '混淆两个函数的功能。'
      },
      {
        id: 8,
        question: 'drop_duplicates() 默认保留重复行的哪一行？',
        options: ['最后一行', '第一行', '随机保留一行', '全部删除'],
        correctAnswer: 1,
        explanation: 'drop_duplicates() 默认保留重复行的第一行（keep="first"），可以通过 keep="last" 改为保留最后一行。',
        commonMistake: '记反了默认行为。'
      },
      {
        id: 9,
        question: '使用正则表达式清洗金额时，re.sub(r"[^\\d.-]", "", s) 可以保留哪些字符？',
        options: ['只保留数字', '保留数字、点号和减号', '保留所有字符', '只保留字母'],
        correctAnswer: 1,
        explanation: '正则表达式 [^\\d.-] 表示匹配除数字、点号和减号外的所有字符，替换为空字符串，从而保留数字、小数点和负号。',
        commonMistake: '不清楚正则表达式中哪些字符被保留。'
      },
      {
        id: 10,
        question: '数据类型category相比object类型的优势是？',
        options: ['处理速度更快', '节省内存开销', '支持更多操作', '两者完全相同'],
        correctAnswer: 1,
        explanation: 'category类型将重复的字符串值存储为整数编码，比object类型更节省内存。',
        commonMistake: '不清楚category类型的内存优化优势。'
      }
    ],
    judgmentQuestions: [
      {
        id: 1,
        question: '数据清洗应该先清洗再诊断，以提高效率。',
        correctAnswer: false,
        explanation: '正确的流程是先诊断再清洗。不了解数据问题就动手，可能导致错误的数据转换或丢失重要信息。',
        commonMistake: '急于动手，忽视诊断环节。'
      },
      {
        id: 2,
        question: '原始数据文件可以直接在代码中进行修改，以便下次使用时已经是清洗后的状态。',
        correctAnswer: false,
        explanation: '原始数据应该始终保持只读，所有操作在内存中进行，以便出问题时可以恢复。',
        commonMistake: '为了方便直接修改原始文件。'
      },
      {
        id: 3,
        question: 'IQR方法检测异常值时，异常值范围是 Q1-1.5*IQR 到 Q3+1.5*IQR。',
        correctAnswer: true,
        explanation: '这是统计学中经典的 Tukey 方法，1.5*IQR 是标准系数。',
        commonMistake: '记错系数或记反范围。'
      },
      {
        id: 4,
        question: '将字符串类型的数值列转换为数值时，应该使用 astype(float)。',
        correctAnswer: false,
        explanation: '对于可能包含非数值内容的字符串，应该使用 pd.to_numeric(errors="coerce")，它会将无法转换的值设为NaN。',
        commonMistake: '直接使用 astype 导致转换错误。'
      },
      {
        id: 5,
        question: '数据清洗完成后，验证工作可有可无。',
        correctAnswer: false,
        explanation: '数据清洗后必须进行验证，检查是否还有缺失值、数据类型是否正确、异常值是否处理妥当等。',
        commonMistake: '认为清洗完就结束了。'
      },
      {
        id: 6,
        question: 'pd.to_datetime() 可以自动识别大多数常见的日期格式。',
        correctAnswer: true,
        explanation: 'pd.to_datetime() 有良好的格式推断能力，可以处理如 "2024-01-15"、"01/15/2024"、"Jan 15, 2024" 等多种格式。',
        commonMistake: '以为每种日期格式都需要手动指定format参数。'
      },
      {
        id: 7,
        question: '创建衍生列会增加数据冗余，应该尽量避免。',
        correctAnswer: false,
        explanation: '衍生列是从已有列派生的有业务意义的新特征，是特征工程的重要部分，不等于数据冗余。',
        commonMistake: '混淆数据冗余和有用特征的区别。'
      },
      {
        id: 8,
        question: '数值异常值检测中，标准差法比IQR方法对异常值更敏感。',
        correctAnswer: true,
        explanation: '标准差法基于均值计算，受异常值影响大，比IQR方法更敏感。',
        commonMistake: '不清楚两种方法的敏感性差异。'
      },
      {
        id: 9,
        question: '可以使用 df[df["amount"].isna()] = 0 的方式将所有缺失值填充为0。',
        correctAnswer: false,
        explanation: '这种方式会设置布尔条件而非实际填充，应该使用 df.loc 索引或 df.fillna(0)。',
        commonMistake: '使用了错误的填充语法。'
      },
      {
        id: 10,
        question: '清洗后的数据保存时，选择合适的文件格式也很重要，如CSV适合通用场景。',
        correctAnswer: true,
        explanation: '不同文件格式有不同的适用场景，CSV通用性好但不支持多工作表，Parquet适合大数据分析。',
        commonMistake: '忽视文件格式选择的实际影响。'
      }
    ],
    codingChallenges: [
      {
        id: 1,
        description: '【综合实战】请编写完整的数据清洗代码：读取 retail_orders.csv，处理金额格式（去除$符号和逗号转为浮点数），填充缺失的客户ID为"Guest"，统一日期格式为datetime类型，并检测金额异常值（使用IQR方法），最后统计清洗后的数据质量。',
        initialCode: 'import pandas as pd\nimport numpy as np\nimport re\n\n# 读取数据\ndf = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")\n\n# 请编写代码：\n# 1. 清洗金额格式（去除$和逗号，转为浮点数）\n# 2. 填充缺失客户ID为"Guest"\n# 3. 统一日期格式为datetime\n# 4. 使用IQR方法检测金额异常值\n# 5. 输出数据质量报告\n',
        expectedOutput: '金额清洗完成！\n客户ID缺失值已填充\n日期统一完成\n异常值检测结果：...\n数据质量报告：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\nimport re\n\n# 读取数据\ndf = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")\nprint(f"原始数据：{df.shape[0]}行，{df.shape[1]}列")\n\n# 1. 清洗金额格式\ndef clean_amount(val):\n    if pd.isna(val):\n        return np.nan\n    s = str(val)\n    s = re.sub(r"[^\\d.-]", "", s)\n    try:\n        return float(s)\n    except:\n        return np.nan\n\ndf["amount"] = df["amount"].apply(clean_amount)\nprint(f"金额清洗完成！缺失值：{df[\'amount\'].isna().sum()}")\n\n# 2. 填充缺失客户ID\nmissing_customer = df["customer_id"].isna().sum()\ndf["customer_id"] = df["customer_id"].fillna("Guest")\nprint(f"客户ID缺失值已填充（{missing_customer}条）")\n\n# 3. 统一日期格式\ndf["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")\nprint(f"日期统一完成！缺失值：{df[\'order_date\'].isna().sum()}")\n\n# 4. IQR异常值检测\nQ1 = df["amount"].quantile(0.25)\nQ3 = df["amount"].quantile(0.75)\nIQR = Q3 - Q1\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\noutliers = df[(df["amount"] < lower) | (df["amount"] > upper)]\nprint(f"异常值检测：正常范围[{lower:.2f}, {upper:.2f}]，发现{len(outliers)}条异常")\n\n# 5. 数据质量报告\nprint("\\n=== 数据质量报告 ===")\nprint(df.info())\nprint("\\n各列缺失值：")\nprint(df.isnull().sum())',
        commonMistake: '正则表达式写错、日期转换不考虑错误处理、异常值边界计算错误。'
      },
      {
        id: 2,
        description: '【综合实战】对清洗后的数据进行多维度分析：按仓库统计订单数、销售额、平均订单额，找出销售额最高和最低的仓库，计算各仓库销售额占比，并分析是否存在数据质量问题（如异常仓库）。',
        initialCode: 'import pandas as pd\nimport numpy as np\n\n# 假设df已经过基本清洗，有amount和warehouse列\n\n# 请编写代码：\n# 1. 按仓库分组统计（订单数、销售额、平均订单额）\n# 2. 找出销售额最高和最低的仓库\n# 3. 计算各仓库销售额占比\n# 4. 分析是否存在数据质量问题\n',
        expectedOutput: '各仓库统计：...\n最高/最低销售额仓库：...\n各仓库销售占比：...\n数据质量分析：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\n\n# 按仓库分组统计\nstats = df.groupby("warehouse").agg({\n    "order_id": "count",\n    "amount": ["sum", "mean"]\n})\nstats.columns = ["订单数", "销售额", "平均订单额"]\nprint("各仓库统计：")\nprint(stats)\n\n# 找出最高和最低销售额仓库\nmax_warehouse = stats["销售额"].idxmax()\nmin_warehouse = stats["销售额"].idxmin()\nprint(f"\\n最高销售额仓库：{max_warehouse}，销售额：{stats.loc[max_warehouse, \"销售额\"]:.2f}")\nprint(f"最低销售额仓库：{min_warehouse}，销售额：{stats.loc[min_warehouse, \"销售额\"]:.2f}")\n\n# 计算销售占比\ntotal_sales = stats["销售额"].sum()\nstats["销售占比"] = stats["销售额"] / total_sales * 100\nprint(f"\\n各仓库销售占比：")\nfor wh in stats.index:\n    print(f"  {wh}: {stats.loc[wh, \"销售占比\"]:.1f}%")\n\n# 数据质量分析\nprint("\\n=== 数据质量分析 ===")\nfor wh in stats.index:\n    avg = stats.loc[wh, "平均订单额"]\n    overall_avg = df["amount"].mean()\n    if avg > overall_avg * 3 or avg < overall_avg * 0.3:\n        print(f"  ⚠️ {wh}平均订单额异常：{avg:.2f}（整体均值：{overall_avg:.2f}）")',
        commonMistake: 'agg函数使用不当、销售占比计算错误、不会做数据质量分析。'
      }
    ]
  },
  '02-0': {
    title: '分组聚合分析 - 综合练习',
    quizQuestions: [
      {
        id: 1,
        question: 'pandas中分组聚合的三步流程是？',
        options: ['读取→分组→保存', '拆分→应用→合并', '筛选→计算→输出', '导入→处理→展示'],
        correctAnswer: 1,
        explanation: '分组聚合的核心理念是 Split-Apply-Combine，即拆分→应用→合并。',
        commonMistake: '不清楚分组聚合的标准流程。'
      },
      {
        id: 2,
        question: '按单列分组的正确语法是？',
        options: ['df.group("column")', 'df.groupby("column")', 'df.group_by("column")', 'df.groups("column")'],
        correctAnswer: 1,
        explanation: 'pandas中使用 df.groupby("列名") 来按某列分组。',
        commonMistake: '使用错误的函数名。'
      },
      {
        id: 3,
        question: '对分组后的多个列同时计算不同聚合应该用？',
        options: ['df.groupby("col").mean()', 'df.groupby("col").agg()', 'df.groupby("col").apply()', 'df.groupby("col").transform()'],
        correctAnswer: 1,
        explanation: 'agg() 函数可以同时对不同列应用不同的聚合函数。',
        commonMistake: '不知道 agg() 可以接受字典参数。'
      },
      {
        id: 4,
        question: 'pivot_table 和 crosstab 的主要区别是？',
        options: ['两者功能完全相同', 'pivot_table是值汇总，crosstab是频数统计', 'crosstab是值汇总，pivot_table是频数统计', '两者都用于频数统计'],
        correctAnswer: 1,
        explanation: 'pivot_table 用于对数值列进行汇总分析，crosstab 用于计算两个分类变量的频数交叉表。',
        commonMistake: '混淆两者的使用场景。'
      },
      {
        id: 5,
        question: '使用 agg({"col": ["sum", "mean"]}) 时，生成的结果列名格式是？',
        options: ['"col_sum", "col_mean"', '("col", "sum"), ("col", "mean")', '"sum", "mean"', '"col"'],
        correctAnswer: 1,
        explanation: '使用多参数 agg 时，结果是 MultiIndex 列名，格式为 (列名, 聚合函数名)。',
        commonMistake: '不习惯访问多层索引的列。'
      },
      {
        id: 6,
        question: 'groupby().filter() 和 groupby().transform() 的区别是？',
        options: ['两者功能相同', 'filter筛选组，transform返回与原数据相同长度', 'filter返回与原数据相同长度，transform筛选组', '两者都用于筛选列'],
        correctAnswer: 1,
        explanation: 'filter() 用于筛选满足条件的整个组，transform() 返回与原数据行数相同的结果。',
        commonMistake: '混淆filter和transform的作用对象。'
      },
      {
        id: 7,
        question: '多列分组时，结果的索引类型是？',
        options: ['单层索引', 'MultiIndex（多层索引）', '无索引', '整数索引'],
        correctAnswer: 1,
        explanation: '多列分组会产生MultiIndex。',
        commonMistake: '不习惯处理多层索引数据。'
      },
      {
        id: 8,
        question: 'crosstab 的 margins 参数用于？',
        options: ['设置边距颜色', '添加行列合计', '设置边距宽度', '合并单元格'],
        correctAnswer: 1,
        explanation: 'margins=True 会在结果中添加一行一列的合计。',
        commonMistake: '不清楚margins的作用。'
      },
      {
        id: 9,
        question: 'groupby().size() 和 groupby().count() 的区别是？',
        options: ['两者完全相同', 'size()包括NaN，count()不包括', 'size()不包括NaN，count()包括', '两者返回类型不同'],
        correctAnswer: 1,
        explanation: 'size() 统计每个组的总行数（包括NaN），count() 只统计非空值的数量。',
        commonMistake: '认为两者等价。'
      },
      {
        id: 10,
        question: '使用 sort_values() 后再 drop_duplicates() 可以控制保留哪条重复记录。',
        options: ['正确，可以控制', '错误，drop_duplicates不考虑排序', '两者功能完全相同', 'drop_duplicates会忽略排序'],
        correctAnswer: 0,
        explanation: '先排序使目标记录排在前面或后面，再用 drop_duplicates(keep="first" 或 "last") 控制保留。',
        commonMistake: '不清楚去重的顺序控制方法。'
      }
    ],
    judgmentQuestions: [
      {
        id: 1,
        question: 'groupby().size() 和 groupby().count() 的结果完全相同。',
        correctAnswer: false,
        explanation: 'size() 统计每个组的总行数（包括NaN），count() 只统计非空值的数量。',
        commonMistake: '认为两者等价。'
      },
      {
        id: 2,
        question: 'transform() 返回的结果与原DataFrame行数相同。',
        correctAnswer: true,
        explanation: 'transform() 对每组应用函数后返回与原数据相同长度的结果，常用于组内标准化等场景。',
        commonMistake: '混淆transform和agg的返回值形状。'
      },
      {
        id: 3,
        question: 'pivot_table 的 fill_value 参数用于填充缺失值，但不会影响值为0的单元格。',
        correctAnswer: true,
        explanation: 'fill_value 只填充因合并产生的NaN，值为0的单元格不会被填充。',
        commonMistake: '误以为 fill_value 会填充所有空值。'
      },
      {
        id: 4,
        question: 'groupby().agg({"amount": "sum"}) 可以对amount列同时求和与求均值。',
        correctAnswer: false,
        explanation: '一次只能指定一个聚合函数，如需多个需要用列表：{"amount": ["sum", "mean"]}。',
        commonMistake: 'agg的字典格式写错。'
      },
      {
        id: 5,
        question: 'crosstab 可以接受两个以上的列进行交叉分析。',
        correctAnswer: false,
        explanation: 'crosstab 接受两个 Series 或数组进行双向交叉，超过两个变量需用 pivot_table。',
        commonMistake: '尝试用crosstab做多维交叉表。'
      },
      {
        id: 6,
        question: 'groupby().apply() 可以使用任何自定义函数，包括返回标量、Series或DataFrame。',
        correctAnswer: true,
        explanation: 'apply() 非常灵活，可以返回各种形状的结果，pandas会自动适配。',
        commonMistake: '以为apply只能返回标量。'
      },
      {
        id: 7,
        question: '多列分组后，使用 unstack() 可以将内层索引转换为列名。',
        correctAnswer: true,
        explanation: 'unstack() 将行索引（内层）转换为列名，常用于将分组结果转换为宽表格式。',
        commonMistake: '不清楚unstack的作用。'
      },
      {
        id: 8,
        question: 'pivot_table和groupby的主要区别是pivot_table生成宽表，groupby生成窄表。',
        correctAnswer: true,
        explanation: 'pivot_table将数据透视为宽表形式，groupby保持窄表形式。',
        commonMistake: '不清楚两者在输出格式上的区别。'
      },
      {
        id: 9,
        question: '使用 agg 时，给列重命名需要使用 rename(columns={...}) 方法。',
        correctAnswer: true,
        explanation: 'agg返回的结果需要用rename或直接构造DataFrame来重命名列。',
        commonMistake: '不知道如何重命名agg结果列。'
      },
      {
        id: 10,
        question: '分组聚合分析中，组的顺序会影响最终结果。',
        correctAnswer: false,
        explanation: '分组聚合是集合操作，组的顺序不影响聚合结果。',
        commonMistake: '误以为分组有顺序依赖。'
      }
    ],
    codingChallenges: [
      {
        id: 1,
        description: '【综合实战】对订单数据进行多维度分析：按仓库和月份分组统计销售额，找出每个仓库销售额最好的月份，并计算该月销售额占该仓库全年销售额的比例，最后找出增长最快和最慢的月份。',
        initialCode: 'import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("datasets/retail_orders.csv")\ndf["order_date"] = pd.to_datetime(df["order_date"])\ndf["month"] = df["order_date"].dt.month\n\n# 请编写代码：\n# 1. 按仓库和月份分组统计销售额\n# 2. 找出每个仓库销售额最好的月份\n# 3. 计算该月占全年比例\n# 4. 找出增长最快/最慢月份\n',
        expectedOutput: '各仓库各月销售额：...\n各仓库最佳月份及占比：...\n增长分析：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("datasets/retail_orders.csv")\ndf["order_date"] = pd.to_datetime(df["order_date"])\ndf["month"] = df["order_date"].dt.month\n\n# 按仓库和月份分组统计\nmonthly_sales = df.groupby(["warehouse", "month"])["amount"].sum().reset_index()\nmonthly_sales.columns = ["仓库", "月份", "销售额"]\nprint("各仓库各月销售额：")\nprint(monthly_sales)\n\n# 找出每个仓库最佳月份\nbest_months = monthly_sales.loc[monthly_sales.groupby("仓库")["销售额"].idxmax()]\nprint("\\n各仓库最佳月份：")\ntotal_by_warehouse = df.groupby("warehouse")["amount"].sum()\nfor _, row in best_months.iterrows():\n    wh = row["仓库"]\n    month = int(row["月份"])\n    sales = row["销售额"]\n    total = total_by_warehouse[wh]\n    ratio = sales / total * 100\n    print(f"  {wh}: {month}月，销售额{sales:.0f}，占比{ratio:.1f}%")\n\n# 增长分析\nmonthly_total = df.groupby("month")["amount"].sum().sort_index()\nmonthly_total_diff = monthly_total.diff()\nfastest_month = monthly_total_diff.idxmax()\nslowest_month = monthly_total_diff.idxmin()\nprint(f"\\n增长最快月份：{fastest_month}月（+{monthly_total_diff[fastest_month]:.0f}）")\nprint(f"增长最慢月份：{slowest_month}月（{monthly_total_diff[slowest_month]:.0f}）")',
        commonMistake: '不会用idxmax分组、不会计算组内占比、增长分析逻辑错误。'
      },
      {
        id: 2,
        description: '【综合实战】创建数据透视表，展示各仓库各品类的销售额和订单数，添加合计行和合计列，并计算各品类在各仓库的销售额占比，最后找出销售额占比超过50%的品类-仓库组合。',
        initialCode: 'import pandas as pd\n\ndf = pd.read_csv("datasets/retail_orders.csv")\n\n# 请编写代码：\n# 1. 创建透视表（行=仓库，列=品类，值=销售额和订单数）\n# 2. 添加合计行和合计列\n# 3. 计算各品类销售占比\n# 4. 找出占比超过50%的组合\n',
        expectedOutput: '透视表：...\n各品类销售占比：...\n高占比组合：...',
        correctAnswer: 'import pandas as pd\n\ndf = pd.read_csv("datasets/retail_orders.csv")\n\n# 创建透视表\npivot = pd.pivot_table(\n    df,\n    values="amount",\n    index="warehouse",\n    columns="product_category",\n    aggfunc="sum",\n    fill_value=0,\n    margins=True,\n    margins_name="合计"\n)\nprint("各仓库各品类销售额透视表：")\nprint(pivot)\n\n# 计算各品类占比（不含合计行和列）\npivot_no_total = pivot.iloc[:-1, :-1]\ncategory_total = pivot_no_total.sum(axis=0)\nratio = pivot_no_total.div(category_total, axis=1) * 100\nprint("\\n各品类销售占比（按仓库）：")\nprint(ratio.round(1).astype(str) + "%")\n\n# 找出占比超过50%的组合\nprint("\\n=== 高占比组合（>50%）===")\nfor warehouse in pivot_no_total.index:\n    for category in pivot_no_total.columns:\n        r = ratio.loc[warehouse, category]\n        if r > 50:\n            print(f"  {warehouse} - {category}: {r:.1f}%")',
        commonMistake: 'margins参数使用错误、不会计算占比、索引切片不当。'
      }
    ]
  },
  '03-0': {
    title: '购物篮关联分析 - 综合练习',
    quizQuestions: [
      {
        id: 1,
        question: '关联分析中，支持度表示？',
        options: ['买了A的人中多少也买了B', '商品A和B同时购买的概率', '关联规则比随机情况强多少倍', '商品的购买频率'],
        correctAnswer: 1,
        explanation: '支持度 = 包含商品A和B的交易数 / 总交易数，表示两个商品同时出现的概率。',
        commonMistake: '混淆支持度、置信度、提升度的定义。'
      },
      {
        id: 2,
        question: '置信度的定义是？',
        options: ['P(A∩B)', 'P(B|A) = P(A∩B)/P(A)', 'P(A∩B)/P(B)', 'P(A)/P(B)'],
        correctAnswer: 1,
        explanation: '置信度表示买了A的人中，多少也买了B，即条件概率 P(B|A)。',
        commonMistake: '混淆置信度与支持度的计算公式。'
      },
      {
        id: 3,
        question: '提升度大于1表示？',
        options: ['负相关', '独立', '正相关', '无法判断'],
        correctAnswer: 2,
        explanation: '提升度 > 1 表示正相关，即A和B的关联比随机情况更强。',
        commonMistake: '不清楚提升度的判断标准。'
      },
      {
        id: 4,
        question: 'Apriori算法的核心思想是？',
        options: ['如果项集频繁，则所有子项集也频繁', '如果项集频繁，则所有超项集也频繁', '项集的频繁与否与子项集无关', '只统计单项的支持度'],
        correctAnswer: 0,
        explanation: 'Apriori算法的核心是：如果一个项集是频繁的，那么它的所有子项集也一定是频繁的。',
        commonMistake: '记反了父子项集之间的关系。'
      },
      {
        id: 5,
        question: '商品A的支持度为0.6，商品B的支持度为0.4，A和B的联合支持度为0.3，则"牛奶→面包"的提升度是多少？',
        options: ['0.5', '0.75', '1.0', '1.25'],
        correctAnswer: 3,
        explanation: '置信度 = 0.3/0.6 = 0.5，提升度 = 0.5/0.4 = 1.25',
        commonMistake: '计算错误：提升度 = 置信度 / B的支持度。'
      },
      {
        id: 6,
        question: '在商品推荐场景中，应该优先推荐哪种关联规则？',
        options: ['支持度高、置信度高、提升度大于1', '只要支持度高就行', '只要置信度高就行', '支持度越低越好'],
        correctAnswer: 0,
        explanation: '有效的推荐规则需要：支持度高（普遍） + 置信度高（可靠） + 提升度>1（有价值）。',
        commonMistake: '只关注单一指标。'
      },
      {
        id: 7,
        question: '为什么关联分析中要设置最小支持度阈值？',
        options: ['为了加快计算速度', '过滤掉没有商业价值的罕见规则', '必须满足统计学要求', '没有实际作用'],
        correctAnswer: 1,
        explanation: '如果规则的支持度太低，即使置信度高，也没有实际商业价值（如只出现1次的组合）。',
        commonMistake: '忽视最小支持度阈值的作用。'
      },
      {
        id: 8,
        question: '置信度是对称的，即"牛奶→面包"的置信度等于"面包→牛奶"的置信度。',
        options: ['对，两者是相等的', '错，置信度不对称', '无法确定', '取决于商品顺序'],
        correctAnswer: 1,
        explanation: '置信度不对称，因为计算时用的是条件概率 P(B|A) vs P(A|B)。',
        commonMistake: '误以为置信度是对称的。'
      },
      {
        id: 9,
        question: '关联规则"A→B"中，A称为？',
        options: ['后项', '前项/前提', '结果', '支持项'],
        correctAnswer: 1,
        explanation: '在关联规则"A→B"中，A是前项（前件/前提），B是后项（后件/结果）。',
        commonMistake: '混淆前项和后项的定义。'
      },
      {
        id: 10,
        question: '购物篮分析中，事务矩阵的作用是？',
        options: ['方便存储和传输', '将商品列表转换为0/1矩阵，便于计算支持度', '加快查询速度', '减少内存占用'],
        correctAnswer: 1,
        explanation: '事务矩阵将每行转换为商品是否出现的0/1向量，便于计算共现支持度。',
        commonMistake: '不清楚事务矩阵的实际用途。'
      }
    ],
    judgmentQuestions: [
      {
        id: 1,
        question: '提升度越大，说明关联规则越有价值，可以直接推荐给所有用户。',
        correctAnswer: false,
        explanation: '提升度大只是说明关联比随机强，还需要结合置信度和支持度综合判断，以及考虑业务成本。',
        commonMistake: '过度依赖单一指标。'
      },
      {
        id: 2,
        question: '如果{牛奶,面包}是频繁项集，那么{牛奶}和{面包}也一定是频繁项集。',
        correctAnswer: true,
        explanation: '这是Apriori算法的核心性质：频繁项集的所有非空子集也必须是频繁的。',
        commonMistake: '不清楚Apriori性质。'
      },
      {
        id: 3,
        question: '关联规则的提升度可以用置信度除以前项的支持度来计算。',
        correctAnswer: false,
        explanation: '提升度 = 置信度 / 后项的支持度，不是前项的支持度。',
        commonMistake: '公式记错。'
      },
      {
        id: 4,
        question: '在购物篮分析中，同一交易记录中的商品顺序会影响支持度计算。',
        correctAnswer: false,
        explanation: '支持度只关心商品是否同时出现，与顺序无关。',
        commonMistake: '误以为顺序影响结果。'
      },
      {
        id: 5,
        question: '最小支持度设置得越高，计算速度越快，但可能遗漏有价值的规则。',
        correctAnswer: true,
        explanation: '支持度阈值高时，候选项集数量减少，但可能过滤掉长尾组合的规则。',
        commonMistake: '不理解阈值与召回率的权衡。'
      },
      {
        id: 6,
        question: '可以用 pd.crosstab 来验证购物篮分析的结果。',
        correctAnswer: true,
        explanation: 'crosstab 可以快速计算两个商品（或商品组合）的共现频数，验证支持度计算是否正确。',
        commonMistake: '不会用crosstab辅助分析。'
      },
      {
        id: 7,
        question: '关联分析只能用于零售场景，不能用于其他领域。',
        correctAnswer: false,
        explanation: '关联分析广泛应用于医疗诊断、用户行为分析、金融欺诈检测等众多领域。',
        commonMistake: '认为关联分析应用范围有限。'
      },
      {
        id: 8,
        question: '频繁项集挖掘只能找到2项商品之间的关联。',
        correctAnswer: false,
        explanation: '频繁项集可以是任意数量的商品组合，Apriori算法可以挖掘多项集。',
        commonMistake: '以为只能做两项关联。'
      },
      {
        id: 9,
        question: '支持度高的规则一定是有效的推荐规则。',
        correctAnswer: false,
        explanation: '高支持度只说明普遍，但可能置信度和提升度都很低，实际价值不大。',
        commonMistake: '只关注支持度。'
      },
      {
        id: 10,
        question: '在实际业务中，关联分析结果需要结合业务经验进行筛选和验证。',
        correctAnswer: true,
        explanation: '统计分析结果需要业务专家判断是否符合常识、是否有执行可行性。',
        commonMistake: '纯粹依赖统计结果做决策。'
      }
    ],
    codingChallenges: [
      {
        id: 1,
        description: '【综合实战】实现完整的关联规则挖掘流程：读取购物篮数据，转换为事务矩阵，计算所有单项支持度，筛选支持度>0.3的商品，输出高频商品列表，并计算所有商品两两之间的支持度和提升度，找出提升度>1.2的强关联规则。',
        initialCode: 'import pandas as pd\n\ndf = pd.read_csv("datasets/market_basket.csv")\n\n# 请编写代码：\n# 1. 将items列转换为事务矩阵\n# 2. 计算单项支持度\n# 3. 筛选支持度>0.3的商品\n# 4. 计算商品两两之间的支持度和提升度\n# 5. 找出提升度>1.2的强关联规则\n',
        expectedOutput: '高频商品列表：...\n强关联规则：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("datasets/market_basket.csv")\n\n# 转换为事务矩阵\ndf["items_list"] = df["items"].str.split(",")\nall_items = set()\nfor items in df["items_list"]:\n    all_items.update([item.strip() for item in items])\n\nitems_list = list(all_items)\ntransaction_matrix = pd.DataFrame(\n    [[1 if item.strip() in items else 0 for item in items_list] \n     for items in df["items_list"]],\n    columns=items_list\n)\nn = len(transaction_matrix)\n\n# 单项支持度\nitem_supports = transaction_matrix.sum() / n\nhigh_freq = item_supports[item_supports > 0.3].sort_values(ascending=False)\nprint(f"高频商品列表（支持度>0.3）：{len(high_freq)}个")\nfor item, support in high_freq.items():\n    print(f"  {item}: {support:.2%}")\n\n# 计算两两之间的支持度和提升度\nprint("\\n=== 强关联规则（提升度>1.2）===")\nfor i, item1 in enumerate(items_list):\n    for j, item2 in enumerate(items_list):\n        if i >= j:\n            continue\n        # 联合支持度\n        joint_support = (transaction_matrix[item1] & transaction_matrix[item2]).sum() / n\n        if joint_support == 0:\n            continue\n        # 置信度 A->B\n        conf1 = joint_support / item_supports[item1]\n        conf2 = joint_support / item_supports[item2]\n        # 提升度\n        lift1 = conf1 / item_supports[item2]\n        lift2 = conf2 / item_supports[item1]\n        if lift1 > 1.2:\n            print(f"  {item1} -> {item2}: 支持度={joint_support:.2%}, 置信度={conf1:.2%}, 提升度={lift1:.2f}")\n        if lift2 > 1.2:\n            print(f"  {item2} -> {item1}: 支持度={joint_support:.2%}, 置信度={conf2:.2%}, 提升度={lift2:.2f}")',
        commonMistake: '事务矩阵构建逻辑错误、支持度计算除错、不会计算两两关联。'
      },
      {
        id: 2,
        description: '【综合实战】基于购物篮数据，计算"牛奶→面包"的完整关联指标：支持度、置信度、提升度，并判断该规则是否有商业价值，如果有一定规模的超市应该如何应用这条规则进行促销。',
        initialCode: 'import pandas as pd\n\n# 假设transaction_matrix已创建\n# 请计算：\n# 1. 牛奶的支持度\n# 2. 面包的支持度\n# 3. 牛奶+面包的支持度\n# 4. 置信度（牛奶→面包）\n# 5. 提升度\n# 6. 判断商业价值并给出促销建议\n',
        expectedOutput: '牛奶支持度：...\n面包支持度：...\n联合支持度：...\n置信度：...\n提升度：...\n商业价值及建议：...',
        correctAnswer: 'import pandas as pd\n\n# 计算各支持度\nmilk_support = transaction_matrix["牛奶"].sum() / len(transaction_matrix)\nbread_support = transaction_matrix["面包"].sum() / len(transaction_matrix)\nmilk_bread_support = (transaction_matrix["牛奶"] & transaction_matrix["面包"]).sum() / len(transaction_matrix)\n\n# 计算置信度\nconfidence = milk_bread_support / milk_support\n\n# 计算提升度\nlift = confidence / bread_support\n\nprint(f"牛奶支持度：{milk_support:.2%}")\nprint(f"面包支持度：{bread_support:.2%}")\nprint(f"联合支持度：{milk_bread_support:.2%}")\nprint(f"置信度（牛奶→面包）：{confidence:.2%}")\nprint(f"提升度：{lift:.2f}")\n\n# 商业价值判断和建议\nprint("\\n=== 商业价值及促销建议 ===")\nif lift > 1.2 and milk_support > 0.2 and confidence > 0.3:\n    print("✓ 建议关联销售策略")\n    print(f"  1. 将面包货架摆放在牛奶附近，增加曝光机会")\n    print(f"  2. 开展"买牛奶送面包优惠券"活动")\n    print(f"  3. 预计可提升面包销量约{(lift-1)*100:.0f}%")\nelif lift > 1:\n    print("△ 建议小规模试点")\n    print("  1. 先在部分门店试点关联陈列")\n    print("  2. 收集2周数据后再决定是否推广")\nelse:\n    print("✗ 暂不推荐此关联策略")\n    print("  提升度不足，关联购买效果不明显")',
        commonMistake: '公式混淆、不知如何给出业务建议。'
      }
    ]
  },
  '04-0': {
    title: '客户聚类分群分析 - 综合练习',
    quizQuestions: [
      {
        id: 1,
        question: 'K-Means聚类前需要标准化的原因是？',
        options: ['加快计算速度', '消除不同特征量纲的影响', '必须满足正态分布', '减少内存占用'],
        correctAnswer: 1,
        explanation: '不同量纲的特征（如年龄和收入）数值范围差异大，不标准化会导致距离计算被大数值特征主导。',
        commonMistake: '忽略标准化的重要性。'
      },
      {
        id: 2,
        question: '肘部法则中，"肘部"指什么？',
        options: ['WCSS值最小的点', 'WCSS下降速度由快变慢的拐点', '聚类数量为2的点', 'WCSS值最大的点'],
        correctAnswer: 1,
        explanation: '肘部是WCSS曲线下降速度开始减缓的点，表示增加更多簇也无法显著降低WCSS。',
        commonMistake: '不清楚肘部的判断方法。'
      },
      {
        id: 3,
        question: '聚类结果的轮廓系数（Silhouette Score）的范围是？',
        options: ['[-1, 1]', '[0, 1]', '[-∞, ∞]', '[0, ∞]'],
        correctAnswer: 0,
        explanation: '轮廓系数范围是[-1, 1]，越接近1表示聚类效果越好，接近-1表示可能分到了错误的簇。',
        commonMistake: '不清楚轮廓系数的取值范围。'
      },
      {
        id: 4,
        question: 'K-Means的random_state参数的作用是？',
        options: ['设置随机种子，保证结果可复现', '设置随机初始化的样本数', '控制是否使用随机初始化', '决定随机抽样的比例'],
        correctAnswer: 0,
        explanation: 'K-Means使用随机初始化，random_state确保每次运行结果一致，便于复现和调试。',
        commonMistake: '忽视random_state的重要性。'
      },
      {
        id: 5,
        question: '各簇样本数量差异很大（如一簇占95%）可能说明什么？',
        options: ['聚类效果很好', '数据可能存在较大异常', 'K值设置太小', '标准化出了问题'],
        correctAnswer: 1,
        explanation: '簇大小极度不均衡可能说明某些簇实际上是异常点被单独分组，或者K值不合适。',
        commonMistake: '不分析簇大小分布。'
      },
      {
        id: 6,
        question: '聚类分析中，"高价值客户"的RFM特征通常是？',
        options: ['R低、F低、R高', 'R低、F高、M高', 'R高、F低、M低', 'R高、F高、M高'],
        correctAnswer: 1,
        explanation: '高价值客户特征：最近消费(R低)、消费频率高(F高)、消费金额高(M高)。',
        commonMistake: '对RFM模型理解不清。'
      },
      {
        id: 7,
        question: 'K-Means聚类要求数据在特征空间中呈什么形状分布？',
        options: ['任意形状', '球形', '线性', '无要求'],
        correctAnswer: 1,
        explanation: 'K-Means基于欧氏距离，擅长发现球形簇。对于非球形数据（如月牙形），效果较差。',
        commonMistake: '以为K-Means适用于任何形状的数据。'
      },
      {
        id: 8,
        question: '用不同random_state多次运行K-Means，如果结果差异很大，说明什么？',
        options: ['数据分布非常均匀', '数据本身没有自然的聚类结构或初始化敏感', 'K值设置太小', '标准化出了问题'],
        correctAnswer: 1,
        explanation: '如果初始化敏感导致结果不稳定，说明数据可能没有明显的聚类结构，或者需要更多特征。',
        commonMistake: '忽视初始化敏感性问题。'
      },
      {
        id: 9,
        question: 'MiniBatch K-Means 比标准K-Means速度更快，但可能牺牲一定的？',
        options: ['准确性', '聚类质量', '可解释性', '稳定性'],
        correctAnswer: 1,
        explanation: 'MiniBatch通过随机抽样加速计算，适用于大数据集，但结果可能有偏差。',
        commonMistake: '不清楚MiniBatch的优缺点。'
      },
      {
        id: 10,
        question: '聚类中心（质心）的数量由什么决定？',
        options: ['数据量大小', 'K值', '特征数量', '算法自动确定'],
        correctAnswer: 1,
        explanation: 'K值决定了聚类中心的数量，是K-Means的第一个参数。',
        commonMistake: '混淆K的含义。'
      }
    ],
    judgmentQuestions: [
      {
        id: 1,
        question: 'K-Means聚类中，如果某个簇只有一个样本，这个样本一定是异常值。',
        correctAnswer: false,
        explanation: '可能是真实的孤立点，也可能是小众群体的代表，需要结合业务判断。',
        commonMistake: '过度解读单样本簇。'
      },
      {
        id: 2,
        question: '标准化后的数据聚类，效果一定比未标准化更好。',
        correctAnswer: false,
        explanation: '如果所有特征本来就在同一量纲下，标准化反而可能引入误差。需要根据实际情况判断。',
        commonMistake: '认为标准化总是必要的。'
      },
      {
        id: 3,
        question: 'K-Means对噪声和异常值非常敏感，一个离群点可能严重影响质心位置。',
        correctAnswer: true,
        explanation: 'K-Means基于质心计算，异常值会大幅拉偏质心。可以先用异常检测预处理。',
        commonMistake: '忽视异常值对K-Means的影响。'
      },
      {
        id: 4,
        question: '聚类结果可以用均方误差（MSE）来评估。',
        correctAnswer: false,
        explanation: 'MSE用于回归评估，聚类用轮廓系数、Calinski-Harabasz指数等内部评估指标。',
        commonMistake: '用错了评估指标。'
      },
      {
        id: 5,
        question: '在客户分群后，可以直接套用同一运营策略给所有客户。',
        correctAnswer: false,
        explanation: '不同客户群体特征不同，需要差异化运营策略才能效果最大化。',
        commonMistake: '忽视差异化运营的重要性。'
      },
      {
        id: 6,
        question: 'K-Means对噪声和异常值非常敏感，一个离群点可能严重影响质心位置。',
        correctAnswer: true,
        explanation: 'K-Means基于质心计算，异常值会大幅拉偏质心。可以先用异常检测预处理。',
        commonMistake: '忽视异常值对K-Means的影响。'
      },
      {
        id: 7,
        question: '轮廓系数越高越好，且接近1表示聚类效果好。',
        correctAnswer: true,
        explanation: '轮廓系数范围[-1,1]，接近1说明簇内紧密、簇间分离，聚类效果好。',
        commonMistake: '不清楚轮廓系数的判断标准。'
      },
      {
        id: 8,
        question: '在实际业务中，应该只用一种方法确定K值。',
        correctAnswer: false,
        explanation: '可以结合肘部法则、轮廓系数、业务理解等多种方法综合确定K值。',
        commonMistake: '只用单一方法确定K值。'
      },
      {
        id: 9,
        question: '聚类分析是无监督学习，不需要标签数据。',
        correctAnswer: true,
        explanation: '聚类是无监督学习，不需要预先知道标签，让算法自己发现数据中的结构。',
        commonMistake: '不清楚聚类所属的机器学习类别。'
      },
      {
        id: 10,
        question: 'DBSCAN相比K-Means的优势是可以发现任意形状的簇。',
        correctAnswer: true,
        explanation: 'DBSCAN基于密度聚类，可以发现任意形状的簇，而K-Means只能发现球形簇。',
        commonMistake: '以为所有聚类算法效果相同。'
      }
    ],
    codingChallenges: [
      {
        id: 1,
        description: '【综合实战】实现完整的客户分群流程：读取客户特征数据，进行Z-Score标准化，使用肘部法则确定最优K值（K=2到6），绘制WCSS曲线，对客户进行聚类分群，并分析各簇的特征，包括消费能力、年龄分布、客户数量等。',
        initialCode: 'import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("datasets/customer_features.csv")\nfeatures = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]\nX = df[features]\n\n# 请编写代码：\n# 1. 标准化特征\n# 2. 计算K=2到6的WCSS\n# 3. 绘制肘部曲线\n# 4. 用最优K进行聚类\n# 5. 分析各簇特征\n',
        expectedOutput: 'WCSS曲线图\n各簇特征统计：...\n客户画像：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("datasets/customer_features.csv")\nfeatures = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]\nX = df[features]\n\n# 标准化\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\n# 计算WCSS\nwcss = []\nK_range = range(2, 7)\nfor k in K_range:\n    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)\n    kmeans.fit(X_scaled)\n    wcss.append(kmeans.inertia_)\n\n# 绘制肘部曲线\nplt.figure(figsize=(8, 5))\nplt.plot(K_range, wcss, "bo-")\nplt.xlabel("K值")\nplt.ylabel("WCSS")\nplt.title("肘部法则确定最优K值")\nplt.grid(True)\nplt.savefig("elbow_curve.png")\nplt.close()\nprint("WCSS值：", dict(zip(K_range, [round(w, 2) for w in wcss])))\n\n# 最优K聚类（假设K=3）\nkmeans = KMeans(n_clusters=3, random_state=42, n_init=10)\ndf["cluster"] = kmeans.fit_predict(X_scaled)\n\n# 各簇特征分析\nprint("\\n各簇特征统计：")\ncluster_stats = df.groupby("cluster")[features].mean().round(2)\nprint(cluster_stats)\n\n# 客户画像\nprint("\\n客户画像分析：")\nfor i in range(3):\n    cluster_data = df[df["cluster"] == i]\n    print(f"簇{i}（{len(cluster_data)}人）：")\n    print(f"  平均年龄{cluster_data[\'age\'].mean():.0f}岁")\n    print(f"  平均收入{cluster_data[\'income\'].mean():.0f}元")\n    print(f"  平均消费{cluster_data[\'total_spent\'].mean():.0f}元")',
        commonMistake: '不会计算WCSS、不会绑制肘部曲线、不会解读簇特征。'
      },
      {
        id: 2,
        description: '【综合实战】基于聚类结果，为每个客户簇制定差异化运营策略：计算各簇的大小占比、消费能力分层（打分）、推荐适合的营销活动，并预测各簇的留存率。',
        initialCode: 'import pandas as pd\nimport numpy as np\n\n# 假设df已有cluster列\n# 请编写代码：\n# 1. 计算各簇客户数量和占比\n# 2. 按消费能力对各簇分层\n# 3. 制定差异化运营策略\n# 4. 预测各簇留存率\n',
        expectedOutput: '簇分布：...\n各簇消费分层：...\n运营策略：...\n留存率预测：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\n\n# 计算簇分布\ncluster_counts = df["cluster"].value_counts().sort_index()\ntotal = len(df)\nprint("各簇客户数量和占比：")\nfor cluster_id, count in cluster_counts.items():\n    print(f"  簇{cluster_id}：{count}人（{count/total:.1%}）")\n\n# 消费能力分层\ncluster_stats = df.groupby("cluster").agg({\n    "age": "mean",\n    "income": "mean",\n    "purchase_freq": "mean",\n    "avg_order_value": "mean",\n    "total_spent": "mean"\n}).round(2)\n\n# 标准化后打分\nfrom sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler()\nscores = scaler.fit_transform(cluster_stats[["income", "purchase_freq", "avg_order_value"]])\ncluster_stats["消费能力得分"] = scores.mean(axis=1).round(2)\n\nprint("\\n各簇消费能力得分：")\nfor idx, row in cluster_stats.iterrows():\n    score = row["消费能力得分"]\n    level = "高" if score >= 0.6 else "中" if score >= 0.3 else "低"\n    print(f"  簇{idx}：得分{score:.2f}（{level}价值客户）")\n\n# 差异化运营策略\nprint("\\n=== 差异化运营策略 ===")\nstrategies = {\n    0: [],\n    1: [],\n    2: []\n}\n\nfor idx, row in cluster_stats.iterrows():\n    score = row["消费能力得分"]\n    if score >= 0.6:\n        strategies[idx] = ["VIP专属服务", "优先新品体验", "生日专属优惠"]\n    elif score >= 0.3:\n        strategies[idx] = ["积分加倍活动", "满减优惠券", "唤醒短信"]\n    else:\n        strategies[idx] = ["大额折扣活动", "限时秒杀", "Push推送"]\n\nfor cluster_id, tactic in strategies.items():\n    print(f"簇{cluster_id}运营策略：")\n    for t in tactic:\n        print(f"  - {t}")\n\n# 留存率预测（简化模型）\nprint("\\n=== 留存率预测 ===")\n# 假设消费能力越高，留存率越高\nfor idx, row in cluster_stats.iterrows():\n    score = row["消费能力得分"]\n    predicted_retention = 0.5 + 0.3 * score  # 简单线性模型\n    print(f"  簇{idx}预测留存率：{predicted_retention:.1%}")',
        commonMistake: '不会计算综合得分、策略制定不贴合业务、留存率预测方法错误。'
      }
    ]
  },
  '05-0': {
    title: '专业数据可视化 - 综合练习',
    quizQuestions: [
      {
        id: 1,
        question: '展示各部分占整体的比例关系，应该用哪种图表？',
        options: ['折线图', '柱状图', '饼图或环形图', '散点图'],
        correctAnswer: 2,
        explanation: '饼图和环形图适合展示占比关系，直观显示各部分占整体的比例。',
        commonMistake: '用柱状图展示占比。'
      },
      {
        id: 2,
        question: 'plt.tight_layout() 的作用是？',
        options: ['压缩图表尺寸', '自动调整子图参数防止标签重叠', '设置图表边框', '调整字体大小'],
        correctAnswer: 1,
        explanation: 'tight_layout() 自动调整子图参数，防止标题、标签被遮挡。',
        commonMistake: '忽视tight_layout()导致图表元素重叠。'
      },
      {
        id: 3,
        question: '在同一图中展示两个差异很大的指标（如销量和利润率），应该用？',
        options: ['单Y轴柱状图', '双Y轴组合图', '散点图', '饼图'],
        correctAnswer: 1,
        explanation: '双Y轴组合图（twinx）可以共享X轴，左右Y轴分别对应不同量级的指标。',
        commonMistake: '强行用单Y轴导致小指标无法显示。'
      },
      {
        id: 4,
        question: 'Matplotlib中，中文字体设置的正确方式是？',
        options: ['plt.set_font("SimHei")', 'plt.rcParams["font.sans-serif"] = ["SimHei"]', 'FontProperties(name="SimHei")', '所有选项都正确'],
        correctAnswer: 1,
        explanation: '可以通过 plt.rcParams["font.sans-serif"] 设置全局字体。',
        commonMistake: '用错API设置中文字体。'
      },
      {
        id: 5,
        question: '绘制时间序列趋势图时，为了更清晰地展示趋势，应该？',
        options: ['直接绘制原始数据', '添加移动平均线平滑噪声', '删除所有异常点', '使用3D图表'],
        correctAnswer: 1,
        explanation: '移动平均可以消除短期波动，更清晰地展示长期趋势。',
        commonMistake: '忽视趋势线的辅助作用。'
      },
      {
        id: 6,
        question: 'plt.subplot(2, 2, 1) 和 plt.subplot(221) 的关系是？',
        options: ['两者完全相同', '前者是后者的展开形式', '前者创建1个图，后者创建2个图', '两者功能相反'],
        correctAnswer: 1,
        explanation: 'plt.subplot(2, 2, 1) 和 plt.subplot(221) 都表示2x2布局中的第1个子图。',
        commonMistake: '不清楚subplot的简写规则。'
      },
      {
        id: 7,
        question: '颜色映射（colormap）使用场景是？',
        options: ['所有图表', '散点图、热力图等需要颜色编码数值的情况', '只有饼图', '只有柱状图'],
        correctAnswer: 1,
        explanation: '颜色映射用于用颜色表示数值大小，常见于散点图的颜色编码、热力图等。',
        commonMistake: '滥用颜色导致图表混乱。'
      },
      {
        id: 8,
        question: '图表标题、坐标轴标签的字体大小应该？',
        options: ['全部一样大', '标题 > 轴标签 > 刻度标签', '刻度标签最大', '无所谓'],
        correctAnswer: 1,
        explanation: '遵循视觉层次：标题最大、轴标签次之、刻度标签最小，保持层次分明。',
        commonMistake: '不注意字体大小层次。'
      },
      {
        id: 9,
        question: 'plt.figure(figsize=(10, 6)) 设置的 figsize 参数单位是什么？',
        options: ['像素', '英寸', '厘米', '毫米'],
        correctAnswer: 1,
        explanation: 'figsize 单位是英寸，像素 = 英寸 × DPI。',
        commonMistake: '混淆单位。'
      },
      {
        id: 10,
        question: 'seaborn 是 matplotlib 的什么？',
        options: ['替代品', '高级封装', '独立产品', '不同协议'],
        correctAnswer: 1,
        explanation: 'seaborn 基于 matplotlib，可以与 matplotlib 混合使用，返回的也是 matplotlib 的 axes 对象。',
        commonMistake: '以为两者完全独立。'
      }
    ],
    judgmentQuestions: [
      {
        id: 1,
        question: 'plt.show() 可以在所有环境下正常显示图表。',
        correctAnswer: false,
        explanation: '在某些服务器环境（如无图形界面）下需要用 plt.savefig() 保存图片。',
        commonMistake: '以为 show() 总是可用。'
      },
      {
        id: 2,
        question: 'plt.figure(figsize=(10, 6)) 设置的 figsize 参数单位是像素。',
        correctAnswer: false,
        explanation: 'figsize 单位是英寸，像素 = 英寸 × DPI。',
        commonMistake: '混淆单位。'
      },
      {
        id: 3,
        question: '可以在一个图表中同时使用 plt.bar() 和 plt.plot() 来创建组合图。',
        correctAnswer: true,
        explanation: '可以先用 bar() 绘制柱状图，再用 plot() 在同一axes上添加折线。',
        commonMistake: '不知道可以叠加不同类型图表。'
      },
      {
        id: 4,
        question: '设置 plt.rcParams["axes.unicode_minus"] = False 可以正常显示负号。',
        correctAnswer: false,
        explanation: '应该设为 True 才能解决负号显示问题，False 会导致负号显示异常。',
        commonMistake: '记反了参数值。'
      },
      {
        id: 5,
        question: '使用 plt.xticks(rotation=45) 可以旋转X轴标签防止重叠。',
        correctAnswer: true,
        explanation: '当标签文字较长时，旋转可以防止它们互相重叠。',
        commonMistake: '标签重叠时不知道如何处理。'
      },
      {
        id: 6,
        question: 'plt.legend() 可以自动识别要添加图例的数据系列。',
        correctAnswer: true,
        explanation: '只要绘制时设置了label参数，legend()会自动收集并显示图例。',
        commonMistake: '手动创建图例不必要。'
      },
      {
        id: 7,
        question: 'plt.grid(True, alpha=0.3) 的 alpha 参数用于设置网格线透明度。',
        correctAnswer: true,
        explanation: 'alpha=0.3 使网格线半透明，避免遮挡数据。',
        commonMistake: '不知道alpha参数的作用。'
      },
      {
        id: 8,
        question: '在制作报表时，应该尽可能多地在一个图表中添加信息。',
        correctAnswer: false,
        explanation: '好的可视化应该简洁清晰，避免信息过载。',
        commonMistake: '追求信息量而非可读性。'
      },
      {
        id: 9,
        question: '箱线图可以展示数据的分布特征，包括中位数、四分位数和异常值。',
        correctAnswer: true,
        explanation: '箱线图是展示数据分布的经典图表，可以直观看到中位数、IQR和异常值。',
        commonMistake: '不清楚箱线图展示的信息。'
      },
      {
        id: 10,
        question: '热力图适合展示两个分类变量之间的数值关系。',
        correctAnswer: true,
        explanation: '热力图用颜色深浅表示数值大小，适合展示两个分类变量交叉的数值数据。',
        commonMistake: '不清楚热力图的适用场景。'
      }
    ],
    codingChallenges: [
      {
        id: 1,
        description: '【综合实战】创建一份完整的销售分析仪表盘：绘制各仓库销售额对比柱状图、各月销售额趋势折线图、各品类销售占比饼图、各仓库订单金额分布箱线图，所有图表放在一个2x2的布局中，并添加总标题和子标题。',
        initialCode: 'import pandas as pd\nimport matplotlib.pyplot as plt\n\nplt.rcParams["font.sans-serif"] = ["SimHei"]\nplt.rcParams["axes.unicode_minus"] = False\n\ndf = pd.read_csv("datasets/retail_orders.csv")\ndf["order_date"] = pd.to_datetime(df["order_date"])\ndf["month"] = df["order_date"].dt.month\n\n# 请编写代码：\n# 1. 创建2x2子图布局\n# 2. 子图1：各仓库销售额柱状图\n# 3. 子图2：各月销售额趋势折线图\n# 4. 子图3：各品类销售占比饼图\n# 5. 子图4：各仓库订单金额分布箱线图\n',
        expectedOutput: '仪表盘图表',
        correctAnswer: 'import pandas as pd\nimport matplotlib.pyplot as plt\n\nplt.rcParams["font.sans-serif"] = ["SimHei"]\nplt.rcParams["axes.unicode_minus"] = False\n\ndf = pd.read_csv("datasets/retail_orders.csv")\ndf["order_date"] = pd.to_datetime(df["order_date"])\ndf["month"] = df["order_date"].dt.month\n\nfig, axes = plt.subplots(2, 2, figsize=(14, 10))\nfig.suptitle("销售数据分析仪表盘", fontsize=20, fontweight="bold")\n\n# 子图1：各仓库销售额柱状图\nwarehouse_sales = df.groupby("warehouse")["amount"].sum().sort_values(ascending=False)\naxes[0, 0].bar(warehouse_sales.index, warehouse_sales.values, color="steelblue")\naxes[0, 0].set_title("各仓库销售额对比")\naxes[0, 0].set_xlabel("仓库")\naxes[0, 0].set_ylabel("销售额")\naxes[0, 0].tick_params(axis="x", rotation=45)\n\n# 子图2：各月销售额趋势折线图\nmonthly_sales = df.groupby("month")["amount"].sum().sort_index()\naxes[0, 1].plot(monthly_sales.index, monthly_sales.values, marker="o", linewidth=2, color="coral")\naxes[0, 1].set_title("各月销售额趋势")\naxes[0, 1].set_xlabel("月份")\naxes[0, 1].set_ylabel("销售额")\naxes[0, 1].grid(True, alpha=0.3)\n\n# 子图3：各品类销售占比饼图\ncategory_sales = df.groupby("product_category")["amount"].sum()\naxes[1, 0].pie(category_sales.values, labels=category_sales.index, autopct="%1.1f%%", startangle=90)\naxes[1, 0].set_title("各品类销售占比")\n\n# 子图4：箱线图展示分布\nwarehouses = df["warehouse"].unique()\ndata_for_box = [df[df["warehouse"]==wh]["amount"] for wh in warehouses]\naxes[1, 1].boxplot(data_for_box, labels=warehouses)\naxes[1, 1].set_title("各仓库订单金额分布")\naxes[1, 1].set_xlabel("仓库")\naxes[1, 1].set_ylabel("订单金额")\naxes[1, 1].tick_params(axis="x", rotation=45)\n\nplt.tight_layout()\nplt.savefig("sales_dashboard.png", dpi=150)\nplt.show()\nprint("仪表盘已保存为 sales_dashboard.png")',
        commonMistake: '子图索引错误、布局混乱、标题重叠。'
      },
      {
        id: 2,
        description: '【综合实战】绘制RFM客户分析可视化：用散点图展示客户分布（X=消费频率，Y=消费金额，点大小=最近消费间隔，颜色=客户价值分层），并添加适当的图例、轴标签和标注，最后将客户分为4个象限进行解读。',
        initialCode: 'import pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\n\nplt.rcParams["font.sans-serif"] = ["SimHei"]\nplt.rcParams["axes.unicode_minus"] = False\n\n# 假设已有RFM数据，包含frequency, monetary, recency, label列\n# 请编写代码：\n# 1. 按label设置不同颜色\n# 2. 用散点图展示，点大小反映recency\n# 3. 添加图例和轴标签\n# 4. 添加象限分割线和标注\n',
        expectedOutput: 'RFM散点图',
        correctAnswer: 'import pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\n\nplt.rcParams["font.sans-serif"] = ["SimHei"]\nplt.rcParams["axes.unicode_minus"] = False\n\n# 模拟RFM数据\nnp.random.seed(42)\nn = 200\nrfm = pd.DataFrame({\n    "frequency": np.random.randint(1, 50, n),\n    "monetary": np.random.randint(100, 10000, n),\n    "recency": np.random.randint(1, 365, n),\n    "label": np.random.choice(["VIP", "潜力", "普通", "流失"], n, p=[0.1, 0.3, 0.4, 0.2])\n})\n\n# 颜色映射\ncolors = {"VIP": "red", "潜力": "green", "普通": "blue", "流失": "gray"}\nsizes = 100 / rfm["recency"]  # 最近购买间隔越小，点越大\n\nfig, ax = plt.subplots(figsize=(12, 8))\n\nfor label in ["VIP", "潜力", "普通", "流失"]:\n    mask = rfm["label"] == label\n    ax.scatter(\n        rfm.loc[mask, "frequency"],\n        rfm.loc[mask, "monetary"],\n        s=sizes[mask] * 5,\n        c=colors[label],\n        alpha=0.6,\n        label=label,\n        edgecolors="white"\n    )\n\nax.set_xlabel("消费频率（次）", fontsize=12)\nax.set_ylabel("消费金额（元）", fontsize=12)\nax.set_title("RFM客户价值分析", fontsize=16, fontweight="bold")\nax.legend(title="客户分层", loc="upper right")\nax.grid(True, alpha=0.3)\n\n# 添加象限分割线（以中位数为界）\nfreq_median = rfm["frequency"].median()\nmonetary_median = rfm["monetary"].median()\nax.axvline(x=freq_median, color="black", linestyle="--", alpha=0.5)\nax.axhline(y=monetary_median, color="black", linestyle="--", alpha=0.5)\n\n# 象限标注\nax.text(45, 9000, "高频率×高金额\\nVIP客户", fontsize=10, color="red", ha="center")\nax.text(5, 9000, "低频率×高金额\\n潜力客户", fontsize=10, color="green", ha="center")\nax.text(5, 500, "低频率×低金额\\n流失风险", fontsize=10, color="gray", ha="center")\nax.text(45, 500, "高频率×低金额\\n普通客户", fontsize=10, color="blue", ha="center")\n\nplt.tight_layout()\nplt.savefig("rfm_analysis.png", dpi=150)\nplt.show()',
        commonMistake: '散点图参数设置不当、不会用颜色区分分组、标注位置错误。'
      }
    ]
  },
  '06-0': {
    title: '业务A/B测试数据分析 - 综合练习',
    quizQuestions: [
      {
        id: 1,
        question: 'A/B测试中，转化率的计算方式是？',
        options: ['转化用户数/总用户数', '总用户数/转化用户数', '未转化用户数/总用户数', '转化用户数*总用户数'],
        correctAnswer: 0,
        explanation: '转化率 = 转化用户数 / 总用户数，表示完成目标行为的用户比例。',
        commonMistake: '计算公式记反了。'
      },
      {
        id: 2,
        question: 'p值小于多少通常被认为具有统计显著性？',
        options: ['0.01', '0.05', '0.1', '0.5'],
        correctAnswer: 1,
        explanation: 'p值小于0.05通常被认为差异具有统计显著性。',
        commonMistake: '记错了显著性水平。'
      },
      {
        id: 3,
        question: '卡方检验和t检验的主要区别是？',
        options: ['卡方检验用于连续数据，t检验用于离散数据', '卡方检验用于分类数据，t检验用于连续数据', '两者可以互换使用', '卡方检验更快'],
        correctAnswer: 1,
        explanation: '卡方检验适用于比例/频数数据，t检验适用于比较两组连续数据的均值。',
        commonMistake: '混淆两者的适用场景。'
      },
      {
        id: 4,
        question: '95%置信区间的含义是？',
        options: ['真实值有95%的概率落在这个范围内', '95%的样本落在这个范围内', '这个范围包含95%的数据', '95%的置信水平下真实值在此范围内'],
        correctAnswer: 0,
        explanation: '95%置信区间表示，如果重复实验多次，构建的区间中有95%会包含真实参数值。',
        commonMistake: '对置信区间的统计学含义理解错误。'
      },
      {
        id: 5,
        question: '样本量计算中，"统计功效"（power）通常设置为多少？',
        options: ['0.5', '0.8', '0.95', '0.99'],
        correctAnswer: 1,
        explanation: '统计功效通常设置为0.8，表示当差异确实存在时，有80%的概率能检测到。',
        commonMistake: '不清楚功效设置标准。'
      },
      {
        id: 6,
        question: '如果p值=0.03，我们应该？',
        options: ['立即上线新方案', '认为差异具有统计显著性，但需结合业务成本收益决定是否上线', '认为差异不显著', '需要增大样本量'],
        correctAnswer: 1,
        explanation: 'p<0.05说明差异显著，但还要考虑效应大小、业务成本、风险等因素决定是否全量上线。',
        commonMistake: '过度解读p值。'
      },
      {
        id: 7,
        question: 'A/B测试的"新奇效应"（Novelty Effect）是指？',
        options: ['新方案总是更好', '用户因为好奇而短期表现异常', '测试周期太长', '样本量不足'],
        correctAnswer: 1,
        explanation: '新奇效应指用户因新鲜感而初期行为异常，随着时间推移会回归正常，影响长期指标判断。',
        commonMistake: '忽视新奇效应对结果的影响。'
      },
      {
        id: 8,
        question: '多重比较问题（Multiple Testing Problem）会导致？',
        options: ['结果更准确', '增加第一类错误概率（假阳性）', '增加第二类错误概率', '无影响'],
        correctAnswer: 1,
        explanation: '多重比较会增加假阳性风险，需要用Bonferroni校正等方法控制整体错误率。',
        commonMistake: '忽视多重比较的影响。'
      },
      {
        id: 9,
        question: '效应量（Effect Size）可以告诉我们什么？',
        options: ['统计显著性', '差异的实际大小，而不仅是统计显著性', '样本量', 'p值'],
        correctAnswer: 1,
        explanation: '效应量如Cohen\'s d表示标准化后的差异大小，比p值更能反映实际业务意义。',
        commonMistake: '只关注p值忽视效应量。'
      },
      {
        id: 10,
        question: '随机分流是A/B测试的核心，确保什么？',
        options: ['两组用户数量相等', '两组用户特征分布一致', '结果一定有显著差异', '测试周期一致'],
        correctAnswer: 1,
        explanation: '随机分流保证除了实验因素外，其他特征（年龄、设备、地域等）两组分布均衡。',
        commonMistake: '忽视随机分流的重要性。'
      }
    ],
    judgmentQuestions: [
      {
        id: 1,
        question: 'A/B测试中，实验组和对照组的样本量应该完全相等。',
        correctAnswer: false,
        explanation: '不一定相等，1:1分配是最常见的均匀分配，但不是必须的。有时也会用不均匀分配。',
        commonMistake: '认为必须1:1分配。'
      },
      {
        id: 2,
        question: 'p值小于0.05说明新方案一定比旧方案好。',
        correctAnswer: false,
        explanation: 'p值只是说差异显著，不代表实际业务价值。需要综合效应大小和业务成本判断。',
        commonMistake: '过度解读p值。'
      },
      {
        id: 3,
        question: '置信区间越窄，说明估计越精确。',
        correctAnswer: true,
        explanation: '窄的置信区间表示估计的精确度高，不确定性小。',
        commonMistake: '不清楚置信区间宽窄的含义。'
      },
      {
        id: 4,
        question: '可以使用历史数据做A/B测试的对照参考。',
        correctAnswer: false,
        explanation: 'A/B测试要求实验组和对照组同时存在且条件一致，历史数据无法控制同期因素。',
        commonMistake: '误以为可以用历史数据做对照。'
      },
      {
        id: 5,
        question: '如果A/B测试结果不显著，就不应该上线新方案。',
        correctAnswer: false,
        explanation: '不显著只说明没有足够证据证明差异，也可能效应太小虽存在但无实际价值，需结合业务判断。',
        commonMistake: '将统计不显著等同于业务无价值。'
      },
      {
        id: 6,
        question: '效应量（Effect Size）可以告诉我们差异的实际大小，而不仅是统计显著性。',
        correctAnswer: true,
        explanation: '效应量如Cohen\'s d表示标准化后的差异大小，比p值更能反映实际业务意义。',
        commonMistake: '只关注p值忽视效应量。'
      },
      {
        id: 7,
        question: 'A/B测试可以检测到所有真实存在的差异。',
        correctAnswer: false,
        explanation: 'A/B测试的统计功效不是100%，样本量不足时可能无法检测到真实存在的差异（第二类错误）。',
        commonMistake: '以为统计检验是万能的。'
      },
      {
        id: 8,
        question: 'A/B测试中，" novelty effect"是指用户因为好奇而短期表现异常。',
        correctAnswer: true,
        explanation: '新奇效应指用户因新鲜感而初期行为异常，随着时间推移会回归正常，影响长期指标判断。',
        commonMistake: '不清楚新奇效应的概念。'
      },
      {
        id: 9,
        question: '统计显著性意味着业务显著性。',
        correctAnswer: false,
        explanation: '统计显著不等于业务显著，还需考虑效应大小和实施成本。',
        commonMistake: '混淆统计显著性和业务显著性。'
      },
      {
        id: 10,
        question: '在实验前应该计算所需的最小样本量。',
        correctAnswer: true,
        explanation: '提前计算样本量可以避免实验周期过长或样本量不足导致结果不可靠。',
        commonMistake: '不进行样本量计算。'
      }
    ],
    codingChallenges: [
      {
        id: 1,
        description: '【综合实战】完成完整的A/B测试分析：读取数据，检验两组分组均衡性，计算转化率差异、卡方检验p值、95%置信区间，并给出是否应该全量上线的建议。',
        initialCode: 'import pandas as pd\nimport numpy as np\nfrom scipy import stats\n\ndf = pd.read_csv("datasets/ab_test.csv")\n\n# 请编写代码：\n# 1. 检验两组分组均衡性（样本量比例）\n# 2. 计算各组转化率\n# 3. 卡方检验判断显著性\n# 4. 计算置信区间\n# 5. 给出上线建议\n',
        expectedOutput: '分组均衡性检验：...\n转化率对比：...\n显著性检验结果：...\n置信区间：...\n上线建议：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\nfrom scipy import stats\n\ndf = pd.read_csv("datasets/ab_test.csv")\n\n# 分组均衡性检验\ncontrol = df[df["group"] == "control"]\ntreatment = df[df["group"] == "treatment"]\nprint(f"对照组样本量：{len(control)}")\nprint(f"实验组样本量：{len(treatment)}")\nratio = len(control) / len(treatment)\nprint(f"对照组/实验组比例：{ratio:.2f}（理想值1.0）")\n\n# 各组转化率\ncontrol_rate = control["conversion"].mean()\ntreatment_rate = treatment["conversion"].mean()\nlift = (treatment_rate - control_rate) / control_rate * 100\nprint(f"\\n对照组转化率：{control_rate:.2%}")\nprint(f"实验组转化率：{treatment_rate:.2%}")\nprint(f"相对提升：{lift:.2f}%")\n\n# 卡方检验\nfrom scipy.stats import chi2_contingency\ncontingency = pd.crosstab(df["group"], df["conversion"])\nchi2, p_value, dof, expected = chi2_contingency(contingency)\nprint(f"\\n卡方检验p值：{p_value:.4f}")\nprint(f"显著性：{\'是\' if p_value < 0.05 else \'否\'}（α=0.05）")\n\n# 置信区间\np_pooled = df["conversion"].mean()\nn1, n2 = len(control), len(treatment)\nse = np.sqrt(p_pooled * (1 - p_pooled) * (1/n1 + 1/n2))\nz = 1.96\ndiff = treatment_rate - control_rate\nci_lower = diff - z * se\nci_upper = diff + z * se\nprint(f"\\n转化率差异95%置信区间：[{ci_lower:.4f}, {ci_upper:.4f}]")\n\n# 上线建议\nprint("\\n=== 上线建议 ===")\nif p_value < 0.05 and lift > 0:\n    print("✓ 建议全量上线：实验组显著优于对照组")\nelif p_value < 0.05 and lift < 0:\n    print("✗ 不建议上线：实验组反而下降")\nelse:\n    print("△ 建议继续观察：差异不显著")',
        commonMistake: '不懂置信区间计算、不会综合判断给出建议。'
      },
      {
        id: 2,
        description: '【综合实战】进行细分维度的A/B测试分析：按设备类型（mobile/desktop/tablet）分组，分析各设备的转化率差异，找出哪个设备群体对新方案更敏感，并给出分设备的上线建议。',
        initialCode: 'import pandas as pd\nimport numpy as np\nfrom scipy.stats import chi2_contingency\n\ndf = pd.read_csv("datasets/ab_test.csv")\n\n# 请编写代码：\n# 1. 按设备类型和分组交叉统计\n# 2. 计算各设备类型的转化率差异\n# 3. 进行卡方检验\n# 4. 找出最敏感的设备群体\n# 5. 给出分设备上线建议\n',
        expectedOutput: '各设备转化率对比：...\n细分分析结果：...\n最敏感设备：...\n分设备上线建议：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\nfrom scipy.stats import chi2_contingency\n\ndf = pd.read_csv("datasets/ab_test.csv")\n\n# 按设备和分组交叉统计\nprint("各设备各组转化情况：")\ndevice_analysis = df.groupby(["device", "group"]).agg({\n    "conversion": ["sum", "count", "mean"]\n}).round(4)\ndevice_analysis.columns = ["转化数", "样本数", "转化率"]\nprint(device_analysis)\n\n# 计算各设备的转化率差异\nprint("\\n各设备转化率差异分析：")\ndevices = df["device"].unique()\nsensitive_device = None\nmax_lift = 0\n\nfor device in devices:\n    dev_data = df[df["device"] == device]\n    ctrl = dev_data[dev_data["group"] == "control"]["conversion"].mean()\n    treat = dev_data[dev_data["group"] == "treatment"]["conversion"].mean()\n    lift = (treat - ctrl) / ctrl * 100 if ctrl > 0 else 0\n    \n    # 卡方检验\n    contingency = pd.crosstab(dev_data["group"], dev_data["conversion"])\n    if contingency.shape == (2, 2):\n        chi2, p_value, _, _ = chi2_contingency(contingency)\n        sig = "显著" if p_value < 0.05 else "不显著"\n    else:\n        p_value = 1.0\n        sig = "样本不足"\n    \n    print(f"  {device}: 对照组{ctrl:.2%} → 实验组{treat:.2%}，提升{lift:.1f}%，{sig}")\n    \n    if lift > max_lift and p_value < 0.05:\n        max_lift = lift\n        sensitive_device = device\n\nprint(f"\\n最敏感设备群体：{sensitive_device}（提升{max_lift:.1f}%）")\n\n# 分设备上线建议\nprint("\\n=== 分设备上线建议 ===")\nfor device in devices:\n    dev_data = df[df["device"] == device]\n    ctrl = dev_data[dev_data["group"] == "control"]["conversion"].mean()\n    treat = dev_data[dev_data["group"] == "treatment"]["conversion"].mean()\n    lift = (treat - ctrl) / ctrl * 100 if ctrl > 0 else 0\n    \n    if lift > 5:\n        print(f"  {device}：✓ 建议全量上线（提升{lift:.1f}%）")\n    elif lift > 0:\n        print(f"  {device}：△ 建议小流量观察")\n    else:\n        print(f"  {device}：✗ 不建议上线")',
        commonMistake: '不会分组分析、混淆总体和细分结论。'
      }
    ]
  },
  '07-0': {
    title: '销量时间序列分析 - 综合练习',
    quizQuestions: [
      {
        id: 1,
        question: '时间序列分解中的"趋势"指什么？',
        options: ['固定周期的波动', '无法解释的随机波动', '长期的变化方向', '季节性变化'],
        correctAnswer: 2,
        explanation: '趋势(Trend)是时间序列长期的变化方向，可能是上升、下降或保持平稳。',
        commonMistake: '混淆趋势和季节性的定义。'
      },
      {
        id: 2,
        question: '移动平均的作用是？',
        options: ['预测未来值', '平滑短期波动，展示趋势', '消除季节性', '检测异常值'],
        correctAnswer: 1,
        explanation: '移动平均通过平均历史数据点来平滑短期波动，更清晰地展示长期趋势。',
        commonMistake: '误以为移动平均可以直接预测未来。'
      },
      {
        id: 3,
        question: '同比增长率是和什么相比？',
        options: ['上月', '去年同期', '年初', '上一周'],
        correctAnswer: 1,
        explanation: '同比是与去年同期相比，用于消除季节性影响，反映年度变化。',
        commonMistake: '混淆同比和环比的定义。'
      },
      {
        id: 4,
        question: 'MAE和RMSE的主要区别是？',
        options: ['MAE对异常值更敏感', 'RMSE对异常值更敏感', '两者完全相同', 'MAE总是大于RMSE'],
        correctAnswer: 1,
        explanation: 'RMSE通过平方放大异常值的影响，所以对异常值更敏感。',
        commonMistake: '不清楚两者区别。'
      },
      {
        id: 5,
        question: '时间序列预测中，加性模型和乘性模型的选择取决于？',
        options: ['数据量大小', '季节性波动是否随趋势增加而增加', '数据类型', '无所谓'],
        correctAnswer: 1,
        explanation: '如果季节性波动随趋势增加而增加，应该用乘性模型；否则用加性模型。',
        commonMistake: '随意选择模型类型。'
      },
      {
        id: 6,
        question: '在时间序列中，白噪声（White Noise）的特征是？',
        options: ['有明显的趋势', '有季节性', '序列间无相关性，纯粹随机波动', '可以用移动平均预测'],
        correctAnswer: 2,
        explanation: '白噪声是纯随机序列，没有任何可预测的模式，无法进行有意义的预测。',
        commonMistake: '误以为白噪声有规律。'
      },
      {
        id: 7,
        question: '时间序列分析中，"季节性调整"的目的是？',
        options: ['消除季节性，更清晰地看趋势', '增强季节性', '预测季节性', '没有实际作用'],
        correctAnswer: 0,
        explanation: '季节性调整去除季节性波动，使趋势和周期变化更明显，便于分析。',
        commonMistake: '忽视季节性调整的意义。'
      },
      {
        id: 8,
        question: '环比增长率 = (本期值 - 上期值) / 上期值 * 100%。',
        options: ['正确', '错误，分子分母颠倒', '错误，应该用同比', '无法确定'],
        correctAnswer: 0,
        explanation: '环比是与紧邻的上一个周期相比，反映短期变化。',
        commonMistake: '混淆同比和环比的计算公式。'
      },
      {
        id: 9,
        question: '当时间序列存在明显趋势时，应该使用什么方法预测？',
        options: ['简单移动平均', '指数平滑法（如Holt-Winters）', '朴素预测（用最后一个值）', '随机游走'],
        correctAnswer: 1,
        explanation: '带趋势的时间序列需要使用能捕捉趋势的模型，如Holt-Winters的线性趋势版本。',
        commonMistake: '用简单方法处理复杂序列。'
      },
      {
        id: 10,
        question: '差分操作（differencing）可以消除趋势，使非平稳序列变得平稳。',
        options: ['正确', '错误，差分会增强趋势', '错误，差分用于消除季节性', '无法确定'],
        correctAnswer: 0,
        explanation: '差分通过计算相邻时点的变化来消除趋势，是使序列平稳化的常用方法。',
        commonMistake: '不清楚差分的作用。'
      }
    ],
    judgmentQuestions: [
      {
        id: 1,
        question: '时间序列数据中，如果自相关（ACF）在多个滞后阶处显著不为零，说明数据存在趋势或季节性。',
        correctAnswer: true,
        explanation: 'ACF用于检测序列相关性，持续高值的ACF表明存在趋势或季节性模式。',
        commonMistake: '不会解读ACF图。'
      },
      {
        id: 2,
        question: '移动平均的窗口越大，趋势线越平滑，但可能滞后越严重。',
        correctAnswer: true,
        explanation: '大窗口平滑效果好，但对趋势变化的响应滞后也越大。',
        commonMistake: '不清楚窗口大小的权衡。'
      },
      {
        id: 3,
        question: '时间序列预测中，RMSE越低说明模型越好，与MAE无关。',
        correctAnswer: false,
        explanation: 'RMSE和MAE都是评估指标，RMSE对大误差更敏感，两者结合能更全面评估模型。',
        commonMistake: '只依赖单一指标。'
      },
      {
        id: 4,
        question: '差分操作（differencing）可以消除趋势，使非平稳序列变得平稳。',
        correctAnswer: true,
        explanation: '差分通过计算相邻时点的变化来消除趋势，是使序列平稳化的常用方法。',
        commonMistake: '不清楚差分的作用。'
      },
      {
        id: 5,
        question: '如果时间序列有明显的年度季节性，那么至少需要一年的数据才能捕捉季节模式。',
        correctAnswer: true,
        explanation: '年度季节性需要覆盖完整年度周期才能识别，至少需要12个月（如果是月度数据）。',
        commonMistake: '数据不足时强行建模。'
      },
      {
        id: 6,
        question: '时间序列中，离群点应该直接删除以保证预测准确性。',
        correctAnswer: false,
        explanation: '离群点可能是真实的极端事件（如促销、灾害），应该调查原因并决定如何处理，而不是简单删除。',
        commonMistake: '盲目删除异常值。'
      },
      {
        id: 7,
        question: '可以用ARIMA模型同时处理趋势和季节性。',
        correctAnswer: true,
        explanation: 'SARIMA（季节性ARIMA）可以同时建模趋势和季节性，通过设置(p,d,q)和(P,D,Q,s)参数。',
        commonMistake: '不知道SARIMA可以处理季节性。'
      },
      {
        id: 8,
        question: '环比增长率 = (本期值 - 上期值) / 上期值 * 100%。',
        correctAnswer: true,
        explanation: '环比是与紧邻的上一个周期相比，反映短期变化。',
        commonMistake: '混淆同比和环比的计算公式。'
      },
      {
        id: 9,
        question: '移动平均可以准确预测未来的趋势。',
        correctAnswer: false,
        explanation: '移动平均是平滑历史数据的方法，不能直接预测未来，只能作为预测的参考。',
        commonMistake: '误以为移动平均可以预测。'
      },
      {
        id: 10,
        question: '时间序列分解中，残差（Residual）是无法解释的随机波动。',
        correctAnswer: true,
        explanation: '残差是原始数据减去趋势、季节性后的剩余部分，代表无法解释的随机波动。',
        commonMistake: '不清楚残差的含义。'
      }
    ],
    codingChallenges: [
      {
        id: 1,
        description: '【综合实战】对销量数据进行完整的时间序列分析：加载数据并设置为时间索引，计算7日和30日移动平均，绘制趋势对比图，检测异常时间点（偏离均值超过2倍标准差），并计算同比和环比增长率。',
        initialCode: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("datasets/time_series_sales.csv")\ndf["date"] = pd.to_datetime(df["date"])\ndf = df.sort_values("date").set_index("date")\n\n# 请编写代码：\n# 1. 计算7日和30日移动平均\n# 2. 绘制趋势对比图\n# 3. 检测异常时间点（偏离均值>2倍标准差）\n# 4. 计算同比和环比增长率\n',
        expectedOutput: '趋势对比图\n异常时间点：...\n同比/环比增长率：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("datasets/time_series_sales.csv")\ndf["date"] = pd.to_datetime(df["date"])\ndf = df.sort_values("date").set_index("date")\n\n# 移动平均\ndf["ma_7"] = df["sales"].rolling(window=7).mean()\ndf["ma_30"] = df["sales"].rolling(window=30).mean()\n\n# 趋势对比图\nplt.figure(figsize=(14, 6))\nplt.plot(df.index, df["sales"], alpha=0.5, label="原始数据")\nplt.plot(df.index, df["ma_7"], linewidth=2, label="7日均线")\nplt.plot(df.index, df["ma_30"], linewidth=2, label="30日均线")\nplt.xlabel("日期")\nplt.ylabel("销量")\nplt.title("销量趋势分析")\nplt.legend()\nplt.grid(True, alpha=0.3)\nplt.tight_layout()\nplt.savefig("trend_analysis.png")\nplt.close()\n\n# 异常检测\nmean_sales = df["sales"].mean()\nstd_sales = df["sales"].std()\nlower = mean_sales - 2 * std_sales\nupper = mean_sales + 2 * std_sales\noutliers = df[(df["sales"] < lower) | (df["sales"] > upper)]\nprint(f"异常检测：均值={mean_sales:.0f}，标准差={std_sales:.0f}")\nprint(f"正常范围：[{lower:.0f}, {upper:.0f}]")\nprint(f"发现 {len(outliers)} 个异常时间点")\nif len(outliers) > 0:\n    print(outliers[["sales"]])\n\n# 同比和环比\ndf["环比"] = df["sales"].pct_change() * 100\ndf["同比"] = df["sales"].pct_change(periods=12) * 100\nprint("\\n增长率：")\nprint(df[["sales", "环比", "同比"]].tail(10))',
        commonMistake: '不会同时计算多个移动平均、异常检测逻辑错误。'
      },
      {
        id: 2,
        description: '【综合实战】实现简单的销量预测：使用过去7天的移动平均预测下一天，计算预测误差MAE和RMSE，并用预测值填充未来3天的销量，绘制预测对比图。',
        initialCode: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("datasets/time_series_sales.csv")\ndf["date"] = pd.to_datetime(df["date"])\ndf = df.sort_values("date").set_index("date")\n\n# 请编写代码：\n# 1. 使用7日移动平均预测\n# 2. 计算MAE和RMSE\n# 3. 预测未来3天销量\n# 4. 绘制预测对比图\n',
        expectedOutput: 'MAE：...\nRMSE：...\n未来3天预测：...\n预测对比图',
        correctAnswer: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("datasets/time_series_sales.csv")\ndf["date"] = pd.to_datetime(df["date"])\ndf = df.sort_values("date").set_index("date")\n\n# 移动平均预测\ndf["forecast"] = df["sales"].rolling(window=7).mean().shift(1)\ndf["error"] = df["sales"] - df["forecast"]\ndf["abs_error"] = abs(df["error"])\n\n# 计算误差指标\nvalid_data = df.dropna(subset=["forecast"])\nmae = valid_data["abs_error"].mean()\nrmse = np.sqrt((valid_data["error"] ** 2).mean())\nprint(f"预测误差评估：")\nprint(f"  MAE（平均绝对误差）：{mae:.2f}")\nprint(f"  RMSE（均方根误差）：{rmse:.2f}")\n\n# 预测未来3天\nlast_7_avg = df["sales"].tail(7).mean()\nlast_date = df.index[-1]\nfuture_dates = pd.date_range(start=last_date + pd.Timedelta(days=1), periods=3)\nfuture_sales = [last_7_avg] * 3\nprint(f"\\n未来3天销量预测：")\nfor date, sales in zip(future_dates, future_sales):\n    print(f"  {date.strftime(\'%Y-%m-%d\')}: {sales:.0f}")\n\n# 预测对比图\nplt.figure(figsize=(12, 6))\nplt.plot(df.index[-30:], df["sales"].tail(30), "b-", label="实际销量", marker="o")\nplt.plot(df.index[-30:], df["forecast"].tail(30), "r--", label="预测值", marker="x")\nplt.axhline(y=last_7_avg, color="green", linestyle=":", label=f"未来预测({last_7_avg:.0f})")\nplt.xlabel("日期")\nplt.ylabel("销量")\nplt.title("销量预测对比（最后30天+未来3天）")\nplt.legend()\nplt.grid(True, alpha=0.3)\nplt.tight_layout()\nplt.savefig("forecast_comparison.png")\nplt.close()\nprint("\\n预测对比图已保存")',
        commonMistake: 'shift(1)忘记设置、RMSE计算错误、预测逻辑不对。'
      }
    ]
  },
  '08-0': {
    title: '数据分析特征工程 - 综合练习',
    quizQuestions: [
      {
        id: 1,
        question: '特征工程的目的是？',
        options: ['减少数据量', '将原始数据转换为模型可用特征', '删除数据', '可视化数据'],
        correctAnswer: 1,
        explanation: '特征工程是将原始数据转换为模型可用特征的过程，提升模型效果。',
        commonMistake: '对特征工程的核心目的理解不清。'
      },
      {
        id: 2,
        question: 'Z-Score标准化和MinMaxScaler的主要区别是？',
        options: ['两者完全相同', 'Z-Score转换为均值0标准差1，MinMaxScaler转换到[0,1]', 'Z-Score转换到[0,1]，MinMaxScaler转换到均值0', 'Z-Score用于分类，MinMaxScaler用于回归'],
        correctAnswer: 1,
        explanation: 'Z-Score是标准化（基于分布），MinMaxScaler是归一化（基于范围）。',
        commonMistake: '混淆两者的变换方式。'
      },
      {
        id: 3,
        question: '特征选择和特征提取的区别是？',
        options: ['特征选择从原特征中挑选，特征提取生成新特征', '两者没有区别', '特征选择生成新特征，特征提取挑选原特征', '特征提取用于监督学习'],
        correctAnswer: 0,
        explanation: '特征选择从现有特征中选择子集，特征提取（如PCA）通过变换生成新特征。',
        commonMistake: '混淆两者的概念。'
      },
      {
        id: 4,
        question: '高维数据（如1000个特征）进行PCA降维时，应该？',
        options: ['直接降维到2维', '先确定保留多少主成分（如保留80%方差），再降维', '降维到10维', '不使用PCA'],
        correctAnswer: 1,
        explanation: '应该基于方差解释比例确定主成分数量，而不是随意设定目标维度。',
        commonMistake: '盲目设定降维目标。'
      },
      {
        id: 5,
        question: '特征交叉（Feature Crossing）的作用是？',
        options: ['减少特征数量', '捕捉特征间的非线性关系', '提高计算速度', '消除噪声'],
        correctAnswer: 1,
        explanation: '特征交叉通过组合原有特征，捕捉特征间的交互作用和非线性关系。',
        commonMistake: '不清楚特征交叉的意义。'
      },
      {
        id: 6,
        question: '树模型（如随机森林、GBDT）对特征缩放敏感吗？',
        options: ['非常敏感，必须标准化', '不敏感，基于分裂点判断', '取决于树的数量', '只对类别特征敏感'],
        correctAnswer: 1,
        explanation: '树模型基于特征阈值分裂，不需要特征缩放。但线性模型和神经网络需要缩放。',
        commonMistake: '以为所有模型都需要特征缩放。'
      },
      {
        id: 7,
        question: 'One-Hot编码和Label编码的区别是？',
        options: ['两者完全相同', 'One-Hot增加维度，Label编码保持单一数值', 'Label编码用于数值特征', '没有区别'],
        correctAnswer: 1,
        explanation: 'One-Hot将类别扩展为多个0/1列，Label编码将类别映射为整数，适用于不同场景。',
        commonMistake: '混淆编码方式。'
      },
      {
        id: 8,
        question: '共线性（multicollinearity）特征对模型的影响是？',
        options: ['提升模型效果', '增加模型稳定性', '导致模型不稳定、解释困难', '无影响'],
        correctAnswer: 2,
        explanation: '共线性特征信息冗余，导致模型权重不稳定、解释困难，应该处理。',
        commonMistake: '忽视共线性的影响。'
      },
      {
        id: 9,
        question: '特征工程越复杂越好，特征越多模型效果越强。',
        options: ['正确', '错误，过多无关或冗余特征会降低模型泛化能力', '无法确定', '取决于数据量'],
        correctAnswer: 1,
        explanation: '过多无关或冗余特征会降低模型泛化能力，增加过拟合风险。',
        commonMistake: '追求特征数量忽视质量。'
      },
      {
        id: 10,
        question: '特征标准化应该在划分训练集和测试集之后进行。',
        options: ['正确', '错误，应该在划分之前', '无所谓', '只能在划分之前'],
        correctAnswer: 0,
        explanation: '应该先用训练集拟合scaler，再用训练集的scaler变换测试集，防止数据泄露。',
        commonMistake: '不注意数据泄露问题。'
      }
    ],
    judgmentQuestions: [
      {
        id: 1,
        question: '特征工程越复杂越好，特征越多模型效果越强。',
        correctAnswer: false,
        explanation: '过多无关或冗余特征会降低模型泛化能力，增加过拟合风险。',
        commonMistake: '追求特征数量忽视质量。'
      },
      {
        id: 2,
        question: '特征标准化应该在划分训练集和测试集之后进行。',
        correctAnswer: true,
        explanation: '应该先用训练集拟合scaler，再用训练集的scaler变换测试集，防止数据泄露。',
        commonMistake: '不注意数据泄露问题。'
      },
      {
        id: 3,
        question: 'PCA降维后，主成分是原始特征的线性组合。',
        correctAnswer: true,
        explanation: 'PCA通过正交变换将原始特征投影到主成分空间，主成分是原始特征的线性组合。',
        commonMistake: '不清楚PCA的原理。'
      },
      {
        id: 4,
        question: '对于高基类别特征（如用户ID），可以使用One-Hot编码。',
        correctAnswer: false,
        explanation: '高基类别特征（如用户ID可能有数百万个）使用One-Hot会产生极高维度，应该用标签编码或目标编码。',
        commonMistake: '对高基类别特征处理不当。'
      },
      {
        id: 5,
        question: '特征重要性（Feature Importance）可以帮助我们理解模型，但不代表因果关系。',
        correctAnswer: true,
        explanation: '特征重要性反映特征对预测的贡献，但相关不等于因果。',
        commonMistake: '过度解读特征重要性。'
      },
      {
        id: 6,
        question: '在特征工程中，"时间戳"应该直接作为数值特征使用。',
        correctAnswer: false,
        explanation: '时间戳应该提取出年、月、日、小时、星期等特征，或计算与特定时间点的间隔。',
        commonMistake: '直接使用原始时间戳。'
      },
      {
        id: 7,
        question: '分箱（Binning）可以将连续特征离散化，有助于处理异常值和增加模型鲁棒性。',
        correctAnswer: true,
        explanation: '分箱将连续值分段，可以减少异常值影响，使模型更鲁棒。',
        commonMistake: '不清楚分箱的作用。'
      },
      {
        id: 8,
        question: '目标编码（Target Encoding）可以直接用测试集数据计算编码值。',
        correctAnswer: false,
        explanation: '目标编码只能用训练集计算，防止数据泄露。测试集应该用训练集计算的编码映射。',
        commonMistake: '不注意目标编码的数据泄露。'
      },
      {
        id: 9,
        question: '特征缩放对树模型（如随机森林）的效果没有影响。',
        correctAnswer: true,
        explanation: '树模型基于特征阈值分裂，不受特征量纲影响。',
        commonMistake: '以为所有模型都需要特征缩放。'
      },
      {
        id: 10,
        question: 'L1正则化可以产生稀疏特征，即自动进行特征选择。',
        correctAnswer: true,
        explanation: 'L1正则化会使部分权重为0，从而实现特征选择的效果。',
        commonMistake: '不清楚L1正则化的作用。'
      }
    ],
    codingChallenges: [
      {
        id: 1,
        description: '【综合实战】完成完整的特征工程流程：读取客户数据，对数值特征进行Z-Score标准化，对类别特征（如城市）进行One-Hot编码，计算特征间的相关性矩阵并找出高相关特征对（>0.9），输出处理后的特征矩阵形状。',
        initialCode: 'import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\n\ndf = pd.read_csv("datasets/customer_features.csv")\n\n# 请编写代码：\n# 1. 对数值特征进行Z-Score标准化\n# 2. 对城市等类别特征进行One-Hot编码\n# 3. 计算相关性矩阵\n# 4. 找出高相关特征对（>0.9）\n',
        expectedOutput: '标准化后特征统计：...\nOne-Hot编码后形状：...\n高相关特征对：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\n\ndf = pd.read_csv("datasets/customer_features.csv")\n\n# 数值特征标准化\nnum_features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]\nscaler = StandardScaler()\ndf_scaled = df.copy()\ndf_scaled[num_features] = scaler.fit_transform(df[num_features])\nprint("Z-Score标准化后统计：")\nprint(df_scaled[num_features].describe().round(2))\n\n# 类别特征One-Hot编码\ncat_features = ["city"]\ndf_encoded = pd.get_dummies(df_scaled, columns=cat_features, drop_first=True)\nprint(f"\\n编码后特征矩阵形状：{df_encoded.shape}")\n\n# 相关性矩阵\ncorr_matrix = df_scaled[num_features].corr()\nprint("\\n相关性矩阵：")\nprint(corr_matrix.round(3))\n\n# 高相关特征对\nprint("\\n高相关特征对（|r|>0.9）：")\nhigh_corr = []\nfor i in range(len(corr_matrix.columns)):\n    for j in range(i+1, len(corr_matrix.columns)):\n        if abs(corr_matrix.iloc[i, j]) > 0.9:\n            high_corr.append((corr_matrix.columns[i], corr_matrix.columns[j], corr_matrix.iloc[i, j]))\nif high_corr:\n    for f1, f2, r in high_corr:\n        print(f"  {f1} <-> {f2}: {r:.3f}")\nelse:\n    print("  无高相关特征对")',
        commonMistake: '标准化和编码顺序错误、不会用get_dummies、相关性计算错误。'
      },
      {
        id: 2,
        description: '【综合实战】使用PCA进行降维分析：读取客户特征数据，标准化后进行PCA，计算各主成分的方差解释比例，绘制累积方差解释比例图，选取保留95%方差所需的主成分数量，并输出降维后的数据形状。',
        initialCode: 'import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("datasets/customer_features.csv")\nfeatures = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]\nX = df[features]\n\n# 请编写代码：\n# 1. 标准化特征\n# 2. 进行PCA\n# 3. 计算方差解释比例\n# 4. 绘制累积方差图\n# 5. 选取保留95%方差的主成分数\n',
        expectedOutput: '各主成分方差解释：...\n累积方差图\n保留95%方差所需主成分数：...\n降维后形状：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("datasets/customer_features.csv")\nfeatures = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]\nX = df[features]\n\n# 标准化\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\n# PCA\npca_full = PCA()\npca_full.fit(X_scaled)\n\n# 方差解释比例\nexplained_var = pca_full.explained_variance_ratio_\ncumsum_var = np.cumsum(explained_var)\n\nprint("各主成分方差解释比例：")\nfor i, (ev, cv) in enumerate(zip(explained_var, cumsum_var)):\n    print(f"  PC{i+1}: {ev:.2%}（累积: {cv:.2%}）")\n\n# 累积方差图\nplt.figure(figsize=(10, 5))\nplt.bar(range(1, len(explained_var)+1), explained_var, alpha=0.6, label="单个主成分")\nplt.plot(range(1, len(cumsum_var)+1), cumsum_var, "ro-", label="累积方差")\nplt.axhline(y=0.95, color="green", linestyle="--", label="95%阈值")\nplt.xlabel("主成分")\nplt.ylabel("方差解释比例")\nplt.title("PCA方差解释比例")\nplt.legend()\nplt.grid(True, alpha=0.3)\nplt.tight_layout()\nplt.savefig("pca_variance.png")\nplt.close()\n\n# 保留95%方差的主成分数\nn_components_95 = np.argmax(cumsum_var >= 0.95) + 1\nprint(f"\\n保留95%方差所需主成分数：{n_components_95}")\n\n# 降维\npca = PCA(n_components=n_components_95)\nX_pca = pca.fit_transform(X_scaled)\nprint(f"降维后数据形状：{X_pca.shape}")',
        commonMistake: '不懂如何确定主成分数量、方差比例计算错误、图表绘制不当。'
      }
    ]
  },
  '09-0': {
    title: '全域数据异常值检测 - 综合练习',
    quizQuestions: [
      {
        id: 1,
        question: '异常值检测中，3σ原则适用于什么分布？',
        options: ['任意分布', '近似正态分布', '偏态分布', '均匀分布'],
        correctAnswer: 1,
        explanation: '3σ原则基于正态分布假设，数据落在3σ之外的概率很小。',
        commonMistake: '忽略3σ原则的分布假设。'
      },
      {
        id: 2,
        question: 'IQR四分位距方法中，异常值的范围是？',
        options: ['Q1 - IQR 到 Q3 + IQR', 'Q1 - 1.5*IQR 到 Q3 + 1.5*IQR', 'Q1 - IQR 到 Q3 + 1.5*IQR', 'Q1 - 1.5*IQR 到 Q3 + IQR'],
        correctAnswer: 1,
        explanation: 'IQR方法中，异常值定义为小于Q1-1.5*IQR或大于Q3+1.5*IQR的值。',
        commonMistake: '记错了IQR方法的阈值系数。'
      },
      {
        id: 3,
        question: '孤立森林（IsolationForest）的核心思想是？',
        options: ['找到密集区域', '异常点更容易被孤立', '计算距离', '聚类分析'],
        correctAnswer: 1,
        explanation: '异常点更容易被随机切分孤立出来，因此路径长度更短。',
        commonMistake: '不理解孤立森林的原理。'
      },
      {
        id: 4,
        question: '多变量异常检测相比单变量的优势是？',
        options: ['计算更快', '能发现联合异常', '更简单', '不需要标准化'],
        correctAnswer: 1,
        explanation: '多变量检测能发现那些单个变量正常但联合起来是异常的情况。',
        commonMistake: '忽视多变量分析的重要性。'
      },
      {
        id: 5,
        question: '在异常值处理中，"删除"策略适用于什么情况？',
        options: ['所有异常值', '明确是数据录入错误或测量仪故障导致的异常', '真实存在的极端值', '所有缺失值'],
        correctAnswer: 1,
        explanation: '只有当异常值确定是错误或故障导致时才应该删除，真实极端值应该保留或特殊处理。',
        commonMistake: '过度删除异常值。'
      },
      {
        id: 6,
        question: 'Z-Score大于3的点在正态分布下约占多少比例？',
        options: ['约1%', '约0.3%', '约5%', '约10%'],
        correctAnswer: 1,
        explanation: '在正态分布下，约0.27%的数据点会落在±3σ之外。',
        commonMistake: '不清楚正态分布的概率。'
      },
      {
        id: 7,
        question: 'MAD（绝对中位差）方法相比IQR方法的优势是？',
        options: ['更简单', '对异常值更鲁棒', '计算更快', '更准确'],
        correctAnswer: 1,
        explanation: 'MAD使用中位数，对异常值完全不敏感，而IQR虽然鲁棒但对极端异常值仍敏感。',
        commonMistake: '不清楚MAD的鲁棒性优势。'
      },
      {
        id: 8,
        question: '异常值对以下哪个统计量影响最大？',
        options: ['中位数', '均值', '众数', '最大值'],
        correctAnswer: 1,
        explanation: '均值对异常值最敏感，一个极端异常值会大幅改变均值。',
        commonMistake: '以为所有统计量都同样受异常值影响。'
      },
      {
        id: 9,
        question: '异常值检测应该在特征工程之后进行。',
        options: ['正确', '错误，通常在数据清洗阶段进行', '无所谓', '取决于数据质量'],
        correctAnswer: 1,
        explanation: '异常值检测通常在数据清洗阶段进行，早于特征工程。',
        commonMistake: '顺序安排错误。'
      },
      {
        id: 10,
        question: '可以使用多个异常检测方法的结果进行综合判断。',
        options: ['正确', '错误，应该只用一个方法', '无所谓', '增加复杂度没有意义'],
        correctAnswer: 0,
        explanation: '综合多种方法（如IQR、Z-Score、孤立森林）的结果可以更全面地识别异常。',
        commonMistake: '只依赖单一方法。'
      }
    ],
    judgmentQuestions: [
      {
        id: 1,
        question: '异常值就是错误数据，应该全部删除或替换。',
        correctAnswer: false,
        explanation: '异常值可能是真实的极端情况（如高额订单），应该调查原因后再决定处理方式。',
        commonMistake: '一刀切处理异常值。'
      },
      {
        id: 2,
        question: 'IQR方法不需要假设数据分布，适用于任何分布的数据。',
        correctAnswer: true,
        explanation: 'IQR是基于分位数的非参数方法，不依赖数据分布假设。',
        commonMistake: '以为IQR需要正态分布假设。'
      },
      {
        id: 3,
        question: '可以使用多个异常检测方法的结果进行综合判断。',
        correctAnswer: true,
        explanation: '综合多种方法（如IQR、Z-Score、孤立森林）的结果可以更全面地识别异常。',
        commonMistake: '只依赖单一方法。'
      },
      {
        id: 4,
        question: '孤立森林中，contamination参数表示数据中真实的异常比例。',
        correctAnswer: false,
        explanation: 'contamination是用户预期的异常比例，用于设置决策边界的阈值，不一定是真实比例。',
        commonMistake: '误解contamination的含义。'
      },
      {
        id: 5,
        question: '如果数据中存在大量异常值，使用均值填充会比中位数填充效果更好。',
        correctAnswer: false,
        explanation: '异常值会严重影响均值，此时应该使用中位数填充。',
        commonMistake: '不知道异常值对均值的影响。'
      },
      {
        id: 6,
        question: '可以通过可视化（如箱线图、散点图）直观地发现异常值。',
        correctAnswer: true,
        explanation: '可视化是发现异常值的重要手段，箱线图能清晰展示边界外的点。',
        commonMistake: '忽视可视化在异常检测中的作用。'
      },
      {
        id: 7,
        question: '业务规则检测和统计方法检测的异常值应该完全一致。',
        correctAnswer: false,
        explanation: '业务规则基于常识（如年龄>150），统计方法基于数据分布，两者检测结果可能不同。',
        commonMistake: '混淆两种检测方法。'
      },
      {
        id: 8,
        question: '异常值检测前不需要了解数据的业务背景。',
        correctAnswer: false,
        explanation: '了解业务背景对于判断异常值是否有意义至关重要。',
        commonMistake: '忽视业务知识的重要性。'
      },
      {
        id: 9,
        question: 'Z-Score方法对异常值的敏感度高于IQR方法。',
        correctAnswer: true,
        explanation: 'Z-Score基于均值和标准差，而均值和标准差都受异常值影响，所以Z-Score对异常值更敏感。',
        commonMistake: '不清楚两种方法的敏感性差异。'
      },
      {
        id: 10,
        question: '异常值处理后应该进行验证，确保处理正确。',
        correctAnswer: true,
        explanation: '处理异常值后应验证结果，确保没有引入新问题。',
        commonMistake: '处理完不验证。'
      }
    ],
    codingChallenges: [
      {
        id: 1,
        description: '【综合实战】使用多种方法进行综合异常检测：读取客户数据，首先用业务规则检测（年龄<0或>120，收入<0），然后用IQR方法检测各数值列异常，最后用孤立森林检测多维异常，输出各方法检测到的异常记录并比较。',
        initialCode: 'import pandas as pd\nimport numpy as np\nfrom sklearn.ensemble import IsolationForest\n\ndf = pd.read_csv("datasets/customer_features.csv")\nfeatures = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]\n\n# 请编写代码：\n# 1. 业务规则检测\n# 2. IQR方法检测各列\n# 3. 孤立森林检测\n# 4. 比较各方法结果\n',
        expectedOutput: '业务规则异常：...\nIQR异常：...\n孤立森林异常：...\n综合分析：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\nfrom sklearn.ensemble import IsolationForest\n\ndf = pd.read_csv("datasets/customer_features.csv")\nfeatures = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]\n\n# 业务规则检测\nprint("=== 业务规则检测 ===")\nrules_violations = df[(df["age"] < 0) | (df["age"] > 120) | (df["income"] < 0)]\nprint(f"发现 {len(rules_violations)} 条业务规则违规")\n\n# IQR方法检测\nprint("\\n=== IQR方法检测 ===")\niqr_outliers = set()\nfor col in features:\n    Q1 = df[col].quantile(0.25)\n    Q3 = df[col].quantile(0.75)\n    IQR = Q3 - Q1\n    lower = Q1 - 1.5 * IQR\n    upper = Q3 + 1.5 * IQR\n    outliers_idx = df[(df[col] < lower) | (df[col] > upper)].index\n    iqr_outliers.update(outliers_idx)\n    print(f"  {col}: 发现 {len(outliers_idx)} 个异常值")\nprint(f"IQR共检测到 {len(iqr_outliers)} 条异常记录")\n\n# 孤立森林检测\nprint("\\n=== 孤立森林检测 ===")\nX = df[features]\niso_forest = IsolationForest(contamination=0.1, random_state=42)\ndf["anomaly_iso"] = iso_forest.fit_predict(X)\nanomaly_idx = df[df["anomaly_iso"] == -1].index\nprint(f"发现 {len(anomaly_idx)} 条异常记录")\n\n# 综合分析\nprint("\\n=== 综合分析 ===")\nrules_idx = set(rules_violations.index)\nall_outliers = rules_idx | iqr_outliers | set(anomaly_idx)\nprint(f"各方法共检测到 {len(all_outliers)} 条唯一异常记录")\n\noverlap = rules_idx & iqr_outliers & set(anomaly_idx)\nprint(f"三种方法都检测到的：{len(overlap)} 条")',
        commonMistake: '不会综合多种方法、忽略方法间的差异。'
      },
      {
        id: 2,
        description: '【综合实战】对检测到的异常值进行处理：根据异常类型分别采用删除、替换或保留策略，更新数据集，并验证处理后的数据质量（检查分布、缺失值、统计指标）。',
        initialCode: 'import pandas as pd\nimport numpy as np\n\n# 假设已有df和检测到的异常索引\n# 请编写代码：\n# 1. 区分不同类型的异常（明显错误 vs 极端值）\n# 2. 对明显错误进行删除或替换\n# 3. 对极端值进行标记\n# 4. 验证处理后的数据质量\n',
        expectedOutput: '异常处理方案：...\n处理后数据统计：...\n数据质量验证：...',
        correctAnswer: 'import pandas as pd\nimport numpy as np\n\ndf_clean = df.copy()\ndf_clean["is_anomaly"] = 0\n\n# 业务规则异常（明显错误）- 替换为中位数\nprint("=== 业务规则异常处理 ===")\nbusiness_errors = df_clean[(df_clean["age"] < 0) | (df_clean["age"] > 120) | (df_clean["income"] < 0)]\nprint(f"发现 {len(business_errors)} 条明显错误")\nfor idx in business_errors.index:\n    if df_clean.loc[idx, "age"] < 0 or df_clean.loc[idx, "age"] > 120:\n        df_clean.loc[idx, "age"] = df_clean["age"].median()\n    if df_clean.loc[idx, "income"] < 0:\n        df_clean.loc[idx, "income"] = df_clean["income"].median()\n\n# 统计异常（极端值）- 标记但不删除\nprint("\\n=== 统计异常标记 ===")\noutlier_mask = df_clean.index.isin(iqr_outliers) & ~df_clean.index.isin(business_errors.index)\ndf_clean.loc[outlier_mask, "is_anomaly"] = 1\nprint(f"标记 {outlier_mask.sum()} 条极端值为异常（保留）")\n\n# 处理后数据质量验证\nprint("\\n=== 处理后数据质量验证 ===")\nprint("数据统计：")\nprint(df_clean[features].describe().round(2))\n\nprint("\\n缺失值检查：")\nprint(df_clean.isnull().sum())\n\nprint("\\n异常标记分布：")\nprint(df_clean["is_anomaly"].value_counts())\n\n# 保存\ndf_clean.to_csv("customer_data_cleaned.csv", index=False)\nprint("\\n处理后数据已保存")',
        commonMistake: '处理策略不当、验证不完整。'
      }
    ]
  },
  '10-0': {
    title: '多源数据集融合整合 - 综合练习',
    quizQuestions: [
      {
        id: 1,
        question: 'pd.concat和pd.merge的主要区别是？',
        options: ['concat用于纵向拼接，merge用于横向合并', 'concat用于横向合并，merge用于纵向拼接', '两者功能完全相同', 'merge更快'],
        correctAnswer: 0,
        explanation: 'concat用于纵向（增加行）拼接相同结构的表，merge用于横向（增加列）按键合并。',
        commonMistake: '混淆两种合并方式的使用场景。'
      },
      {
        id: 2,
        question: 'inner join和left join的区别是？',
        options: ['inner只保留左边有的键，left保留全部', 'inner只保留两边都有的键', 'left只保留右边有的键', '两者没有区别'],
        correctAnswer: 1,
        explanation: 'inner join只保留两表键值匹配的记录，left join保留左表全部记录。',
        commonMistake: '混淆inner和left join的行为。'
      },
      {
        id: 3,
        question: '多表关联时需要注意什么？',
        options: ['随意合并顺序', '避免笛卡尔积', '不需要考虑键的类型', '表越多越好'],
        correctAnswer: 1,
        explanation: '多表关联要注意合并顺序和键的匹配，避免产生笛卡尔积导致数据量爆炸。',
        commonMistake: '忽视笛卡尔积的风险。'
      },
      {
        id: 4,
        question: '当两表有重名字段时，merge会如何处理？',
        options: ['报错', '自动添加后缀区分', '覆盖', '跳过'],
        correctAnswer: 1,
        explanation: 'merge会自动给重名字段添加后缀区分，可用suffixes参数指定。',
        commonMistake: '不清楚merge如何处理重名字段。'
      },
      {
        id: 5,
        question: '数据融合后验证的内容不包括？',
        options: ['缺失值检查', '匹配率检查', '删除所有不匹配记录', '重复记录检查'],
        correctAnswer: 2,
        explanation: '验证包括缺失值、匹配率、重复记录检查，但不应盲目删除所有不匹配记录。',
        commonMistake: '过于激进地处理不匹配数据。'
      },
      {
        id: 6,
        question: 'merge的how参数有哪些选项？',
        options: ['only', 'inner, outer, left, right, cross', 'join, union', 'first, last'],
        correctAnswer: 1,
        explanation: 'merge的how参数有：inner, outer, left, right, cross。',
        commonMistake: '记不全how的选项。'
      },
      {
        id: 7,
        question: 'concat时ignore_index=True的作用是？',
        options: ['忽略索引', '重置索引为0,1,2...', '删除索引', '保留原索引'],
        correctAnswer: 1,
        explanation: 'ignore_index=True会丢弃原有索引，重置为0,1,2...的整数索引。',
        commonMistake: '不清楚ignore_index参数的作用。'
      },
      {
        id: 8,
        question: '笛卡尔积在什么情况下会产生？',
        options: ['使用inner join时', '使用cross join或两表无关联键时', '使用left join时', '永远不会'],
        correctAnswer: 1,
        explanation: '当两表没有正确的关联键或使用cross join时，会产生笛卡尔积（所有行两两组合）。',
        commonMistake: '不清楚笛卡尔积的产生条件。'
      },
      {
        id: 9,
        question: '使用merge时，如果键名不同，可以用left_on和right_on指定。',
        options: ['正确', '错误，必须先重命名', '无所谓', '只能用on参数'],
        correctAnswer: 0,
        explanation: '当两表的关联键列名不同时，用left_on和right_on分别指定。',
        commonMistake: '不知道如何处理键名不同的情况。'
      },
      {
        id: 10,
        question: '数据融合时，应该先处理质量差的表，再处理质量好的表。',
        options: ['正确', '错误，通常以质量最好的表作为主表', '无所谓', '同时处理'],
        correctAnswer: 1,
        explanation: '通常先以质量最好的表作为主表，再关联其他表，避免误差传播。',
        commonMistake: '合并顺序安排不当。'
      }
    ],
    judgmentQuestions: [
      {
        id: 1,
        question: 'merge比join更灵活，可以基于任何列进行关联。',
        correctAnswer: true,
        explanation: 'merge可以基于任意列（或列的列表）进行关联，而join基于索引。',
        commonMistake: '以为join比merge更灵活。'
      },
      {
        id: 2,
        question: 'concat可以合并任意数量的DataFrame。',
        correctAnswer: true,
        explanation: 'pd.concat([df1, df2, df3, ...]) 可以合并多个DataFrame。',
        commonMistake: '以为concat只能合并两个。'
      },
      {
        id: 3,
        question: '使用left join时，如果右表中没有匹配的键，对应列会填充为NaN。',
        correctAnswer: true,
        explanation: 'left join保留左表全部记录，右表无匹配时填充NaN。',
        commonMistake: '不清楚left join的填充规则。'
      },
      {
        id: 4,
        question: 'outer join是inner join和left join的组合。',
        correctAnswer: false,
        explanation: 'outer join（full join）返回两表所有记录，没有匹配的填充NaN。',
        commonMistake: '误解outer join的含义。'
      },
      {
        id: 5,
        question: '合并后的数据中，如果左表有100行，右表有100行，merge后最多可能有10000行（笛卡尔积）。',
        correctAnswer: true,
        explanation: '如果两表有重复的键又没有指定正确的合并方式，可能产生笛卡尔积。',
        commonMistake: '忽视笛卡尔积的风险。'
      },
      {
        id: 6,
        question: '使用merge时，如果键名不同，可以用left_on和right_on指定。',
        correctAnswer: true,
        explanation: '当两表的关联键列名不同时，用left_on和right_on分别指定。',
        commonMistake: '不知道如何处理键名不同的情况。'
      },
      {
        id: 7,
        question: 'concat的axis参数默认为0，表示纵向拼接。',
        correctAnswer: true,
        explanation: 'axis=0表示按行拼接（增加行），axis=1表示按列拼接（增加列）。',
        commonMistake: '记错axis的默认值。'
      },
      {
        id: 8,
        question: '数据融合时，应该先处理质量差的表，再处理质量好的表。',
        correctAnswer: false,
        explanation: '通常先以质量最好的表作为主表，再关联其他表，避免误差传播。',
        commonMistake: '合并顺序安排不当。'
      },
      {
        id: 9,
        question: 'left join和right join可以通过反转表的顺序互相替代。',
        correctAnswer: true,
        explanation: 'A left join B 等于 B right join A。',
        commonMistake: '不清楚left和right join的对称性。'
      },
      {
        id: 10,
        question: '在融合后的数据中，应该删除所有包含NaN的行以保证数据质量。',
        correctAnswer: false,
        explanation: 'NaN可能是有意义的（如左连接中右表无匹配），不应盲目删除。',
        commonMistake: '过于激进地处理缺失值。'
      }
    ],
    codingChallenges: [
      {
        id: 1,
        description: '【综合实战】实现完整的多源数据融合：读取订单表、客户表、产品表三张表，使用left join将订单与客户关联，再与产品表关联，验证融合后的数据质量（缺失值、匹配率），并计算各维度的销售额统计。',
        initialCode: 'import pandas as pd\n\norders = pd.read_csv("datasets/retail_orders.csv")\ncustomers = pd.read_csv("datasets/customer_info.csv")\nproducts = pd.read_csv("datasets/product_catalog.csv")\n\n# 请编写代码：\n# 1. 订单表关联客户表（left join）\n# 2. 结果关联产品表（left join）\n# 3. 验证数据质量\n# 4. 各维度销售统计\n',
        expectedOutput: '融合后数据形状：...\n数据质量报告：...\n各维度销售统计：...',
        correctAnswer: 'import pandas as pd\n\norders = pd.read_csv("datasets/retail_orders.csv")\ncustomers = pd.read_csv("datasets/customer_info.csv")\nproducts = pd.read_csv("datasets/product_catalog.csv")\n\nprint(f"原始数据：订单{orders.shape}，客户{customers.shape}，产品{products.shape}")\n\n# 订单关联客户\nmerged = pd.merge(orders, customers, on="customer_id", how="left", suffixes=("", "_customer"))\nprint(f"\\n关联客户后：{merged.shape}")\n\n# 关联产品\nmerged = pd.merge(merged, products, on="product_id", how="left", suffixes=("", "_product"))\nprint(f"关联产品后：{merged.shape}")\n\n# 数据质量验证\nprint("\\n=== 数据质量验证 ===")\nprint(f"总记录数：{len(merged)}")\nprint(f"客户匹配率：{merged[\"name\"].notna().mean():.1%}")\nprint(f"产品匹配率：{merged[\"name_product\"].notna().mean():.1%}")\n\nprint("\\n缺失值统计：")\nmissing = merged.isnull().sum()\nmissing_cols = missing[missing > 0]\nfor col, count in missing_cols.items():\n    print(f"  {col}: {count} ({count/len(merged):.1%})")\n\n# 各维度销售统计\nprint("\\n=== 各维度销售统计 ===")\nprint("\\n按客户统计（Top10）：")\ncustomer_stats = merged.groupby("name").agg({\n    "amount": ["sum", "mean", "count"]\n}).round(2)\ncustomer_stats.columns = ["销售额", "平均订单", "订单数"]\nprint(customer_stats.sort_values("销售额", ascending=False).head(10))\n\nprint("\\n按产品统计：")\nproduct_stats = merged.groupby("name_product").agg({\n    "amount": ["sum", "mean", "count"]\n}).round(2)\nproduct_stats.columns = ["销售额", "平均订单", "订单数"]\nprint(product_stats.sort_values("销售额", ascending=False))',
        commonMistake: '多表关联顺序错误、不会验证数据质量、统计维度不全面。'
      },
      {
        id: 2,
        description: '【综合实战】对融合后的宽表数据进行去重和冲突处理：检查重复订单ID，检查同一订单在不同时段的金额冲突（如有），对缺失的客户信息用"未知"填充，最终输出一份干净的分析用数据。',
        initialCode: 'import pandas as pd\n\n# 假设merged已经是融合后的宽表\n\n# 请编写代码：\n# 1. 检查重复订单ID\n# 2. 检查金额冲突\n# 3. 处理缺失值\n# 4. 输出干净数据\n',
        expectedOutput: '重复订单检查：...\n金额冲突检查：...\n缺失值处理：...\n最终数据：...',
        correctAnswer: 'import pandas as pd\n\n# 检查重复订单\nprint("=== 重复订单检查 ===")\nduplicated_orders = merged[merged["order_id"].duplicated(keep=False)]\nprint(f"发现 {len(duplicated_orders)} 条重复订单记录")\nif len(duplicated_orders) > 0:\n    print(duplicated_orders[["order_id", "name", "amount"]].head(10))\n    merged = merged.drop_duplicates(subset=["order_id"], keep="last")\n    print(f"去重后剩余 {len(merged)} 条记录")\n\n# 检查金额冲突\nprint("\\n=== 金额冲突检查 ===")\namount_conflicts = merged.groupby("order_id")["amount"].nunique()\nconflicted_orders = amount_conflicts[amount_conflicts > 1]\nprint(f"发现 {len(conflicted_orders)} 个订单存在金额冲突")\n\n# 处理缺失值\nprint("\\n=== 缺失值处理 ===")\nfor col in ["name", "city", "name_product", "category"]:\n    if col in merged.columns:\n        missing_before = merged[col].isna().sum()\n        merged[col] = merged[col].fillna("未知")\n        print(f"  {col}: 填充{missing_before}个缺失值为"未知"")\n\n# 最终数据\nprint("\\n=== 最终干净数据 ===")\nprint(f"数据形状：{merged.shape}")\nprint(f"列名：{list(merged.columns)}")\n\nmerged.to_csv("analysis_data_clean.csv", index=False)\nprint("\\n分析用数据已保存为 analysis_data_clean.csv")',
        commonMistake: '不会处理冲突和重复、缺失值处理不当。'
      }
    ]
  }
};

export default function Practice() {
  const { projectId, sectionId } = useParams<{ projectId: string; sectionId: string }>();
  const dataKey = `${projectId}-${sectionId}`;
  
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [judgmentAnswers, setJudgmentAnswers] = useState<Record<number, boolean>>({});
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [output1, setOutput1] = useState<string[]>([]);
  const [output2, setOutput2] = useState<string[]>([]);
  const [isRunning1, setIsRunning1] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [judgmentScore, setJudgmentScore] = useState(0);
  const [codingScore, setCodingScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [wrongQuiz, setWrongQuiz] = useState<any[]>([]);
  const [wrongJudgment, setWrongJudgment] = useState<any[]>([]);
  
  const data = practiceData[dataKey] || practiceData['01-0'];

  useEffect(() => {
    if (data) {
      setCode1(data.codingChallenges[0].initialCode);
      setCode2(data.codingChallenges[1].initialCode);
      setSelectedAnswers({});
      setJudgmentAnswers({});
      setShowResults(false);
      setOutput1([]);
      setOutput2([]);
      setTimeLeft(20 * 60);
      setWrongQuiz([]);
      setWrongJudgment([]);
    }
  }, [dataKey]);

  useEffect(() => {
    if (showResults) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleJudgmentAnswer = (questionId: number, answer: boolean) => {
    setJudgmentAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleRunCode = (codeNum: number) => {
    const code = codeNum === 1 ? code1 : code2;
    const setIsRunning = codeNum === 1 ? setIsRunning1 : setIsRunning2;
    const setOutput = codeNum === 1 ? setOutput1 : setOutput2;
    const challenge = codeNum === 1 ? data.codingChallenges[0] : data.codingChallenges[1];
    
    setIsRunning(true);
    setOutput([]);
    
    setTimeout(() => {
      const outputs: string[] = [];
      outputs.push('代码执行中...');
      outputs.push('');
      outputs.push('模拟运行结果：');
      outputs.push(challenge.expectedOutput);
      setOutput(outputs);
      setIsRunning(false);
    }, 1000);
  };

  const handleSubmit = () => {
    let correctQuiz = 0;
    data.quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctQuiz++;
      }
    });
    const quizScoreValue = Math.round((correctQuiz / data.quizQuestions.length) * 100);
    setQuizScore(quizScoreValue);
    
    let correctJudgment = 0;
    data.judgmentQuestions.forEach(q => {
      if (judgmentAnswers[q.id] === q.correctAnswer) {
        correctJudgment++;
      }
    });
    const judgmentScoreValue = Math.round((correctJudgment / data.judgmentQuestions.length) * 100);
    setJudgmentScore(judgmentScoreValue);

    const wrongQuizQuestions = data.quizQuestions.filter(q => selectedAnswers[q.id] !== q.correctAnswer);
    const wrongJudgmentQuestions = data.judgmentQuestions.filter(q => judgmentAnswers[q.id] !== q.correctAnswer);
    setWrongQuiz(wrongQuizQuestions);
    setWrongJudgment(wrongJudgmentQuestions);
    
    setCodingScore(85);
    
    setShowResults(true);
  };

  const getTotalScore = () => {
    return Math.round(quizScore * 0.4 + judgmentScore * 0.2 + codingScore * 0.4);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link 
            to={`/project/${projectId}`}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            返回学习
          </Link>
          
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700`}>
            <Clock className="w-5 h-5" />
            <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-slate-400 mt-2">总分：{data.quizQuestions.length}道选择题 + {data.judgmentQuestions.length}道判断题 + {data.codingChallenges.length}道综合实战题</p>
        </div>

        {!showResults ? (
          <div className="space-y-6">
            {/* Quiz Questions */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-slate-300" />
                选择题 ({data.quizQuestions.length}题)
              </h2>
              
              <div className="space-y-6">
                {data.quizQuestions.map((q, idx) => (
                  <div key={q.id} className="bg-slate-700/50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-4">
                      {idx + 1}. {q.question}
                    </h3>
                    <div className="space-y-3">
                      {q.options.map((option, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`w-full text-left p-4 rounded-lg transition-all ${
                            selectedAnswers[q.id] === optIdx
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-700 text-white hover:bg-slate-600'
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}. {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Judgment Questions */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Circle className="w-6 h-6 text-slate-300" />
                判断题 ({data.judgmentQuestions.length}题)
              </h2>
              
              <div className="space-y-6">
                {data.judgmentQuestions.map((q, idx) => (
                  <div key={q.id} className="bg-slate-700/50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-4">
                      {idx + 1}. {q.question}
                    </h3>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleJudgmentAnswer(q.id, true)}
                        className={`flex-1 p-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                          judgmentAnswers[q.id] === true
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-700 text-white hover:bg-slate-600'
                        }`}
                      >
                        <Check className="w-5 h-5" />
                        正确
                      </button>
                      <button
                        onClick={() => handleJudgmentAnswer(q.id, false)}
                        className={`flex-1 p-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                          judgmentAnswers[q.id] === false
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-700 text-white hover:bg-slate-600'
                        }`}
                      >
                        <XCircle className="w-5 h-5" />
                        错误
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coding Challenges */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-slate-300" />
                综合实战题 ({data.codingChallenges.length}题)
              </h2>
              
              <div className="space-y-8">
                {data.codingChallenges.map((challenge, idx) => {
                  const code = idx === 0 ? code1 : code2;
                  const setCode = idx === 0 ? setCode1 : setCode2;
                  const output = idx === 0 ? output1 : output2;
                  const isRunning = idx === 0 ? isRunning1 : isRunning2;
                  
                  return (
                    <div key={challenge.id} className="bg-slate-700/50 rounded-lg p-5">
                      <h3 className="text-lg font-semibold mb-4">
                        综合实战题{idx + 1}：{challenge.description}
                      </h3>
                      
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                          </div>
                        </div>
                        <div className="bg-slate-900 rounded-lg overflow-hidden">
                          <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full h-48 bg-transparent text-amber-200 font-mono text-sm p-4 resize-none focus:outline-none"
                            spellCheck={false}
                            placeholder="# 请在此处编写你的代码..."
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mb-4">
                        <button
                          onClick={() => handleRunCode(idx + 1)}
                          disabled={isRunning}
                          className="py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg text-sm flex items-center gap-2 transition-colors text-white"
                        >
                          <Play className="w-4 h-4" />
                          {isRunning ? '运行中...' : '运行'}
                        </button>
                        <button
                          onClick={() => setCode(challenge.initialCode)}
                          className="py-2 px-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm flex items-center gap-2 transition-colors text-white"
                        >
                          <Trash2 className="w-4 h-4" />
                          重置
                        </button>
                      </div>
                      
                      {output.length > 0 && (
                        <div className="mb-4">
                          <div className="text-xs text-slate-400 mb-1">输出：</div>
                          <div className="bg-slate-900 rounded-lg p-3">
                            <pre className="text-sm font-mono text-amber-100">
                              {output.map((line, idx) => (
                                <div key={idx}>{line}</div>
                              ))}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="py-4 px-12 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl font-medium transition-colors text-white"
              >
                提交练习
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">练习完成！</h2>
                <div className="text-6xl font-bold text-white mb-4">{getTotalScore()}分</div>
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{quizScore}分</div>
                    <div className="text-slate-400">选择题</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{judgmentScore}分</div>
                    <div className="text-slate-400">判断题</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{codingScore}分</div>
                    <div className="text-slate-400">综合实战题</div>
                  </div>
                </div>
              </div>
            </div>

            {(wrongQuiz.length > 0 || wrongJudgment.length > 0) && (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  需要复习的题目
                </h2>

                {wrongQuiz.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4 text-amber-300">选择题错题 ({wrongQuiz.length}题)</h3>
                    <div className="space-y-4">
                      {wrongQuiz.map((q, idx) => (
                        <div key={q.id} className="bg-red-900/20 border border-red-500/50 rounded-lg p-5">
                          <div className="font-semibold mb-3">
                            选择题 {idx + 1}: {q.question}
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex gap-2">
                              <span className="text-red-400 font-medium">你的答案：</span>
                              <span className="text-red-300">
                                {String.fromCharCode(65 + (selectedAnswers[q.id] ?? -1))}. {q.options[selectedAnswers[q.id]] || '未作答'}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-green-400 font-medium">正确答案：</span>
                              <span className="text-green-300">
                                {String.fromCharCode(65 + q.correctAnswer)}. {q.options[q.correctAnswer]}
                              </span>
                            </div>
                            {q.explanation && (
                              <div className="mt-3 pt-3 border-t border-slate-700">
                                <div className="text-blue-300 font-medium mb-1">📖 解析：</div>
                                <div className="text-slate-300">{q.explanation}</div>
                              </div>
                            )}
                            {q.commonMistake && (
                              <div className="mt-2">
                                <div className="text-yellow-300 font-medium mb-1">⚠️ 易错点：</div>
                                <div className="text-yellow-200">{q.commonMistake}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {wrongJudgment.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-amber-300">判断题错题 ({wrongJudgment.length}题)</h3>
                    <div className="space-y-4">
                      {wrongJudgment.map((q, idx) => (
                        <div key={q.id} className="bg-red-900/20 border border-red-500/50 rounded-lg p-5">
                          <div className="font-semibold mb-3">
                            判断题 {idx + 1}: {q.question}
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex gap-2">
                              <span className="text-red-400 font-medium">你的答案：</span>
                              <span className="text-red-300">
                                {judgmentAnswers[q.id] === true ? '正确' : judgmentAnswers[q.id] === false ? '错误' : '未作答'}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-green-400 font-medium">正确答案：</span>
                              <span className="text-green-300">
                                {q.correctAnswer === true ? '正确' : '错误'}
                              </span>
                            </div>
                            {q.explanation && (
                              <div className="mt-3 pt-3 border-t border-slate-700">
                                <div className="text-blue-300 font-medium mb-1">📖 解析：</div>
                                <div className="text-slate-300">{q.explanation}</div>
                              </div>
                            )}
                            {q.commonMistake && (
                              <div className="mt-2">
                                <div className="text-yellow-300 font-medium mb-1">⚠️ 易错点：</div>
                                <div className="text-yellow-200">{q.commonMistake}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-center gap-4">
              <Link
                to={`/practice/${projectId}/${sectionId}`}
                className="py-3 px-8 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-colors text-white"
              >
                重新练习
              </Link>
              <Link
                to={`/project/${projectId}`}
                className="py-3 px-8 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors text-white"
              >
                返回学习
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
