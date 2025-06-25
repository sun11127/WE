
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import VoiceControl from '@/components/VoiceControl';
import EmergencyHelp from '@/components/EmergencyHelp';
import AccessibilityPanel from '@/components/AccessibilityPanel';
import SmartAssist from '@/components/SmartAssist';
import HealthDashboard from '@/components/HealthDashboard';
import CourseCarousel from '@/components/CourseCarousel';
import DeviceStatus from '@/components/DeviceStatus';
import Courses from './Courses';
import Health from './Health';
import Assistant from './Assistant';
import Community from './Community';
import Security from './Security';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'courses':
        return <Courses />;
      case 'health':
        return <Health />;
      case 'assistant':
        return <Assistant />;
      case 'community':
        return <Community />;
      case 'security':
        return <Security />;
      case 'dashboard':
      default:
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <CourseCarousel />
              </div>
              <div>
                <DeviceStatus />
              </div>
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {/* Health Dashboard - 主要内容区域 */}
              <div className="lg:col-span-3 xl:col-span-4">
                <HealthDashboard />
              </div>
              
              {/* Side Panel - 侧边面板 */}
              <div className="lg:col-span-1 xl:col-span-2 space-y-6">
                {/* Today's Learning Progress */}
                <div className="card-professional">
                  <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">今日学习进度</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-secondary)] text-sm">微信使用基础</span>
                      <span className="font-semibold text-[var(--trust-blue)] text-sm">85%</span>
                    </div>
                    <div className="w-full bg-[var(--mica-gray)] rounded-full h-2">
                      <div className="bg-[var(--trust-blue)] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[var(--text-secondary)] text-sm">健康数据管理</span>
                      <span className="font-semibold text-[var(--active-green)] text-sm">60%</span>
                    </div>
                    <div className="w-full bg-[var(--mica-gray)] rounded-full h-2">
                      <div className="bg-[var(--active-green)] h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="card-professional">
                  <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">快速操作</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <button className="p-3 bg-[var(--trust-blue)] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-md">
                      紧急求助
                    </button>
                    <button className="p-3 bg-[var(--active-green)] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-md">
                      健康监测
                    </button>
                    <button className="p-3 bg-[var(--warning-red)] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-md">
                      安全提醒
                    </button>
                    <button className="p-3 bg-[var(--active-orange)] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-md">
                      家庭协助
                    </button>
                  </div>
                </div>

                {/* System Status */}
                <div className="card-professional">
                  <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">系统状态</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--text-secondary)]">网络连接</span>
                      <span className="text-xs text-[var(--active-green)] font-medium">正常</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--text-secondary)]">设备同步</span>
                      <span className="text-xs text-[var(--active-green)] font-medium">已连接</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--text-secondary)]">数据备份</span>
                      <span className="text-xs text-[var(--trust-blue)] font-medium">2小时前</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-blue">
                <h4 className="font-semibold mb-2">本周学习</h4>
                <div className="text-2xl font-bold">12小时</div>
                <div className="text-sm opacity-90">较上周 +15%</div>
              </div>
              <div className="card-orange">
                <h4 className="font-semibold mb-2">完成课程</h4>
                <div className="text-2xl font-bold">8门</div>
                <div className="text-sm opacity-90">本月新增 3门</div>
              </div>
              <div className="card-professional">
                <h4 className="font-semibold mb-2 text-[var(--text-primary)]">健康评分</h4>
                <div className="text-2xl font-bold text-[var(--active-green)]">85分</div>
                <div className="text-sm text-[var(--text-secondary)]">优秀状态</div>
              </div>
              <div className="card-professional">
                <h4 className="font-semibold mb-2 text-[var(--text-primary)]">社区活跃度</h4>
                <div className="text-2xl font-bold text-[var(--trust-blue)]">92%</div>
                <div className="text-sm text-[var(--text-secondary)]">超越 78% 用户</div>
              </div>
            </div>
          </div>
        );
    }
  };

  const getPageTitle = () => {
    const titles = {
      dashboard: '智能仪表盘',
      courses: '课程中心',
      health: '健康管理',
      assistant: '智能助手',
      community: '学习社区',
      security: '安全中心',
      settings: '个人设置',
      profile: '我的账户',
      help: '帮助支持'
    };
    return titles[activeSection as keyof typeof titles] || '智能仪表盘';
  };

  return (
    <div className="min-h-screen bg-[var(--morning-mist)] font-sans">
      {/* Sidebar Navigation */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <main className="main-content">
        {/* Top Header Bar */}
        <header className="bg-white border-b border-[var(--mica-gray)] sticky top-0 z-30 shadow-sm">
          <div className="flex items-center justify-between p-6">
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)]">
                {getPageTitle()}
              </h1>
              <p className="text-[var(--text-secondary)] mt-1">
                欢迎回来，让我们继续您的学习之旅
              </p>
            </div>
            <VoiceControl />
          </div>
        </header>

        {/* Content Area with 8px Grid */}
        <div className="p-8 min-h-screen">
          {renderContent()}
        </div>
      </main>

      {/* Fixed UI Elements - 重新组织位置 */}
      <div className="floating-buttons">
        <EmergencyHelp />
        <SmartAssist />
        <AccessibilityPanel />
      </div>
    </div>
  );
};

export default Index;
