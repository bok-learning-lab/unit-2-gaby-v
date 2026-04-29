"use client";

import { useState } from "react";
import { PromptCard } from "@/components/prompt-card";
import { getRandomPrompt, Prompt } from "@/lib/prompts";

export default function PromptsPage() {
  const [level, setLevel] = useState<1 | 2 | 3>(1);
  const [prompt, setPrompt] = useState<Prompt>(getRandomPrompt(1));

  const handleShuffle = () => {
    setPrompt(getRandomPrompt(level));
  };

  const handleLevelChange = (newLevel: 1 | 2 | 3) => {
    setLevel(newLevel);
    setPrompt(getRandomPrompt(newLevel));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Connection Prompts
          </h1>
          <p className="text-gray-600">
            Start conversations and get to know your classmates
          </p>
        </div>

        {/* Level Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {([1, 2, 3] as const).map((lvl) => {
            const levelNames = {
              1: "Icebreaker",
              2: "Getting Real",
              3: "Deep Cut",
            };

            const isActive = level === lvl;

            return (
              <button
                key={lvl}
                onClick={() => handleLevelChange(lvl)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  isActive
                    ? "bg-blue-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {levelNames[lvl]}
              </button>
            );
          })}
        </div>

        {/* Prompt Card */}
        <div className="flex justify-center">
          <PromptCard prompt={prompt} onShuffle={handleShuffle} />
        </div>

        {/* Description */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow">
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Level {level}: {["Icebreaker", "Getting Real", "Deep Cut"][level - 1]}
              </h3>
              <p>
                {level === 1 &&
                  "Light, easy, low-stakes questions perfect for a first conversation."}
                {level === 2 &&
                  "Reflective, a bit more personal. Good once you've broken the ice."}
                {level === 3 &&
                  "Meaningful, honest conversations for when you want to truly know someone."}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">How to Use</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Choose a level to start</li>
                <li>Tap the card to reveal the question</li>
                <li>Click "Next Card" to shuffle to a new prompt</li>
                <li>Share with a friend using the same level</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
