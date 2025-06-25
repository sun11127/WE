
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Users, Shield, X } from 'lucide-react';

const EmergencyHelp: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const emergencyContacts = [
    {
      title: '急救电话',
      number: '120',
      icon: Phone,
      color: 'bg-[var(--warning-red)] hover:bg-red-700',
      description: '医疗急救服务'
    },
    {
      title: '家人联系',
      number: '联系家人',
      icon: Users,
      color: 'bg-[var(--trust-blue)] hover:bg-blue-700',
      description: '一键通知紧急联系人'
    },
    {
      title: '诈骗举报',
      number: '96110',
      icon: Shield,
      color: 'bg-[var(--active-orange)] hover:bg-orange-700',
      description: '反诈骗举报热线'
    }
  ];

  return (
    <div className="relative">
      {isExpanded && (
        <Card className="absolute bottom-16 right-0 w-80 shadow-2xl border-2 border-red-500 z-50">
          <CardHeader className="bg-[var(--warning-red)] text-white relative">
            <CardTitle className="text-xl text-center text-white">紧急帮助</CardTitle>
            <Button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 w-8 h-8 p-0 bg-transparent hover:bg-red-700 text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 bg-white">
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Button
                    key={index}
                    className={`w-full h-16 flex items-center justify-start gap-4 text-white text-lg ${contact.color} shadow-md`}
                  >
                    <Icon className="w-8 h-8" />
                    <div className="text-left">
                      <div className="font-bold">{contact.title}</div>
                      <div className="text-sm opacity-90">{contact.description}</div>
                    </div>
                  </Button>
                );
              })}
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-base text-yellow-800 text-center">
                点击任意按钮将自动发送您的位置信息
              </p>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 rounded-full bg-[var(--warning-red)] hover:bg-red-700 text-white shadow-lg border-4 border-white animate-pulse"
      >
        <Phone className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default EmergencyHelp;
