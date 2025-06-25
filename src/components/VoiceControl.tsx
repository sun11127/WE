
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff, Volume2 } from 'lucide-react';

const VoiceControl: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // 模拟语音识别开始
      console.log('开始语音识别...');
    }
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      // 模拟语音播报
      console.log('开始语音播报...');
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Button
          onClick={toggleListening}
          className={`w-16 h-16 rounded-full flex items-center justify-center ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
              : 'bg-[#FFA726] hover:bg-[#FF9800]'
          } text-white`}
        >
          {isListening ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
        </Button>
        {isListening && (
          <Badge className="bg-red-500 text-white text-base px-3 py-1">
            正在听...
          </Badge>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={toggleSpeaking}
          className={`w-16 h-16 rounded-full flex items-center justify-center ${
            isSpeaking 
              ? 'bg-blue-500 hover:bg-blue-600 animate-pulse' 
              : 'bg-[#FFA726] hover:bg-[#FF9800]'
          } text-white`}
        >
          <Volume2 className="w-8 h-8" />
        </Button>
        {isSpeaking && (
          <Badge className="bg-blue-500 text-white text-base px-3 py-1">
            播报中...
          </Badge>
        )}
      </div>
    </div>
  );
};

export default VoiceControl;
