import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { generateResponse } from '../../services/gemini';
import { GlassCard } from './GlassCard';
import { ErrorMessage } from './ErrorMessage';
import { LoadingSpinner } from './LoadingSpinner';
import ReactMarkdown from 'react-markdown';

interface AIChatProps {
  onResponse?: (text: string) => void;
}

export function AIChat({ onResponse }: AIChatProps) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const result = await generateResponse(input);
      setResponse(result);
      onResponse?.(result);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <GlassCard className="w-full max-w-3xl mx-auto">
      <div className="p-4 md:p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a detailed question about your career, business, or personal growth..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 pr-12 min-h-[100px] resize-y"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-2 bottom-2 p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
        
        <div className="space-y-4">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {response && (
            <div className="p-4 bg-white/5 rounded-lg prose prose-invert max-w-none">
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}