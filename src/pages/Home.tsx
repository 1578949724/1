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
    <div className="min-h-screen bg-white text-black pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-black overflow-hidden bg-gray-200 mb-6">
            <img 
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20business%20analyst%20portrait&image_size=square" 
              alt="个人头像" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl text-gray-600 mb-2">
            广东科学技术职业学院 · 商务数据分析与应用
          </h2>
          <h1 className="text-4xl font-bold mb-6 text-black">
            周俊杰
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {courses.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm border border-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
            我是24届商务数据分析与应用专业的学生，具备扎实的数据分析能力。擅长使用Python、SQL和数据可视化工具解决业务问题，能够从数据中提取有价值的洞察。
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <BookOpen className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 border-t border-gray-300">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">联系方式</h3>
              <p className="text-gray-600 text-sm">邮箱: 1578949724@qq.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">快速链接</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors block">首页</a>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors block">我的课程</a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 周俊杰. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
