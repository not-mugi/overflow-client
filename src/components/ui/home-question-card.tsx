import mn from "myanmar-numeral";

import { HomeQuestion } from "@/lib/types";
import BurmeseHistorySpan from "./burmese-history-span";

interface QuestionCardProps {
  question: HomeQuestion;
}

export default function HomeQuestionCard({
  question: { title, votes, views, answers, tags, history },
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
        <h3 className="px-4 tracking-tight md:text-lg mb-2 line-clamp-2">
          <a href="#">{title}</a>
        </h3>
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
        <div className="font-mm px-4 text-sm flex items-center justify-end w-full">
          <BurmeseHistorySpan history={history} />
        </div>
      </div>
    </div>
  );
}
