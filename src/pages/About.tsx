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
    <div className="min-h-screen bg-white text-black pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">我的课程</h1>
          <p className="text-gray-600 text-lg mb-2">广东科学技术职业学院 · 商学院</p>
          <p className="text-gray-800">商务数据分析与应用专业</p>
        </div>
        
        {/* Course List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-300 hover:border-black transition-all hover:shadow-lg group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{course.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                  </div>
                </div>
                <Link 
                  to={`/course/${course.path}`}
                  className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 text-gray-800 hover:text-black"
                >
                  开始学习 <span className="text-black">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
