import Link from "next/link";
import Image from "next/image";

import FeedIcon from "@/lib/assets/images/icons/feed.svg";
import QuestionsIcon from "@/lib/assets/images/icons/question.svg";
import TagsIcon from "@/lib/assets/images/icons/tags.svg";

export default function SideNavigation() {
 const styles = {
    li : {
        normal: "flex items-center h-9 p-2 gap-2 rounded-sm text-sm hover:bg-gray-200/20 hover:text-gray-800/80",
        selected: "flex items-center h-9 bg-gray-200/40 p-2 gap-2 rounded-sm font-bold text-sm"
    }
 }

  return (
    <aside className="fixed top-14 max-md:hidden max-xl:left-5 max-2xl:left-20 max-3xl:left-40 left-80 w-46 h-screen border-r border-gray-300/60">
      <ul className="mt-6 pr-2">
        <li>
          <Link href="/" className={styles.li.selected}>
            {/* <Image src={FeedIcon} alt="feed icon" width={20} height={20} /> */}
            <legend>Feed</legend>
          </Link>
        </li>
        <li>
          <Link href="/questions" className={styles.li.normal}>
            {/* <Image src={QuestionsIcon} alt="questions icon" width={20} height={20} /> */}
            <legend>Questions</legend>
          </Link>
        </li>
        <li>
          <Link href="/tags" className={styles.li.normal}>
            {/* <Image src={TagsIcon} alt="tags icon" width={20} height={20} /> */}
            <legend>Tags</legend>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
