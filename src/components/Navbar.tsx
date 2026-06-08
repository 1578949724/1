import { Link, useLocation } from 'react-router-dom';
import { Home, User, Code2 } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '我的课程', icon: User },
    { path: '/about', label: '个人主页', icon: Home },
    { path: '/pandas', label: 'Pandas训练项目', icon: Code2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-black font-bold text-lg">数据分析学习</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
