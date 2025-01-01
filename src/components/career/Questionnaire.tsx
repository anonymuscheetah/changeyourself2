```tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { questions } from '../../data/careerQuestions';

interface QuestionnaireProps {
  onComplete: (answers: Record<string, string>) => void;
}

export function Questionnaire({ onComplete }: QuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const question = questions[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10"
    >
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Question {currentQuestion + 1} of {questions.length}
        </h3>
        <p className="text-gray-300">{question.text}</p>
      </div>

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={answers[currentQuestion] === option ? 'secondary' : 'ghost'}
            className="w-full text-left justify-start p-4"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="flex items-center"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <div className="text-sm text-gray-400">
          {Math.round(((currentQuestion + 1) / questions.length) * 100)}% complete
        </div>
      </div>
    </motion.div>
  );
}
```