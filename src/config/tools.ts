import { Tool } from '../types';
import { GraduationCap, Compass, LineChart, Lightbulb, Building2, Search } from 'lucide-react';

export const tools: Tool[] = [
  {
    id: 'education',
    title: 'Educational Navigator',
    description: 'Plan your educational journey with AI-powered guidance',
    icon: GraduationCap,
    path: '/tools/education'
  },
  {
    id: 'career',
    title: 'Career Pathfinder',
    description: 'Discover and navigate your ideal career path',
    icon: Compass,
    path: '/tools/career'
  },
  {
    id: 'growth',
    title: 'Growth Strategist',
    description: 'Create personalized growth strategies',
    icon: LineChart,
    path: '/tools/growth'
  },
  {
    id: 'business-ideas',
    title: 'Business Ideator',
    description: 'Generate innovative business ideas',
    icon: Lightbulb,
    path: '/tools/business-ideas'
  },
  {
    id: 'business-strategy',
    title: 'Strategy Builder',
    description: 'Develop comprehensive business strategies',
    icon: Building2,
    path: '/tools/business-strategy'
  },
  {
    id: 'market-research',
    title: 'Market Research',
    description: 'AI-powered business research and analysis',
    icon: Search,
    path: '/tools/market-research'
  }
];