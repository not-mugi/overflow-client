"use client";

import { useState } from "react";

export default function QuestionTabs(){
  const [activeFilter, setActiveFilter] = useState("Newest");

  const filters = ["Newest", "Active", "Bountied", "Unanswered", "More"];

  return (
    <div className="bg-white border border-gray-300 p-2 rounded-md inline-flex space-x-2">
      {filters.map((filter, i) => (
        <button
          key={i}
          onClick={() => setActiveFilter(filter)}
          className={`px-3 py-1 text-sm rounded ${
            activeFilter === filter
              ? "bg-gray-200 font-semibold"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {filter}{" "}
          {filter === "Bountied" && (
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full ml-1">
              65
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
