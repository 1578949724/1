import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronDown, ChevronRight, ChevronUp, Play, Copy, Trash2, FileText, CheckCircle, AlertCircle, Book, Code, BookOpen, Maximize2, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [code, setCode] = useState('');
  const [userCode, setUserCode] = useState('');
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
              exampleCode: `# 示例：使用 info() 诊断数据
import pandas as pd

# 加载数据集
df = pd.read_csv("datasets/retail_orders.csv")
print(f"数据加载完成，共 {len(df)} 行 {len(df.columns)} 列")
print(df.head())
print(df.info())`,
            },
            {
              title: '数据清洗的完整流程',
              content: '经典四步走：1) 读取文件 → 2) 诊断探索 → 3) 逐列清洗 → 4) 验证导出。',
              tips: ['清洗过程中多保存中间版本，以便可以回滚。'],
              warnings: [],
              exampleCode: `# 数据清洗流程概览
import pandas as pd

# 1. 读取
df = pd.read_csv("datasets/retail_orders.csv")

# 2. 诊断
print(df.head())
print(df.info())

# 3. 清洗
# ... 具体清洗步骤 ...

# 4. 保存
df.to_csv("cleaned_orders.csv", index=False)
print("数据已保存！")`,
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
              exampleCode: `import pandas as pd
import numpy as np
import re

print("库加载成功！")`,
            },
            {
              title: '1.2 读取原始数据',
              content: '使用 pd.read_csv 读取数据。注意：原数据可能有编码问题，我们可以使用 utf-8-sig 处理带 BOM 的 csv。',
              tips: ['如果遇到乱码，尝试 encoding="gbk" 或 encoding="utf-8-sig"。'],
              warnings: ['直接在内存中直接操作处理，不要修改源文件，始终保持原始数据文件只读。'],
              exampleCode: `import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")

print(f"读取成功：共 {len(df)} 条订单")
print(df.head())`,
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
              exampleCode: `# 数据诊断
print("=== 数据基本信息 ===")
print(df.info())

print("\\n=== 数据统计摘要 ===")
print(df.describe(include="all"))

print("\\n=== 仓库列唯一值 ===")
print(df["warehouse"].value_counts(dropna=False))`,
            },
            {
              title: '2.1 清洗金额格式',
              content: '金额字段通常包含货币符号、千位分隔符或多个小数点，直接转为数值会报错。这是一个最常见的数据清洗场景。',
              tips: ['建议写个 helper 函数专门处理金额，配合 apply 按行处理。', '正则表达式 str.replace(r"[^\\d.-]", "") 是最稳健的做法。'],
              warnings: ['直接处理时注意有些字段可能已经是数字，要加 try-except 判断。'],
              exampleCode: `# 清洗金额列
def clean_amount(val):
    if pd.isna(val):
        return np.nan
    s = str(val)
    s = re.sub(r"[^\\d.-]", "", s)
    try:
        return float(s)
    except:
        return np.nan

df["amount"] = df["amount"].apply(clean_amount)
print(df["amount"].head())
print(f"金额清洗完成，缺失值：{df["amount"].isna().sum()}")`,
            },
            {
              title: '2.2 填充缺失客户ID',
              content: '可以填 "Unknown"、"Guest" 等，根据业务决定。我们可以用 fillna 或 mask/where。',
              tips: ['对不同列分别制定填充策略：数值型可用均值，类别型用众数或者 "Other"。'],
              warnings: ['不要对整个 DataFrame 统一 fillna，否则会把本该保留的空值都覆盖掉。'],
              exampleCode: `# 填充缺失客户ID
df["customer_id"] = df["customer_id"].fillna("Guest")
print("客户ID缺失值已填充为 Guest")
print(df["customer_id"].value_counts())`,
            },
            {
              title: '2.3 统一日期格式',
              content: '用 pd.to_datetime。可以通过 errors="coerce" 把无法解析的日期设为空值，后续再单独处理。',
              tips: ['可以用 dt.dayofweek、dt.month 等提取时间特征。', '推荐直接按 datetime 处理，不要手动切片字符串。'],
              warnings: ['不同地区年月日顺序不一致时，要指定 format 参数或使用 dayfirst=True，避免解析错误。'],
              exampleCode: `# 统一日期格式
df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")

print("日期清洗后前10条：")
print(df["order_date"].head(10))

# 简单过滤未来日期
today = pd.Timestamp.now().normalize()
df = df[df["order_date"] <= today].copy()

print(f"剔除未来日期后剩余：{len(df)} 条")`,
            },
            {
              title: '2.4 处理重复数据',
              content: '使用 drop_duplicates，配合 subset 参数可以只针对特定列去重。',
              tips: ['去重前先 sort_values，决定保留哪一行。', '在清洗最后一步再去重，防止中间变换产生新的重复。'],
              warnings: ['如果不加 subset，可能会误删行。建议显示打印 df.duplicated().sum() 确认。'],
              exampleCode: `# 处理重复数据
print(f"去重前：{len(df)}")
df = df.sort_values("order_date", ascending=False)
df = df.drop_duplicates(subset=["order_id"], keep="first")
print(f"去重后：{len(df)}")`,
            },
            {
              title: '2.5 数值异常值检测',
              content: '可以用 IQR（四分位距）判断：超出 Q1-1.5*IQR 或 Q3+1.5*IQR 视为离群值，也可以直接用 describe 结合业务经验看是否合理。',
              tips: ['不要盲目删除异常值，要看业务场景：可能是真实的大订单，也可能是错漏数据标记出来即可。'],
              warnings: [],
              exampleCode: `# 异常值检测
Q1 = df["amount"].quantile(0.25)
Q3 = df["amount"].quantile(0.75)
IQR = Q3 - Q1

lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR

print(f"金额合理范围：{lower:.2f} ~ {upper:.2f}")

outliers = df[(df["amount"] < lower) | (df["amount"] > upper)]
print(f"发现异常值：{len(outliers)} 条")
print(outliers[["order_id", "amount"]])`,
            },
            {
              title: '2.6 数据类型优化',
              content: '把 category 类型的列转成 category，能省内存；对于整数列，确认无小数后可以转成 int。',
              tips: ['对重复值较多的字符串列（如仓库、地区等）转 category 性价比最高。'],
              warnings: [],
              exampleCode: `# 数据类型优化
before = df.memory_usage(deep=True).sum()
df["warehouse"] = df["warehouse"].astype("category")
after = df.memory_usage(deep=True).sum()

print(f"内存占用：{before/1024/1024:.2f}MB → {after/1024/1024:.2f}MB")
print(f"节省了 {(1 - after/before)*100:.1f}%")`,
            },
            {
              title: '2.7 创建衍生列',
              content: '有了清洗好的日期、金额，可以派生星期几、月份、订单金额区间、是否 VIP 等特征。',
              tips: ['在建模前再做特征工程，这里保留原始清洗结果以便复用。'],
              warnings: [],
              exampleCode: `# 创建衍生列
df["order_month"] = df["order_date"].dt.month
df["is_vip"] = df["amount"] > 500
df["amount_bin"] = pd.cut(df["amount"], bins=3, labels=["低", "中", "高"])

print("衍生列创建完成：")
print(df[["order_month", "is_vip", "amount_bin"]].head())`,
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
              exampleCode: `# 验证清洗结果
print("=== 最终数据信息 ===")
print(df.info())

print("\\n=== 缺失值统计 ===")
print(df.isna().sum())

print("\\n=== 最终数据样本 ===")
print(df.sample(5))`,
            },
            {
              title: '3.2 保存清洗后数据',
              content: '可以 to_csv 也可以 to_excel，to_parquet 等。这里我们保存为 csv。',
              tips: ['to_csv 时带上 index=False，避免多出一列 Unnamed:0。'],
              warnings: [],
              exampleCode: `# 保存清洗后数据
df.to_csv("cleaned_orders.csv", index=False, encoding="utf-8-sig")
print("已保存至：cleaned_orders.csv")
print(f"最终数据量：{len(df)} 条")`,
            },
          ],
        },
      ],
      practiceTitle: '实战练习：数据清洗验证',
      practiceDesc: '动手编写代码完成清洗与验证',
      initialCode: `# 数据清洗实战练习
import pandas as pd
import numpy as np
import re

# 1. 加载数据
df = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")

# 2. 诊断数据
print("数据加载完成，开始诊断...")
print(df.info())

# 3. 清洗金额
def clean_amount(val):
    if pd.isna(val):
        return np.nan
    s = str(val)
    s = re.sub(r"[^\\d.-]", "", s)
    try:
        return float(s)
    except:
        return np.nan
df["amount"] = df["amount"].apply(clean_amount)

# 4. 填充客户ID
df["customer_id"] = df["customer_id"].fillna("Guest")

# 5. 处理日期
df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")

# 6. 去重
df = df.drop_duplicates(subset=["order_id"], keep="first")

# 7. 保存
df.to_csv("cleaned_orders.csv", index=False)
print("清洗完成！共保存", len(df), "条数据")`,
      sectionAnswers: [
        `# 章节1参考答案
import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")
print(f"数据加载完成，共 {len(df)} 行 {len(df.columns)} 列")
print(df.head())
print(df.info())`,
        `# 章节2参考答案
import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")
print(df.head())
print(df.info())
df.to_csv("cleaned_orders.csv", index=False)
print("数据已保存！")`,
        `# 章节3参考答案
import pandas as pd
import numpy as np
import re

print("库加载成功！")`,
        `# 章节4参考答案
import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")
print(f"读取成功：共 {len(df)} 条订单")
print(df.head())`,
        `# 章节5参考答案
print("=== 数据基本信息 ===")
print(df.info())
print(df.describe(include="all"))
print(df["warehouse"].value_counts(dropna=False))`,
        `# 章节6参考答案
def clean_amount(val):
    if pd.isna(val):
        return np.nan
    s = str(val)
    s = re.sub(r"[^\\d.-]", "", s)
    try:
        return float(s)
    except:
        return np.nan

df["amount"] = df["amount"].apply(clean_amount)
print(df["amount"].head())
print(f"金额清洗完成，缺失值：{df["amount"].isna().sum()}")`,
        `# 章节7参考答案
df["customer_id"] = df["customer_id"].fillna("Guest")
print("客户ID缺失值已填充为 Guest")
print(df["customer_id"].value_counts())`,
        `# 章节8参考答案
df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")
print(df["order_date"].head(10))
today = pd.Timestamp.now().normalize()
df = df[df["order_date"] <= today].copy()
print(f"剔除未来日期后剩余：{len(df)} 条")`,
        `# 章节9参考答案
print(f"去重前：{len(df)}")
df = df.sort_values("order_date", ascending=False)
df = df.drop_duplicates(subset=["order_id"], keep="first")
print(f"去重后：{len(df)}")`,
        `# 章节10参考答案
Q1 = df["amount"].quantile(0.25)
Q3 = df["amount"].quantile(0.75)
IQR = Q3 - Q1
lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR
print(f"金额合理范围：{lower:.2f} ~ {upper:.2f}")
outliers = df[(df["amount"] < lower) | (df["amount"] > upper)]
print(f"发现异常值：{len(outliers)} 条")`,
        `# 章节11参考答案
before = df.memory_usage(deep=True).sum()
df["warehouse"] = df["warehouse"].astype("category")
after = df.memory_usage(deep=True).sum()
print(f"内存占用：{before/1024/1024:.2f}MB → {after/1024/1024:.2f}MB")
print(f"节省了 {(1 - after/before)*100:.1f}%")`,
        `# 章节12参考答案
df["order_month"] = df["order_date"].dt.month
df["is_vip"] = df["amount"] > 500
df["amount_bin"] = pd.cut(df["amount"], bins=3, labels=["低", "中", "高"])
print("衍生列创建完成：")
print(df[["order_month", "is_vip", "amount_bin"]].head())`,
        `# 章节13参考答案
print("=== 最终数据信息 ===")
print(df.info())
print("\\n=== 缺失值统计 ===")
print(df.isna().sum())
print("\\n=== 最终数据样本 ===")
print(df.sample(5))`,
        `# 章节14参考答案
df.to_csv("cleaned_orders.csv", index=False, encoding="utf-8-sig")
print("已保存至：cleaned_orders.csv")
print(f"最终数据量：{len(df)} 条")`,
      ],
    },
    '02': {
      title: '分组聚合分析',
      difficulty: '入门',
      duration: '约 30 分钟',
      sectionGroups: [
        {
          title: '基础概念',
          sections: [
            {
              title: '什么是分组聚合？',
              content: '分组聚合是数据分析中最核心的操作之一，类似于SQL中的GROUP BY。pandas的groupby可以按一个或多个列分组，然后对每个组应用聚合函数。',
              tips: ['先 groupby 再 agg，最后可以 unstack 或 pivot 改变展示形态。'],
              warnings: [],
              exampleCode: `import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")
print("数据加载完成！")

# 简单分组统计
user_count = df.groupby("warehouse")["amount"].sum()
print("各仓库销售额统计：")
print(user_count)`,
            },
            {
              title: '分组聚合的完整流程',
              content: '三步法：1) 拆分（Split）→ 2) 应用（Apply）→ 3) 合并（Combine）。这个过程叫做 Split-Apply-Combine。',
              tips: ['熟练掌握这个流程，可以应对几乎所有分组聚合场景。'],
              warnings: [],
              exampleCode: `# 分组聚合三步法
# 1. 拆分：按仓库分组
groups = df.groupby("warehouse")

# 2. 应用：对每组求和
sales = groups["amount"].sum()

# 3. 合并：展示结果
print(sales)`,
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '1.1 导入必要工具库',
              content: '导入 pandas 和 numpy，pandas 是主要的数据处理库。',
              tips: ['确保已安装：pip install pandas numpy'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np

print("库加载成功！")`,
            },
            {
              title: '1.2 读取数据并查看结构',
              content: '读取CSV文件，查看数据的基本信息：行数、列数、数据类型。',
              tips: ['使用 df.info() 查看数据类型，使用 df.head() 查看前几行。'],
              warnings: [],
              exampleCode: `import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")
print(f"数据形状：{df.shape}")
print("\\n前5行：")
print(df.head())
print("\\n数据类型：")
print(df.info())`,
            },
          ],
        },
        {
          title: '核心分组聚合',
          sections: [
            {
              title: '2.1 基础分组统计',
              content: '按单个列分组，求和、计数、求均值是最常用的操作。',
              tips: ['count() 统计非空值数量，size() 统计组大小（包括空值）。'],
              warnings: [],
              exampleCode: `# 按仓库分组统计
print("各仓库订单数：")
print(df.groupby("warehouse").size())

print("\\n各仓库销售额：")
print(df.groupby("warehouse")["amount"].sum())

print("\\n各仓库平均订单额：")
print(df.groupby("warehouse")["amount"].mean())`,
            },
            {
              title: '2.2 多列分组',
              content: '按多个列分组，可以实现更细粒度的统计分析。',
              tips: ['使用列表指定多个分组列：groupby(["col1", "col2"])。'],
              warnings: [],
              exampleCode: `# 按仓库和品类分组
result = df.groupby(["warehouse", "product_category"])["amount"].sum()
print("各仓库各品类销售额：")
print(result)

# 也可以用 agg 同时计算多个指标
result2 = df.groupby(["warehouse", "product_category"]).agg({
    "amount": ["sum", "mean", "count"]
})
print("\\n详细统计：")
print(result2)`,
            },
            {
              title: '2.3 聚合函数大全',
              content: '常用聚合函数：sum, mean, count, min, max, median, std, var。还有 nunique 统计唯一值数量。',
              tips: ['使用 agg 可以同时应用多个聚合函数。'],
              warnings: [],
              exampleCode: `# 综合聚合
result = df.groupby("warehouse").agg({
    "amount": ["sum", "mean", "std", "min", "max"],
    "order_id": "count"
})
print(result)`,
            },
            {
              title: '2.4 分组筛选',
              content: '使用 filter 方法可以筛选满足条件的组。',
              tips: ['filter 的函数输入是整个组，返回True保留该组。'],
              warnings: [],
              exampleCode: `# 筛选订单数大于3的仓库
result = df.groupby("warehouse").filter(
    lambda x: len(x) > 3
)
print(f"符合条件的仓库数据：{len(result)} 条")`,
            },
            {
              title: '2.5 transform变换',
              content: 'transform 可以在组内进行变换，返回与原数据相同长度的结果。常用场景：组内标准化、组内排名。',
              tips: ['transform 常用于计算组内占比、组内排名等。'],
              warnings: [],
              exampleCode: `# 组内销售额占比
df["amount_share"] = df.groupby("warehouse")["amount"].transform(
    lambda x: x / x.sum()
)
print("各仓库销售占比：")
print(df[["warehouse", "amount", "amount_share"]].head())`,
            },
          ],
        },
        {
          title: '高级聚合',
          sections: [
            {
              title: '3.1 数据透视表',
              content: 'pivot_table 可以快速创建透视表，类似于Excel的数据透视功能。',
              tips: ['index 是行索引，columns 是列展开，values 是数值，aggfunc 是聚合方式。'],
              warnings: [],
              exampleCode: `# 创建透视表
pivot = pd.pivot_table(
    df,
    values="amount",
    index="warehouse",
    columns="product_category",
    aggfunc="sum",
    fill_value=0
)
print("透视表：")
print(pivot)`,
            },
            {
              title: '3.2 交叉表分析',
              content: 'crosstab 用于计算两列或多列的频数交叉表。',
              tips: ['crosstab 是快速创建频数表的便捷方式。'],
              warnings: [],
              exampleCode: `# 创建交叉表
cross = pd.crosstab(df["warehouse"], df["product_category"])
print("交叉表：")
print(cross)`,
            },
          ],
        },
      ],
      practiceTitle: '实战练习：综合分组聚合分析',
      practiceDesc: '综合运用分组聚合完成业务分析',
      initialCode: `# 分组聚合分析练习
import pandas as pd
import numpy as np

# 加载数据
df = pd.read_csv("datasets/retail_orders.csv")

# 1. 按仓库统计订单数和销售额
warehouse_stats = df.groupby("warehouse").agg({
    "order_id": "count",
    "amount": "sum"
})
print("仓库统计：")
print(warehouse_stats)

# 2. 按仓库和品类分组统计
category_stats = df.groupby(["warehouse", "product_category"])["amount"].sum()
print("\\n仓库-品类统计：")
print(category_stats)

# 3. 创建透视表
pivot = pd.pivot_table(
    df,
    values="amount",
    index="warehouse",
    columns="product_category",
    aggfunc="sum",
    fill_value=0
)
print("\\n透视表：")
print(pivot)`,
      sectionAnswers: [
        `# 章节1参考答案
import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")
print("数据加载完成！")

user_count = df.groupby("warehouse")["amount"].sum()
print("各仓库销售额统计：")
print(user_count)`,
        `# 章节2参考答案
groups = df.groupby("warehouse")
sales = groups["amount"].sum()
print(sales)`,
        `# 章节3参考答案
import pandas as pd
import numpy as np

print("库加载成功！")`,
        `# 章节4参考答案
df = pd.read_csv("datasets/retail_orders.csv")
print(f"数据形状：{df.shape}")
print(df.head())
print(df.info())`,
        `# 章节5参考答案
print("各仓库订单数：")
print(df.groupby("warehouse").size())

print("\\n各仓库销售额：")
print(df.groupby("warehouse")["amount"].sum())

print("\\n各仓库平均订单额：")
print(df.groupby("warehouse")["amount"].mean())`,
        `# 章节6参考答案
result = df.groupby(["warehouse", "product_category"])["amount"].sum()
print("各仓库各品类销售额：")
print(result)

result2 = df.groupby(["warehouse", "product_category"]).agg({
    "amount": ["sum", "mean", "count"]
})
print(result2)`,
        `# 章节7参考答案
result = df.groupby("warehouse").agg({
    "amount": ["sum", "mean", "std", "min", "max"],
    "order_id": "count"
})
print(result)`,
        `# 章节8参考答案
result = df.groupby("warehouse").filter(
    lambda x: len(x) > 3
)
print(f"符合条件的仓库数据：{len(result)} 条")`,
        `# 章节9参考答案
df["amount_share"] = df.groupby("warehouse")["amount"].transform(
    lambda x: x / x.sum()
)
print(df[["warehouse", "amount", "amount_share"]].head())`,
        `# 章节10参考答案
pivot = pd.pivot_table(
    df,
    values="amount",
    index="warehouse",
    columns="product_category",
    aggfunc="sum",
    fill_value=0
)
print("透视表：")
print(pivot)`,
        `# 章节11参考答案
cross = pd.crosstab(df["warehouse"], df["product_category"])
print("交叉表：")
print(cross)`,
      ],
    },
    '03': {
      title: '购物篮关联分析',
      difficulty: '进阶',
      duration: '约 45 分钟',
      sectionGroups: [
        {
          title: '基础概念',
          sections: [
            {
              title: '什么是购物篮关联分析？',
              content: '关联分析用于发现"买了尿布是否买啤酒"这样的关联规则，是零售业经典的分析方法。著名的"啤酒与尿布"故事就是关联分析的经典案例。',
              tips: ['关联分析帮助发现商品间的潜在关系，指导商品摆放和促销策略。'],
              warnings: [],
              exampleCode: `# 关联分析示例
# 经典问题：买面包的人通常也会买什么？
import pandas as pd

df = pd.read_csv("datasets/market_basket.csv")
print("数据加载成功！")
print(df.head())`,
            },
            {
              title: '三大核心指标',
              content: '支持度：商品A和B同时购买的概率。置信度：买了A的人中，多少也买了B。提升度：关联规则比随机情况强多少倍。',
              tips: ['支持度决定规则是否普遍，置信度决定规则是否可靠，提升度决定规则是否有价值。'],
              warnings: [],
              exampleCode: `# 计算支持度
total_transactions = len(df)
item_counts = df["items"].str.split(",").explode().value_counts()
support_bread = item_counts.get("面包", 0) / total_transactions
print(f"面包的支持度：{support_bread:.2%}")`,
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '1.1 导入必要工具库',
              content: '导入 pandas 处理数据转换，numpy 进行数值计算。',
              tips: ['关联分析需要将商品列表转换为0/1矩阵格式。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np

print("库加载成功！")`,
            },
            {
              title: '1.2 数据预处理',
              content: '将逗号分隔的商品字符串转换为0/1矩阵（事务矩阵），这是进行关联分析的必要准备。',
              tips: ['使用 str.split + explode 将列表展开，然后用 pivot_table 转成事务矩阵。'],
              warnings: [],
              exampleCode: `# 转换为事务矩阵
df["items_list"] = df["items"].str.split(",")

# 创建事务矩阵
all_items = set()
for items in df["items_list"]:
    all_items.update([item.strip() for item in items])

# 转换为0/1矩阵
transaction_matrix = pd.DataFrame(
    [[1 if item.strip() in items else 0 for item in all_items] 
     for items in df["items_list"]],
    columns=list(all_items)
)
print(f"事务矩阵形状：{transaction_matrix.shape}")
print(transaction_matrix.head())`,
            },
          ],
        },
        {
          title: '核心关联分析',
          sections: [
            {
              title: '2.1 频繁项集挖掘',
              content: '使用纯pandas实现Apriori算法的核心：计算所有项集的支持度，找出满足最小支持度阈值的频繁项集。',
              tips: ['支持度 = 包含项集的交易数 / 总交易数'],
              warnings: [],
              exampleCode: `# 频繁项集挖掘
def get_support(transaction_matrix, items):
    return transaction_matrix[list(items)].all(axis=1).sum() / len(transaction_matrix)

# 单项支持度
item_supports = transaction_matrix.sum() / len(transaction_matrix)
print("单项支持度：")
print(item_supports.sort_values(ascending=False))`,
            },
            {
              title: '2.2 关联规则生成',
              content: '从频繁项集中生成形如 A → B 的关联规则，计算每条规则的置信度。',
              tips: ['置信度 = P(A∩B) / P(A) = 支持度(A,B) / 支持度(A)'],
              warnings: [],
              exampleCode: `# 生成关联规则
# 例如：牛奶 → 面包
milk_support = item_supports.get("牛奶", 0)
bread_support = item_supports.get("面包", 0)
milk_bread_support = transaction_matrix["牛奶"] & transaction_matrix["面包"]

confidence = milk_bread_support.sum() / milk_support / len(transaction_matrix)
print(f"牛奶 → 面包的置信度：{confidence:.2%}")`,
            },
            {
              title: '2.3 提升度计算',
              content: '提升度衡量关联规则的价值：提升度 > 1 表示正相关，= 1 表示独立，< 1 表示负相关。',
              tips: ['提升度 = 置信度 / B的支持度'],
              warnings: [],
              exampleCode: `# 计算提升度
bread_support = item_supports.get("面包", 0)
confidence = milk_bread_support.sum() / milk_support / len(transaction_matrix)
lift = confidence / bread_support

print(f"牛奶 → 面包的提升度：{lift:.2f}")
if lift > 1:
    print("存在正相关，建议关联销售")`,
            },
          ],
        },
        {
          title: '实战应用',
          sections: [
            {
              title: '3.1 商品推荐引擎',
              content: '基于关联规则构建简单的商品推荐系统：当用户购买某商品时，推荐关联规则置信度高的其他商品。',
              tips: ['可以预先计算所有强关联规则，存储在字典中用于实时推荐。'],
              warnings: [],
              exampleCode: `# 简单的推荐引擎
rules = [
    {"from": "牛奶", "to": "面包", "confidence": 0.75},
    {"from": "尿布", "to": "啤酒", "confidence": 0.80},
]

def recommend(item, rules):
    recommendations = [r["to"] for r in rules if r["from"] == item]
    return recommendations

print("买了牛奶的人还买了：", recommend("牛奶", rules))
print("买了尿布的人还买了：", recommend("尿布", rules))`,
            },
          ],
        },
      ],
      practiceTitle: '实战练习：完整购物篮关联分析',
      practiceDesc: '从原始数据到推荐结果的完整代码实现',
      initialCode: `# 购物篮关联分析练习
import pandas as pd
import numpy as np

# 1. 加载数据
df = pd.read_csv("datasets/market_basket.csv")
print("数据加载成功！")

# 2. 转换为事务矩阵
df["items_list"] = df["items"].str.split(",")

# 3. 计算单项支持度
all_items = set()
for items in df["items_list"]:
    all_items.update([item.strip() for item in items])

transaction_matrix = pd.DataFrame(
    [[1 if item.strip() in items else 0 for item in all_items] 
     for items in df["items_list"]],
    columns=list(all_items)
)

item_supports = transaction_matrix.sum() / len(transaction_matrix)
print("\\n支持度排名：")
print(item_supports.sort_values(ascending=False))

# 4. 计算关联规则
print("\\n关联规则分析...")`,
      sectionAnswers: [
        `# 章节1参考答案
import pandas as pd

df = pd.read_csv("datasets/market_basket.csv")
print("数据加载成功！")
print(df.head())`,
        `# 章节2参考答案
total_transactions = len(df)
item_counts = df["items"].str.split(",").explode().value_counts()
support_bread = item_counts.get("面包", 0) / total_transactions
print(f"面包的支持度：{support_bread:.2%}")`,
        `# 章节3参考答案
import pandas as pd
import numpy as np

print("库加载成功！")`,
        `# 章节4参考答案
df["items_list"] = df["items"].str.split(",")

all_items = set()
for items in df["items_list"]:
    all_items.update([item.strip() for item in items])

transaction_matrix = pd.DataFrame(
    [[1 if item.strip() in items else 0 for item in all_items] 
     for items in df["items_list"]],
    columns=list(all_items)
)
print(f"事务矩阵形状：{transaction_matrix.shape}")
print(transaction_matrix.head())`,
        `# 章节5参考答案
def get_support(transaction_matrix, items):
    return transaction_matrix[list(items)].all(axis=1).sum() / len(transaction_matrix)

item_supports = transaction_matrix.sum() / len(transaction_matrix)
print("单项支持度：")
print(item_supports.sort_values(ascending=False))`,
        `# 章节6参考答案
milk_support = item_supports.get("牛奶", 0)
milk_bread_support = transaction_matrix["牛奶"] & transaction_matrix["面包"]
confidence = milk_bread_support.sum() / milk_support / len(transaction_matrix)
print(f"牛奶 → 面包的置信度：{confidence:.2%}")`,
        `# 章节7参考答案
bread_support = item_supports.get("面包", 0)
confidence = milk_bread_support.sum() / milk_support / len(transaction_matrix)
lift = confidence / bread_support

print(f"牛奶 → 面包的提升度：{lift:.2f}")
if lift > 1:
    print("存在正相关，建议关联销售")`,
        `# 章节8参考答案
rules = [
    {"from": "牛奶", "to": "面包", "confidence": 0.75},
    {"from": "尿布", "to": "啤酒", "confidence": 0.80},
]

def recommend(item, rules):
    recommendations = [r["to"] for r in rules if r["from"] == item]
    return recommendations

print("买了牛奶的人还买了：", recommend("牛奶", rules))`,
      ],
    },
    '04': {
      title: '客户聚类分群分析',
      difficulty: '进阶',
      duration: '约 45 分钟',
      sectionGroups: [
        {
          title: '基础概念',
          sections: [
            {
              title: '什么是客户聚类分群？',
              content: '客户聚类是将客户按照行为特征相似度分组的过程。K-Means是最常用的聚类算法之一，将客户划分为K个群体，每个群体内部相似度高，群体之间差异大。',
              tips: ['聚类是无监督学习，不需要预先知道标签。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("客户数据加载成功！")
print(df.head())`,
            },
            {
              title: '聚类分析完整流程',
              content: '五步走：1) 数据准备 → 2) 特征选择 → 3) 标准化 → 4) 聚类 → 5) 评估与解读。',
              tips: ['特征选择和标准化对聚类结果影响很大。'],
              warnings: [],
              exampleCode: `# 聚类流程
# 1. 准备数据
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]

# 2. 提取特征
X = df[features]

# 3. 标准化
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 4. K-Means聚类
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=3, random_state=42)
df["cluster"] = kmeans.fit_predict(X_scaled)

print("聚类完成！")
print(df.groupby("cluster").mean())`,
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '1.1 导入必要工具库',
              content: '导入pandas、numpy和sklearn的聚类和预处理模块。',
              tips: ['确保已安装：pip install scikit-learn'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

print("库加载成功！")`,
            },
            {
              title: '1.2 特征选择与标准化',
              content: '选择用于聚类的特征，并使用StandardScaler进行Z-Score标准化，消除量纲影响。',
              tips: ['不同量纲的特征（如年龄和收入）必须标准化，否则收入会主导距离计算。'],
              warnings: [],
              exampleCode: `# 特征选择
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]

# Z-Score标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print("标准化前：")
print(X.describe())
print("\\n标准化后：")
print(pd.DataFrame(X_scaled, columns=features).describe())`,
            },
          ],
        },
        {
          title: '核心聚类分析',
          sections: [
            {
              title: '2.1 K-Means基础聚类',
              content: 'K-Means将数据划分为K个簇，每个点属于距其最近的质心所在的簇。',
              tips: ['n_clusters是要分的簇数，random_state保证结果可复现。'],
              warnings: [],
              exampleCode: `# K-Means聚类
kmeans = KMeans(n_clusters=3, random_state=42)
df["cluster"] = kmeans.fit_predict(X_scaled)

print("各簇客户数量：")
print(df["cluster"].value_counts().sort_index())`,
            },
            {
              title: '2.2 肘部法则确定K值',
              content: '通过WCSS（簇内平方和）曲线找到最优的K值。WCSS下降变缓的拐点就是最佳K值。',
              tips: ['K值太小会欠拟合，K值太大会过拟合。'],
              warnings: [],
              exampleCode: `# 肘部法则
wcss = []
K_range = range(1, 8)

for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    wcss.append(kmeans.inertia_)

print("WCSS值：")
for k, w in zip(K_range, wcss):
    print(f"K={k}: {w:.2f}")`,
            },
            {
              title: '2.3 聚类结果分析',
              content: '分析每个簇的特征，计算各簇的均值统计量，形成客户画像。',
              tips: ['结合业务理解给每个簇命名（如"高价值客户"、"流失风险客户"等）。'],
              warnings: [],
              exampleCode: `# 各簇特征分析
cluster_stats = df.groupby("cluster")[features].mean()
print("各簇特征均值：")
print(cluster_stats)

# 各簇客户画像
for cluster_id in range(3):
    cluster_data = df[df["cluster"] == cluster_id]
    print(f"\\n簇 {cluster_id} ({len(cluster_data)}人)：")
    print(f"  平均年龄：{cluster_data['age'].mean():.1f}岁")
    print(f"  平均收入：{cluster_data['income'].mean():.0f}元")
    print(f"  平均消费频率：{cluster_data['purchase_freq'].mean():.1f}次")`,
            },
          ],
        },
        {
          title: '实战应用',
          sections: [
            {
              title: '3.1 差异化运营策略',
              content: '根据不同客户群体的特征，制定精准的运营策略。',
              tips: ['高价值客户要维护，流失风险客户要挽留，潜力客户要培养。'],
              warnings: [],
              exampleCode: `# 运营策略
strategies = {
    0: "高价值客户 - 提供VIP服务和专属优惠",
    1: "潜力客户 - 推送新品和促销活动",
    2: "流失风险客户 - 发送召回邮件和优惠券"
}

for cluster_id, strategy in strategies.items():
    count = len(df[df["cluster"] == cluster_id])
    print(f"簇 {cluster_id} ({count}人): {strategy}")`,
            },
          ],
        },
      ],
      practiceTitle: '实战练习：完整客户聚类分群',
      practiceDesc: '从原始数据到业务策略的完整代码实现',
      initialCode: `# 客户聚类分群练习
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

# 1. 加载数据
df = pd.read_csv("datasets/customer_features.csv")
print("数据加载成功！")

# 2. 特征选择与标准化
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 3. 肘部法则确定K值
wcss = []
K_range = range(1, 6)
for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    wcss.append(kmeans.inertia_)

print("\\nWCSS值：")
for k, w in zip(K_range, wcss):
    print(f"K={k}: {w:.2f}")

# 4. K-Means聚类（假设K=3）
kmeans = KMeans(n_clusters=3, random_state=42)
df["cluster"] = kmeans.fit_predict(X_scaled)

# 5. 聚类结果分析
print("\\n各簇特征均值：")
print(df.groupby("cluster")[features].mean())`,
      sectionAnswers: [
        `# 章节1参考答案
import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("客户数据加载成功！")
print(df.head())`,
        `# 章节2参考答案
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=3, random_state=42)
df["cluster"] = kmeans.fit_predict(X_scaled)
print("聚类完成！")
print(df.groupby("cluster").mean())`,
        `# 章节3参考答案
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

print("库加载成功！")`,
        `# 章节4参考答案
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print("标准化后：")
print(pd.DataFrame(X_scaled, columns=features).describe())`,
        `# 章节5参考答案
kmeans = KMeans(n_clusters=3, random_state=42)
df["cluster"] = kmeans.fit_predict(X_scaled)
print("各簇客户数量：")
print(df["cluster"].value_counts().sort_index())`,
        `# 章节6参考答案
wcss = []
K_range = range(1, 8)
for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    wcss.append(kmeans.inertia_)
for k, w in zip(K_range, wcss):
    print(f"K={k}: {w:.2f}")`,
        `# 章节7参考答案
cluster_stats = df.groupby("cluster")[features].mean()
print("各簇特征均值：")
print(cluster_stats)`,
        `# 章节8参考答案
strategies = {
    0: "高价值客户 - 提供VIP服务",
    1: "潜力客户 - 推送促销活动",
    2: "流失风险客户 - 发送召回邮件"
}
for cluster_id, strategy in strategies.items():
    count = len(df[df["cluster"] == cluster_id])
    print(f"簇 {cluster_id} ({count}人): {strategy}")`,
      ],
    },
    '05': {
      title: '专业数据可视化',
      difficulty: '进阶',
      duration: '约 45 分钟',
      sectionGroups: [
        {
          title: '基础概念',
          sections: [
            {
              title: '什么是数据可视化？',
              content: '数据可视化是将数据转换为图形/图表的过程，帮助发现数据中的模式、趋势和异常。好的可视化让数据"说话"。',
              tips: ['选择正确的图表类型是可视化成功的关键。'],
              warnings: [],
              exampleCode: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/retail_orders.csv")
print("数据加载成功！")

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False`,
            },
            {
              title: '图表类型选择指南',
              content: '柱状图：比较类别大小。折线图：展示趋势变化。饼图：显示占比关系。散点图：探索变量关系。',
              tips: ['避免使用3D图表和过多颜色，保持简洁清晰。'],
              warnings: [],
              exampleCode: `# 选择图表类型
# 比较类目：柱状图 plt.bar()
# 展示趋势：折线图 plt.plot()
# 显示占比：饼图 plt.pie()
# 探索关系：散点图 plt.scatter()`,
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '1.1 导入必要工具库',
              content: '导入pandas、numpy和matplotlib。matplotlib是Python最基础的可视化库。',
              tips: ['seaborn是matplotlib的高级封装，图表更美观。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

print("库加载成功！")`,
            },
            {
              title: '1.2 数据预处理',
              content: '在进行可视化之前，通常需要对数据进行聚合、分组等预处理。',
              tips: ['先聚合再绘图，避免图表过于拥挤。'],
              warnings: [],
              exampleCode: `# 数据聚合
warehouse_sales = df.groupby("warehouse")["amount"].sum()
print("各仓库销售额：")
print(warehouse_sales)`,
            },
          ],
        },
        {
          title: '核心图表绘制',
          sections: [
            {
              title: '2.1 柱状图',
              content: '使用plt.bar()绘制柱状图，适合比较不同类别的数值大小。',
              tips: ['可以使用plt.xticks(rotation=45)旋转x轴标签。'],
              warnings: [],
              exampleCode: `import matplotlib.pyplot as plt

# 柱状图
plt.figure(figsize=(10, 6))
plt.bar(warehouse_sales.index, warehouse_sales.values, color='steelblue')
plt.title('各仓库销售额', fontsize=16)
plt.xlabel('仓库', fontsize=12)
plt.ylabel('销售额', fontsize=12)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()`,
            },
            {
              title: '2.2 折线图',
              content: '使用plt.plot()绘制折线图，适合展示时间序列数据的趋势变化。',
              tips: ['可以用marker参数添加数据点标记。'],
              warnings: [],
              exampleCode: `# 转换日期
df["order_date"] = pd.to_datetime(df["order_date"])
daily_sales = df.groupby("order_date")["amount"].sum().sort_index()

# 折线图
plt.figure(figsize=(12, 6))
plt.plot(daily_sales.index, daily_sales.values, marker='o', linewidth=2)
plt.title('每日销售额趋势', fontsize=16)
plt.xlabel('日期', fontsize=12)
plt.ylabel('销售额', fontsize=12)
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()`,
            },
            {
              title: '2.3 饼图',
              content: '使用plt.pie()绘制饼图，适合展示各部分占整体的比例关系。',
              tips: ['使用autopct显示百分比，explode突出某部分。'],
              warnings: [],
              exampleCode: `# 饼图
plt.figure(figsize=(8, 8))
plt.pie(warehouse_sales.values, 
        labels=warehouse_sales.index, 
        autopct='%1.1f%%',
        colors=['#ff9999','#66b3ff','#99ff99'])
plt.title('各仓库销售占比', fontsize=16)
plt.axis('equal')
plt.tight_layout()
plt.show()`,
            },
            {
              title: '2.4 散点图',
              content: '使用plt.scatter()绘制散点图，适合探索两个变量之间的关系。',
              tips: ['可以用c参数添加颜色映射，用s参数调整点大小。'],
              warnings: [],
              exampleCode: `# 散点图
plt.figure(figsize=(10, 6))
plt.scatter(df["order_id"].astype(str), 
            df["amount"], 
            alpha=0.6, 
            s=100)
plt.title('订单金额分布', fontsize=16)
plt.xlabel('订单ID', fontsize=12)
plt.ylabel('金额', fontsize=12)
plt.tight_layout()
plt.show()`,
            },
          ],
        },
        {
          title: '高级技巧',
          sections: [
            {
              title: '3.1 组合图表',
              content: '使用twinx()创建双Y轴图表，在同一图中展示两个不同量级的指标。',
              tips: ['左右Y轴分别对应不同指标，注意颜色区分。'],
              warnings: [],
              exampleCode: `# 双Y轴组合图
fig, ax1 = plt.subplots(figsize=(12, 6))

ax1.bar(daily_sales.index, daily_sales.values, alpha=0.6, label='销售额')
ax1.set_xlabel('日期')
ax1.set_ylabel('销售额', color='blue')

ax2 = ax1.twinx()
ax2.plot(daily_sales.index, daily_sales.values.cumsum(), 
         color='red', linewidth=2, label='累计销售额')
ax2.set_ylabel('累计销售额', color='red')

plt.title('销售额与累计销售额')
plt.tight_layout()
plt.show()`,
            },
          ],
        },
      ],
      practiceTitle: '实战练习：综合可视化分析',
      practiceDesc: '综合运用多种图表完成一份完整的数据分析报告',
      initialCode: `# 数据可视化练习
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 1. 加载数据
df = pd.read_csv("datasets/retail_orders.csv")
print("数据加载成功！")

# 2. 聚合数据
warehouse_sales = df.groupby("warehouse")["amount"].sum()
category_sales = df.groupby("product_category")["amount"].sum()

# 3. 绘制柱状图
plt.figure(figsize=(10, 6))
plt.bar(warehouse_sales.index, warehouse_sales.values, color='steelblue')
plt.title('各仓库销售额')
plt.xlabel('仓库')
plt.ylabel('销售额')
plt.tight_layout()
plt.show()

# 4. 绘制饼图
plt.figure(figsize=(8, 8))
plt.pie(category_sales.values, labels=category_sales.index, autopct='%1.1f%%')
plt.title('各品类销售占比')
plt.axis('equal')
plt.tight_layout()
plt.show()`,
      sectionAnswers: [
        `# 章节1参考答案
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/retail_orders.csv")
print("数据加载成功！")
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False`,
        `# 章节2参考答案
# 选择图表类型
# 比较类目：柱状图 plt.bar()
# 展示趋势：折线图 plt.plot()
# 显示占比：饼图 plt.pie()
# 探索关系：散点图 plt.scatter()`,
        `# 章节3参考答案
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

print("库加载成功！")`,
        `# 章节4参考答案
warehouse_sales = df.groupby("warehouse")["amount"].sum()
print("各仓库销售额：")
print(warehouse_sales)`,
        `# 章节5参考答案
plt.figure(figsize=(10, 6))
plt.bar(warehouse_sales.index, warehouse_sales.values, color='steelblue')
plt.title('各仓库销售额', fontsize=16)
plt.xlabel('仓库', fontsize=12)
plt.ylabel('销售额', fontsize=12)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()`,
        `# 章节6参考答案
df["order_date"] = pd.to_datetime(df["order_date"])
daily_sales = df.groupby("order_date")["amount"].sum().sort_index()
plt.figure(figsize=(12, 6))
plt.plot(daily_sales.index, daily_sales.values, marker='o', linewidth=2)
plt.title('每日销售额趋势', fontsize=16)
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()`,
        `# 章节7参考答案
plt.figure(figsize=(8, 8))
plt.pie(warehouse_sales.values, labels=warehouse_sales.index, autopct='%1.1f%%')
plt.title('各仓库销售占比', fontsize=16)
plt.axis('equal')
plt.tight_layout()
plt.show()`,
        `# 章节8参考答案
plt.figure(figsize=(10, 6))
plt.scatter(df["order_id"].astype(str), df["amount"], alpha=0.6, s=100)
plt.title('订单金额分布', fontsize=16)
plt.tight_layout()
plt.show()`,
        `# 章节9参考答案
fig, ax1 = plt.subplots(figsize=(12, 6))
ax1.bar(daily_sales.index, daily_sales.values, alpha=0.6, label='销售额')
ax1.set_xlabel('日期')
ax1.set_ylabel('销售额', color='blue')
ax2 = ax1.twinx()
ax2.plot(daily_sales.index, daily_sales.values.cumsum(), color='red', linewidth=2)
ax2.set_ylabel('累计销售额', color='red')
plt.title('销售额与累计销售额')
plt.tight_layout()
plt.show()`,
      ],
    },
    '06': {
      title: '业务A/B测试数据分析',
      difficulty: '进阶',
      duration: '约 45 分钟',
      sectionGroups: [
        {
          title: '基础概念',
          sections: [
            {
              title: '什么是A/B测试？',
              content: 'A/B测试是一种对照实验方法，将用户随机分为对照组和实验组，比较不同策略的效果差异。',
              tips: ['A/B测试的核心是控制变量，只有实验因素不同，其他条件一致。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np

df = pd.read_csv("datasets/ab_test.csv")
print("A/B测试数据加载成功！")
print(df.head())`,
            },
            {
              title: '核心评估指标',
              content: '转化率：完成目标行为的用户比例。提升度：实验组相比对照组的提升百分比。显著性：差异是否具有统计学意义。',
              tips: ['p值小于0.05通常被认为具有统计显著性。'],
              warnings: [],
              exampleCode: `# 计算转化率
control = df[df["group"] == "control"]
treatment = df[df["group"] == "treatment"]

control_rate = control["conversion"].mean()
treatment_rate = treatment["conversion"].mean()
lift = (treatment_rate - control_rate) / control_rate * 100

print(f"对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"提升度：{lift:.2f}%")`,
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '1.1 导入必要工具库',
              content: '导入pandas、numpy和scipy.stats进行统计检验。',
              tips: ['scipy.stats提供各种统计分布和假设检验函数。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np
from scipy import stats

print("库加载成功！")`,
            },
            {
              title: '1.2 数据校验',
              content: '在分析前检查样本量是否足够、分组是否均衡、数据质量是否合格。',
              tips: ['样本量太小会导致结果不稳定，分组不均衡会引入偏差。'],
              warnings: [],
              exampleCode: `# 数据校验
print(f"总样本量：{len(df)}")
print(f"\\n分组情况：")
print(df["group"].value_counts())

# 检查分组均衡性
group_sizes = df["group"].value_counts()
imbalance = abs(group_sizes["control"] - group_sizes["treatment"]) / len(df) * 100
print(f"\\n分组不均衡程度：{imbalance:.2f}%")`,
            },
          ],
        },
        {
          title: '核心分析',
          sections: [
            {
              title: '2.1 转化率对比',
              content: '计算对照组和实验组的转化率，直观展示实验效果。',
              tips: ['转化率是最直观的业务指标，但需要统计检验确认显著性。'],
              warnings: [],
              exampleCode: `# 转化率对比
conversion_rates = df.groupby("group")["conversion"].agg(["mean", "sum", "count"])
print("各组转化情况：")
print(conversion_rates)`,
            },
            {
              title: '2.2 统计显著性检验',
              content: '使用卡方检验判断转化率差异是否显著，或使用t检验判断均值差异是否显著。',
              tips: ['卡方检验适用于比例数据，t检验适用于连续数据。'],
              warnings: [],
              exampleCode: `# 卡方检验
from scipy.stats import chi2_contingency

contingency_table = pd.crosstab(df["group"], df["conversion"])
chi2, p_value, dof, expected = chi2_contingency(contingency_table)

print(f"卡方统计量：{chi2:.4f}")
print(f"p值：{p_value:.4f}")

if p_value < 0.05:
    print("结论：差异具有统计显著性 ✓")
else:
    print("结论：差异不具有统计显著性 ✗")`,
            },
            {
              title: '2.3 置信区间计算',
              content: '计算转化率差异的置信区间，给出效果估计的范围。',
              tips: ['95%置信区间表示真实值有95%的概率落在这个范围内。'],
              warnings: [],
              exampleCode: `# 置信区间计算
from scipy.stats import norm

# 转化率差异的置信区间
p1 = treatment["conversion"].mean()
p2 = control["conversion"].mean()
n1, n2 = len(treatment), len(control)

# pooled proportion
p_pooled = (treatment["conversion"].sum() + control["conversion"].sum()) / (n1 + n2)
se = np.sqrt(p_pooled * (1 - p_pooled) * (1/n1 + 1/n2))

# 95%置信区间
z = 1.96
diff = p1 - p2
ci_lower = diff - z * se
ci_upper = diff + z * se

print(f"转化率差异：{diff:.4f}")
print(f"95%置信区间：[{ci_lower:.4f}, {ci_upper:.4f}]")`,
            },
          ],
        },
        {
          title: '结论报告',
          sections: [
            {
              title: '3.1 结果解读',
              content: '综合统计检验和业务指标，给出明确的实验结论和业务建议。',
              tips: ['即使统计显著，也要结合业务成本收益决定是否上线。'],
              warnings: [],
              exampleCode: `# 结果解读
print("="*50)
print("A/B测试分析报告")
print("="*50)
print(f"对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"相对提升：{lift:.2f}%")
print(f"统计显著性：{'是' if p_value < 0.05 else '否'} (p={p_value:.4f})")
print("="*50)

if p_value < 0.05 and lift > 0:
    print("建议：实验组方案效果更优，建议全量上线")
else:
    print("建议：实验组方案与对照组无显著差异或效果下降，继续优化")`,
            },
          ],
        },
      ],
      practiceTitle: '实战练习：完整A/B测试分析',
      practiceDesc: '综合运用所学知识完成一次完整的A/B测试数据分析',
      initialCode: `# A/B测试分析练习
import pandas as pd
import numpy as np
from scipy import stats

# 1. 加载数据
df = pd.read_csv("datasets/ab_test.csv")
print("数据加载成功！")

# 2. 数据校验
print("\\n分组情况：")
print(df["group"].value_counts())

# 3. 转化率对比
control = df[df["group"] == "control"]
treatment = df[df["group"] == "treatment"]

control_rate = control["conversion"].mean()
treatment_rate = treatment["conversion"].mean()
lift = (treatment_rate - control_rate) / control_rate * 100

print(f"\\n对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"提升度：{lift:.2f}%")

# 4. 统计检验
from scipy.stats import chi2_contingency
contingency_table = pd.crosstab(df["group"], df["conversion"])
chi2, p_value, dof, expected = chi2_contingency(contingency_table)

print(f"\\n卡方检验p值：{p_value:.4f}")
if p_value < 0.05:
    print("结论：差异具有统计显著性 ✓")`,
      sectionAnswers: [
        `# 章节1参考答案
import pandas as pd
import numpy as np

df = pd.read_csv("datasets/ab_test.csv")
print("A/B测试数据加载成功！")
print(df.head())`,
        `# 章节2参考答案
control = df[df["group"] == "control"]
treatment = df[df["group"] == "treatment"]

control_rate = control["conversion"].mean()
treatment_rate = treatment["conversion"].mean()
lift = (treatment_rate - control_rate) / control_rate * 100

print(f"对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"提升度：{lift:.2f}%")`,
        `# 章节3参考答案
import pandas as pd
import numpy as np
from scipy import stats

print("库加载成功！")`,
        `# 章节4参考答案
print(f"总样本量：{len(df)}")
print(f"分组情况：")
print(df["group"].value_counts())`,
        `# 章节5参考答案
conversion_rates = df.groupby("group")["conversion"].agg(["mean", "sum", "count"])
print("各组转化情况：")
print(conversion_rates)`,
        `# 章节6参考答案
from scipy.stats import chi2_contingency

contingency_table = pd.crosstab(df["group"], df["conversion"])
chi2, p_value, dof, expected = chi2_contingency(contingency_table)

print(f"卡方统计量：{chi2:.4f}")
print(f"p值：{p_value:.4f}")

if p_value < 0.05:
    print("结论：差异具有统计显著性 ✓")
else:
    print("结论：差异不具有统计显著性 ✗")`,
        `# 章节7参考答案
p1 = treatment["conversion"].mean()
p2 = control["conversion"].mean()
n1, n2 = len(treatment), len(control)

p_pooled = (treatment["conversion"].sum() + control["conversion"].sum()) / (n1 + n2)
se = np.sqrt(p_pooled * (1 - p_pooled) * (1/n1 + 1/n2))

z = 1.96
diff = p1 - p2
ci_lower = diff - z * se
ci_upper = diff + z * se

print(f"转化率差异：{diff:.4f}")
print(f"95%置信区间：[{ci_lower:.4f}, {ci_upper:.4f}]")`,
        `# 章节8参考答案
print("="*50)
print("A/B测试分析报告")
print("="*50)
print(f"对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"相对提升：{lift:.2f}%")
print(f"统计显著性：{'是' if p_value < 0.05 else '否'}")
print("="*50)

if p_value < 0.05 and lift > 0:
    print("建议：实验组方案效果更优，建议全量上线")
else:
    print("建议：继续优化方案")`,
      ],
    },
    '07': {
      title: '销量时间序列分析',
      difficulty: '进阶',
      duration: '约 45 分钟',
      sectionGroups: [
        {
          title: '基础概念',
          sections: [
            {
              title: '什么是时间序列分析？',
              content: '时间序列分析是针对按时间顺序排列的数据进行分析，发现趋势、周期和季节性等规律。',
              tips: ['时间序列分析广泛应用于销量预测、股票分析、流量监控等场景。'],
              warnings: [],
              exampleCode: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/time_series_sales.csv")
print("时间序列数据加载成功！")

# 转换日期列为索引
df["date"] = pd.to_datetime(df["date"])
df = df.sort_values("date")
print(df.head())`,
            },
            {
              title: '时间序列分解',
              content: '时间序列可以分解为：趋势（Trend）、周期（Seasonal）、残差（Residual）。理解这些成分是分析的基础。',
              tips: ['加性模型：Y=T+S+R，乘性模型：Y=T×S×R。'],
              warnings: [],
              exampleCode: `# 时间序列分解概念
# 趋势(Trend)：长期的变化方向
# 周期(Seasonal)：固定周期的波动
# 残差(Residual)：无法解释的随机波动

print("时间序列包含的成分：")
print("1. 趋势(Trend)：长期上升或下降")
print("2. 周期(Seasonal)：固定周期波动")
print("3. 残差(Residual)：随机波动")`,
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '1.1 导入必要工具库',
              content: '导入pandas、numpy和matplotlib进行时间序列分析和可视化。',
              tips: ['datetime模块用于日期处理，matplotlib用于绘图。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

print("库加载成功！")`,
            },
            {
              title: '1.2 时间序列预处理',
              content: '将日期列转换为datetime类型，设置日期为索引，进行必要的缺失值处理。',
              tips: ['缺失值处理方法：前向填充、后向填充、插值等。'],
              warnings: [],
              exampleCode: `# 时间序列预处理
df["date"] = pd.to_datetime(df["date"])
df = df.set_index("date")
df = df.sort_index()

# 处理缺失值（如果存在）
df["sales"] = df["sales"].fillna(method="ffill")

print("预处理完成！")
print(f"时间范围：{df.index.min()} 至 {df.index.max()}")
print(f"数据量：{len(df)} 条")`,
            },
          ],
        },
        {
          title: '核心分析',
          sections: [
            {
              title: '2.1 趋势分析',
              content: '使用移动平均平滑短期波动，展示长期趋势变化。',
              tips: ['窗口大小选择要合适，太小噪音多，太大趋势不明显。'],
              warnings: [],
              exampleCode: `# 趋势分析 - 移动平均
df["ma_7"] = df["sales"].rolling(window=7).mean()
df["ma_30"] = df["sales"].rolling(window=30).mean()

print("7日移动平均：")
print(df[["sales", "ma_7"]].tail(10))

# 绘制趋势图
plt.figure(figsize=(12, 6))
plt.plot(df.index, df["sales"], label="原始数据", alpha=0.5)
plt.plot(df.index, df["ma_7"], label="7日均线", linewidth=2)
plt.plot(df.index, df["ma_30"], label="30日均线", linewidth=2)
plt.legend()
plt.title("销量趋势分析")
plt.tight_layout()
plt.show()`,
            },
            {
              title: '2.2 季节性分析',
              content: '按月、按周聚合数据，识别周期性的波动模式。',
              tips: ['使用groupby按时间周期聚合，可以发现季节性规律。'],
              warnings: [],
              exampleCode: `# 季节性分析
df["month"] = df.index.month
df["weekday"] = df.index.dayofweek

# 按月聚合
monthly_sales = df.groupby("month")["sales"].sum()
print("月度销量：")
print(monthly_sales)

# 按星期聚合
weekday_sales = df.groupby("weekday")["sales"].mean()
print("\\n星期平均销量：")
print(weekday_sales)`,
            },
            {
              title: '2.3 增长率计算',
              content: '计算同比增长率和环比增长率，是业务分析中最常用的指标。',
              tips: ['同比：与去年同期比；环比：与上期比。'],
              warnings: [],
              exampleCode: `# 同比和环比增长率
df["sales_yoy"] = df["sales"].pct_change(periods=365) * 100  # 同比
df["sales_qoq"] = df["sales"].pct_change(periods=30) * 100   # 环比

print("增长率分析：")
print(df[["sales", "sales_yoy", "sales_qoq"]].tail(10))`,
            },
          ],
        },
        {
          title: '预测与评估',
          sections: [
            {
              title: '3.1 移动平均预测',
              content: '使用简单移动平均进行短期销量预测，是最基础的时间序列预测方法。',
              tips: ['移动平均预测适合平稳时间序列，对趋势转折预测效果差。'],
              warnings: [],
              exampleCode: `# 移动平均预测
# 用过去7天的平均预测下一天
df["forecast"] = df["sales"].rolling(window=7).mean().shift(1)

# 计算预测误差
df["error"] = df["sales"] - df["forecast"]
df["abs_error"] = abs(df["error"])

mae = df["abs_error"].mean()
print(f"平均绝对误差(MAE)：{mae:.2f}")

# 绘制预测对比
plt.figure(figsize=(12, 6))
plt.plot(df.index, df["sales"], label="实际销量")
plt.plot(df.index, df["forecast"], label="预测销量")
plt.legend()
plt.title("销量预测 vs 实际")
plt.tight_layout()
plt.show()`,
            },
          ],
        },
      ],
      practiceTitle: '实战练习：完整时间序列分析',
      practiceDesc: '从数据导入到预测评估的完整流程',
      initialCode: `# 时间序列分析练习
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 1. 加载数据
df = pd.read_csv("datasets/time_series_sales.csv")
df["date"] = pd.to_datetime(df["date"])
df = df.sort_values("date")
print("数据加载成功！")

# 2. 时间序列预处理
df = df.set_index("date")
print(f"时间范围：{df.index.min()} 至 {df.index.max()}")

# 3. 趋势分析
df["ma_7"] = df["sales"].rolling(window=7).mean()
print("\\n7日移动平均：")
print(df[["sales", "ma_7"]].tail(10))

# 4. 季节性分析
df["month"] = df.index.month
monthly_sales = df.groupby("month")["sales"].sum()
print("\\n月度销量：")
print(monthly_sales)

# 5. 预测
df["forecast"] = df["sales"].rolling(window=7).mean().shift(1)
mae = (df["sales"] - df["forecast"]).abs().mean()
print(f"\\n预测误差MAE：{mae:.2f}")`,
      sectionAnswers: [
        `# 章节1参考答案
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/time_series_sales.csv")
df["date"] = pd.to_datetime(df["date"])
df = df.sort_values("date")
print("时间序列数据加载成功！")
print(df.head())`,
        `# 章节2参考答案
print("时间序列包含的成分：")
print("1. 趋势(Trend)：长期上升或下降")
print("2. 周期(Seasonal)：固定周期波动")
print("3. 残差(Residual)：随机波动")`,
        `# 章节3参考答案
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

print("库加载成功！")`,
        `# 章节4参考答案
df["date"] = pd.to_datetime(df["date"])
df = df.set_index("date")
df = df.sort_index()
df["sales"] = df["sales"].fillna(method="ffill")
print("预处理完成！")
print(f"时间范围：{df.index.min()} 至 {df.index.max()}")`,
        `# 章节5参考答案
df["ma_7"] = df["sales"].rolling(window=7).mean()
df["ma_30"] = df["sales"].rolling(window=30).mean()
print("7日移动平均：")
print(df[["sales", "ma_7"]].tail(10))`,
        `# 章节6参考答案
df["month"] = df.index.month
df["weekday"] = df.index.dayofweek

monthly_sales = df.groupby("month")["sales"].sum()
print("月度销量：")
print(monthly_sales)

weekday_sales = df.groupby("weekday")["sales"].mean()
print("\\n星期平均销量：")
print(weekday_sales)`,
        `# 章节7参考答案
df["sales_yoy"] = df["sales"].pct_change(periods=365) * 100
df["sales_qoq"] = df["sales"].pct_change(periods=30) * 100
print("增长率分析：")
print(df[["sales", "sales_yoy", "sales_qoq"]].tail(10))`,
        `# 章节8参考答案
df["forecast"] = df["sales"].rolling(window=7).mean().shift(1)
df["error"] = df["sales"] - df["forecast"]
df["abs_error"] = abs(df["error"])
mae = df["abs_error"].mean()
print(f"平均绝对误差(MAE)：{mae:.2f}")`,
      ],
    },
    '08': {
      title: '数据分析特征工程',
      difficulty: '高级',
      duration: '约 60 分钟',
      sectionGroups: [
        {
          title: '基础概念',
          sections: [
            {
              title: '什么是特征工程？',
              content: '特征工程是将原始数据转换为模型可用特征的过程。好的特征工程可以大幅提升模型效果，有时甚至比选择算法更重要。',
              tips: ['特征工程是数据科学中最耗时间但也最重要的环节。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("客户数据加载成功！")
print(df.head())`,
            },
            {
              title: '特征类型',
              content: '数值特征：年龄、收入等连续数值。类别特征：性别、省份等离散类别。时间特征：从日期提取的年月日等。',
              tips: ['不同类型的特征需要不同的处理方法。'],
              warnings: [],
              exampleCode: `# 识别特征类型
numerical_cols = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
categorical_cols = []  # 本数据集没有明显的类别特征
date_cols = ["register_date", "last_purchase"]

print("数值特征：", numerical_cols)
print("类别特征：", categorical_cols)
print("日期特征：", date_cols)`,
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '1.1 导入必要工具库',
              content: '导入pandas、numpy和sklearn的预处理模块。',
              tips: ['sklearn.preprocessing提供各种特征预处理工具。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder

print("库加载成功！")`,
            },
            {
              title: '1.2 原始数据探索',
              content: '使用info、describe、corr了解数据的基本情况、分布和相关性。',
              tips: ['相关性分析可以发现可能冗余的特征。'],
              warnings: [],
              exampleCode: `# 数据探索
print("数据基本信息：")
print(df.info())

print("\\n统计描述：")
print(df.describe())

print("\\n相关性矩阵：")
print(df[numerical_cols].corr())`,
            },
          ],
        },
        {
          title: '特征构建',
          sections: [
            {
              title: '2.1 数值特征构造',
              content: '通过现有数值特征构造新的分析特征，如比率、差值、分箱等。',
              tips: ['有业务意义的衍生特征往往比原始特征更有价值。'],
              warnings: [],
              exampleCode: `# 构造数值特征
# 客单价与均值的比率
df["order_value_ratio"] = df["avg_order_value"] / df["avg_order_value"].mean()

# 消费频率分段
df["freq_level"] = pd.cut(df["purchase_freq"], bins=[0, 5, 15, 100], 
                          labels=["低频", "中频", "高频"])

# 最近一次消费天数
df["last_purchase"] = pd.to_datetime(df["last_purchase"])
df["days_since_last"] = (pd.Timestamp.now() - df["last_purchase"]).dt.days

print("新增特征：")
print(df[["order_value_ratio", "freq_level", "days_since_last"]].head())`,
            },
            {
              title: '2.2 时间特征提取',
              content: '从日期列提取年、月、日、星期等时间特征，以及时间间隔特征。',
              tips: ['用户行为往往与时间周期相关，如周末、节假日等。'],
              warnings: [],
              exampleCode: `# 时间特征提取
df["register_date"] = pd.to_datetime(df["register_date"])

df["register_year"] = df["register_date"].dt.year
df["register_month"] = df["register_date"].dt.month
df["register_weekday"] = df["register_date"].dt.dayofweek
df["register_quarter"] = df["register_date"].dt.quarter

# 客户生命周期天数
df["customer_lifetime"] = (pd.Timestamp.now() - df["register_date"]).dt.days

print("时间特征：")
print(df[["register_year", "register_month", "register_weekday", "customer_lifetime"]].head())`,
            },
            {
              title: '2.3 特征缩放',
              content: '使用StandardScaler进行Z-Score标准化，或使用MinMaxScaler进行归一化，消除量纲影响。',
              tips: ['K-Means、SVM、神经网络等算法对特征缩放敏感。'],
              warnings: [],
              exampleCode: `# 特征缩放
features_to_scale = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]

# Z-Score标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df[features_to_scale])
print("Z-Score标准化后：")
print(pd.DataFrame(X_scaled, columns=features_to_scale).describe())`,
            },
          ],
        },
        {
          title: '特征优化',
          sections: [
            {
              title: '3.1 特征筛选',
              content: '使用方差阈值、相关系数等方法筛选高质量特征，剔除冗余特征。',
              tips: ['特征不是越多越好，高质量特征比数量更重要。'],
              warnings: [],
              exampleCode: `# 特征筛选 - 相关性分析
corr_matrix = df[features_to_scale].corr()

# 找出高相关特征对（相关系数>0.9）
high_corr_pairs = []
for i in range(len(corr_matrix.columns)):
    for j in range(i+1, len(corr_matrix.columns)):
        if abs(corr_matrix.iloc[i, j]) > 0.9:
            high_corr_pairs.append(
                (corr_matrix.columns[i], corr_matrix.columns[j], corr_matrix.iloc[i, j])
            )

print("高相关特征对（可能存在冗余）：")
for pair in high_corr_pairs:
    print(f"  {pair[0]} <-> {pair[1]}: {pair[2]:.3f}")`,
            },
          ],
        },
      ],
      practiceTitle: '实战练习：完整特征工程流程',
      practiceDesc: '综合运用特征工程完成客户数据的全流程处理',
      initialCode: `# 特征工程练习
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

# 1. 加载数据
df = pd.read_csv("datasets/customer_features.csv")
print("数据加载成功！")

# 2. 数据探索
numerical_cols = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
print("\\n相关性矩阵：")
print(df[numerical_cols].corr())

# 3. 构造数值特征
df["order_value_ratio"] = df["avg_order_value"] / df["avg_order_value"].mean()

# 4. 提取时间特征
df["register_date"] = pd.to_datetime(df["register_date"])
df["last_purchase"] = pd.to_datetime(df["last_purchase"])
df["days_since_last"] = (pd.Timestamp.now() - df["last_purchase"]).dt.days
df["customer_lifetime"] = (pd.Timestamp.now() - df["register_date"]).dt.days

# 5. 特征缩放
scaler = StandardScaler()
features_to_scale = numerical_cols + ["days_since_last", "customer_lifetime"]
X_scaled = scaler.fit_transform(df[features_to_scale])

print("\\n特征工程完成！")
print(f"最终特征数：{X_scaled.shape[1]}")`,
      sectionAnswers: [
        `# 章节1参考答案
import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("客户数据加载成功！")
print(df.head())`,
        `# 章节2参考答案
numerical_cols = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
print("数值特征：", numerical_cols)`,
        `# 章节3参考答案
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

print("库加载成功！")`,
        `# 章节4参考答案
print("数据基本信息：")
print(df.info())
print("\\n相关性矩阵：")
print(df[numerical_cols].corr())`,
        `# 章节5参考答案
df["order_value_ratio"] = df["avg_order_value"] / df["avg_order_value"].mean()
df["freq_level"] = pd.cut(df["purchase_freq"], bins=[0, 5, 15, 100], 
                          labels=["低频", "中频", "高频"])
df["days_since_last"] = (pd.Timestamp.now() - pd.to_datetime(df["last_purchase"])).dt.days
print("新增特征：")
print(df[["order_value_ratio", "freq_level", "days_since_last"]].head())`,
        `# 章节6参考答案
df["register_date"] = pd.to_datetime(df["register_date"])
df["register_year"] = df["register_date"].dt.year
df["register_month"] = df["register_date"].dt.month
df["customer_lifetime"] = (pd.Timestamp.now() - df["register_date"]).dt.days
print("时间特征：")
print(df[["register_year", "register_month", "customer_lifetime"]].head())`,
        `# 章节7参考答案
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df[features_to_scale])
print("Z-Score标准化后：")
print(pd.DataFrame(X_scaled, columns=features_to_scale).describe())`,
        `# 章节8参考答案
corr_matrix = df[features_to_scale].corr()
high_corr_pairs = []
for i in range(len(corr_matrix.columns)):
    for j in range(i+1, len(corr_matrix.columns)):
        if abs(corr_matrix.iloc[i, j]) > 0.9:
            high_corr_pairs.append((corr_matrix.columns[i], corr_matrix.columns[j], corr_matrix.iloc[i, j]))
print("高相关特征对：")
for pair in high_corr_pairs:
    print(f"  {pair[0]} <-> {pair[1]}: {pair[2]:.3f}")`,
      ],
    },
    '09': {
      title: '全域数据异常值检测',
      difficulty: '高级',
      duration: '约 45 分钟',
      sectionGroups: [
        {
          title: '基础概念',
          sections: [
            {
              title: '什么是异常值？',
              content: '异常值是偏离正常数据分布的观测点，可能是数据录入错误、设备故障或真实的极端情况。',
              tips: ['异常值会严重影响统计分析结果，发现和处理异常值非常重要。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("数据加载成功！")
print(df.head())`,
            },
            {
              title: '异常值的影响',
              content: '异常值会扭曲均值、标准差等统计量，影响模型训练效果，甚至导致错误的业务决策。',
              tips: ['在建模前一定要做异常值检测和处理。'],
              warnings: [],
              exampleCode: `# 异常值影响示例
# 均值对异常值敏感
normal_data = [10, 11, 12, 13, 14, 15]
outlier_data = [10, 11, 12, 13, 14, 150]

print(f"正常数据均值：{np.mean(normal_data):.2f}")
print(f"含异常值数据均值：{np.mean(outlier_data):.2f}")
print(f"\\n异常值导致均值偏差：{np.mean(outlier_data) - np.mean(normal_data):.2f}")`,
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '1.1 导入必要工具库',
              content: '导入pandas、numpy和sklearn的异常检测模块。',
              tips: ['sklearn.ensemble提供IsolationForest等异常检测算法。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

print("库加载成功！")`,
            },
            {
              title: '1.2 数据画像',
              content: '通过统计描述了解数据的分布特征，识别可能存在问题的列。',
              tips: ['关注min、max、mean、std这些统计量，发现明显不合理的值。'],
              warnings: [],
              exampleCode: `# 数据画像
print("统计描述：")
print(df.describe())

print("\\n各列分布检查：")
for col in df.columns:
    if df[col].dtype in ['int64', 'float64']:
        min_val = df[col].min()
        max_val = df[col].max()
        print(f"{col}: 范围 [{min_val}, {max_val}]")`,
            },
          ],
        },
        {
          title: '异常检测方法',
          sections: [
            {
              title: '2.1 统计学方法',
              content: '使用3σ原则（正态分布）或IQR四分位距方法检测单变量异常值。',
              tips: ['3σ原则适用于近似正态分布的数据，IQR适用于任何分布。'],
              warnings: [],
              exampleCode: `# 3σ原则
def detect_outliers_3sigma(data, column):
    mean = data[column].mean()
    std = data[column].std()
    lower = mean - 3 * std
    upper = mean + 3 * std
    outliers = data[(data[column] < lower) | (data[column] > upper)]
    return outliers, lower, upper

# 检测年龄异常值
outliers, lower, upper = detect_outliers_3sigma(df, "age")
print(f"3σ原则检测到的年龄异常值：{len(outliers)} 条")
print(f"正常范围：[{lower:.1f}, {upper:.1f}]")

# IQR方法
def detect_outliers_iqr(data, column):
    Q1 = data[column].quantile(0.25)
    Q3 = data[column].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    outliers = data[(data[column] < lower) | (data[column] > upper)]
    return outliers, lower, upper

outliers, lower, upper = detect_outliers_iqr(df, "income")
print(f"\\nIQR方法检测到的收入异常值：{len(outliers)} 条")
print(f"正常范围：[{lower:.0f}, {upper:.0f}]")`,
            },
            {
              title: '2.2 孤立森林检测',
              content: '使用sklearn的IsolationForest进行多维异常检测，自动识别复杂模式。',
              tips: ['contamination参数表示预期的异常比例。'],
              warnings: [],
              exampleCode: `# 孤立森林
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]

# 训练孤立森林模型
iso_forest = IsolationForest(contamination=0.1, random_state=42)
df["anomaly"] = iso_forest.fit_predict(X)

# 标记异常（-1表示异常，1表示正常）
anomalies = df[df["anomaly"] == -1]
print(f"孤立森林检测到的异常记录：{len(anomalies)} 条")
print("\\n异常记录详情：")
print(anomalies[features])`,
            },
            {
              title: '2.3 业务规则检测',
              content: '基于业务常识定义硬性规则，如年龄必须在0-150之间、收入不能为负等。',
              tips: ['业务规则是最直接的异常检测方法，但只能检测已知类型的异常。'],
              warnings: [],
              exampleCode: `# 业务规则检测
def check_business_rules(df):
    issues = []
    
    # 规则1：年龄必须在0-150之间
    invalid_age = df[(df["age"] < 0) | (df["age"] > 150)]
    if len(invalid_age) > 0:
        issues.append(f"年龄异常：{len(invalid_age)} 条")
        issues.extend([f"  - {row['customer_id']}: age={row['age']}" 
                       for _, row in invalid_age.iterrows()])
    
    # 规则2：收入不能为负
    invalid_income = df[df["income"] < 0]
    if len(invalid_income) > 0:
        issues.append(f"收入异常：{len(invalid_income)} 条")
        issues.extend([f"  - {row['customer_id']}: income={row['income']}" 
                       for _, row in invalid_income.iterrows()])
    
    return issues

issues = check_business_rules(df)
print("业务规则检测结果：")
for issue in issues:
    print(issue)`,
            },
          ],
        },
        {
          title: '处理与报告',
          sections: [
            {
              title: '3.1 异常值处理策略',
              content: '三种处理策略：删除（删除异常记录）、替换（用均值/中位数替换）、保留（标记但不修改）。',
              tips: ['选择哪种策略取决于异常原因和业务场景。'],
              warnings: [],
              exampleCode: `# 异常值处理策略
# 策略1：删除
df_cleaned = df[df["anomaly"] == 1].copy()
print(f"删除异常后数据量：{len(df_cleaned)} 条")

# 策略2：替换为中位数
df_fixed = df.copy()
for col in ["age", "income"]:
    median_val = df[df["anomaly"] == 1][col].median()
    df_fixed.loc[df_fixed["anomaly"] == -1, col] = median_val

print("\\n异常值处理完成！")`,
            },
          ],
        },
      ],
      practiceTitle: '实战练习：完整异常值检测流程',
      practiceDesc: '从数据加载到报告输出的完整异常值检测流程',
      initialCode: `# 异常值检测练习
import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

# 1. 加载数据
df = pd.read_csv("datasets/customer_features.csv")
print("数据加载成功！")

# 2. 数据探索
print("\\n统计描述：")
print(df.describe())

# 3. 业务规则检测
def check_business_rules(df):
    issues = []
    if len(df[(df["age"] < 0) | (df["age"] > 150)]) > 0:
        issues.append("发现年龄异常")
    if len(df[df["income"] < 0]) > 0:
        issues.append("发现收入异常")
    return issues

issues = check_business_rules(df)
print("\\n业务规则检测：", issues)

# 4. 孤立森林检测
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
iso_forest = IsolationForest(contamination=0.1, random_state=42)
df["anomaly"] = iso_forest.fit_predict(df[features])

anomalies = df[df["anomaly"] == -1]
print(f"\\n孤立森林检测到 {len(anomalies)} 条异常记录")

# 5. 异常处理
df_cleaned = df[df["anomaly"] == 1].copy()
print(f"清洗后数据量：{len(df_cleaned)} 条")`,
      sectionAnswers: [
        `# 章节1参考答案
import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("数据加载成功！")
print(df.head())`,
        `# 章节2参考答案
normal_data = [10, 11, 12, 13, 14, 15]
outlier_data = [10, 11, 12, 13, 14, 150]
print(f"正常数据均值：{np.mean(normal_data):.2f}")
print(f"含异常值数据均值：{np.mean(outlier_data):.2f}")`,
        `# 章节3参考答案
import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

print("库加载成功！")`,
        `# 章节4参考答案
print("统计描述：")
print(df.describe())`,
        `# 章节5参考答案
def detect_outliers_3sigma(data, column):
    mean = data[column].mean()
    std = data[column].std()
    lower = mean - 3 * std
    upper = mean + 3 * std
    outliers = data[(data[column] < lower) | (data[column] > upper)]
    return outliers, lower, upper

outliers, lower, upper = detect_outliers_3sigma(df, "age")
print(f"3σ原则检测到的年龄异常值：{len(outliers)} 条")`,
        `# 章节6参考答案
iso_forest = IsolationForest(contamination=0.1, random_state=42)
df["anomaly"] = iso_forest.fit_predict(df[features])
anomalies = df[df["anomaly"] == -1]
print(f"孤立森林检测到的异常记录：{len(anomalies)} 条")`,
        `# 章节7参考答案
def check_business_rules(df):
    issues = []
    invalid_age = df[(df["age"] < 0) | (df["age"] > 150)]
    if len(invalid_age) > 0:
        issues.append(f"年龄异常：{len(invalid_age)} 条")
    invalid_income = df[df["income"] < 0]
    if len(invalid_income) > 0:
        issues.append(f"收入异常：{len(invalid_income)} 条")
    return issues`,
        `# 章节8参考答案
df_cleaned = df[df["anomaly"] == 1].copy()
print(f"删除异常后数据量：{len(df_cleaned)} 条")`,
      ],
    },
    '10': {
      title: '多源数据集融合整合',
      difficulty: '进阶',
      duration: '约 45 分钟',
      sectionGroups: [
        {
          title: '基础概念',
          sections: [
            {
              title: '什么是数据融合？',
              content: '数据融合是将来自不同来源的数据整合在一起，形成完整的分析视图。企业数据通常分散在多个系统中，需要通过关键字段关联。',
              tips: ['数据融合的关键是找到各表之间的关联键（主键、外键）。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np

# 加载三张表
orders = pd.read_csv("datasets/retail_orders.csv")
customers = pd.read_csv("datasets/customer_info.csv")
products = pd.read_csv("datasets/product_catalog.csv")

print("订单表：", orders.shape)
print("客户表：", customers.shape)
print("产品表：", products.shape)`,
            },
            {
              title: '合并类型对比',
              content: 'concat：纵向拼接相同结构的表。merge：按关键字段横向合并。join：基于索引的快速关联。',
              tips: ['选择正确的合并方式很重要，合并错误会导致数据丢失或重复。'],
              warnings: [],
              exampleCode: `# 合并方式选择
# concat: pd.concat([df1, df2], axis=0)
# merge: pd.merge(df1, df2, on="key", how="inner")
# join: df1.join(df2)`,
            },
          ],
        },
        {
          title: '数据准备',
          sections: [
            {
              title: '1.1 导入必要工具库',
              content: '导入pandas和numpy，主要使用pandas的合并功能。',
              tips: ['熟练掌握merge、concat、join三种合并方法。'],
              warnings: [],
              exampleCode: `import pandas as pd
import numpy as np

print("库加载成功！")`,
            },
            {
              title: '1.2 创建多源数据集',
              content: '模拟企业环境，创建订单表、客户表、产品表三张关联表。',
              tips: ['关联键可以是订单ID、客户ID、产品ID等。'],
              warnings: [],
              exampleCode: `# 模拟数据
orders = pd.DataFrame({
    "order_id": ["O001", "O002", "O003"],
    "customer_id": ["C001", "C002", "C001"],
    "product_id": ["P101", "P103", "P102"],
    "amount": [1200, 580, 3200],
    "order_date": ["2024-01-05", "2024-01-08", "2024-01-12"]
})

customers = pd.DataFrame({
    "customer_id": ["C001", "C002", "C003"],
    "name": ["张三", "李四", "王五"],
    "age": [28, 35, 42],
    "city": ["北京", "上海", "广州"]
})

products = pd.DataFrame({
    "product_id": ["P101", "P102", "P103"],
    "name": ["手机", "电脑", "平板"],
    "price": [2999, 5999, 1999],
    "category": ["数码", "数码", "数码"]
})

print("数据创建成功！")
print("\\n订单表：")
print(orders)
print("\\n客户表：")
print(customers)
print("\\n产品表：")
print(products)`,
            },
          ],
        },
        {
          title: '核心合并操作',
          sections: [
            {
              title: '2.1 纵向拼接（concat）',
              content: '使用pd.concat纵向拼接结构相同的表，常用于合并多个月的同类数据。',
              tips: ['concat默认外拼接，axis=0表示纵向拼接。'],
              warnings: [],
              exampleCode: `# 纵向拼接
orders_jan = orders.copy()
orders_feb = orders.copy()

combined = pd.concat([orders_jan, orders_feb], ignore_index=True)
print(f"合并后数据量：{len(combined)} 条")`,
            },
            {
              title: '2.2 内连接合并（merge）',
              content: '使用pd.merge(how="inner")只保留两表键值匹配的记录，常用于关联查询。',
              tips: ['inner join只保留两边都有的键，会丢失不匹配的数据。'],
              warnings: [],
              exampleCode: `# 内连接
merged = pd.merge(orders, customers, on="customer_id", how="inner")
print("订单-客户内连接结果：")
print(merged)`,
            },
            {
              title: '2.3 左连接合并',
              content: '使用pd.merge(how="left")保留左表全部记录，右表没有匹配的填充空值。',
              tips: ['左连接保留所有左表数据，是最常用的连接方式。'],
              warnings: [],
              exampleCode: `# 左连接
left_merged = pd.merge(orders, customers, on="customer_id", how="left")
print("左连接结果：")
print(left_merged)
print(f"\\n结果行数与订单表相同：{len(left_merged) == len(orders)}")`,
            },
            {
              title: '2.4 多表关联',
              content: '通过多次merge将三张或更多表关联在一起，形成完整的宽表。',
              tips: ['多表关联要注意合并顺序，避免出现笛卡尔积。'],
              warnings: [],
              exampleCode: `# 多表关联
# 第一步：订单关联客户
result = pd.merge(orders, customers, on="customer_id", how="left")

# 第二步：关联产品
result = pd.merge(result, products, on="product_id", how="left")

print("完整宽表：")
print(result)
print(f"\\n最终数据形状：{result.shape}")`,
            },
          ],
        },
        {
          title: '数据整合',
          sections: [
            {
              title: '3.1 数据完整性验证',
              content: '合并后检查数据完整性：匹配率、缺失值、重复记录等。',
              tips: ['合并后一定要验证数据质量，确保没有意外丢失。'],
              warnings: [],
              exampleCode: `# 数据完整性验证
print("匹配率检查：")
print(f"  订单匹配客户率：{result['name'].notna().sum() / len(result):.1%}")
print(f"  订单匹配产品率：{result['name_x'].notna().sum() / len(result):.1%}")

print("\\n缺失值检查：")
print(result.isnull().sum())

print("\\n重复记录检查：")
print(f"  重复订单ID：{result['order_id'].duplicated().sum()} 条")`,
            },
          ],
        },
      ],
      practiceTitle: '实战练习：完整多源数据融合',
      practiceDesc: '综合运用 concat、merge、join 完成数据整合',
      initialCode: `# 多源数据融合练习
import pandas as pd
import numpy as np

# 1. 创建模拟数据
orders = pd.DataFrame({
    "order_id": ["O001", "O002", "O003", "O004"],
    "customer_id": ["C001", "C002", "C001", "C003"],
    "product_id": ["P101", "P103", "P102", "P101"],
    "amount": [1200, 580, 3200, 890],
    "order_date": ["2024-01-05", "2024-01-08", "2024-01-12", "2024-01-15"]
})

customers = pd.DataFrame({
    "customer_id": ["C001", "C002", "C003"],
    "name": ["张三", "李四", "王五"],
    "city": ["北京", "上海", "广州"]
})

products = pd.DataFrame({
    "product_id": ["P101", "P102", "P103"],
    "name": ["手机", "电脑", "平板"],
    "category": ["数码", "数码", "数码"]
})

print("数据加载成功！")

# 2. 多表关联
# 订单关联客户
result = pd.merge(orders, customers, on="customer_id", how="left", suffixes=("", "_customer"))

# 关联产品
result = pd.merge(result, products, on="product_id", how="left", suffixes=("", "_product"))

print("\\n完整数据：")
print(result)

# 3. 数据验证
print(f"\\n数据匹配率：{(result['name'].notna().sum() / len(result)):.1%}")
print(f"\\n缺失值：")
print(result.isnull().sum())`,
      sectionAnswers: [
        `# 章节1参考答案
import pandas as pd
import numpy as np

orders = pd.read_csv("datasets/retail_orders.csv")
customers = pd.read_csv("datasets/customer_info.csv")
products = pd.read_csv("datasets/product_catalog.csv")

print("订单表：", orders.shape)
print("客户表：", customers.shape)
print("产品表：", products.shape)`,
        `# 章节2参考答案
# 合并方式选择
# concat: pd.concat([df1, df2], axis=0)
# merge: pd.merge(df1, df2, on="key", how="inner")
# join: df1.join(df2)`,
        `# 章节3参考答案
import pandas as pd
import numpy as np

print("库加载成功！")`,
        `# 章节4参考答案
orders = pd.DataFrame({
    "order_id": ["O001", "O002", "O003"],
    "customer_id": ["C001", "C002", "C001"],
    "product_id": ["P101", "P103", "P102"],
    "amount": [1200, 580, 3200],
    "order_date": ["2024-01-05", "2024-01-08", "2024-01-12"]
})
print("数据创建成功！")
print("\\n订单表：")
print(orders)`,
        `# 章节5参考答案
combined = pd.concat([orders_jan, orders_feb], ignore_index=True)
print(f"合并后数据量：{len(combined)} 条")`,
        `# 章节6参考答案
merged = pd.merge(orders, customers, on="customer_id", how="inner")
print("订单-客户内连接结果：")
print(merged)`,
        `# 章节7参考答案
left_merged = pd.merge(orders, customers, on="customer_id", how="left")
print("左连接结果：")
print(left_merged)`,
        `# 章节8参考答案
result = pd.merge(orders, customers, on="customer_id", how="left")
result = pd.merge(result, products, on="product_id", how="left")
print("完整宽表：")
print(result)`,
        `# 章节9参考答案
print("匹配率检查：")
print(f"  订单匹配客户率：{result['name'].notna().sum() / len(result):.1%}")
print("\\n缺失值检查：")
print(result.isnull().sum())`,
      ],
    },
  };

  const project = projectData[id as keyof typeof projectData];

  useEffect(() => {
    if (project) {
      setCode(project.initialCode);
      setUserCode('');
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

  useEffect(() => {
    // 每次切换章节时，重置显示状态但保持答案可见
    if (project && showAnswer) {
      // 已经显示了答案，不需要额外操作
    }
  }, [activeSection]);

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
  const currentSectionAnswer = project.sectionAnswers?.[activeSection] || '';

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
    setUserCode('');
    setOutput([]);
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const outputs: string[] = [];
      if (id === '01') {
        outputs.push('数据加载成功！');
        outputs.push('');
        outputs.push('原始数据预览：');
        outputs.push('   order_id customer_id  amount order_date    warehouse');
        outputs.push('0      001        C101   $1200  2024-01-15    US-WEST');
        outputs.push('1      002        C102  $850.5  01/20/2024 EU-CENTRAL');
        outputs.push('');
        outputs.push('金额清洗中...');
        outputs.push('客户ID填充中...');
        outputs.push('日期统一中...');
        outputs.push('去重中...');
        outputs.push('');
        outputs.push('=== 清洗完成 ===');
        outputs.push('最终数据量：5 条');
        outputs.push('已保存至：cleaned_orders.csv');
      } else {
        outputs.push('代码执行成功！');
        outputs.push('');
        outputs.push('运行结果预览...');
      }
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
        {/* Header */}
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
          {/* Floating Sidebar Toggle Button */}
          {sectionsCollapsed && (
            <button
              onClick={() => setSectionsCollapsed(false)}
              className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white px-2 py-8 rounded-r-lg shadow-lg transition-all"
              style={{ top: '50%' }}
            >
              <PanelLeftOpen className="w-5 h-5" />
            </button>
          )}

          {/* Left - Collapsible Sections */}
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

              {/* Practice */}
              <div className="mt-6 pt-4 border-t border-slate-700">
                <h3 className="text-base font-bold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  {project.practiceTitle}
                </h3>
                <p className="text-slate-400 text-sm mb-3">{project.practiceDesc}</p>
                <Link
                  to={`/practice/${id}/0`}
                  className="block w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors text-center"
                >
                  开始练习
                </Link>
              </div>
            </div>
          </div>

          {/* Middle - Learning Content */}
          <div className="flex-1 min-w-0">
            {currentSection && (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Book className="w-6 h-6 text-blue-400" />
                  {currentSection.title}
                </h2>
                
                {/* Main Content */}
                <div className="bg-slate-700/50 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <p className="text-slate-200 leading-relaxed">{currentSection.content}</p>
                </div>

                {/* Tips */}
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

                {/* Warnings */}
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

                {/* Example Code */}
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

          {/* Right - Code Editor */}
          <div className="flex-1 min-w-0">
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

              {/* Answer Section - Below Editor */}
              {showAnswer && currentSectionAnswer && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-yellow-300 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      参考答案（章节 {activeSection + 1}）
                    </h4>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(currentSectionAnswer);
                      }}
                      className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs flex items-center gap-1 transition-colors"
                    >
                      <Copy className="w-3 h-3" />
                      复制
                    </button>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4 overflow-y-auto" style={{ maxHeight: '200px' }}>
                    <pre className="text-sm font-mono text-yellow-300">
                      <code>{currentSectionAnswer}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Output */}
              {output.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <span className="text-green-400">▶</span>
                    运行结果
                  </h4>
                  <div className="bg-slate-900 rounded-lg p-4 overflow-y-auto" style={{ maxHeight: '200px' }}>
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
