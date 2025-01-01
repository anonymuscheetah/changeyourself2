```tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Questionnaire } from '../components/career/Questionnaire';
import { CareerResults } from '../components/career/CareerResults';
import { CareerRoadmap } from '../components/career/CareerRoadmap';
import { ProgressTracker } from '../components/career/ProgressTracker';
import { Brain } from 'lucide-react';

export function CareerCounseling() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  const handleQuestionnaireComplete = (responses: Record<string, string>) => {
    setAnswers(responses);
    setStep(2);
  };

  const handleCareerSelect = (career: string) => {
    setSelectedCareer(career);
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Brain className="w-16 h-16 mx-auto text-indigo-500 mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            AI Career Counseling
          </h1>
          <p className="text-gray-400 text-lg">
            Discover your ideal career path through our AI-powered assessment
          </p>
        </motion.div>

        <ProgressTracker currentStep={step} />

        <div className="mt-8">
          {step === 1 && (
            <Questionnaire onComplete={handleQuestionnaireComplete} />
          )}
          {step === 2 && (
            <CareerResults
              answers={answers}
              onCareerSelect={handleCareerSelect}
            />
          )}
          {step === 3 && selectedCareer && (
            <CareerRoadmap career={selectedCareer} />
          )}
        </div>
      </div>
    </div>
  );
}
```