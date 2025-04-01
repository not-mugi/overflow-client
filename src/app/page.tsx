import Manifesto from "@/components/ui/manifesto";
import PreferencesTags from "@/components/ui/perference-tags";
import {
  Clock,
  MessageCircleQuestion,
  TrendingUp,
  AppWindowMac,
} from "lucide-react";
import mn from "myanmar-numeral";

interface UserPreferences {
  topics: string[];
  sortBy: "newest" | "trending" | "mostVoted";
}
export interface QuestionCardProps {
  title: string;
  tags: string[];
  votes: number;
  views: number;
  answers: number;
}
export interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: UserPreferences;
  onSave: (preferences: UserPreferences) => void;
}

function QuestionCard({
  title,
  tags,
  votes,
  views,
  answers,
}: QuestionCardProps) {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-200">
      <div className="flex flex-col items-center gap-2 w-45">
        <div className="flex flex-col items-end text-gray-600 w-full">
          <span className="font-medium">{mn(votes)} တုံ့ပြန်ချက်များ</span>
        </div>
        <div className="flex flex-col items-end text-gray-600 w-full">
          <span className="font-medium">{mn(answers)} အဖြေများ</span>
        </div>
        <div className="flex flex-col items-end text-gray-600 w-full">
          <span className="font-medium">{mn(views)} ကြည့်ရှုမှုများ</span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-2">
          <a href="#">{title}</a>
        </h3>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const user = "Zwe Sithu";
  const priority: string = "trending";
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl">
                ပြန်လည်ကြိုဆိုပါတယ်!{" "}
                <span className="font-light text-mugi-red-500 text-3xl">
                  {user}
                </span>
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <button
                className={`px-3 py-1.5 rounded-md ${
                  priority === "newest"
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Clock className="w-4 h-4 inline mr-1" />
                မေးခွန်းသစ်များ
              </button>
              <button
                className={`px-3 py-1.5 rounded-md ${
                  priority === "trending"
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <MessageCircleQuestion className="w-4 h-4 inline mr-1" />
                အဖြေမရှိသေးသော
              </button>
              <button
                className={`px-3 py-1.5 rounded-md ${
                  priority === "mostVoted"
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <TrendingUp className="w-4 h-4 inline mr-1" />
                တုံ့ပြန်ချက်အများဆုံး
              </button>
            </div>
            <button className="flex items-center px-4 py-2 font-black bg-mugi-300 text-mugi-red-500 rounded-md hover:bg-mugi-400 cursor-pointer">
              <AppWindowMac className="h-5 w-5 mr-2" />
              မေးခွန်းမေးမည်
            </button>
          </div>
          <div className="bg-white rounded-lg shadow">
            <QuestionCard
              title="How to implement authentication with Next.js and Supabase?"
              tags={["next.js", "authentication", "supabase"]}
              votes={42}
              views={1234}
              answers={5}
            />
            <QuestionCard
              title="Best practices for React state management in 2024"
              tags={["react", "javascript", "state-management"]}
              votes={38}
              views={982}
              answers={7}
            />
            <QuestionCard
              title="Understanding TypeScript generics with practical examples"
              tags={["typescript", "generics", "javascript"]}
              votes={56}
              views={2341}
              answers={12}
            />
          </div>
        </div>
        <div>
          <Manifesto />
          <PreferencesTags />
        </div>
      </div>
    </div>
  );
}
