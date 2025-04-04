import mn from "myanmar-numeral";

import { getBurmeseMonth } from "@/lib/date";
import { QuestionHistory } from "@/lib/types";

interface BurmeseHistorySpanProps  {
    history : QuestionHistory
}

export default function BurmeseHistorySpan({ history } : BurmeseHistorySpanProps) {
  const currentDate = new Date();
  const historyDate = new Date(history.date);

  let date = "";
  if (
    currentDate.getDate() === historyDate.getDate() &&
    currentDate.getMonth() === historyDate.getMonth() &&
    currentDate.getFullYear() === historyDate.getFullYear()
  ) {
    date = "ယနေ့";
  } else if (currentDate.getFullYear() === historyDate.getFullYear()) {
    const month = getBurmeseMonth(historyDate.getMonth());
    date = `${month} လ ${mn(historyDate.getDate())} ရက်နေ့`;
  } else {
    const month = getBurmeseMonth(historyDate.getMonth());
    date = `${mn(historyDate.getFullYear())}ခုနှစ် ${month} လ ${mn(
      historyDate.getDate()
    )} ရက်နေ့`;
  }

  const time = history.time.split(":");

  const status = {
    answered: "ဖြေခဲ့သည်။",
    modified: "ပြုပြင်ခဲ့သည်။",
    asked: "မေးခဲ့သည်။",
  };

  return (
    <span className="font-mm">
      <span className="text-mugi-red-500 font-bold">{history.user}</span> မှ{" "}
      {date} {mn(time[0])} : {mn(time[1])} တွင်{" "}
      {status[history.status as keyof typeof status]}
    </span>
  );
}