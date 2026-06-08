import { Link } from 'react-router-dom';
import { BookOpen, Code, BarChart3, Search, Truck, Database, TrendingUp } from 'lucide-react';

export default function About() {
  const courses = [
    {
      path: 'python',
      icon: Code,
      emoji: '🐍',
      title: 'Python基础',
      description: '学习Python编程语言的基础语法和核心概念',
    },
    {
      path: 'data-analysis',
      icon: BarChart3,
      emoji: '📊',
      title: '数据分析技术',
      description: '掌握数据分析的基本方法和常用工具',
    },
    {
      path: 'data-collection',
      icon: Search,
      emoji: '🔍',
      title: '数据采集与处理',
      description: '学习网络爬虫和数据处理的实用技术',
    },
    {
      path: 'supply-chain',
      icon: Truck,
      emoji: '🚚',
      title: '供应链数据分析',
      description: '应用数据分析技术优化供应链管理',
    },
    {
      path: 'database',
      icon: Database,
      emoji: '🗄️',
      title: '数据库原理与应用',
      description: '学习数据库系统的原理和SQL操作',
    },
    {
      path: 'visualization',
      icon: TrendingUp,
      emoji: '📈',
      title: '数据可视化',
      description: '用图表讲述数据故事，让数据更有说服力',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">我的课程</h1>
          <p className="text-slate-400 text-lg mb-2">广东科学技术职业学院 · 商学院</p>
          <p className="text-blue-400">商务数据分析与应用专业</p>
        </div>
        
        {/* Course List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <div key={idx} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{course.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{course.description}</p>
                  </div>
                </div>
                <Link 
                  to={`/course/${course.path}`}
                  className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 text-slate-300 hover:text-white"
                >
                  开始学习 <span className="text-blue-400">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}