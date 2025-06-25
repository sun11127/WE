
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Heart, Activity, Pill, AlertTriangle } from 'lucide-react';

const HealthDashboard: React.FC = () => {
  const healthData = {
    heartRate: 78,
    bloodPressure: { systolic: 125, diastolic: 80 },
    steps: 6420,
    stepGoal: 8000,
    medicationReminders: [
      { name: '降压药', time: '08:00', taken: true },
      { name: '维生素D', time: '12:00', taken: false },
      { name: '钙片', time: '18:00', taken: false }
    ]
  };

  const stepProgress = (healthData.steps / healthData.stepGoal) * 100;

  return (
    <Card className="border-2 border-[#2A3B4F] shadow-lg">
      <CardHeader className="bg-[#2A3B4F] text-[#F5F5DC]">
        <CardTitle className="text-2xl flex items-center gap-3">
          <Heart className="w-8 h-8" />
          健康监测
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* 生命体征 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#2A3B4F]">{healthData.heartRate}</div>
              <div className="text-lg text-gray-600">心率 (次/分)</div>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <Activity className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-xl font-bold text-[#2A3B4F]">
                {healthData.bloodPressure.systolic}/{healthData.bloodPressure.diastolic}
              </div>
              <div className="text-lg text-gray-600">血压 (mmHg)</div>
            </div>
          </div>

          {/* 步数统计 */}
          <div className="p-4 bg-[#FFA726] bg-opacity-10 border border-[#FFA726] rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-[#2A3B4F]">今日步数</h3>
              <Badge className="bg-[#FFA726] text-white text-base">
                {healthData.steps} / {healthData.stepGoal}
              </Badge>
            </div>
            <Progress value={stepProgress} className="mb-2" />
            <p className="text-base text-gray-600">
              已完成 {Math.round(stepProgress)}% 的目标
            </p>
          </div>

          {/* 用药提醒 */}
          <div>
            <h3 className="text-xl font-bold text-[#2A3B4F] mb-4 flex items-center gap-2">
              <Pill className="w-6 h-6" />
              用药提醒
            </h3>
            <div className="space-y-3">
              {healthData.medicationReminders.map((med, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Pill className={`w-6 h-6 ${med.taken ? 'text-green-500' : 'text-orange-500'}`} />
                    <div>
                      <div className="text-lg font-semibold text-[#2A3B4F]">{med.name}</div>
                      <div className="text-base text-gray-600">{med.time}</div>
                    </div>
                  </div>
                  {!med.taken && (
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                      <Badge className="bg-orange-500 text-white">待服用</Badge>
                    </div>
                  )}
                  {med.taken && (
                    <Badge className="bg-green-500 text-white">已完成</Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full h-16 text-xl bg-[#FFA726] hover:bg-[#FF9800] text-white">
            查看详细健康报告
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthDashboard;
