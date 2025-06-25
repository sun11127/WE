import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Play,
  Heart,
  CheckCircle,
  Activity,
  Smartphone,
  Palette,
  Home,
  Sparkles
} from 'lucide-react';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('health');

  const categories = [
    { id: 'health', name: '健康管理与安全防护', icon: Activity },
    { id: 'tech', name: '科技应用与数字生活', icon: Smartphone },
    { id: 'culture', name: '文化娱乐与艺术修养', icon: Palette },
    { id: 'life', name: '生活技能与社区参与', icon: Home },
    { id: 'advanced', name: '个性化定制与进阶', icon: Sparkles }
  ];

  const courses = {
    health: [
      {
        id: 1,
        title: '智能设备健康管理',
        description: '学习使用智能手表进行心率监测、步数记录，解读健康数据报告',
        duration: '45分钟',
        students: 1280,
        difficulty: 1,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 2,
        title: '慢性病日常监测',
        description: '高血压、糖尿病的日常监测，以及中医养生知识（八段锦、穴位按摩）',
        duration: '40分钟',
        students: 956,
        difficulty: 2,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 3,
        title: '急救技能培训',
        description: '掌握心肺复苏（CPR）、跌倒自救和紧急呼叫设备操作',
        duration: '50分钟',
        students: 834,
        difficulty: 2,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 4,
        title: '防诈与网络安全',
        description: '识别网络诈骗、保护个人信息、掌握手机支付安全技巧',
        duration: '35分钟',
        students: 1456,
        difficulty: 1,
        progress: 0,
        image: '/placeholder.svg'
      }
    ],
    tech: [
      {
        id: 5,
        title: '智能手机基础操作',
        description: '微信聊天、视频通话、健康码使用等基础功能学习',
        duration: '40分钟',
        students: 1890,
        difficulty: 1,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 6,
        title: '智慧出行指南',
        description: '学习使用打车软件、地图导航、公共交通查询等出行工具',
        duration: '35分钟',
        students: 1150,
        difficulty: 1,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 7,
        title: '智慧家居入门',
        description: '智能音箱控制、家电远程管理、安防设备联动等智能家居应用',
        duration: '45分钟',
        students: 678,
        difficulty: 2,
        progress: 0,
        image: '/placeholder.svg'
      }
    ],
    culture: [
      {
        id: 8,
        title: '传统艺术鉴赏',
        description: '书法、国画基础入门，戏曲艺术欣赏与学习',
        duration: '50分钟',
        students: 756,
        difficulty: 2,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 9,
        title: '音乐舞蹈课程',
        description: '广场舞教学、民族舞基础、乐器入门（葫芦丝、电子琴）',
        duration: '40分钟',
        students: 1234,
        difficulty: 1,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 10,
        title: '创意手工制作',
        description: '剪纸、刺绣、星空杯DIY、插花艺术等手工课程',
        duration: '35分钟',
        students: 867,
        difficulty: 1,
        progress: 0,
        image: '/placeholder.svg'
      }
    ],
    life: [
      {
        id: 11,
        title: '养生美食课堂',
        description: '家常菜制作、药膳搭配、烘焙兴趣课程',
        duration: '45分钟',
        students: 1567,
        difficulty: 1,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 12,
        title: '家庭园艺与环保',
        description: '阳台种植技巧、垃圾分类知识、旧物改造创意',
        duration: '30分钟',
        students: 923,
        difficulty: 1,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 13,
        title: '法律与权益保护',
        description: '遗产继承法、消费维权、老年人权益保障等法律知识',
        duration: '40分钟',
        students: 845,
        difficulty: 2,
        progress: 0,
        image: '/placeholder.svg'
      }
    ],
    advanced: [
      {
        id: 14,
        title: '专业摄影与短视频',
        description: '手机摄影技巧进阶、视频剪辑软件使用（剪映等）',
        duration: '60分钟',
        students: 634,
        difficulty: 3,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 15,
        title: '自媒体运营入门',
        description: '抖音/快手账号运营、内容策划与制作技巧',
        duration: '50分钟',
        students: 456,
        difficulty: 3,
        progress: 0,
        image: '/placeholder.svg'
      },
      {
        id: 16,
        title: 'AI技术体验课',
        description: '语音助手使用、智能家居编程基础入门',
        duration: '45分钟',
        students: 378,
        difficulty: 3,
        progress: 0,
        image: '/placeholder.svg'
      }
    ]
  };

  const getDifficultyStars = (level: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < level ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[var(--text-primary)]">课程中心</h1>
          <p className="text-[var(--text-secondary)] mt-2 text-xl">
            系统化学习数字生活技能，提升生活品质
          </p>
        </div>
        <div className="flex gap-4">
          <Button className="bg-[var(--trust-blue)] hover:bg-blue-600 text-white px-6 py-3 text-lg">
            我的学习记录
          </Button>
          <Button className="bg-[var(--active-green)] hover:bg-green-600 text-white px-6 py-3 text-lg">
            学习计划
          </Button>
        </div>
      </div>

      {/* 分类导航 */}
      <div className="card-professional p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`h-24 flex flex-col items-center justify-center gap-2 transition-all ${
                  isActive 
                    ? 'bg-[var(--trust-blue)] text-white' 
                    : 'bg-gray-50 text-[var(--text-primary)] hover:bg-gray-100'
                }`}
              >
                <Icon className="w-8 h-8" />
                <span className="font-medium text-center px-2">{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* 课程列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {courses[selectedCategory as keyof typeof courses]?.map((course) => (
          <Card key={course.id} className="card-professional hover:shadow-lg transition-all">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                    {course.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {getDifficultyStars(course.difficulty)}
                    </div>
                    <Badge variant="secondary" className={`text-sm ${
                      course.difficulty === 1 ? 'bg-green-100 text-green-800' :
                      course.difficulty === 2 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.difficulty === 1 ? '初级' : course.difficulty === 2 ? '中级' : '高级'}
                    </Badge>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-red-500">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center relative group cursor-pointer hover:bg-gray-200 transition-all">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-lg flex items-center justify-center">
                  <Play className="w-16 h-16 text-[var(--trust-blue)] opacity-75 group-hover:opacity-100 transition-all" />
                </div>
              </div>
              
              <p className="text-[var(--text-secondary)] text-base leading-relaxed min-h-[3em]">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}人学习</span>
                </div>
              </div>
              
              {course.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">学习进度</span>
                    <span className="text-[var(--trust-blue)] font-medium">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[var(--trust-blue)] h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              <Button 
                className={`w-full text-lg py-3 ${
                  course.progress > 0 
                    ? 'bg-[var(--active-green)] hover:bg-green-600' 
                    : 'bg-[var(--trust-blue)] hover:bg-blue-600'
                } text-white`}
              >
                {course.progress === 100 ? '重新学习' : course.progress > 0 ? '继续学习' : '开始学习'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
