import Image from "next/image";

import type { Question } from "@/lib/types";
import mn from "myanmar-numeral";
import BurmeseHistorySpan from "./burmese-history-span";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({
  question: { title, body, votes, views, answers, tags, author, history },
}: QuestionCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 py-4 border-b border-gray-200 hover:bg-gray-50">
      <div className="px-4 flex md:flex-col items-center gap-2 w-full md:w-45 text-sm">
        <div className="flex md:flex-col items-center md:items-end text-gray-600 md:w-full">
          <span className="font-mm font-medium">
            {mn(votes)} တုံ့ပြန်ချက်များ
          </span>
        </div>
        <div className="flex md:flex-col items-center md:items-end text-gray-600 md:w-full">
          <span className="font-mm font-medium">{mn(answers)} အဖြေများ</span>
        </div>
        <div className="flex md:flex-col items-center md:items-end text-gray-600 md:w-full">
          <span className="font-mm font-medium">
            {mn(views)} ကြည့်ရှုမှုများ
          </span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="px-4 tracking-tight md:text-lg line-clamp-2 mb-1">
          <a href="#">{title}</a>
        </h3>
        <p className="px-4 tracking-wide text-sm line-clamp-2 mb-3">{body}</p>
        <div className="px-4 flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 cursor-pointer bg-mugi-100 text-mugi-red-500 rounded-sm text-xs hover:bg-mugi-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="px-4 text-sm flex items-center justify-between w-full">
          <div className="flex gap-2 items-center">
            <Image
              src={author.avatar}
              className="rounded-sm border-gray-300 border"
              alt={`${author.name} avatar`}
              width={18}
              height={18}
            />
            <span className="text-xs">
              {author.name}
            </span>
            <span className="text-mm">
              <span className="text-sm mb-0.5 font-bold">{mn(author.reputation)}</span>
              <span className="text-xs/6 mx-1">ပါဝင်မှု အမှတ်များ</span>
            </span>
          </div>
          <BurmeseHistorySpan history={history} />
        </div>
      </div>
    </div>
  );
}
