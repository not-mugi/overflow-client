import Image from "next/image";
import { ArrowUp, ArrowDown, MessageSquare, Eye } from "lucide-react";

import type { Question } from "@/lib/types";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="flex gap-4 p-4 border-b hover:bg-gray-50">
      <div className="flex flex-col items-center gap-2 min-w-[80px]">
        <div className="flex flex-col items-center text-gray-600">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ArrowUp className="h-6 w-6" />
          </button>
          <span className="font-medium">{question.votes}</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
        <div className="flex items-center text-green-600">
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>{question.answers}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Eye className="h-4 w-4 mr-1" />
          <span>{question.views}</span>
        </div>
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-medium text-blue-600 hover:text-blue-800">
          <a href={`/questions/${question.id}`}>{question.title}</a>
        </h2>
        <p className="mt-2 text-gray-600 line-clamp-2">{question.body}</p>
        <div className="mt-4 flex items-center gap-2">
          {question.tags.map((tag) => (
            <a
              key={tag}
              href={`/tags/${tag}`}
              className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200"
            >
              {tag}
            </a>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-end">
          <div className="flex items-center">
            <Image
              src={question.author.avatar}
              alt={question.author.name}
              className="h-8 w-8 rounded-full"
            />
            <div className="ml-2">
              <a
                href={`/users/${question.author.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {question.author.name}
              </a>
              <p className="text-sm text-gray-500">
                asked {question.createdAt} • {question.author.reputation}{" "}
                reputation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
