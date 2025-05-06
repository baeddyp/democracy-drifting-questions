
import React, { useState, useEffect } from 'react';
import FloatingPill from '@/components/FloatingPill';
import QuestionModal from '@/components/QuestionModal';
import { getRandomQuestions, generateRandomPosition } from '@/services/questionService';
import { getAnswerForQuestion } from '@/services/answerService';

const Index = () => {
  const [questions, setQuestions] = useState<Array<{ text: string, position: { x: number, y: number }, colorVariant: number }>>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');

  useEffect(() => {
    // Get 15 random questions
    const randomQuestions = getRandomQuestions(15).map(question => ({
      text: question,
      position: generateRandomPosition(),
      colorVariant: Math.floor(Math.random() * 5) + 1 // Random number between 1-5 for color variants
    }));
    
    setQuestions(randomQuestions);
  }, []);

  const handlePillClick = (question: string) => {
    setSelectedQuestion(question);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

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
            onClick={handlePillClick}
            isPaused={modalOpen}
            isSelected={question.text === selectedQuestion}
            colorVariant={question.colorVariant}
          />
        ))}
        
        <QuestionModal 
          isOpen={modalOpen}
          onClose={handleModalClose}
          question={selectedQuestion}
          answer={getAnswerForQuestion(selectedQuestion)}
        />
      </div>
    </div>
  );
};

export default Index;
