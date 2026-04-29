"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavTabs() {
  const pathname = usePathname();
  const isMap = pathname === "/map" || pathname === "/";
  const isPrompts = pathname === "/prompts";

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex gap-8">
        <Link
          href="/map"
          className={`py-4 px-2 border-b-2 font-semibold transition-colors ${
            isMap
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          🗺️ Map
        </Link>
        <Link
          href="/prompts"
          className={`py-4 px-2 border-b-2 font-semibold transition-colors ${
            isPrompts
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          🎴 Prompts
        </Link>
      </div>
    </div>
  );
}
