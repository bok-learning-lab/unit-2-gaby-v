export interface Prompt {
  id: string;
  level: 1 | 2 | 3;
  text: string;
}

export const prompts: Prompt[] = [
  // Level 1: Icebreakers (Surface)
  {
    id: "1",
    level: 1,
    text: "What's something you're really proud of that most people here don't know about?",
  },
  {
    id: "2",
    level: 1,
    text: "If you could instantly master one skill, what would it be?",
  },
  {
    id: "3",
    level: 1,
    text: "What's the most interesting place your hometown is close to?",
  },
  {
    id: "4",
    level: 1,
    text: "What's a hobby or interest that surprises people when they find out?",
  },
  {
    id: "5",
    level: 1,
    text: "What's your go-to comfort food?",
  },
  {
    id: "6",
    level: 1,
    text: "If you could have dinner with anyone, who would it be?",
  },
  {
    id: "7",
    level: 1,
    text: "What's the best advice you've ever received?",
  },
  {
    id: "8",
    level: 1,
    text: "What's something you learned in your first week of college?",
  },

  // Level 2: Getting Real (Middle)
  {
    id: "9",
    level: 2,
    text: "What's something you assumed about college that turned out to be completely wrong?",
  },
  {
    id: "10",
    level: 2,
    text: "What's a value you hold that surprises people when they find out?",
  },
  {
    id: "11",
    level: 2,
    text: "What are you most afraid of getting wrong in the next four years?",
  },
  {
    id: "12",
    level: 2,
    text: "What's something you've struggled with that you're working to change?",
  },
  {
    id: "13",
    level: 2,
    text: "When was a time you felt out of place, and how did you handle it?",
  },
  {
    id: "14",
    level: 2,
    text: "What's something about yourself that you wish more people understood?",
  },
  {
    id: "15",
    level: 2,
    text: "What's a belief you've changed your mind about?",
  },
  {
    id: "16",
    level: 2,
    text: "What's something you're working on becoming better at?",
  },

  // Level 3: Deep Cut (Vulnerable)
  {
    id: "17",
    level: 3,
    text: "What's a version of yourself you've had to let go of to be here?",
  },
  {
    id: "18",
    level: 3,
    text: "What do you wish people asked you more about?",
  },
  {
    id: "19",
    level: 3,
    text: "What's something you've never told anyone at this school?",
  },
  {
    id: "20",
    level: 3,
    text: "What's a fear that deeply affects how you move through the world?",
  },
  {
    id: "21",
    level: 3,
    text: "What would it mean to you to feel truly seen by someone?",
  },
  {
    id: "22",
    level: 3,
    text: "What's a part of your identity that you don't always feel safe expressing?",
  },
  {
    id: "23",
    level: 3,
    text: "What's something you're carrying that you wish you didn't have to?",
  },
  {
    id: "24",
    level: 3,
    text: "When have you felt most vulnerable, and what did it teach you?",
  },
];

export function getPromptsByLevel(level: 1 | 2 | 3): Prompt[] {
  return prompts.filter((p) => p.level === level);
}

export function getRandomPrompt(level: 1 | 2 | 3): Prompt {
  const levelPrompts = getPromptsByLevel(level);
  return levelPrompts[Math.floor(Math.random() * levelPrompts.length)];
}
