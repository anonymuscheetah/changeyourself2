```tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getRoadmapData } from '../../services/career/roadmap';
import { Milestone } from './Milestone';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface CareerRoadmapProps {
  career: string;
}

export function CareerRoadmap({ career }: CareerRoadmapProps) {
  const [roadmap, setRoadmap] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const data = await getRoadmapData(career);
        setRoadmap(data);
      } catch (error) {
        console.error('Error fetching roadmap:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, [career]);

  useEffect(() => {
    if (roadmap && currentStep < roadmap.milestones.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, roadmap]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center">
        Your Path to Becoming a {career}
      </h2>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
        
        {roadmap.milestones.map((milestone: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={currentStep > index ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.5 }}
          >
            <Milestone
              title={milestone.title}
              description={milestone.description}
              duration={milestone.duration}
              active={currentStep > index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```