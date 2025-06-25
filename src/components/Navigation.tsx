
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, BookOpen, Bot, Users, User } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'courses', label: '课程中心', icon: BookOpen },
    { id: 'assistant', label: '智能助手', icon: Bot },
    { id: 'community', label: '社区', icon: Users },
    { id: 'profile', label: '我的账户', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#2A3B4F] border-t-4 border-[#FFA726] shadow-2xl z-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`h-20 flex flex-col items-center justify-center rounded-none border-none text-lg font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#FFA726] text-[#2A3B4F]' 
                    : 'bg-transparent text-[#F5F5DC] hover:bg-[#FFA726] hover:text-[#2A3B4F]'
                }`}
              >
                <Icon className="w-7 h-7 mb-1" />
                <span className="text-sm">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
