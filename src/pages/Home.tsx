import { Github, Linkedin, BookOpen } from 'lucide-react';

export default function Home() {
  const courses = [
    '电子商务数据分析',
    '企业财务数据分析',
    '供应链数据分析',
    '数据库技术与应用',
    '应用统计实务',
    '数据分析技术',
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 mb-6">
            <img 
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20business%20analyst%20portrait&image_size=square" 
              alt="个人头像" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl text-slate-400 mb-2">
            广东科学技术职业学院 · 商务数据分析与应用
          </h2>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            周俊杰
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {courses.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            我是24届商务数据分析与应用专业的学生，具备扎实的数据分析能力。擅长使用Python、SQL和数据可视化工具解决业务问题，能够从数据中提取有价值的洞察。
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <BookOpen className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 border-t border-slate-700">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">联系方式</h3>
              <p className="text-slate-400 text-sm">邮箱: 1578949724@qq.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">快速链接</h3>
              <div className="space-y-2">
                <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors block">首页</a>
                <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors block">我的课程</a>
              </div>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm">
            <p>© 2024 周俊杰. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
