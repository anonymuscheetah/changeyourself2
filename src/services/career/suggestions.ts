```typescript
import { generateResponse } from '../gemini';

export async function generateCareerSuggestions(answers: Record<string, string>) {
  try {
    const prompt = `Based on these questionnaire answers: ${JSON.stringify(answers)}, 
    suggest 4-6 career paths with confidence scores. Format the response as JSON array with 
    objects containing 'title' and 'confidence' (0-100) properties.`;

    const response = await generateResponse(prompt);
    return JSON.parse(response);
  } catch (error) {
    console.error('Error generating career suggestions:', error);
    throw error;
  }
}
```