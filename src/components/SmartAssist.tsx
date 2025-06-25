
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  HelpCircle,
  MessageCircle,
  Phone,
  Video,
  X,
  Lightbulb,
} from 'lucide-react';

const SmartAssist: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [idleTime, setIdleTime] = useState(0);

  useEffect(() => {
    const handleUserActivity = () => {
      setHasInteracted(true);
      setIdleTime(0);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleUserActivity, true);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserActivity, true);
      });
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdleTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (idleTime >= 120 && !hasInteracted && !isVisible) {
      showAssist();
    }
  }, [idleTime, hasInteracted, isVisible]);

  const showAssist = () => {
    setIsVisible(true);
    if ('speechSynthesis' in window) {
      const announcement = new SpeechSynthesisUtterance('需要帮助吗？智能助手为您提供多种协助方式');
      announcement.lang = 'zh-CN';
      speechSynthesis.speak(announcement);
    }
  };

  const assistOptions = [
    {
      id: 'tutorial',
      title: '操作指导',
      description: '当前页面功能说明',
      icon: Lightbulb,
      color: 'bg-[var(--active-green)]'
    },
    {
      id: 'chat',
      title: '在线客服',
      description: '专业客服实时解答',
      icon: MessageCircle,
      color: 'bg-[var(--trust-blue)]'
    },
    {
      id: 'call',
      title: '电话支持',
      description: '400-888-0000',
      icon: Phone,
      color: 'bg-[var(--warning-red)]'
    },
    {
      id: 'video',
      title: '视频通话',
      description: '面对面指导服务',
      icon: Video,
      color: 'bg-[var(--active-orange)]'
    }
  ];

  const handleOptionClick = (optionId: string) => {
    console.log(`智能助手选项被点击: ${optionId}`);
    
    switch (optionId) {
      case 'tutorial':
        alert('这里是当前页面的操作指导...');
        break;
      case 'chat':
        alert('正在连接在线客服...');
        break;
      case 'call':
        window.open('tel:4008880000');
        break;
      case 'video':
        alert('正在启动视频通话...');
        break;
    }
    
    setIsVisible(false);
    setHasInteracted(true);
  };

  if (!isVisible) {
    return (
      <div className="relative">
        <Button
          onClick={showAssist}
          className="w-14 h-14 rounded-full bg-[var(--trust-blue)] hover:bg-blue-600 text-white shadow-lg animate-pulse"
          title="智能助手"
        >
          <HelpCircle className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <Card className="absolute bottom-16 right-0 w-96 card-professional animate-fade-in z-50">
        <CardHeader className="bg-gradient-to-r from-[var(--trust-blue)] to-[var(--active-green)] text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2 text-white">
              <HelpCircle className="w-6 h-6" />
              智能助手
            </CardTitle>
            <Button
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 p-0 bg-transparent hover:bg-white hover:bg-opacity-20 text-white"
              size="icon"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm opacity-90 mt-2">
            我注意到您已经停留了一段时间，需要帮助吗？
          </p>
        </CardHeader>
        
        <CardContent className="p-6 bg-white">
          <div className="grid grid-cols-2 gap-4">
            {assistOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className={`h-20 flex flex-col items-center justify-center gap-2 text-white ${option.color} hover:opacity-90 transition-all duration-200 shadow-md`}
                >
                  <Icon className="w-6 h-6" />
                  <div className="text-center">
                    <div className="font-medium text-sm">{option.title}</div>
                    <div className="text-xs opacity-90">{option.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">提示</h4>
                <p className="text-sm text-blue-700">
                  您可以随时点击右下角的帮助按钮获取协助，我们提供24小时支持服务。
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button
              onClick={() => setIsVisible(false)}
              variant="outline"
              className="text-sm"
            >
              暂时不需要
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartAssist;
