
// This service provides mock answers to questions
// In a real application, these could come from an API or database

const questionAnswers: Record<string, string> = {
  "What if AI could translate any language in real-time?": 
    "Real-time AI translation could break down language barriers globally, enabling seamless cross-cultural communication. This would revolutionize international business, tourism, diplomacy, and potentially help preserve endangered languages.",
  
  "What if AI could predict natural disasters with 100% accuracy?": 
    "Perfect disaster prediction would save countless lives and allow for targeted evacuations rather than mass ones. It could transform emergency management, insurance, and how we build cities in disaster-prone areas.",
  
  "What if AI managed our cities' traffic systems?": 
    "AI traffic management could reduce congestion by up to 30%, lower emissions, and save billions in lost productivity. Dynamic routing would become normal, with traffic lights and flow patterns adjusting in real-time to demand.",
};

export const getAnswerForQuestion = (question: string): string => {
  return questionAnswers[question] || 
    "This question invites us to imagine how artificial intelligence could transform our world. What possibilities and challenges might emerge?";
};
