import { useState } from 'react';
import { ChevronRight, Filter, BarChart3, PieChart, Activity, Target, TrendingUp, Users, TrendingDown, Search, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pandas() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: '01',
      difficulty: '入门',
      level: '简单',
      color: 'green',
      title: '数据清洗实战',
      description: '处理编码错误、统一金额格式、填充缺失ID、转换日期格式，掌握数据清洗核心技能。数据清洗是数据科学中最基础也最关键的环节，决定后续所有分析的质量。',
      tags: ['缺失值处理', '重复值处理', '格式错误', '异常脏数据'],
      icon: Filter,
      category: 'simple',
    },
    {
      id: '02',
      difficulty: '入门',
      level: '简单',
      color: 'green',
      title: '分组聚合分析',
      description: '将长格式用户行为数据重塑为宽表特征，计算行为间隔与会话窗口。',
      tags: ['groupby', 'aggregate', 'pivot_table', 'crosstab'],
      icon: BarChart3,
      category: 'simple',
    },
    {
      id: '03',
      difficulty: '中级',
      level: '实战',
      color: 'yellow',
      title: '购物篮关联分析',
      description: '找出"买了尿布是否买啤酒"等关联规则，支持捆绑销售策略。',
      tags: ['购物篮分析', '支持度', '置信度', '提升度'],
      icon: PieChart,
      category: 'intermediate',
    },
    {
      id: '04',
      difficulty: '中级',
      level: '实战',
      color: 'yellow',
      title: '客户聚类分群分析',
      description: '计算最近消费间隔、消费频率、消费金额，将客户分为高价值/流失/普通等层级。',
      tags: ['K-Means聚类', '客户分群', 'StandardScaler'],
      icon: Users,
      category: 'intermediate',
    },
    {
      id: '05',
      difficulty: '中级',
      level: '实战',
      color: 'yellow',
      title: '专业数据可视化',
      description: '对RFM特征进行Z-Score标准化，使用K-Means聚类将用户分为5个群体并分析业务特征。',
      tags: ['Matplotlib', '柱状图', '折线图', '饼图', '散点图'],
      icon: TrendingUp,
      category: 'intermediate',
    },
    {
      id: '06',
      difficulty: '中级',
      level: '实战',
      color: 'yellow',
      title: '业务A/B测试数据分析',
      description: '按小时汇总订单额，计算滚动均值与标准差，找出GMV突刺或断崖的异常时间点。',
      tags: ['A/B测试', '转化率', '卡方检验', 't检验', '置信区间'],
      icon: Activity,
      category: 'intermediate',
    },
    {
      id: '07',
      difficulty: '中级',
      level: '实战',
      color: 'yellow',
      title: '销量时间序列分析',
      description: '使用merge_asof将点击流与订单数据做非精确匹配，计算最后一次点击归因模型和各渠道ROI。',
      tags: ['时间序列', '移动平均', '季节性', '同比环比', '趋势预测'],
      icon: TrendingDown,
      category: 'intermediate',
    },
    {
      id: '08',
      difficulty: '高级',
      level: '实战',
      color: 'red',
      title: '数据分析特征工程',
      description: '清洗评论中的HTML标签和表情符号，分词处理，为NLP情感分析模型准备训练数据。',
      tags: ['特征构造', '特征编码', '特征缩放', 'PCA', '特征筛选'],
      icon: Search,
      category: 'advanced',
    },
    {
      id: '09',
      difficulty: '高级',
      level: '实战',
      color: 'red',
      title: '全域数据异常值检测',
      description: '找出前20%贡献80%流水的商品，将商品分类为爆款、腰部、长尾。',
      tags: ['异常检测', '3σ原则', 'IQR', 'Z-Score', '孤立森林'],
      icon: Target,
      category: 'advanced',
    },
    {
      id: '10',
      difficulty: '高级',
      level: '实战',
      color: 'red',
      title: '多源数据集融合整合',
      description: '整合所有技能：构建商品共现矩阵、用户品类偏好聚类、输出业务洞察报告。',
      tags: ['merge', 'concat', 'join', '多表关联', '字段匹配'],
      icon: FileSpreadsheet,
      category: 'advanced',
    },
  ];

  const categories = [
    { id: 'all', label: '全部项目', count: 10 },
    { id: 'simple', label: '简单入门', count: 2 },
    { id: 'intermediate', label: '中级实战', count: 5 },
    { id: 'advanced', label: '综合实战', count: 3 },
  ];

  const getDifficultyColor = (color: string) => {
    const colors = {
      green: 'bg-green-600/20 text-green-300 border-green-500/30',
      yellow: 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30',
      red: 'bg-red-600/20 text-red-300 border-red-500/30',
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  const getLevelText = (difficulty: string) => {
    if (difficulty === '入门') return '简单';
    return '实战';
  };

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            项目广场
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            选择你的学习路径，从入门到高级，逐步提升 Pandas 技能
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                const element = document.getElementById('projects-list');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={activeCategory === cat.id
                ? 'px-5 py-2 rounded-full text-sm font-medium transition-all bg-blue-600 text-white shadow-lg shadow-blue-600/30 cursor-pointer' 
                : 'px-5 py-2 rounded-full text-sm font-medium transition-all bg-slate-800 text-slate-400 hover:bg-slate-700 cursor-pointer'}>
              {cat.label} {cat.count}
            </button>
          ))}
        </div>

        {/* Project Count */}
        <div className="mb-8 text-center">
          <span className="text-slate-400">共 <span className="text-blue-400 font-bold">{filteredProjects.length}</span> 个项目</span>
        </div>

        {/* Projects Grid */}
        <div id="projects-list" className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            const colorClass = getDifficultyColor(project.color);
            
            return (
              <div key={project.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs">#{project.id} {project.difficulty}</span>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    </div>
                  </div>
                  <span className={"px-3 py-1 rounded-full text-xs border flex items-center gap-1 " + colorClass}>
                    {getLevelText(project.difficulty)}
                  </span>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-2 py-1 bg-slate-700 text-slate-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/project/${project.id}`}
                  className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white">
                  开始学习 <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
