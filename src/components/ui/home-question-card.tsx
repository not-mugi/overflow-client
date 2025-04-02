import mn from "myanmar-numeral";

import getBurmeseMonth from "@/lib/date";
import { ModifiedHistory } from "@/lib/types";

interface QuestionCardProps {
  title: string;
  tags: string[];
  votes: number;
  views: number;
  answers: number;
  lastModified: ModifiedHistory;
}

export default function HomeQuestionCard({
  title,
  tags,
  votes,
  views,
  answers,
  lastModified,
}: QuestionCardProps) {
  const currentDate = new Date();
  const modifiedDate = new Date(lastModified.date);

  let date = "";
  if (
    currentDate.getDate() === modifiedDate.getDate() &&
    currentDate.getMonth() === modifiedDate.getMonth() &&
    currentDate.getFullYear() === modifiedDate.getFullYear()
  ) {
    date = "ယနေ့";
  } else if (currentDate.getFullYear() === modifiedDate.getFullYear()) {
    const month = getBurmeseMonth(modifiedDate.getMonth());
    date = `${month} လ ${mn(modifiedDate.getDate())} ရက်နေ့`;
  } else {
    const month = getBurmeseMonth(modifiedDate.getMonth());
    date = `${mn(modifiedDate.getFullYear())}ခုနှစ် ${month} လ ${mn(
      modifiedDate.getDate()
    )} ရက်နေ့`;
  }

  const time = lastModified.time.split(":");

  const status = {
    answered: "ဖြေခဲ့သည်။",
    modified: "ပြုပြင်ခဲ့သည်။",
    asked: "မေးခဲ့သည်။",
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 py-4 border-b border-gray-200">
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
          <span>
            <span className="text-mugi-red-500 font-bold">
              {lastModified.user}
            </span>{" "}
            မှ {date} {mn(time[0])} : {mn(time[1])} တွင်{" "}
            {status[lastModified.status as keyof typeof status]}
          </span>
        </div>
      </div>
    </div>
  );
}