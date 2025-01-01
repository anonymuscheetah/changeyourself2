import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error('Please add your Gemini API key to the .env file');
}

const genAI = new GoogleGenerativeAI(API_KEY || '');

export async function generateResponse(prompt: string) {
  if (!API_KEY) {
    throw new Error('Please add your Gemini API key to the .env file');
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const enhancedPrompt = `As an AI career and business advisor, provide a detailed analysis for: ${prompt}

Please structure your response in the following format:
1. Main insight or core concept
2. Key strategies or steps (3-4 points)
3. Implementation considerations
4. Success metrics or outcomes
5. Potential challenges and solutions

Keep each point clear and actionable. Focus on practical, real-world applications.`;
    
    const result = await model.generateContent(enhancedPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw new Error('Failed to generate response. Please try again.');
  }
}