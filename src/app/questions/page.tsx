import { AppWindowMac, Play } from "lucide-react";

import mn from "myanmar-numeral";

import PopularTags from "@/components/ui/popular-tags";
import QuestionCard from "@/components/ui/question-card";
import PopularContents from "@/components/ui/popular-contents";

import { PopularContent, PopularTag } from "@/lib/types";

const SAMPLE_QUESTIONS = [
  {
    id: "q-1",
    title: "How to center a div with Tailwind CSS?",
    body: "I'm trying to center a div both horizontally and vertically using Tailwind CSS. I've tried using flex classes but can't seem to get it right...",
    votes: 42,
    answers: 5,
    views: 1234,
    tags: ["tailwindcss", "css", "html", "flexbox"],
    author: {
      id: 1,
      name: "ကောင်းကောင်း",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      reputation: 15243,
    },
    hasAcceptedAnswer : false,
    history: {
      user: "ကျော်ကျော်",
      status: "modified",
      date: "2025-04-01",
      time: "22:30",
    },
  },
  {
    id: "q-2",
    title: "Understanding React useEffect cleanup function",
    body: "I'm having trouble understanding when and why to use the cleanup function in useEffect. Can someone explain with practical examples?",
    votes: 28,
    answers: 3,
    views: 856,
    tags: ["reactjs", "javascript", "hooks"],
    author: {
      id: 2,
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      reputation: 8432,
    },
    hasAcceptedAnswer : true,
    history: {
      user: "မောင်မောင်",
      status: "answered",
      date: "2025-04-02",
      time: "15:05",
    },
  },
  {
    id: "feed-3",
    title: "Understanding React useEffect cleanup function",
    body: "I'm having trouble understanding when and why to use the cleanup function in useEffect. Can someone explain with practical examples?",
    votes: 28,
    answers: 3,
    views: 856,
    tags: ["reactjs", "javascript", "hooks"],
    author: {
      id: 2,
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      reputation: 8432,
    },
    hasAcceptedAnswer : true,
    history: {
      user: "စည်သူ",
      status: "asked",
      date: "2025-04-01",
      time: "13:24",
    },
  },
];

const POPULAR_CONTENTS : PopularContent[] = [
  {
    title : "next.js ဖြင့် frontend သီးသန့်ရေးနိုင်ပါသလား?",
    id : "zwr88443wdrwer3",
    content : "question"
  },
  {
    title : "golang ဖြင့် crud application folder structure",
    id : "ker4448werewrmk343k3434kl3",
    content : "question"
  },
  {
    title : "Python အခြေခံသင်ခန်းစာများနှင့် မေးခွန်းများ",
    id : "z3re34rl4",
    content : "article"
  },
  {
    title : "JavaScript: Async/Await ကို အကောင်းဆုံး အသုံးပြုနည်း",
    id : "i8rr334",
    content : "article"
  },
  {
    title : "Git: Branching Model နှင့် Merge Conflict ဖြေရှင်းနည်း",
    id : "4e6rcc43kf",
    content : "article"
  }
]

const POPULAR_TAGS : PopularTag[] = [
  {
    title : "javascript",
    id : "tk9443",
  },
  {
    title : "API ချိတ်ဆက်မှု",
    id : "tker4448werewrmk343k3434kl3",
  },
  {
    title : "backend",
    id : "tz3re34rl4",
  },
  {
    title : "frontend",
    id : "tk94z44l3e",
  },
  {
    title : "git",
    id : "tk4e6rcc43kf",
  }
]

const question_filter_tailwind_classes = {
  selected: "bg-mugi-300 text-mugi-red-500",
  normal: "text-gray-600",
};

export default function QuestionsPage() {
  const number_of_questions = "24,241,498";
  const selected_question_filter: string = "active";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8 tracking-wide">
            <div>
              <h1 className="text-3xl font-mm">လတ်တလော မေးခွန်းများ</h1>
            </div>
            <button className="flex items-center px-4 py-2 font-mm font-black bg-mugi-300 text-mugi-red-500 rounded-md hover:bg-mugi-400 cursor-pointer">
              <AppWindowMac className="h-5 w-5 mr-2" />
              မေးခွန်းမေးမည်
            </button>
          </div>
          <div className="flex items-center mb-8 tracking-wide justify-between">
            <div className="font-mm text-lg">
              <span>မေးခွန်းအ‌ရေအတွက်</span>
              <span className="tracking-widest">
                {number_of_questions
                  .split(",")
                  .map((n) => mn(n))
                  .join(",")}
              </span>
            </div>
            <ul className="font-mm flex bg-white border border-gray-500/20  rounded-md p-1 gap-2 justify-end">
              <li
                className={`cursor-pointer p-2 rounded-md ${
                  selected_question_filter === "newest"
                    ? question_filter_tailwind_classes["selected"]
                    : question_filter_tailwind_classes["normal"]
                }`}
              >
                အသစ်
              </li>
              <li
                className={`cursor-pointer p-2 rounded-md ${
                  selected_question_filter === "active"
                    ? question_filter_tailwind_classes["selected"]
                    : question_filter_tailwind_classes["normal"]
                }`}
              >
                လတ်တလော
              </li>
              <li
                className={`cursor-pointer p-2 rounded-md ${
                  selected_question_filter === "unanswered"
                    ? question_filter_tailwind_classes["selected"]
                    : question_filter_tailwind_classes["normal"]
                }`}
              >
                အဖြေမရှိသေးသော
              </li>
              <li
                className={`text-gray-600 flex items-center cursor-pointer p-2 gap-1 rounded-md hover:bg-gray-100`}
              >
                <span>အခြား</span>
                <Play
                  className={`w-3 h-3 stroke-gray-500/70 fill-gray-500/70 rotate-90`}
                />
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-gray-500/20">
            {SAMPLE_QUESTIONS.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>

        <div>
          <PopularContents popularContents={POPULAR_CONTENTS} />
          <PopularTags popularTags={POPULAR_TAGS} />
        </div>
      </div>
    </div>
  );
}
