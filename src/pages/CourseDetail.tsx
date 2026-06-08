import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, BookOpen, Code, CheckCircle, PlayCircle, Terminal } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams();
  
  const courses = {
    'python': {
      emoji: '🐍',
      title: 'Python基础',
      description: '学习Python编程语言的基础语法和核心概念',
      totalHours: 60,
      chapters: [
        {
          title: '第1章 程序设计基本方法',
          hours: 8,
          content: [
            {
              subtitle: '1.1 环境安装',
              type: 'practice',
              steps: [
                '1. 访问 https://www.python.org/downloads/ 下载最新Python',
                '2. 运行安装程序，勾选"Add Python to PATH"',
                '3. 打开命令提示符，输入 python --version 验证安装',
                '4. 安装VS Code编辑器，下载Python扩展',
                '5. 创建第一个Python文件：print("Hello World")'
              ],
              code: `# 第一个Python程序
print("Hello World")

# 运行结果
# Hello World`
            },
            {
              subtitle: '1.2 变量和数据类型',
              type: 'theory',
              steps: [
                '变量是存储数据的容器',
                'Python中常见数据类型：整数(int)、浮点数(float)、字符串(str)、布尔值(bool)',
                '变量命名规则：字母、数字、下划线，不能以数字开头'
              ],
              code: `# 变量定义示例
name = "张三"        # 字符串
age = 25            # 整数
height = 1.75       # 浮点数
is_student = True   # 布尔值

print(f"姓名: {name}")
print(f"年龄: {age}")
print(f"身高: {height}")
print(f"是否学生: {is_student}")`
            },
            {
              subtitle: '1.3 输入输出',
              type: 'practice',
              steps: [
                '使用input()函数获取用户输入',
                '使用print()函数输出内容',
                'f-string格式化字符串'
              ],
              code: `# 用户交互示例
name = input("请输入您的姓名: ")
age = input("请输入您的年龄: ")

print(f"您好，{name}！")
print(f"您今年{age}岁了。")

# 类型转换
age_int = int(age)
print(f"明年您将{age_int + 1}岁")`
            }
          ]
        },
        {
          title: '第2章 Python程序示例解析',
          hours: 10,
          content: [
            {
              subtitle: '2.1 温度转换程序',
              type: 'practice',
              steps: [
                '学习Python的基本语法元素',
                '理解input()、print()、int()函数',
                '掌握温度转换公式：F = C × 9/5 + 32'
              ],
              code: `# 温度转换程序
celsius = float(input("请输入摄氏度温度: "))
fahrenheit = celsius * 9/5 + 32

print(f"摄氏度 {celsius}°C = 华氏度 {fahrenheit}°F")

# 实战练习：反向转换
fahrenheit_input = float(input("\\n请输入华氏度温度: "))
celsius_result = (fahrenheit_input - 32) * 5/9
print(f"华氏度 {fahrenheit_input}°F = 摄氏度 {celsius_result:.2f}°C")`
            },
            {
              subtitle: '2.2 turtle库绘图',
              type: 'practice',
              steps: [
                '导入turtle库：import turtle',
                '控制画笔前进：forward(距离)',
                '左转右转：left(角度)、right(角度)',
                '抬起画笔：penup()，放下画笔：pendown()'
              ],
              code: `import turtle

# 创建画布
t = turtle.Turtle()
t.shape("turtle")
t.speed(1)

# 绘制正方形
for i in range(4):
    t.forward(100)
    t.right(90)

# 绘制三角形
t.penup()
t.goto(50, 50)
t.pendown()

for i in range(3):
    t.forward(100)
    t.right(120)

turtle.done()`
            }
          ]
        },
        {
          title: '第3章 基本数据类型',
          hours: 12,
          content: [
            {
              subtitle: '3.1 数字类型运算',
              type: 'theory',
              steps: [
                '整数运算：+、-、*、//(整除)、%(取余)、**(幂)',
                '浮点数运算：注意精度问题',
                '类型转换：int()、float()'
              ],
              code: `# 数学运算示例
a = 10
b = 3

print(f"加法: {a} + {b} = {a + b}")
print(f"减法: {a} - {b} = {a - b}")
print(f"乘法: {a} * {b} = {a * b}")
print(f"除法: {a} / {b} = {a / b:.2f}")
print(f"整除: {a} // {b} = {a // b}")
print(f"取余: {a} % {b} = {a % b}")
print(f"幂运算: {a} ** {b} = {a ** b}")

# 实战：计算圆的面积
radius = 5
area = 3.14159 * radius ** 2
print(f"\\n半径为{radius}的圆面积为: {area:.2f}")`
            },
            {
              subtitle: '3.2 字符串处理',
              type: 'practice',
              steps: [
                '字符串索引和切片',
                '字符串方法：upper()、lower()、strip()、replace()',
                '字符串拼接和格式化'
              ],
              code: `# 字符串操作
text = "  Hello, Python!  "

# 基本操作
print(f"原字符串: '{text}'")
print(f"去除空格: '{text.strip()}'")
print(f"大写: '{text.upper()}'")
print(f"小写: '{text.lower()}'")
print(f"替换: '{text.replace('Python', 'World')}'")

# 索引和切片
message = "Python数据分析"
print(f"\\n第一个字符: {message[0]}")
print(f"最后3个字符: {message[-3:]}")
print(f"切片[0:6]: {message[0:6]}")

# 实战：处理用户输入
name = input("\\n请输入姓名: ").strip()
print(f"您好，{name.upper()}！")
print(f"您的姓名有{len(name)}个字符")`
            }
          ]
        },
        {
          title: '第4章 程序的控制结构',
          hours: 10,
          content: [
            {
              subtitle: '4.1 条件语句',
              type: 'practice',
              steps: [
                'if语句的基本结构',
                'elif多条件判断',
                'else默认处理',
                '比较运算符：==、!=、>、<、>=、<='
              ],
              code: `# 成绩评级系统
score = float(input("请输入成绩(0-100): "))

if score >= 90:
    grade = "A"
    print(f"成绩{score}分，获得等级{grade}，优秀！")
elif score >= 80:
    grade = "B"
    print(f"成绩{score}分，获得等级{grade}，良好！")
elif score >= 70:
    grade = "C"
    print(f"成绩{score}分，获得等级{grade}，中等！")
elif score >= 60:
    grade = "D"
    print(f"成绩{score}分，获得等级{grade}，及格！")
else:
    grade = "F"
    print(f"成绩{score}分，获得等级{grade}，不及格，需要努力！")

# 实战：计算器
num1 = float(input("\\n输入第一个数: "))
operator = input("输入运算符(+,-,*,/): ")
num2 = float(input("输入第二个数: "))

if operator == '+':
    result = num1 + num2
elif operator == '-':
    result = num1 - num2
elif operator == '*':
    result = num1 * num2
elif operator == '/':
    if num2 != 0:
        result = num1 / num2
    else:
        result = "错误：除数不能为零"
else:
    result = "错误：无效的运算符"

print(f"{num1} {operator} {num2} = {result}")`
            },
            {
              subtitle: '4.2 循环结构',
              type: 'practice',
              steps: [
                'for循环：遍历序列',
                'while循环：条件循环',
                'break和continue控制',
                'range()函数生成序列'
              ],
              code: `# for循环示例
print("=== for循环 ===")
for i in range(1, 6):
    print(f"第{i}次循环")

# while循环示例
print("\\n=== while循环 ===")
count = 1
while count <= 5:
    print(f"计数: {count}")
    count += 1

# 实战：猜数字游戏
import random
target = random.randint(1, 100)
attempts = 0

print("\\n=== 猜数字游戏 ===")
print("我已经想好了一个1-100之间的数字")

while True:
    guess = int(input("请猜一个数字: "))
    attempts += 1
    
    if guess < target:
        print("太小了，再试一次！")
    elif guess > target:
        print("太大了，再试一次！")
    else:
        print(f"恭喜你！猜对了！用了{attempts}次")
        break
    
    if attempts >= 10:
        print(f"游戏结束！正确答案是{target}")
        break`
            }
          ]
        },
        {
          title: '第5章 函数和代码复用',
          hours: 8,
          content: [
            {
              subtitle: '5.1 函数定义和调用',
              type: 'practice',
              steps: [
                '使用def关键字定义函数',
                '参数和返回值',
                '默认参数值',
                '文档字符串'
              ],
              code: `# 定义函数
def greet(name):
    """问候函数"""
    return f"你好，{name}！欢迎学习Python！"

def calculate_area(length, width):
    """计算矩形面积"""
    return length * width

def calculate_stats(numbers):
    """计算统计值"""
    return {
        '总和': sum(numbers),
        '平均值': sum(numbers) / len(numbers),
        '最大值': max(numbers),
        '最小值': min(numbers)
    }

# 调用函数
print(greet("周俊杰"))

length = 10
width = 5
area = calculate_area(length, width)
print(f"矩形面积: {length} × {width} = {area}")

scores = [85, 92, 78, 95, 88]
stats = calculate_stats(scores)
print(f"\\n成绩统计: {stats}")`
            },
            {
              subtitle: '5.2 模块的使用',
              type: 'practice',
              steps: [
                '导入模块：import module_name',
                '使用模块功能：module.function()',
                '常用标准库：math、random、datetime'
              ],
              code: `import math
import random
from datetime import datetime

# math模块
print("=== math模块 ===")
print(f"圆周率: {math.pi}")
print(f"平方根: √16 = {math.sqrt(16)}")
print(f"绝对值: |-5| = {math.abs(-5)}")
print(f"向上取整: 3.2 = {math.ceil(3.2)}")
print(f"向下取整: 3.8 = {math.floor(3.8)}")

# random模块
print("\\n=== random模块 ===")
print(f"随机整数: {random.randint(1, 100)}")
print(f"随机小数: {random.random():.4f}")
print(f"随机选择: {random.choice(['苹果', '香蕉', '橙子'])}")
print(f"打乱顺序: {random.sample([1,2,3,4,5], 3)}")

# datetime模块
print("\\n=== datetime模块 ===")
now = datetime.now()
print(f"当前时间: {now.strftime('%Y-%m-%d %H:%M:%S')}")
print(f"当前年份: {now.year}")
print(f"当前月份: {now.month}")
print(f"当前日期: {now.day}")`
            }
          ]
        },
        {
          title: '第6章 组合数据类型',
          hours: 12,
          content: [
            {
              subtitle: '6.1 列表操作',
              type: 'practice',
              steps: [
                '创建列表：[]或list()',
                '索引和切片',
                '增删改查操作',
                '列表方法：append()、pop()、sort()'
              ],
              code: `# 列表基础
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
print(f"水果列表: {fruits}")
print(f"第一个水果: {fruits[0]}")
print(f"最后两个: {fruits[-2:]}")

# 增删改
fruits.append("西瓜")  # 添加
print(f"\\n添加后: {fruits}")

fruits.insert(1, "草莓")  # 插入
print(f"插入后: {fruits}")

fruits[0] = "苹果(红)"  # 修改
print(f"修改后: {fruits}")

removed = fruits.pop()  # 删除
print(f"删除'{removed}': {fruits}")

# 列表推导式
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = [x**2 for x in numbers]
even_numbers = [x for x in numbers if x % 2 == 0]
print(f"\\n原始列表: {numbers}")
print(f"平方: {squares}")
print(f"偶数: {even_numbers}")

# 实战：学生成绩管理
students = [
    {"name": "张三", "score": 85},
    {"name": "李四", "score": 92},
    {"name": "王五", "score": 78},
]

total = sum(s["score"] for s in students)
average = total / len(students)
print(f"\\n总平均分: {average:.2f}")
print(f"最高分: {max(students, key=lambda x: x['score'])}")`
            },
            {
              subtitle: '6.2 字典操作',
              type: 'practice',
              steps: [
                '创建字典：{key: value}',
                '键值对操作',
                '遍历字典',
                '字典方法：get()、keys()、values()'
              ],
              code: `# 字典基础
student = {
    "name": "周俊杰",
    "age": 22,
    "major": "数据分析",
    "skills": ["Python", "SQL", "Excel"]
}

print(f"学生信息: {student}")
print(f"姓名: {student['name']}")
print(f"年龄: {student.get('age')}")
print(f"技能: {student['skills']}")

# 添加和修改
student['gpa'] = 3.8
student['age'] = 23
print(f"\\n更新后: {student}")

# 遍历字典
print("\\n=== 遍历字典 ===")
for key, value in student.items():
    print(f"{key}: {value}")

# 字典推导式
scores = {"数学": 90, "语文": 85, "英语": 92, "物理": 88}
passed = {k: v for k, v in scores.items() if v >= 90}
print(f"\\n90分以上: {passed}")

# 实战：商品库存管理
inventory = {
    "苹果": 100,
    "香蕉": 50,
    "橙子": 75
}

# 添加商品
inventory["葡萄"] = 60

# 销售
item = "苹果"
quantity = 10
if inventory.get(item, 0) >= quantity:
    inventory[item] -= quantity
    print(f"销售成功！剩余{inventory[item]}个{item}")
else:
    print(f"库存不足！")`
            }
          ]
        }
      ]
    },
    'data-analysis': {
      emoji: '📊',
      title: '数据分析技术',
      description: '掌握数据分析的基本方法和常用工具',
      totalHours: 64,
      chapters: [
        {
          title: '第1章 数据分析概述',
          hours: 4,
          content: [
            {
              subtitle: '1.1 数据分析流程',
              type: 'theory',
              steps: [
                '数据获取：爬虫、数据库、API',
                '数据清洗：缺失值、异常值、重复值',
                '数据分析：描述性统计、探索性分析',
                '数据可视化：图表展示洞察',
                '报告撰写：结论和建议'
              ],
              code: `# 数据分析流程示例
import pandas as pd

# 1. 数据获取
data = {
    '姓名': ['张三', '李四', '王五', '赵六', '钱七'],
    '年龄': [25, 30, 28, 35, 27],
    '部门': ['销售', '技术', '销售', '技术', '销售'],
    '薪资': [8000, 12000, 9500, 15000, 9000]
}

df = pd.DataFrame(data)
print("=== 原始数据 ===")
print(df)

# 2. 数据清洗
print("\\n=== 数据清洗 ===")
print(f"缺失值:\\n{df.isnull().sum()}")
print(f"重复行: {df.duplicated().sum()}")

# 3. 数据分析
print("\\n=== 描述性统计 ===")
print(df.describe())

# 4. 分组分析
print("\\n=== 按部门统计 ===")
dept_stats = df.groupby('部门').agg({
    '薪资': ['mean', 'sum', 'count']
}).round(2)
print(dept_stats)

# 5. 结论
print("\\n=== 分析结论 ===")
print(f"销售部门平均薪资: {df[df['部门']=='销售']['薪资'].mean():.2f}")
print(f"技术部门平均薪资: {df[df['部门']=='技术']['薪资'].mean():.2f}")`
            }
          ]
        },
        {
          title: '第2章 Pandas数据处理',
          hours: 14,
          content: [
            {
              subtitle: '2.1 数据读取和存储',
              type: 'practice',
              steps: [
                '读取CSV：pd.read_csv()',
                '读取Excel：pd.read_excel()',
                '保存数据：to_csv()、to_excel()',
                '处理中文编码问题'
              ],
              code: `import pandas as pd

# 读取CSV文件
# df = pd.read_csv('data.csv', encoding='utf-8')

# 创建DataFrame示例
data = {
    '日期': ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'],
    '产品': ['A', 'B', 'A', 'C', 'B'],
    '销量': [120, 85, 95, 110, 78],
    '单价': [10, 20, 10, 15, 20]
}

df = pd.DataFrame(data)
print("=== 销售数据 ===")
print(df)

# 保存为CSV
df.to_csv('sales_data.csv', index=False, encoding='utf-8-sig')
print("\\n数据已保存为CSV文件")

# 基本信息
print(f"\\n数据形状: {df.shape}")
print(f"列名: {df.columns.tolist()}")
print(f"数据类型:\\n{df.dtypes}")`
            },
            {
              subtitle: '2.2 数据清洗实战',
              type: 'practice',
              steps: [
                '处理缺失值：fillna()、dropna()',
                '处理重复值：drop_duplicates()',
                '数据类型转换',
                '字符串处理'
              ],
              code: `import pandas as pd
import numpy as np

# 创建有问题的数据
data = {
    '姓名': ['张三', '李四', '张三', '王五', '赵六', None],
    '年龄': [25, 30, 28, None, 27, 22],
    '城市': ['北京', '上海', '北京', '深圳', None, '广州'],
    '薪资': ['10K', '20K', '15K', '18K', '12K', '25K']
}

df = pd.DataFrame(data)
print("=== 原始数据(含问题) ===")
print(df)

# 1. 处理缺失值
print("\\n=== 处理缺失值 ===")
print(f"缺失值统计:\\n{df.isnull().sum()}")
df_filled = df.fillna('未知')
print(f"\\n填充后:\\n{df_filled}")

# 2. 处理重复值
print("\\n=== 处理重复值 ===")
print(f"重复行: {df.duplicated().sum()}")
df_unique = df.drop_duplicates()
print(f"\\n去重后:\\n{df_unique}")

# 3. 数据类型转换
print("\\n=== 数据类型转换 ===")
df['薪资_numeric'] = df['薪资'].str.replace('K', '').astype(float) * 1000
print(f"薪资转换为数值型:\\n{df[['姓名', '薪资', '薪资_numeric']]}")

# 4. 字符串处理
print("\\n=== 字符串处理 ===")
df['姓名_clean'] = df['姓名'].str.strip()
print(f"清理姓名:\\n{df[['姓名', '姓名_clean']]}")`
            },
            {
              subtitle: '2.3 数据筛选和查询',
              type: 'practice',
              steps: [
                '行筛选：df[df[列名]条件]',
                '列选择：df[[列名列表]]',
                'loc和iloc用法',
                '多条件筛选'
              ],
              code: `import pandas as pd

# 创建数据
data = {
    '姓名': ['张三', '李四', '王五', '赵六', '钱七', '孙八'],
    '部门': ['销售', '技术', '销售', '技术', '人事', '技术'],
    '薪资': [8000, 12000, 9500, 15000, 7000, 11000],
    '工龄': [2, 5, 3, 7, 1, 4],
    '绩效': [85, 92, 88, 95, 78, 90]
}

df = pd.DataFrame(data)
print("=== 原始数据 ===")
print(df)

# 1. 单条件筛选
print("\\n=== 单条件筛选 ===")
sales = df[df['部门'] == '销售']
print(f"销售部门:\\n{sales}")

# 2. 多条件筛选
print("\\n=== 多条件筛选 ===")
high_salary_tech = df[(df['部门'] == '技术') & (df['薪资'] > 11000)]
print(f"技术部高薪员工:\\n{high_salary_tech}")

# 3. 使用loc和iloc
print("\\n=== loc和iloc用法 ===")
print(f"loc[0]: {df.loc[0]}")
print(f"\\niloc[0:3]:\\n{df.iloc[0:3]}")

# 4. 复杂查询
print("\\n=== 复杂查询 ===")
condition = (df['工龄'] > 2) | (df['绩效'] >= 90)
result = df[condition].sort_values('薪资', ascending=False)
print(f"工龄>2年 或 绩效>=90:\\n{result}")`
            }
          ]
        },
        {
          title: '第3章 数据可视化',
          hours: 10,
          content: [
            {
              subtitle: '3.1 Matplotlib基础图表',
              type: 'practice',
              steps: [
                '创建画布：plt.figure()',
                '绘制图表：plt.plot()、plt.bar()、plt.scatter()',
                '设置标签：plt.title()、plt.xlabel()、plt.ylabel()',
                '保存图片：plt.savefig()'
              ],
              code: `import matplotlib.pyplot as plt
import numpy as np

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 创建数据
months = ['1月', '2月', '3月', '4月', '5月', '6月']
sales = [120, 145, 132, 168, 175, 190]
profit = [25, 32, 28, 38, 42, 48]

# 1. 折线图
plt.figure(figsize=(10, 6))
plt.plot(months, sales, marker='o', linewidth=2, label='销售额(万)')
plt.plot(months, profit, marker='s', linewidth=2, label='利润(万)')
plt.title('2024年上半年销售趋势', fontsize=16)
plt.xlabel('月份', fontsize=12)
plt.ylabel('金额(万)', fontsize=12)
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig('sales_trend.png', dpi=150)
plt.show()

# 2. 柱状图
plt.figure(figsize=(10, 6))
products = ['产品A', '产品B', '产品C', '产品D']
quantity = [450, 320, 280, 520]
colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12']
plt.bar(products, quantity, color=colors)
plt.title('各产品销量', fontsize=16)
plt.xlabel('产品', fontsize=12)
plt.ylabel('销量', fontsize=12)
for i, v in enumerate(quantity):
    plt.text(i, v + 10, str(v), ha='center')
plt.tight_layout()
plt.savefig('product_sales.png', dpi=150)
plt.show()

# 3. 饼图
plt.figure(figsize=(8, 8))
regions = ['华东', '华南', '华北', '西南', '其他']
market_share = [35, 25, 20, 15, 5]
colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6']
explode = (0.05, 0, 0, 0, 0)
plt.pie(market_share, explode=explode, labels=regions, colors=colors, 
        autopct='%1.1f%%', shadow=True, startangle=90)
plt.title('市场份额分布', fontsize=16)
plt.tight_layout()
plt.savefig('market_share.png', dpi=150)
plt.show()`
            }
          ]
        }
      ]
    },
    'data-collection': {
      emoji: '🔍',
      title: '数据采集与处理',
      description: '学习网络爬虫和数据处理的实用技术',
      totalHours: 54,
      chapters: [
        {
          title: '第1章 网络爬虫基础',
          hours: 8,
          content: [
            {
              subtitle: '1.1 HTTP协议基础',
              type: 'theory',
              steps: [
                'HTTP请求方法：GET、POST',
                'HTTP状态码：200成功、404未找到、500服务器错误',
                '请求头和响应头',
                'JSON数据格式'
              ],
              code: `# HTTP协议基础概念
print("=== HTTP协议基础 ===")
print("""
1. GET请求：获取资源
   - URL: https://api.example.com/data?id=123
   - 参数在URL中
   - 用于获取数据

2. POST请求：提交数据
   - URL: https://api.example.com/submit
   - 参数在请求体中
   - 用于提交表单、上传文件

3. 常见状态码：
   - 200: 请求成功
   - 301/302: 重定向
   - 404: 资源未找到
   - 500: 服务器错误

4. 请求头示例：
   - User-Agent: 浏览器标识
   - Content-Type: 内容类型
   - Cookie: 会话信息
""")

# 实际请求示例
import requests

url = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(url)
print(f"状态码: {response.status_code}")
print(f"响应内容: {response.json()}")`
            },
            {
              subtitle: '1.2 Requests库使用',
              type: 'practice',
              steps: [
                '安装requests库：pip install requests',
                '发送GET请求',
                '处理响应数据',
                '设置请求头和参数'
              ],
              code: `import requests

# 1. 基本GET请求
url = "https://jsonplaceholder.typicode.com/posts"
response = requests.get(url)
print(f"状态码: {response.status_code}")
print(f"数据类型: {type(response.json())}")
print(f"数据条数: {len(response.json())}")

# 2. 带参数的请求
params = {
    'userId': 1,
    'title': 'qui est esse'
}
response = requests.get(url, params=params)
print(f"\\n筛选结果: {len(response.json())}条")

# 3. 设置请求头
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}
response = requests.get(url, headers=headers)
print(f"\\n带请求头请求: 状态码{response.status_code}")

# 4. POST请求
new_post = {
    'title': '测试文章',
    'body': '这是爬虫学习的内容',
    'userId': 1
}
response = requests.post(url, json=new_post)
print(f"\\nPOST请求结果: {response.status_code}")
print(f"创建的文章ID: {response.json()['id']}")`
            }
          ]
        },
        {
          title: '第2章 Beautiful Soup解析HTML',
          hours: 12,
          content: [
            {
              subtitle: '2.1 HTML解析基础',
              type: 'practice',
              steps: [
                '安装bs4库：pip install beautifulsoup4',
                '创建BeautifulSoup对象',
                '查找元素：find()、find_all()',
                '获取文本和属性'
              ],
              code: `from bs4 import BeautifulSoup

html_content = """
<html>
<head><title>示例网页</title></head>
<body>
    <div class="container">
        <h1 class="title">Python学习</h1>
        <div class="course">
            <p class="name">数据分析</p>
            <p class="teacher">李老师</p>
            <p class="price">299元</p>
        </div>
        <div class="course">
            <p class="name">Web开发</p>
            <p class="teacher">王老师</p>
            <p class="price">399元</p>
        </div>
    </div>
</body>
</html>
"""

soup = BeautifulSoup(html_content, 'html.parser')

# 1. 查找标题
title = soup.find('h1', class_='title')
print(f"页面标题: {title.text}")

# 2. 查找所有课程
courses = soup.find_all('div', class_='course')
print(f"\\n找到{len(courses)}门课程:")
for course in courses:
    name = course.find('p', class_='name').text
    teacher = course.find('p', class_='teacher').text
    price = course.find('p', class_='price').text
    print(f"  - {name} | {teacher} | {price}")

# 3. CSS选择器
print("\\n使用CSS选择器:")
titles = soup.select('div.course p.name')
for t in titles:
    print(f"  {t.text}")`
            },
            {
              subtitle: '2.2 实战：爬取豆瓣电影',
              type: 'practice',
              steps: [
                '分析网页结构',
                '提取电影名称、评分、评价人数',
                '处理多个页面',
                '保存为CSV文件'
              ],
              code: `from bs4 import BeautifulSoup
import requests
import pandas as pd
import time

def get_movies(page=0):
    """爬取豆瓣电影Top250"""
    url = f"https://movie.douban.com/top250?start={page * 25}"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        movies = []
        for item in soup.select('div.item'):
            title = item.select_one('span.title').text
            rating = item.select_one('span.rating_num').text
            quote = item.select_one('span.inq')
            quote = quote.text if quote else '无'
            
            movies.append({
                '标题': title,
                '评分': rating,
                '推荐语': quote
            })
        
        return movies
    except Exception as e:
        print(f"爬取失败: {e}")
        return []

# 测试爬取第一页
print("=== 爬取豆瓣电影Top250 ===")
movies = get_movies(0)
print(f"\\n成功爬取{len(movies)}部电影:")
for i, movie in enumerate(movies[:5], 1):
    print(f"{i}. {movie['标题']} | 评分: {movie['评分']} | {movie['推荐语']}")

# 保存为CSV
df = pd.DataFrame(movies)
df.to_csv('movies.csv', index=False, encoding='utf-8-sig')
print(f"\\n数据已保存到movies.csv")`
            }
          ]
        }
      ]
    },
    'supply-chain': {
      emoji: '🚚',
      title: '供应链数据分析',
      description: '应用数据分析技术优化供应链管理',
      totalHours: 54,
      chapters: [
        {
          title: '第1章 供应链数据概述',
          hours: 6,
          content: [
            {
              subtitle: '1.1 供应链关键指标',
              type: 'theory',
              steps: [
                '库存周转率 = 销售成本 / 平均库存',
                '准时交货率 = 准时交货数 / 总订单数 × 100%',
                '订单完成率 = 完成订单数 / 总订单数 × 100%',
                '客户满意度 = 满意客户数 / 总客户数 × 100%'
              ],
              code: `import pandas as pd

# 创建供应链数据
data = {
    '产品': ['A', 'B', 'C', 'D', 'E'],
    '销量': [1000, 800, 1200, 600, 900],
    '平均库存': [200, 150, 300, 100, 180],
    '销售成本': [50000, 40000, 60000, 30000, 45000],
    '库存成本': [10000, 7500, 15000, 5000, 9000],
    '订单数': [100, 80, 120, 60, 90],
    '准时交货': [95, 78, 115, 58, 85]
}

df = pd.DataFrame(data)
print("=== 供应链基础数据 ===")
print(df)

# 计算关键指标
df['库存周转率'] = df['销售成本'] / df['平均库存']
df['准时交货率'] = (df['准时交货'] / df['订单数'] * 100).round(2)
df['库存成本占比'] = (df['库存成本'] / df['销售成本'] * 100).round(2)

print("\\n=== 计算关键指标 ===")
metrics = df[['产品', '库存周转率', '准时交货率', '库存成本占比']]
print(metrics)

print("\\n=== 指标分析 ===")
print(f"平均库存周转率: {df['库存周转率'].mean():.2f}")
print(f"平均准时交货率: {df['准时交货率'].mean():.2f}%")
print(f"最高库存周转率产品: {df.loc[df['库存周转率'].idxmax(), '产品']}")
print(f"最低库存周转率产品: {df.loc[df['库存周转率'].idxmin(), '产品']}")`
            }
          ]
        },
        {
          title: '第2章 库存管理分析',
          hours: 12,
          content: [
            {
              subtitle: '2.1 ABC分类法',
              type: 'practice',
              steps: [
                '按销售额排序产品',
                '计算累计百分比',
                '划分A、B、C类',
                'A类：重点管理(70%)，B类：一般管理(20%)，C类：简单管理(10%)'
              ],
              code: `import pandas as pd

# 产品销售数据
data = {
    '产品编码': ['P001', 'P002', 'P003', 'P004', 'P005', 'P006', 'P007', 'P008'],
    '产品名称': ['鼠标', '键盘', '显示器', '耳机', '摄像头', '鼠标垫', '音箱', 'U盘'],
    '年销量': [5000, 3000, 800, 2500, 1200, 8000, 600, 4000],
    '单价': [50, 150, 1200, 80, 200, 20, 300, 40]
}

df = pd.DataFrame(data)
df['销售额'] = df['年销量'] * df['单价']

# 按销售额降序排列
df = df.sort_values('销售额', ascending=False).reset_index(drop=True)

# 计算累计销售额
df['累计销售额'] = df['销售额'].cumsum()
df['累计占比'] = (df['累计销售额'] / df['销售额'].sum() * 100).round(2)

# ABC分类
def classify_abc(cumulative):
    if cumulative <= 70:
        return 'A'
    elif cumulative <= 90:
        return 'B'
    else:
        return 'C'

df['分类'] = df['累计占比'].apply(classify_abc)

print("=== ABC分类结果 ===")
print(df[['产品编码', '产品名称', '销售额', '累计占比', '分类']])

print("\\n=== 分类汇总 ===")
summary = df.groupby('分类').agg({
    '销售额': ['sum', 'count'],
    '产品名称': lambda x: ', '.join(x)
}).round(2)
print(summary)

print("\\n=== 管理建议 ===")
for category in ['A', 'B', 'C']:
    products = df[df['分类'] == category]['产品名称'].tolist()
    print(f"\\n{category}类产品({len(products)}个): {', '.join(products)}")
    if category == 'A':
        print("  → 重点管理：每日盘点，优化库存，优先补货")
    elif category == 'B':
        print("  → 一般管理：定期盘点，保持合理库存")
    else:
        print("  → 简单管理：按需采购，减少库存积压")`
            },
            {
              subtitle: '2.2 安全库存计算',
              type: 'practice',
              steps: [
                '理解安全库存的概念',
                '计算标准差和z值',
                '安全库存 = z × σ × √(提前期)',
                '根据服务水平选择z值'
              ],
              code: `import numpy as np

# 假设数据
daily_demand = 100  # 日均需求
demand_std = 20     # 需求标准差
lead_time = 5       # 提前期(天)
lead_time_std = 1   # 提前期标准差

# 不同服务水平对应的z值
service_levels = {
    90: 1.28,
    95: 1.65,
    97.5: 1.96,
    99: 2.33
}

print("=== 安全库存计算 ===")
print(f"日均需求: {daily_demand}")
print(f"需求标准差: {demand_std}")
print(f"提前期: {lead_time}天")
print(f"提前期标准差: {lead_time_std}")

# 计算综合标准差
combined_std = np.sqrt(lead_time * demand_std**2 + daily_demand**2 * lead_time_std**2)

print(f"\\n综合标准差: {combined_std:.2f}")

print("\\n=== 不同服务水平下的安全库存 ===")
for service, z in service_levels.items():
    safety_stock = z * combined_std
    reorder_point = daily_demand * lead_time + safety_stock
    
    print(f"\\n服务水平: {service}%")
    print(f"  z值: {z}")
    print(f"  安全库存: {safety_stock:.0f}件")
    print(f"  再订货点: {reorder_point:.0f}件")

# 实战应用
print("\\n=== 库存优化建议 ===")
avg_daily = daily_demand
max_stock = max(service_levels.values())[0] * combined_std + daily_demand * lead_time
min_stock = min(service_levels.values())[0] * combined_std + daily_demand * lead_time

print(f"按95%服务水平:")
print(f"  建议安全库存: {1.65 * combined_std:.0f}件")
print(f"  库存范围: {daily_demand * lead_time:.0f} ~ {(1.65 * combined_std + daily_demand * lead_time):.0f}件")
print(f"\\n优化策略:")
print(f"  1. 实施JIT采购，减少资金占用")
print(f"  2. 建立供应商协同系统，缩短提前期")
print(f"  3. 实时监控库存，及时补货")`
            }
          ]
        }
      ]
    },
    'database': {
      emoji: '🗄️',
      title: '数据库原理与应用',
      description: '学习数据库系统的原理和SQL操作',
      totalHours: 54,
      chapters: [
        {
          title: '第1章 MySQL基础',
          hours: 8,
          content: [
            {
              subtitle: '1.1 数据库基本操作',
              type: 'practice',
              steps: [
                '创建数据库：CREATE DATABASE',
                '选择数据库：USE database_name',
                '删除数据库：DROP DATABASE',
                '查看数据库：SHOW DATABASES'
              ],
              code: `-- MySQL数据库基本操作

-- 1. 创建数据库
CREATE DATABASE IF NOT EXISTS shop_db
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

-- 2. 查看所有数据库
SHOW DATABASES;

-- 3. 选择数据库
USE shop_db;

-- 4. 删除数据库(谨慎使用)
-- DROP DATABASE IF EXISTS shop_db;

-- 5. 创建数据表
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT '产品ID',
    name VARCHAR(100) NOT NULL COMMENT '产品名称',
    category VARCHAR(50) COMMENT '产品类别',
    price DECIMAL(10,2) COMMENT '价格',
    stock INT DEFAULT 0 COMMENT '库存',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. 查看表结构
DESC products;

-- 7. 查看建表语句
SHOW CREATE TABLE products;`
            },
            {
              subtitle: '1.2 SQL查询基础',
              type: 'practice',
              steps: [
                'SELECT语句基本结构',
                'WHERE条件筛选',
                'ORDER BY排序',
                'LIMIT分页查询'
              ],
              code: `-- SQL查询基础

-- 准备测试数据
CREATE TABLE IF NOT EXISTS employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE
);

INSERT INTO employees VALUES
(1, '张三', '销售', 8000, '2022-01-15'),
(2, '李四', '技术', 12000, '2021-06-20'),
(3, '王五', '销售', 9500, '2022-03-10'),
(4, '赵六', '技术', 15000, '2020-09-01'),
(5, '钱七', '人事', 7000, '2022-08-05'),
(6, '孙八', '销售', 8800, '2021-11-20');

-- 1. 基本查询
SELECT * FROM employees;
SELECT name, department, salary FROM employees;

-- 2. 条件查询
SELECT * FROM employees WHERE department = '销售';
SELECT * FROM employees WHERE salary >= 10000;
SELECT * FROM employees WHERE department = '技术' AND salary > 12000;

-- 3. 排序
SELECT * FROM employees ORDER BY salary DESC;
SELECT * FROM employees ORDER BY department, salary DESC;

-- 4. 分页查询
SELECT * FROM employees LIMIT 3;
SELECT * FROM employees LIMIT 3 OFFSET 2;

-- 5. 去重和统计
SELECT DISTINCT department FROM employees;
SELECT COUNT(*) as total FROM employees;
SELECT AVG(salary) as avg_salary FROM employees;
SELECT SUM(salary) as total_salary FROM employees WHERE department = '销售';`
            }
          ]
        },
        {
          title: '第2章 SQL高级查询',
          hours: 12,
          content: [
            {
              subtitle: '2.1 分组和聚合',
              type: 'practice',
              steps: [
                'GROUP BY分组',
                'HAVING过滤分组',
                '聚合函数：COUNT、SUM、AVG、MAX、MIN',
                '多字段分组'
              ],
              code: `-- 分组和聚合查询

-- 1. 按部门统计
SELECT 
    department,
    COUNT(*) as emp_count,
    AVG(salary) as avg_salary,
    MAX(salary) as max_salary,
    MIN(salary) as min_salary,
    SUM(salary) as total_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

-- 2. HAVING过滤分组
SELECT 
    department,
    COUNT(*) as emp_count,
    AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > 8000
ORDER BY avg_salary DESC;

-- 3. 实战：销售数据分析
CREATE TABLE IF NOT EXISTS orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product VARCHAR(50),
    category VARCHAR(50),
    quantity INT,
    price DECIMAL(10,2),
    order_date DATE
);

INSERT INTO orders VALUES
(1, '手机', '电子产品', 10, 2999, '2024-01-15'),
(2, '电脑', '电子产品', 5, 5999, '2024-01-16'),
(3, 'T恤', '服装', 50, 99, '2024-01-17'),
(4, '手机', '电子产品', 8, 2999, '2024-01-18'),
(5, '牛仔裤', '服装', 30, 199, '2024-01-19'),
(6, '平板', '电子产品', 3, 3999, '2024-01-20');

-- 按产品统计
SELECT 
    product,
    SUM(quantity) as total_qty,
    SUM(quantity * price) as total_amount
FROM orders
GROUP BY product
ORDER BY total_amount DESC;

-- 按类别统计
SELECT 
    category,
    COUNT(*) as order_count,
    SUM(quantity) as total_qty,
    SUM(quantity * price) as total_amount,
    AVG(price) as avg_price
FROM orders
GROUP BY category
ORDER BY total_amount DESC;`
            },
            {
              subtitle: '2.2 多表查询',
              type: 'practice',
              steps: [
                'INNER JOIN内连接',
                'LEFT/RIGHT JOIN外连接',
                '多表关联查询',
                '子查询'
              ],
              code: `-- 多表查询

-- 创建订单表
CREATE TABLE IF NOT EXISTS customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    city VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    order_date DATE,
    total DECIMAL(10,2)
);

INSERT INTO customers VALUES
(1, '张三', '北京'),
(2, '李四', '上海'),
(3, '王五', '北京'),
(4, '赵六', '深圳');

INSERT INTO orders VALUES
(1, 1, '2024-01-15', 2999),
(2, 2, '2024-01-16', 5999),
(3, 1, '2024-01-17', 1999),
(4, 5, '2024-01-18', 3999),  -- 不存在的客户
(5, 3, '2024-01-19', 999);

-- 1. 内连接(INNER JOIN)
SELECT 
    c.name,
    c.city,
    o.order_date,
    o.total
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
ORDER BY o.order_date;

-- 2. 左连接(LEFT JOIN)
SELECT 
    c.name,
    c.city,
    o.order_date,
    o.total
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
ORDER BY c.name;

-- 3. 多表连接
CREATE TABLE IF NOT EXISTS order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product VARCHAR(50),
    quantity INT,
    price DECIMAL(10,2)
);

INSERT INTO order_items VALUES
(1, 1, '手机', 1, 2999),
(2, 2, '电脑', 1, 5999),
(3, 3, '耳机', 2, 999);

SELECT 
    c.name,
    o.order_date,
    i.product,
    i.quantity,
    i.price,
    (i.quantity * i.price) as subtotal
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
INNER JOIN order_items i ON o.id = i.order_id
ORDER BY c.name, o.order_date;

-- 4. 子查询
-- 查找订单金额大于平均值的订单
SELECT * FROM orders 
WHERE total > (SELECT AVG(total) FROM orders);

-- 查找消费最多的客户
SELECT c.name, SUM(o.total) as total_spent
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
ORDER BY total_spent DESC
LIMIT 1;`
            }
          ]
        }
      ]
    },
    'visualization': {
      emoji: '📈',
      title: '数据可视化',
      description: '用图表讲述数据故事，让数据更有说服力',
      totalHours: 54,
      chapters: [
        {
          title: '第1章 数据可视化基础',
          hours: 6,
          content: [
            {
              subtitle: '1.1 图表选择指南',
              type: 'theory',
              steps: [
                '对比关系：柱状图、条形图',
                '趋势关系：折线图、面积图',
                '构成关系：饼图、堆叠图',
                '分布关系：直方图、箱线图、散点图',
                '关联关系：散点图'
              ],
              code: `import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

print("""
=== 图表选择指南 ===

1. 对比关系 → 柱状图/条形图
   适用场景：比较不同类别的大小
   示例：各产品销量对比、各部门人数对比

2. 趋势关系 → 折线图
   适用场景：展示随时间变化的数据
   示例：月度销售额趋势、股票价格走势

3. 构成关系 → 饼图/堆叠图
   适用场景：展示整体中的各部分占比
   示例：市场份额、预算分配

4. 分布关系 → 直方图/箱线图
   适用场景：展示数据的分布情况
   示例：学生成绩分布、客户年龄分布

5. 关联关系 → 散点图
   适用场景：展示两个变量之间的关系
   示例：身高体重关系、广告投入与销售额
""")

# 示例：不同图表类型
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 1. 柱状图 - 对比
categories = ['产品A', '产品B', '产品C', '产品D']
values = [450, 320, 280, 520]
axes[0, 0].bar(categories, values, color=['#3498db', '#2ecc71', '#e74c3c', '#f39c12'])
axes[0, 0].set_title('柱状图 - 对比关系', fontsize=12)
axes[0, 0].set_ylabel('销量')

# 2. 折线图 - 趋势
months = ['1月', '2月', '3月', '4月', '5月', '6月']
sales = [120, 145, 132, 168, 175, 190]
axes[0, 1].plot(months, sales, marker='o', linewidth=2, color='#3498db')
axes[0, 1].set_title('折线图 - 趋势关系', fontsize=12)
axes[0, 1].set_ylabel('销售额(万)')
axes[0, 1].grid(True, alpha=0.3)

# 3. 饼图 - 构成
sizes = [30, 25, 20, 15, 10]
labels = ['华东', '华南', '华北', '西南', '其他']
axes[1, 0].pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
axes[1, 0].set_title('饼图 - 构成关系', fontsize=12)

# 4. 散点图 - 关联
np.random.seed(42)
x = np.random.rand(50) * 100  # 广告投入
y = x * 0.8 + np.random.randn(50) * 10  # 销售额
axes[1, 1].scatter(x, y, alpha=0.6, c='#3498db')
axes[1, 1].set_title('散点图 - 关联关系', fontsize=12)
axes[1, 1].set_xlabel('广告投入')
axes[1, 1].set_ylabel('销售额')
axes[1, 1].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('chart_types.png', dpi=150, bbox_inches='tight')
plt.show()`
            }
          ]
        },
        {
          title: '第2章 PyECharts交互图表',
          hours: 12,
          content: [
            {
              subtitle: '2.1 PyECharts基础',
              type: 'practice',
              steps: [
                '安装pyecharts：pip install pyecharts',
                '创建图表对象',
                '添加数据和配置',
                '生成HTML文件'
              ],
              code: `from pyecharts import options as opts
from pyecharts.charts import Bar, Line, Pie, Scatter, Page
from pyecharts.globals import ThemeType

# 1. 柱状图
bar = (
    Bar(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
    .add_xaxis(["衬衫", "牛仔裤", "运动裤", "袜子", "帽子"])
    .add_yaxis("商家A", [114, 55, 27, 101, 125])
    .add_yaxis("商家B", [57, 134, 137, 129, 120])
    .set_global_opts(
        title_opts=opts.TitleOpts(title="服装销量对比", subtitle="2024年Q1"),
        toolbox_opts=opts.ToolboxOpts(),
        datazoom_opts=opts.DataZoomOpts(),
    )
    .set_series_opts(
        label_opts=opts.LabelOpts(is_show=True),
    )
)
bar.render("bar_chart.html")
print("柱状图已生成: bar_chart.html")

# 2. 折线图
line = (
    Line(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
    .add_xaxis(["周一", "周二", "周三", "周四", "周五", "周六", "周日"])
    .add_yaxis("最高气温", [32, 33, 35, 34, 33, 31, 30], 
               markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="max")]))
    .add_yaxis("最低气温", [22, 23, 25, 24, 23, 21, 20],
               markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="min")]))
    .set_global_opts(
        title_opts=opts.TitleOpts(title="一周气温变化"),
        tooltip_opts=opts.TooltipOpts(trigger="axis"),
        xaxis_opts=opts.AxisOpts(type_="category"),
        yaxis_opts=opts.AxisOpts(type_="value", axislabel_opts=opts.LabelOpts(formatter="{value}°C")),
    )
)
line.render("line_chart.html")
print("折线图已生成: line_chart.html")

# 3. 饼图
pie = (
    Pie()
    .add(
        "",
        [("直接访问", 335), ("邮件营销", 310), ("联盟广告", 234), ("视频广告", 135), ("搜索引擎", 1488)],
        radius=["40%", "70%"],
        label_opts=opts.LabelOpts(formatter="{b}: {c} ({d}%)"),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="营销渠道效果"),
        legend_opts=opts.LegendOpts(orient="vertical", pos_left="left"),
    )
)
pie.render("pie_chart.html")
print("饼图已生成: pie_chart.html")

print("\\n所有图表已生成，可以在浏览器中打开查看！")`
            },
            {
              subtitle: '2.2 实战：销售数据仪表盘',
              type: 'practice',
              steps: [
                '创建多个图表组合',
                '设置统一主题',
                '布局优化',
                '添加交互功能'
              ],
              code: `from pyecharts import options as opts
from pyecharts.charts import Grid, Bar, Line, Pie, Gauge
from pyecharts.globals import ThemeType

# 1. 仪表盘 - KPI展示
gauge = (
    Gauge(init_opts=opts.InitOpts(width="300px", height="300px"))
    .add(
        "完成率",
        [("目标完成", 78)],
        split_number=10,
        axisline_opts=opts.AxisLineOpts(
            linestyle_opts=opts.LineStyleOpts(
                color=[(0.3, "#67e0e3"), (0.7, "#37a2da"), (1, "#fd666d")]
            )
        ),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="KPI仪表盘"),
    )
)

# 2. 柱状图 - 区域销售
bar = (
    Bar(init_opts=opts.InitOpts(width="400px", height="300px"))
    .add_xaxis(["华东", "华南", "华北", "西南", "东北"])
    .add_yaxis("销售额", [12500, 9800, 8200, 6500, 4300])
    .add_yaxis("目标", [10000, 10000, 10000, 10000, 10000])
    .set_series_opts(
        label_opts=opts.LabelOpts(is_show=True),
        markline_opts=opts.MarkLineOpts(
            data=[opts.MarkLineItem(y=8000, name="平均")]
        ),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="区域销售对比"),
        yaxis_opts=opts.AxisOpts(name="万元"),
    )
)

# 3. 折线图 - 趋势
line = (
    Line(init_opts=opts.InitOpts(width="400px", height="300px"))
    .add_xaxis(["1月", "2月", "3月", "4月", "5月", "6月"])
    .add_yaxis("2024年", [125, 136, 148, 152, 168, 175], 
               areadataopts=opts.AreaStyleOpacityOpts(opacity=0.3))
    .add_yaxis("2023年", [105, 112, 128, 135, 142, 150],
               areadataopts=opts.AreaStyleOpacityOpts(opacity=0.3))
    .set_global_opts(
        title_opts=opts.TitleOpts(title="月度销售趋势", pos_left="center"),
        tooltip_opts=opts.TooltipOpts(trigger="axis"),
        legend_opts=opts.LegendOpts(pos_left="right"),
        xaxis_opts=opts.AxisOpts(name="月份"),
        yaxis_opts=opts.AxisOpts(name="万元"),
    )
)

# 4. 饼图 - 产品占比
pie = (
    Pie(init_opts=opts.InitOpts(width="300px", height="300px"))
    .add(
        "产品",
        [("电子产品", 45), ("服装", 25), ("食品", 15), ("其他", 15)],
        radius=["40%", "70%"],
        label_opts=opts.LabelOpts(formatter="{b}: {d}%"),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="产品销售占比", pos_left="center"),
        legend_opts=opts.LegendOpts(orient="vertical", pos_left="left"),
    )
)

# 5. 组合布局
grid = (
    Grid()
    .add(gauge, grid_opts=opts.GridOpts(pos_left="5%", pos_top="5%", width="25%", height="40%"))
    .add(bar, grid_opts=opts.GridOpts(pos_left="35%", pos_top="5%", width="60%", height="40%"))
    .add(line, grid_opts=opts.GridOpts(pos_left="5%", pos_top="50%", width="55%", height="45%"))
    .add(pie, grid_opts=opts.GridOpts(pos_left="65%", pos_top="50%", width="30%", height="45%"))
)

grid.render("sales_dashboard.html")
print("销售仪表盘已生成: sales_dashboard.html")
print("\\n这是一个完整的销售数据仪表盘，包含：")
print("- KPI完成率仪表盘")
print("- 区域销售对比柱状图")
print("- 月度销售趋势折线图")
print("- 产品销售占比饼图")`
            }
          ]
        }
      ]
    }
  };

  const course = courses[id as keyof typeof courses];

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-900 text-white pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">课程不存在</h1>
          <Link to="/about" className="text-blue-400 hover:text-blue-300">返回课程列表</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link 
          to="/about" 
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          返回课程列表
        </Link>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{course.emoji}</span>
            <div>
              <h1 className="text-4xl font-bold">{course.title}</h1>
              <p className="text-slate-400 text-lg mt-2">{course.description}</p>
              <p className="text-blue-400 text-sm mt-1">总课时: {course.totalHours}小时</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          {course.chapters.map((chapter, idx) => (
            <div key={idx} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{chapter.title}</h2>
                  <p className="text-slate-400 text-sm">{chapter.hours}课时</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {chapter.content.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-4">
                      {item.type === 'practice' ? (
                        <PlayCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-blue-400" />
                      )}
                      <h3 className="text-lg font-semibold text-blue-400">{item.subtitle}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        学习步骤
                      </h4>
                      <ul className="space-y-1">
                        {item.steps.map((step, si) => (
                          <li key={si} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                        <Terminal className="w-4 h-4" />
                        代码示例
                      </h4>
                      <pre className="bg-slate-950 rounded-lg p-4 overflow-x-auto text-sm">
                        <code className="text-green-400">{item.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}