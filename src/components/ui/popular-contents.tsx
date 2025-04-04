import { PopularContent } from "@/lib/types";
import { AppWindowMac, BookOpen } from "lucide-react";
import Link from "next/link";

interface PopularContentsProps {
  popularContents: PopularContent[];
}

export default function PopularContents({
  popularContents,
}: PopularContentsProps) {
  const content_icon_map = {
    question: <AppWindowMac className="w-4 h-4" />,
    article: <BookOpen className="w-4 h-4" />,
  };

  const content_link_map = {
    question: "/q",
    article: "/b",
  };

  return (
    <div className="hidden lg:block w-80">
      <div className="bg-white border-gray-500/20 border rounded-lg p-4 mb-6">
        <h1 className="font-mm">လူကြည့်များသော အကြောင်းအရာများ</h1>
        <span className="w-full border-b h-1 border-gray-500/30 block my-1 p-0"></span>
        <ul className="text-sm/6 text-gray-500 flex flex-col gap-1">
          {popularContents.map((pc) => (
            <li key={pc.id} className="flex items-center gap-2">
              <span>
                {content_icon_map[pc.content]}
              </span>
              <Link
                href={`${content_link_map[pc.content]}/${pc.id}`}
                className="line-clamp-2 hover:text-gray-600"
              >
                {pc.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
