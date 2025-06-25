
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  BookOpen, 
  Bot, 
  Users, 
  User, 
  Search,
  Menu,
  X,
  Heart,
  Shield,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const mainNavItems = [
    { id: 'dashboard', label: '仪表盘', icon: Home, badge: null },
    { id: 'courses', label: '课程中心', icon: BookOpen, badge: '新' },
    { id: 'health', label: '健康管理', icon: Heart, badge: null },
    { id: 'assistant', label: '智能助手', icon: Bot, badge: null },
    { id: 'community', label: '学习社区', icon: Users, badge: '5' },
  ];

  const secondaryNavItems = [
    { id: 'security', label: '安全中心', icon: Shield, badge: '!' },
    { id: 'settings', label: '个人设置', icon: Settings, badge: null },
    { id: 'profile', label: '我的账户', icon: User, badge: null },
    { id: 'help', label: '帮助支持', icon: HelpCircle, badge: null },
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleItemClick = (id: string) => {
    setActiveSection(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-60 md:hidden bg-[var(--deep-sea-blue)] text-white shadow-lg"
        size="icon"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav className={`nav-sidebar ${isMobileOpen ? 'mobile-open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Header */}
        <div className={`p-6 border-b border-white border-opacity-20 ${isCollapsed ? 'px-4' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[var(--trust-blue)] rounded-lg flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="text-xl font-bold text-white">银龄智慧学堂</h2>
                <p className="text-sm opacity-80">专业数字教育平台</p>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        {!isCollapsed && (
          <div className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索课程和功能..."
                className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--trust-blue)]"
              />
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto pb-24">
          <div className={`px-6 py-4 ${isCollapsed ? 'px-4' : ''}`}>
            {!isCollapsed && (
              <h3 className="text-sm font-medium opacity-60 uppercase tracking-wider mb-4">
                主要功能
              </h3>
            )}
            
            <div className="space-y-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`nav-sidebar-item w-full text-left ${isActive ? 'active' : ''}`}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className="ml-3 flex-1">{item.label}</span>
                        {item.badge && (
                          <Badge 
                            className={`ml-2 text-xs ${
                              item.badge === '!' 
                                ? 'bg-[var(--warning-red)] text-white' 
                                : item.badge === '新'
                                ? 'bg-[var(--active-green)] text-white'
                                : 'bg-[var(--trust-blue)] text-white'
                            }`}
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className={`px-6 py-4 border-t border-white border-opacity-20 ${isCollapsed ? 'px-4' : ''}`}>
            {!isCollapsed && (
              <h3 className="text-sm font-medium opacity-60 uppercase tracking-wider mb-4">
                设置与帮助
              </h3>
            )}
            
            <div className="space-y-1">
              {secondaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`nav-sidebar-item w-full text-left ${isActive ? 'active' : ''}`}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className="ml-3 flex-1">{item.label}</span>
                        {item.badge && (
                          <Badge 
                            className={`ml-2 text-xs ${
                              item.badge === '!' 
                                ? 'bg-[var(--warning-red)] text-white' 
                                : 'bg-[var(--trust-blue)] text-white'
                            }`}
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Collapse Toggle */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white border-opacity-20 bg-[var(--deep-sea-blue)]">
          <Button
            onClick={toggleCollapse}
            className="w-full bg-transparent hover:bg-white hover:bg-opacity-10 text-white border border-white border-opacity-20 hidden md:flex items-center justify-center"
            size="sm"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5 mr-2" />
                收起侧栏
              </>
            )}
          </Button>
        </div>
      </nav>

      {/* Update main content margin */}
      <style jsx global>{`
        .main-content {
          margin-left: ${isCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)'};
        }
      `}</style>
    </>
  );
};

export default Sidebar;
