
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot, 
  MessageCircle, 
  Phone, 
  Video,
  Mic,
  Send,
  Volume2,
  Settings,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

const Assistant = () => {
  const [activeService, setActiveService] = useState('chat');
  const [messages, setMessages] = useState([
    { id: 1, type: 'assistant', content: '您好！我是您的智能助手，有什么可以帮助您的吗？', time: '09:00' },
    { id: 2, type: 'user', content: '我想学习如何使用微信发语音消息', time: '09:01' },
    { id: 3, type: 'assistant', content: '好的，我来教您微信语音消息的使用方法。首先打开微信聊天界面...', time: '09:01' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const services = [
    { 
      id: 'chat', 
      name: '智能对话', 
      icon: MessageCircle, 
      description: '文字对话解答疑问',
      color: 'bg-[var(--trust-blue)]'
    },
    { 
      id: 'voice', 
      name: '语音助手', 
      icon: Mic, 
      description: '语音交互更便捷',
      color: 'bg-[var(--active-green)]'
    },
    { 
      id: 'video', 
      name: '视频指导', 
      icon: Video, 
      description: '面对面操作演示',
      color: 'bg-purple-600'
    },
    { 
      id: 'phone', 
      name: '电话支持', 
      icon: Phone, 
      description: '专业客服热线',
      color: 'bg-[var(--warning-red)]'
    }
  ];

  const quickActions = [
    { text: '如何使用微信？', category: 'basic' },
    { text: '忘记支付密码怎么办？', category: 'security' },
    { text: '如何预约挂号？', category: 'health' },
    { text: '怎么防范电信诈骗？', category: 'security' },
    { text: '如何网上购物？', category: 'life' },
    { text: '血压监测方法', category: 'health' }
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user' as const,
        content: inputMessage,
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      // 模拟助手回复
      setTimeout(() => {
        const assistantReply = {
          id: messages.length + 2,
          type: 'assistant' as const,
          content: '我正在为您查找相关信息，请稍等...',
          time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, assistantReply]);
      }, 1000);
    }
  };

  return (
    <div className="space-y-8">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[var(--text-primary)]">智能助手</h1>
          <p className="text-[var(--text-secondary)] mt-2 text-xl">
            24小时专业指导，让数字生活更简单
          </p>
        </div>
        <Button className="bg-[var(--trust-blue)] hover:bg-blue-600 text-white px-6 py-3 text-lg">
          <Settings className="w-5 h-5 mr-2" />
          助手设置
        </Button>
      </div>

      {/* 服务选择 */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          const isActive = activeService === service.id;
          return (
            <Card 
              key={service.id} 
              className={`card-professional cursor-pointer transition-all ${
                isActive ? 'ring-2 ring-[var(--trust-blue)]' : ''
              }`}
              onClick={() => setActiveService(service.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* 对话界面 */}
        <div className="xl:col-span-2">
          <Card className="card-professional h-[600px] flex flex-col">
            <CardHeader className="bg-gradient-to-r from-[var(--trust-blue)] to-[var(--active-green)] text-white">
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-6 h-6" />
                智能助手对话
                <Button size="icon" className="ml-auto bg-white bg-opacity-20 hover:bg-opacity-30">
                  <Volume2 className="w-5 h-5" />
                </Button>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* 消息列表 */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-4 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-[var(--trust-blue)] text-white' 
                        : 'bg-gray-100 text-[var(--text-primary)]'
                    }`}>
                      <p className="text-base leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-2 ${
                        message.type === 'user' ? 'text-blue-100' : 'text-[var(--text-secondary)]'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 输入区域 */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="输入您的问题..."
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--trust-blue)] text-lg"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-[var(--trust-blue)] hover:bg-blue-600 text-white px-6"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 快速操作 */}
        <div className="space-y-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-[var(--trust-blue)]" />
                常见问题
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  onClick={() => setInputMessage(action.text)}
                  className="w-full text-left justify-start bg-gray-50 text-[var(--text-primary)] hover:bg-gray-100 p-3 h-auto"
                >
                  <HelpCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{action.text}</span>
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-[var(--warning-red)]" />
                紧急联系
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-[var(--warning-red)] hover:bg-red-600 text-white text-lg py-3">
                客服热线：400-8888-0000
              </Button>
              <Button className="w-full bg-[var(--active-green)] hover:bg-green-600 text-white text-lg py-3">
                远程协助
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-3">
                视频通话
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
