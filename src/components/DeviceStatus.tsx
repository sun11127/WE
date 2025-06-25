
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Smartphone, Watch, Wifi, Battery, Signal } from 'lucide-react';

const DeviceStatus: React.FC = () => {
  const devices = [
    {
      name: '智能手表',
      icon: Watch,
      status: 'connected',
      battery: 85,
      signal: 4,
      lastSync: '2分钟前'
    },
    {
      name: '智能手机',
      icon: Smartphone,
      status: 'connected',
      battery: 67,
      signal: 5,
      lastSync: '刚刚'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-500';
      case 'disconnected': return 'bg-red-500';
      case 'syncing': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'connected': return '已连接';
      case 'disconnected': return '未连接';
      case 'syncing': return '同步中';
      default: return '未知';
    }
  };

  return (
    <Card className="border-2 border-[#2A3B4F] shadow-lg">
      <CardHeader className="bg-[#2A3B4F] text-[#F5F5DC]">
        <CardTitle className="text-2xl flex items-center gap-3">
          <Wifi className="w-8 h-8" />
          设备状态
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {devices.map((device, index) => {
            const Icon = device.icon;
            return (
              <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Icon className="w-8 h-8 text-[#2A3B4F]" />
                    <div>
                      <h3 className="text-xl font-bold text-[#2A3B4F]">{device.name}</h3>
                      <p className="text-base text-gray-600">上次同步：{device.lastSync}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(device.status)} text-white text-base px-3 py-1`}>
                    {getStatusText(device.status)}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Battery className="w-5 h-5 text-gray-600" />
                    <span className="text-lg text-gray-700">电量：{device.battery}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Signal className="w-5 h-5 text-gray-600" />
                    <span className="text-lg text-gray-700">信号：{device.signal}/5</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button className="w-full h-14 text-xl bg-[#2A3B4F] hover:bg-[#1A2B3F] text-[#F5F5DC] mt-6">
          <Wifi className="w-6 h-6 mr-2" />
          同步所有设备
        </Button>
      </CardContent>
    </Card>
  );
};

export default DeviceStatus;
