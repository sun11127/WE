
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const CourseCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: '微信使用入门',
      subtitle: '从零开始学会微信基本功能',
      description: '学习发送消息、语音通话、视频聊天等基础功能',
      image: '📱',
      steps: ['添加好友', '发送消息', '语音通话']
    },
    {
      title: '智能手表健康监测',
      subtitle: '掌握健康数据查看方法',
      description: '了解心率、血压、步数等健康指标的查看和分析',
      image: '⌚',
      steps: ['绑定设备', '查看数据', '设置提醒']
    },
    {
      title: '防诈骗安全知识',
      subtitle: '提高网络安全防范意识',
      description: '识别常见诈骗手段，保护个人财产安全',
      image: '🛡️',
      steps: ['识别诈骗', '保护信息', '安全支付']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <Card className="border-2 border-[#2A3B4F] shadow-2xl overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-80 bg-gradient-to-r from-[#2A3B4F] to-[#3A4B5F] text-[#F5F5DC] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between p-8">
              <div className="flex-1">
                <div className="text-6xl mb-4">{slides[currentSlide].image}</div>
                <h2 className="text-4xl font-bold mb-3">{slides[currentSlide].title}</h2>
                <h3 className="text-2xl mb-4 text-[#FFA726]">{slides[currentSlide].subtitle}</h3>
                <p className="text-xl mb-6 leading-relaxed">{slides[currentSlide].description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  {slides[currentSlide].steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#FFA726] text-[#2A3B4F] rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <span className="text-lg">{step}</span>
                    </div>
                  ))}
                </div>

                <Button className="h-16 px-8 text-xl bg-[#FFA726] hover:bg-[#FF9800] text-[#2A3B4F] font-bold">
                  <Play className="w-6 h-6 mr-2" />
                  开始学习
                </Button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-[#FFA726] hover:bg-[#FF9800] text-[#2A3B4F]"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-[#FFA726] hover:bg-[#FF9800] text-[#2A3B4F]"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 p-6 bg-white">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-[#FFA726] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseCarousel;
