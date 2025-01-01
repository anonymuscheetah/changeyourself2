import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center space-y-10"
        >
          {/* Icon */}
          <Brain className="w-24 h-24 mx-auto text-indigo-400 drop-shadow-lg" />
          
          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Welcome to ChangeYourself.ai
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Your AI-powered companion for personal and professional growth. Embark on a journey of self-discovery and transformation today!
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Sign In Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signin')}
              className="p-6 bg-black/50 hover:bg-indigo-500/30 rounded-xl shadow-lg text-left space-y-4 transition-all duration-300 group"
            >
              <h2 className="text-2xl font-semibold flex items-center text-indigo-400 group-hover:text-indigo-300">
                Sign In
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </h2>
              <p className="text-gray-400 group-hover:text-gray-300">
                Already have an account? Sign in to continue your journey.
              </p>
            </motion.button>

            {/* Create Account Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signup')}
              className="p-6 bg-black/50 hover:bg-indigo-500/30 rounded-xl shadow-lg text-left space-y-4 transition-all duration-300 group"
            >
              <h2 className="text-2xl font-semibold flex items-center text-indigo-400 group-hover:text-indigo-300">
                Create Account
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </h2>
              <p className="text-gray-400 group-hover:text-gray-300">
                New here? Start your transformation journey today.
              </p>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
