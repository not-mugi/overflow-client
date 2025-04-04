import { PopularTag } from "@/lib/types";
import Link from "next/link";

interface PopularTagsProps {
  popularTags: PopularTag[];
}

export default function PopularTags({
  popularTags,
}: PopularTagsProps) {

  return (
    <div className="hidden lg:block w-80">
      <div className="bg-white border-gray-500/20 border rounded-lg p-4 mb-6">
        <h1 className="font-mm">လူကြည့်များသော တဂ်များ</h1>
        <span className="w-full border-b h-1 border-gray-500/30 block my-1 p-0"></span>
        <ul className="text-sm/6 text-gray-500 my-2 flex flex-wrap gap-2">
          {popularTags.map((pc) => (
            <li key={pc.id}>
              <Link
                href={`/tag/${pc.id}`}
                className="px-2 py-1 bg-mugi-100 text-mugi-red-500 rounded-sm text-xs hover:bg-mugi-200"
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