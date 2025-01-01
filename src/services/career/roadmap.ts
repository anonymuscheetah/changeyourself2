```typescript
import { generateResponse } from '../gemini';

export async function getRoadmapData(career: string) {
  try {
    const prompt = `Create a detailed career roadmap for becoming a ${career}. 
    Include education requirements, certifications, experience milestones, and timeline. 
    Format as JSON with 'milestones' array containing objects with 'title', 'description', 
    and 'duration' properties.`;

    const response = await generateResponse(prompt);
    return JSON.parse(response);
  } catch (error) {
    console.error('Error generating roadmap:', error);
    throw error;
  }
}
```