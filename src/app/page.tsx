import { PlusCircle } from "lucide-react";

import QuestionCard from "@/components/ui/question-card";
import Link from "next/link";

const SAMPLE_QUESTIONS = [
  {
    id: 1,
    title: "How to center a div with Tailwind CSS?",
    body: "I'm trying to center a div both horizontally and vertically using Tailwind CSS. I've tried using flex classes but can't seem to get it right...",
    votes: 42,
    answers: 5,
    views: 1234,
    tags: ["tailwindcss", "css", "html", "flexbox"],
    author: {
      id: 1,
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      reputation: 15243,
    },
    createdAt: "2 hours ago",
  },
  {
    id: 2,
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
    createdAt: "5 hours ago",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Top Questions</h1>
          <p className="text-gray-600 mt-1">
            Get answers from developers around the world
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <PlusCircle className="h-5 w-5 mr-2" />
          Ask Question
        </button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow">
            {SAMPLE_QUESTIONS.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>

        <div className="hidden lg:block w-80">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Top Network Posts</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Why is processing a sorted array faster than processing an
                  unsorted array?
                </a>
                <p className="text-sm text-gray-600">142k views</p>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  What is the difference between &quot;git pull&quot; and &quot;git fetch&quot;?
                </Link>
                <p className="text-sm text-gray-600">98k views</p>
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-lg mb-2">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="#"
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
              >
                javascript
              </Link>
              <Link
                href="#"
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
              >
                python
              </Link>
              <Link
                href="#"
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
              >
                react
              </Link>
              <Link
                href="#"
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
              >
                node.js
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
