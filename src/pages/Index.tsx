
import React, { useState, useEffect } from 'react';
import FloatingPill from '@/components/FloatingPill';
import { getRandomQuestions, generateRandomPosition } from '@/services/questionService';

const Index = () => {
  const [questions, setQuestions] = useState<Array<{ text: string, position: { x: number, y: number } }>>([]);

  useEffect(() => {
    // Get 15 random questions
    const randomQuestions = getRandomQuestions(15).map(question => ({
      text: question,
      position: generateRandomPosition()
    }));
    
    setQuestions(randomQuestions);
  }, []);

  return (
    <div className="bg-[#1A1F2C] w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 16:9 container that maintains aspect ratio */}
      <div 
        className="relative w-full max-w-7xl mx-auto"
        style={{ 
          aspectRatio: '16/9',
          maxHeight: '100vh'
        }}
      >
        {questions.map((question, index) => (
          <FloatingPill 
            key={index}
            question={question.text}
            initialPosition={question.position}
            className={`text-sm sm:text-base lg:text-lg ${index % 3 === 0 ? 'font-semibold' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
