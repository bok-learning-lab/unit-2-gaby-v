"use client";

import { useState } from "react";
import { Prompt } from "@/lib/prompts";

interface PromptCardProps {
  prompt: Prompt;
  onShuffle: () => void;
}

const levelLabels: Record<number, string> = {
  1: "Icebreaker",
  2: "Getting Real",
  3: "Deep Cut",
};

const levelColors: Record<number, string> = {
  1: "from-blue-500 to-blue-600",
  2: "from-purple-500 to-purple-600",
  3: "from-rose-500 to-rose-600",
};

export function PromptCard({ prompt, onShuffle }: PromptCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer perspective"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-80 h-96 transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front of card */}
          <div
            className={`absolute w-full h-full bg-gradient-to-br ${levelColors[prompt.level]} rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-white`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-4">
              {levelLabels[prompt.level]}
            </div>
            <div className="text-6xl mb-4">🎴</div>
            <div className="text-center text-sm">
              Tap to reveal the question
            </div>
          </div>

          {/* Back of card */}
          <div
            className="absolute w-full h-full bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center text-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="text-xl font-medium text-gray-800">
              {prompt.text}
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-colors"
        >
          {isFlipped ? "Hide" : "Reveal"}
        </button>
        <button
          onClick={onShuffle}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
        >
          Next Card
        </button>
      </div>
    </div>
  );
}
