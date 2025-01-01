```tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { generateCareerSuggestions } from '../../services/career/suggestions';
import { CareerCard } from './CareerCard';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface CareerResultsProps {
  answers: Record<string, string>;
  onCareerSelect: (career: string) => void;
}

export function CareerResults({ answers, onCareerSelect }: CareerResultsProps) {
  const [careers, setCareers] = useState<Array<{ title: string; confidence: number }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const suggestions = await generateCareerSuggestions(answers);
        setCareers(suggestions);
      } catch (error) {
        console.error('Error generating suggestions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [answers]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-8">
        Your Career Matches
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careers.map((career, index) => (
          <motion.div
            key={career.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CareerCard
              career={career}
              onClick={() => onCareerSelect(career.title)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```