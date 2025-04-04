"use client";

import { useState } from "react";

import Link from "next/link";

import { Search, Settings } from "lucide-react";
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
        <h2 className="text-xl mb-4 font-mm font-bold text-gray-700">
          မူလစာမျက်နှာကိုပြောင်းလဲနိုင်ပါသည်
        </h2>
        <div className="mb-6">
          <h3 className="font-mm mb-3 underline underline-offset-10 text-gray-600">
            စောင့်ကြည့်ထားသောတဂ်များ
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
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
                // px-2 py-1 bg-mugi-100 text-mugi-red-500 rounded-sm text-xs hover:bg-mugi-200
                className={`px-2 py-1 rounded-sm text-xs border ${
                  selectedTopics.map((t) => t.id).includes(topic.id)
                    ? "bg-mugi-100 border-mugi-100/50 text-mugi-red-500 hover:bg-mugi-200"
                    : "border-gray-100/50 bg-gray-100 hover:bg-mugi-100 hover:text-mugi-red-500"
                }`}
              >
                {topic.name}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="ကြည့်လိုသောတဂ်ကို နာမည်ရိုက်၍ ရှာပါ..."
                className="pl-10 pr-4 text-xs/2 py-1.5 w-full border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>
            <button
            className="flex items-center px-4 py-1.5 text-xs font-mm rounded-sm cursor-pointer border-gray-100/50 bg-gray-100 hover:bg-mugi-100 hover:text-mugi-red-500"
          >
            ကြည့်မည်။
          </button>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="flex items-center px-4 py-2 font-mm font-black  text-gray-500 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            ပိတ်မည်။
          </button>
          <button
            onClick={handleSave}
            className="flex items-center px-4 py-2 font-mm font-black bg-mugi-300 text-mugi-red-500 rounded-md hover:bg-mugi-400 cursor-pointer"
          >
            ပြင်ဆင်မည်။
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
        <div className="bg-white border-gray-500/20 border rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="font-mm">မူလစာမျက်နှာ ဆက်တင်များ</span>
            <button
              onClick={() => setIsPreferencesOpen(true)}
              className="p-1 cursor-pointer bg-mugi-300 rounded-md hover:bg-mugi-400"
            >
              <Settings className="h-4 w-4" />
            </button>
          </div>
          <span className="w-full border-b h-1 border-gray-500/30 block my-1 p-0 mb-3"></span>
          {preferences.topics.length === 0 ? (
            <span className="font-mm text-sm">
              <p className="mb-1">စောင့်ကြည့်နေသောတဂ်များမရှိသေးပါ။</p>
              <p>
                စောင့်ကြည့်နေသောတဂ်များအလိုက်
                မူလစာမျက်နှာကိုပြောင်းလဲနိုင်ပါသည်။
              </p>
            </span>
          ) : (
            <div>
              <div className="mb-2 flex flex-wrap gap-2">
                {preferences.topics.map((topic) => (
                  <Link
                    key={topic.id}
                    href="#"
                    className="px-2 py-1 bg-mugi-100 text-mugi-red-500 rounded-sm text-xs hover:bg-mugi-200"
                  >
                    {topic?.name}
                  </Link>
                ))}
              </div>
              <span className="font-mm text-sm">
                စောင့်ကြည့်နေသောတဂ်များအလိုက်
                မူလစာမျက်နှာကိုပြောင်းလဲနိုင်ပါသည်။
              </span>
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
