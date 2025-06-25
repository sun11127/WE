
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Eye, 
  Volume2, 
  Type, 
  Contrast, 
  Moon,
  Sun,
  Settings,
  X,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

const AccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);

  const adjustFontSize = (change: number) => {
    const newSize = Math.max(80, Math.min(150, fontSize + change));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleVoice = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
    if (!isVoiceEnabled) {
      const announcement = new SpeechSynthesisUtterance('语音辅助功能已开启');
      announcement.lang = 'zh-CN';
      speechSynthesis.speak(announcement);
    }
  };

  const announceElement = (text: string) => {
    if (isVoiceEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="relative">
      {/* Main Toggle Button */}
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
          announceElement(isOpen ? '关闭无障碍面板' : '打开无障碍面板');
        }}
        className="w-14 h-14 rounded-full bg-[var(--active-green)] hover:bg-green-600 text-white shadow-lg transition-all duration-200"
        title="无障碍设置"
      >
        <Eye className="w-6 h-6" />
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 card-professional animate-fade-in z-50">
          <CardHeader className="bg-[var(--trust-blue)] text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <Settings className="w-6 h-6" />
                无障碍设置
              </CardTitle>
              <Button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 p-0 bg-transparent hover:bg-white hover:bg-opacity-20 text-white"
                size="icon"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6 bg-white">
            {/* Font Size Control */}
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2 text-[var(--text-primary)]">
                <Type className="w-5 h-5" />
                字体大小
              </h4>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => {
                    adjustFontSize(-10);
                    announceElement('字体缩小');
                  }}
                  size="sm"
                  variant="outline"
                  className="w-10 h-10"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="min-w-16 text-center font-mono text-[var(--text-primary)]">{fontSize}%</span>
                <Button
                  onClick={() => {
                    adjustFontSize(10);
                    announceElement('字体放大');
                  }}
                  size="sm"
                  variant="outline"
                  className="w-10 h-10"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Theme Controls */}
            <div className="space-y-3">
              <h4 className="font-medium text-[var(--text-primary)]">主题设置</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => {
                    toggleDarkMode();
                    announceElement(isDarkMode ? '切换到浅色模式' : '切换到深色模式');
                  }}
                  variant={isDarkMode ? "default" : "outline"}
                  className="flex items-center gap-2 h-12"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  {isDarkMode ? '浅色' : '深色'}
                </Button>
                
                <Button
                  onClick={() => {
                    toggleHighContrast();
                    announceElement(isHighContrast ? '关闭高对比度' : '开启高对比度');
                  }}
                  variant={isHighContrast ? "default" : "outline"}
                  className="flex items-center gap-2 h-12"
                >
                  <Contrast className="w-5 h-5" />
                  高对比
                </Button>
              </div>
            </div>

            {/* Voice Assistant */}
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2 text-[var(--text-primary)]">
                <Volume2 className="w-5 h-5" />
                语音辅助
              </h4>
              <Button
                onClick={toggleVoice}
                variant={isVoiceEnabled ? "default" : "outline"}
                className="w-full h-12 flex items-center justify-center gap-2"
              >
                <Volume2 className="w-5 h-5" />
                {isVoiceEnabled ? '语音已开启' : '开启语音助手'}
              </Button>
            </div>

            {/* Quick Reset */}
            <div className="pt-4 border-t border-[var(--mica-gray)]">
              <Button
                onClick={() => {
                  setFontSize(100);
                  setIsDarkMode(false);
                  setIsHighContrast(false);
                  setIsVoiceEnabled(false);
                  document.documentElement.style.fontSize = '100%';
                  document.documentElement.classList.remove('dark', 'high-contrast');
                  announceElement('已重置所有无障碍设置');
                }}
                variant="outline"
                className="w-full"
              >
                重置所有设置
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AccessibilityPanel;
