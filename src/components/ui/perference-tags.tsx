"use client";

import { useState } from "react";

import Link from "next/link";

import { Settings } from "lucide-react";
import { Preferences, Topic } from "@/lib/types";

const topics: Topic[] = [
  { id: "frontend", name: "frontend" },
  { id: "backend", name: "backend" },
  { id: "database", name: "database" },
  {
    id: "mobile",
    name: "mobile development",
  },
  { id: "web", name: "web development" },
];

interface EditPreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  topics: Topic[];
  preferences: Preferences;
  onSave: (preferences: Preferences) => void;
}

export const EditPreferences = ({
  isOpen,
  onSave,
  onClose,
  topics,
  preferences,
}: EditPreferencesProps) => {
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>(
    preferences.topics
  );

  const handleSave = () => {
    onSave({ ...preferences, topics: selectedTopics });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px]">
        <h2 className="text-xl font-bold mb-4">Customize Your Feed</h2>
        <div className="mb-6">
          <h3 className="font-medium mb-3">Select Your Interests</h3>
          <div className="grid grid-cols-2 gap-3">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopics((prev) =>
                    prev.map((t) => t.id).includes(topic.id)
                      ? prev.filter((t) => t.id !== topic.id)
                      : [...prev, topic]
                  );
                }}
                className={`flex items-center px-4 py-2 rounded-md border ${
                  selectedTopics.map((t) => t.id).includes(topic.id)
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span className="ml-2">{topic.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default function PreferencesTags() {
  const [preferences, setPreferences] = useState<Preferences>({
    topics: [
      { id: "frontend", name: "frontend" },
      { id: "backend", name: "backend" },
      { id: "database", name: "database" },
    ],
  });
  const [isPreferencesOpen, setIsPreferencesOpen] = useState<boolean>(false);

  return (
    <>
      <div className="hidden lg:block w-80">
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <div className="flex mb-3 items-center justify-between text-mugi-red-500">
            <span className="font-black">ကြည့်ရှုမည့်တဂ်များ</span>
          <button
            onClick={() => setIsPreferencesOpen(true)}
            className="p-1 cursor-pointer bg-mugi-300 rounded-md hover:bg-mugi-400"
          >
            <Settings className="h-4 w-4"/>
          </button>
          </div>
          {preferences.topics.length === 0 ? (
            <span>စောင့်ကြည့်နေသောတဂ်များမရှိသေးပါ။</span>
          ) : (
            <div className="flex flex-wrap gap-2">
              {preferences.topics.map((topic) => (
                <Link
                  key={topic.id}
                  href="#"
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
                >
                  {topic?.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <EditPreferences
        isOpen={isPreferencesOpen}
        onClose={() => setIsPreferencesOpen(false)}
        preferences={preferences}
        onSave={setPreferences}
        topics={topics}
      />
    </>
  );
}
