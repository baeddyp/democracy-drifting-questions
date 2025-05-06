// Collection of "what if" questions about democracy
export const democracyQuestions = [
  "What if everyone's vote counted equally?",
  "What if politicians were held accountable by real-time public feedback?",
  "What if voting was mandatory?",
  "What if there were no political parties?",
  "What if we selected representatives by lottery?",
  "What if you could vote on individual issues rather than representatives?",
  "What if decisions required consensus instead of majority?",
  "What if digital democracy replaced representative democracy?",
  "What if citizens could recall elected officials at any time?",
  "What if AI helped design more fair political systems?",
  "What if democracy operated on a blockchain?",
  "What if we had direct democracy for local issues and representative for national?",
  "What if elections were fully publicly funded?",
  "What if voting rights were tied to passing a political literacy test?",
  "What if we eliminated electoral districts?",
  "What if term limits were enforced for all elected positions?",
  "What if policy decisions were based on scientific consensus?",
  "What if democratic systems prioritized long-term thinking?",
  "What if democracy required engagement beyond just voting?",
  "What if the voting age were lowered to 16?",
  "What if voting power were weighted by stake in the outcome?",
  "What if we had a global democratic system?",
  "What if we designed democracy from scratch today?",
  "What if democracy included rights for future generations?",
  "What if everyone had equal access to political information?",
  "What if we had democracy in the workplace?",
  "What if politicians were paid based on performance metrics?",
  "What if democracy operated more like open-source software?",
  "What if democracy included advocacy for non-human entities?",
  "What if we separated voting on values from voting on implementation?",
];

// Returns a random selection of n questions
export const getRandomQuestions = (count: number): string[] => {
  const shuffled = [...democracyQuestions].sort(() => 0.5 - Math.random());
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
