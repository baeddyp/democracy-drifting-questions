
// Collection of "what if" questions about AI
export const aiQuestions = [
  "What if AI could translate any language in real-time?",
  "What if AI could predict natural disasters with 100% accuracy?",
  "What if AI managed our cities' traffic systems?",
  "What if AI tutored every student individually?",
  "What if AI could diagnose any disease from a photo?",
  "What if AI wrote most of our entertainment?",
  "What if AI could simulate alternate histories?",
  "What if AI helped design more sustainable buildings?",
  "What if AI managed global resource distribution?",
  "What if AI could read and interpret our dreams?",
  "What if AI could enhance human creativity?",
  "What if AI developed consciousness?",
  "What if AI helped us explore deep space?",
  "What if AI could predict market trends perfectly?",
  "What if AI could perfectly imitate anyone's voice and style?",
  "What if AI helped draft all new legislation?",
  "What if AI could translate animal communication?",
  "What if AI could simulate any scientific experiment?",
  "What if AI could extend human lifespan?",
  "What if AI created art indistinguishable from human-made?",
  "What if AI could reconstruct lost historical knowledge?",
  "What if AI helped design our evolution?",
  "What if AI mediated all human conflicts?",
  "What if AI could predict individual life choices?",
  "What if AI preserved all human knowledge indefinitely?",
  "What if AI could model climate solutions perfectly?",
  "What if AI managed all our personal finances?",
  "What if AI learned directly from our brain activity?",
  "What if AI could optimize our sleep perfectly?",
  "What if AI customized our nutrition individually?",
];

// Returns a random selection of n questions
export const getRandomQuestions = (count: number): string[] => {
  const shuffled = [...aiQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Generates random positions that aren't too close to edges
export const generateRandomPosition = () => {
  // Keep pills away from the extreme edges (10%-90% of screen)
  return {
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
  };
};
