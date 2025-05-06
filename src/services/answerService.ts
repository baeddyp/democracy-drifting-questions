
// This service provides mock answers to questions
// In a real application, these could come from an API or database

const questionAnswers: Record<string, string> = {
  "What if everyone's vote counted equally?": 
    "This concept, often called 'one person, one vote,' challenges weighted voting systems. It would fundamentally reshape power dynamics in many democracies, potentially giving more voice to currently underrepresented populations.",
  
  "What if politicians were held accountable by real-time public feedback?":
    "Real-time accountability could create more responsive governance but might also lead to short-term decision making. It raises questions about the balance between responsiveness and thoughtful policy development.",
  
  "What if voting was mandatory?":
    "Mandatory voting, as implemented in countries like Australia, ensures higher participation rates but raises questions about freedom of choice. It could potentially reduce polarization by including more moderate voters.",
};

export const getAnswerForQuestion = (question: string): string => {
  return questionAnswers[question] || 
    "This question invites us to reimagine how democratic systems could function differently. What possibilities do you see?";
};
