
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  AlertTriangle, 
  Phone, 
  Lock,
  Eye,
  CheckCircle,
  XCircle,
  TrendingUp,
  FileText,
  Users,
  Zap
} from 'lucide-react';

const Security = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: '安全概览', icon: Shield },
    { id: 'fraud-prevention', name: '防诈骗', icon: AlertTriangle },
    { id: 'privacy', name: '隐私保护', icon: Eye },
    { id: 'emergency', name: '紧急求助', icon: Phone }
  ];

  const securityStatus = {
    overall: 85,
    password: 90,
    privacy: 80,
    device: 85,
    network: 75
  };

  const recentAlerts = [
    {
      id: 1,
      type: 'warning',
      title: '可疑来电提醒',
      description: '检测到来自 138****5678 的可疑来电，疑似诈骗电话',
      time: '2小时前',
      status: 'new'
    },
    {
      id: 2,
      type: 'info',
      title: '密码强度提醒',
      description: '建议更新您的微信支付密码，当前密码强度偏低',
      time: '1天前',
      status: 'pending'
    },
    {
      id: 3,
      type: 'success',
      title: '安全验证成功',
      description: '您的身份验证已通过，账户安全等级提升',
      time: '3天前',
      status: 'resolved'
    }
  ];

  const fraudTypes = [
    {
      id: 1,
      name: '冒充公检法诈骗',
      description: '冒充公安、检察院、法院工作人员，声称涉嫌犯罪要求转账',
      prevention: '官方机构不会通过电话要求转账，遇到此类情况立即挂断并报警',
      cases: 156,
      trend: 'up'
    },
    {
      id: 2,
      name: '虚假投资理财',
      description: '通过社交媒体推广高收益投资产品，诱导投资后卷款跑路',
      prevention: '不轻信高收益承诺，投资前核实平台资质，谨慎投资',
      cases: 89,
      trend: 'down'
    },
    {
      id: 3,
      name: '网购退款诈骗',
      description: '冒充客服人员，声称商品有问题需要退款，索要银行卡信息',
      prevention: '退款通过官方渠道办理，不要向陌生人提供银行卡信息',
      cases: 67,
      trend: 'up'
    },
    {
      id: 4,
      name: '冒充亲友诈骗',
      description: '冒充亲友或熟人，声称遇到紧急情况需要借钱',
      prevention: '收到借钱信息要电话核实，确认身份后再决定是否帮助',
      cases: 45,
      trend: 'stable'
    }
  ];

  const emergencyContacts = [
    { name: '报警电话', number: '110', description: '遇到紧急情况立即报警' },
    { name: '反诈骗专线', number: '96110', description: '专业反诈骗咨询举报' },
    { name: '消费者投诉', number: '12315', description: '消费纠纷投诉举报' },
    { name: '银行客服', number: '95588', description: '银行卡异常情况处理' }
  ];

  const privacySettings = [
    { name: '位置信息', status: true, description: '控制应用获取您的位置信息' },
    { name: '通讯录访问', status: false, description: '限制应用访问您的通讯录' },
    { name: '相机权限', status: true, description: '控制应用使用相机功能' },
    { name: '麦克风权限', status: true, description: '控制应用使用麦克风' },
    { name: '存储权限', status: false, description: '限制应用访问存储空间' }
  ];

  return (
    <div className="space-y-8">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[var(--text-primary)]">安全中心</h1>
          <p className="text-[var(--text-secondary)] mt-2 text-xl">
            全方位保护您的数字安全，远离网络风险
          </p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-[var(--warning-red)] hover:bg-red-600 text-white px-6 py-3 text-lg">
            <Phone className="w-5 h-5 mr-2" />
            紧急求助
          </Button>
          <Button className="bg-[var(--trust-blue)] hover:bg-blue-600 text-white px-6 py-3 text-lg">
            安全检测
          </Button>
        </div>
      </div>

      {/* 标签导航 */}
      <div className="card-professional">
        <div className="flex space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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

      {/* 安全概览 */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* 安全评分 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <div className="w-full h-full rounded-full border-8 border-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[var(--active-green)]">{securityStatus.overall}</div>
                      <div className="text-sm text-[var(--text-secondary)]">分</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">安全评分</h3>
                <p className="text-[var(--text-secondary)]">您的安全防护等级良好</p>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 card-professional">
              <CardHeader>
                <CardTitle>安全状态详情</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(securityStatus).filter(([key]) => key !== 'overall').map(([key, value]) => {
                  const statusNames = {
                    password: '密码安全',
                    privacy: '隐私保护',
                    device: '设备安全',
                    network: '网络安全'
                  };
                  return (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-[var(--text-primary)]">{statusNames[key as keyof typeof statusNames]}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              value >= 85 ? 'bg-[var(--active-green)]' : 
                              value >= 70 ? 'bg-yellow-500' : 'bg-[var(--warning-red)]'
                            }`}
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-[var(--text-primary)] w-8">{value}</span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* 最近警报 */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-[var(--warning-red)]" />
                安全提醒
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    alert.type === 'warning' ? 'bg-red-100' :
                    alert.type === 'info' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {alert.type === 'warning' ? <XCircle className="w-5 h-5 text-red-600" /> :
                     alert.type === 'info' ? <AlertTriangle className="w-5 h-5 text-blue-600" /> :
                     <CheckCircle className="w-5 h-5 text-green-600" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--text-primary)]">{alert.title}</h4>
                    <p className="text-[var(--text-secondary)] mt-1">{alert.description}</p>
                    <span className="text-sm text-[var(--text-secondary)]">{alert.time}</span>
                  </div>
                  <Badge className={
                    alert.status === 'new' ? 'bg-red-100 text-red-800' :
                    alert.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }>
                    {alert.status === 'new' ? '新' : alert.status === 'pending' ? '待处理' : '已解决'}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}

      {/* 防诈骗 */}
      {activeTab === 'fraud-prevention' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {fraudTypes.map((fraud) => (
              <Card key={fraud.id} className="card-professional">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-[var(--text-primary)] text-lg">{fraud.name}</h3>
                    <div className="flex items-center gap-2">
                      <TrendingUp className={`w-4 h-4 ${
                        fraud.trend === 'up' ? 'text-red-500' : 
                        fraud.trend === 'down' ? 'text-green-500' : 'text-gray-500'
                      }`} />
                      <span className="text-sm text-[var(--text-secondary)]">{fraud.cases}案例</span>
                    </div>
                  </div>
                  
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {fraud.description}
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-900 mb-2">防范建议</h4>
                    <p className="text-blue-700 text-sm leading-relaxed">{fraud.prevention}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* 隐私保护 */}
      {activeTab === 'privacy' && (
        <div className="space-y-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-[var(--trust-blue)]" />
                隐私设置管理
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {privacySettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-[var(--text-primary)]">{setting.name}</h4>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">{setting.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={setting.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {setting.status ? '已开启' : '已关闭'}
                    </Badge>
                    <Button 
                      size="sm" 
                      className={`${
                        setting.status ? 'bg-[var(--warning-red)] hover:bg-red-600' : 'bg-[var(--active-green)] hover:bg-green-600'
                      } text-white`}
                    >
                      {setting.status ? '关闭' : '开启'}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}

      {/* 紧急求助 */}
      {activeTab === 'emergency' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="card-professional">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-[var(--warning-red)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] text-xl mb-2">{contact.name}</h3>
                  <p className="text-3xl font-bold text-[var(--warning-red)] mb-2">{contact.number}</p>
                  <p className="text-[var(--text-secondary)] mb-4">{contact.description}</p>
                  <Button className="w-full bg-[var(--warning-red)] hover:bg-red-600 text-white text-lg py-3">
                    立即拨打
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-[var(--trust-blue)]" />
                紧急情况处理指南
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-900 mb-2">遭遇诈骗怎么办？</h4>
                  <ol className="text-red-700 text-sm space-y-1">
                    <li>1. 立即停止转账或提供个人信息</li>
                    <li>2. 保存相关证据（通话记录、短信等）</li>
                    <li>3. 立即报警并拨打反诈专线96110</li>
                    <li>4. 联系银行冻结相关账户</li>
                  </ol>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">账户异常怎么办？</h4>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li>1. 立即修改相关账户密码</li>
                    <li>2. 检查账户资金和交易记录</li>
                    <li>3. 联系客服冻结账户</li>
                    <li>4. 向相关部门举报</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Security;
