import { AppWindowMac } from "lucide-react";

import Manifesto from "@/components/ui/manifesto";
import PreferencesTags from "@/components/ui/preference-tags";
import HomeQuestionCard from "@/components/ui/home-question-card";
import WeeklyContribution from "@/components/ui/weekly-contribution";
import { HomeQuestion } from "@/lib/types";
interface UserPreferences {
  topics: string[];
  sortBy: "newest" | "trending" | "mostVoted";
}

export interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: UserPreferences;
  onSave: (preferences: UserPreferences) => void;
}

const SAMPLE_HOME_CONTENT: HomeQuestion[] = [
  {
    id: "feed-1",
    title: "How to implement authentication with Next.js and Supabase?",
    tags: ["next.js", "authentication", "supabase"],
    votes: 42,
    views: 1234,
    answers: 5,
    history: {
      user: "မောင်မောင်",
      status: "answered",
      date: "2025-04-02",
      time: "15:05",
    },
  },
  {
    id: "feed-2",
    title: "Best practices for React state management in 2024?",
    tags: ["typescript", "generics", "javascript"],
    votes: 38,
    views: 982,
    answers: 7,
    history: {
      user: "ကျော်ကျော်",
      status: "modified",
      date: "2025-04-01",
      time: "22:30",
    },
  },
  {
    id: "feed-3",
    title: "How to implement authentication with Next.js and Supabase?",
    tags: ["next.js", "authentication", "supabase"],
    votes: 42,
    views: 33,
    answers: 5,
    history: {
      user: "မောင်မောင်",
      status: "answered",
      date: "2025-04-02",
      time: "15:05",
    },
  },
  {
    id: "feed-4",
    title:
      "Understanding TypeScript generics with practical examples for some reason this shit has been long for more than normal. It wont end unless you stop typing. But i will make it as long as possible just to demonstrate line clamp attribute.?",
    tags: ["typescript", "generics", "javascript"],
    votes: 0,
    views: 4,
    answers: 2,
    history: {
      user: "စည်သူ",
      status: "asked",
      date: "2025-04-01",
      time: "13:24",
    },
  },
];

const TOP_CONTRIBUTORS = [
  {
    username: "ကိုကို",
    totalRepsEarned: "154",
  },
  {
    username: "ကျော်ကျော်",
    totalRepsEarned: "102",
  },
  {
    username: "Kaung Si Thu",
    totalRepsEarned: "94",
  },
  {
    username: "Maung Maung",
    totalRepsEarned: "89",
  },
  {
    username: "KaungKaung",
    totalRepsEarned: "70",
  },
  {
    username: "ZawZaw",
    totalRepsEarned: "69",
  },
  {
    username: "MinZaw",
    totalRepsEarned: "66",
  },
  {
    username: "Bo Bo",
    totalRepsEarned: "57",
  },
  {
    username: "ET",
    totalRepsEarned: "54",
  },
  {
    username: "cloudff7",
    totalRepsEarned: "32",
  },
];

export default function HomePage() {
  const user = "Zwe Sithu";
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex md:gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl">
                <span className="font-mm">ပြန်လည်ကြိုဆိုပါတယ်!</span>{" "}
                <span className="text-mugi-red-500">{user}</span>
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="text-gray-500">
              မူလစာမျက်နှာကို ကြည့်ရူခဲ့သော မှတ်တမ်းများနှင့်
              စောင့်ကြည့်ထားသောတဂ်များ အလိုက်ဖော်ပြထားပါသည်။
            </span>
            <button className="flex items-center px-4 py-2 font-mm font-black bg-mugi-300 text-mugi-red-500 rounded-md hover:bg-mugi-400 cursor-pointer">
              <AppWindowMac className="h-5 w-5 mr-2" />
              မေးခွန်းမေးမည်
            </button>
          </div>
          <div className="bg-white rounded-lg shadow">
            {SAMPLE_HOME_CONTENT.map((content) => (
              <HomeQuestionCard key={content.id} question={content} />
            ))}
          </div>
        </div>
        <div>
          <Manifesto />
          <PreferencesTags />
          <WeeklyContribution topContributors={TOP_CONTRIBUTORS} />
        </div>
      </div>
    </div>
  );
}
