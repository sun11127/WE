
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Activity, 
  Clock, 
  Calendar,
  Bell,
  TrendingUp,
  AlertTriangle,
  Plus,
  Pill
} from 'lucide-react';

const Health = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const healthData = {
    bloodPressure: { systolic: 128, diastolic: 79, status: 'normal', time: '今天 08:30' },
    heartRate: { value: 72, status: 'normal', time: '今天 08:30' },
    steps: { value: 6840, goal: 8000, time: '今天' },
    sleep: { value: 7.5, quality: 'good', time: '昨晚' }
  };

  const medications = [
    { id: 1, name: '降压药', time: '08:00', frequency: '每日一次', nextDose: '明天 08:00', color: 'blue' },
    { id: 2, name: '维生素D', time: '12:00', frequency: '每日一次', nextDose: '今天 12:00', color: 'orange' },
    { id: 3, name: '钙片', time: '20:00', frequency: '每日一次', nextDose: '今天 20:00', color: 'green' }
  ];

  const appointments = [
    { id: 1, doctor: '心内科 - 张医生', date: '2024-01-15', time: '09:30', hospital: '人民医院' },
    { id: 2, doctor: '内分泌科 - 李医生', date: '2024-01-22', time: '14:00', hospital: '中医院' }
  ];

  const tabs = [
    { id: 'overview', name: '健康概览', icon: Activity },
    { id: 'medication', name: '用药管理', icon: Pill },
    { id: 'appointments', name: '就医预约', icon: Calendar }
  ];

  return (
    <div className="space-y-8">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[var(--text-primary)]">健康管理</h1>
          <p className="text-[var(--text-secondary)] mt-2 text-xl">
            全方位健康数据监测与管理
          </p>
        </div>
        <Button className="bg-[var(--warning-red)] hover:bg-red-600 text-white px-6 py-3 text-lg">
          <AlertTriangle className="w-5 h-5 mr-2" />
          紧急呼叫
        </Button>
      </div>

      {/* 标签导航 */}
      <div className="card-professional">
        <div className="flex space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedTab === tab.id;
            return (
              <Button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex-1 h-14 flex items-center justify-center gap-2 transition-all ${
                  isActive 
                    ? 'bg-[var(--trust-blue)] text-white' 
                    : 'bg-transparent text-[var(--text-primary)] hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.name}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* 健康概览 */}
      {selectedTab === 'overview' && (
        <div className="space-y-8">
          {/* 关键指标 */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">血压</p>
                    <p className="text-2xl font-bold text-[var(--text-primary)]">
                      {healthData.bloodPressure.systolic}/{healthData.bloodPressure.diastolic}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">{healthData.bloodPressure.time}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-[var(--trust-blue)]" />
                  </div>
                </div>
                <Badge className="mt-3 bg-green-100 text-green-800">正常范围</Badge>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">心率</p>
                    <p className="text-2xl font-bold text-[var(--text-primary)]">
                      {healthData.heartRate.value} <span className="text-base">bpm</span>
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">{healthData.heartRate.time}</p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <Badge className="mt-3 bg-green-100 text-green-800">正常范围</Badge>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">步数</p>
                    <p className="text-2xl font-bold text-[var(--text-primary)]">
                      {healthData.steps.value.toLocaleString()}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">目标 {healthData.steps.goal.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[var(--active-green)]" />
                  </div>
                </div>
                <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[var(--active-green)] h-2 rounded-full"
                    style={{ width: `${(healthData.steps.value / healthData.steps.goal) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">睡眠</p>
                    <p className="text-2xl font-bold text-[var(--text-primary)]">
                      {healthData.sleep.value}h
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">{healthData.sleep.time}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                <Badge className="mt-3 bg-green-100 text-green-800">睡眠良好</Badge>
              </CardContent>
            </Card>
          </div>

          {/* 健康趋势图表 */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[var(--trust-blue)]" />
                健康趋势（最近7天）
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-[var(--text-secondary)]">健康趋势图表将在此显示</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 用药管理 */}
      {selectedTab === 'medication' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">今日用药提醒</h2>
            <Button className="bg-[var(--trust-blue)] hover:bg-blue-600 text-white">
              <Plus className="w-5 h-5 mr-2" />
              添加药品
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {medications.map((med) => (
              <Card key={med.id} className="card-professional">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full bg-${med.color}-500`}></div>
                      <h3 className="font-semibold text-[var(--text-primary)]">{med.name}</h3>
                    </div>
                    <Bell className="w-5 h-5 text-[var(--text-secondary)]" />
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">服药时间</span>
                      <span className="text-[var(--text-primary)]">{med.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">服药频率</span>
                      <span className="text-[var(--text-primary)]">{med.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">下次提醒</span>
                      <span className="text-[var(--trust-blue)]">{med.nextDose}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 bg-[var(--active-green)] hover:bg-green-600 text-white">
                    已按时服药
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* 就医预约 */}
      {selectedTab === 'appointments' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">预约记录</h2>
            <Button className="bg-[var(--trust-blue)] hover:bg-blue-600 text-white">
              <Plus className="w-5 h-5 mr-2" />
              新建预约
            </Button>
          </div>

          <div className="space-y-4">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="card-professional">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-[var(--trust-blue)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)] text-lg">
                          {appointment.doctor}
                        </h3>
                        <p className="text-[var(--text-secondary)]">{appointment.hospital}</p>
                        <p className="text-[var(--trust-blue)] font-medium">
                          {appointment.date} {appointment.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" className="border-[var(--trust-blue)] text-[var(--trust-blue)]">
                        修改预约
                      </Button>
                      <Button variant="outline" className="border-[var(--warning-red)] text-[var(--warning-red)]">
                        取消预约
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Health;
