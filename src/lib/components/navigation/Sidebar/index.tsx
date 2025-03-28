import Blog from "@/lib/assets/images/icons/blog.svg";
import CaretDown from "@/lib/assets/images/icons/caret-down.svg"
import Tags from "@/lib/assets/images/icons/tags.svg";
import Users from "@/lib/assets/images/icons/users.svg";
import Information from "@/lib/assets/images/icons/information.svg";
import Question from "@/lib/assets/images/icons/question.svg";
import Link from "next/link";

export default function Sidebar() {
  const styles = {
    listItem : "hover:bg-gray-200/50 flex items-center p-2 gap-1.5 rounded-sm",
    svg : "w-5 h-5 fill-gray-700/50 stroke-gray-700/50 stroke-2"
  }

  return (
    <aside className="w-auto bg-white px-3 py-2 shadow rounded h-full">
      <ul className="space-y-3 text-sm tracking-widest">
        <li className={styles.listItem}>
          <Question className={styles.svg} />
          <Link href="#" className="block text-gray-700">
            Questions
          </Link>
        </li>
        <li className={styles.listItem}>
          <Blog className={styles.svg} />
          <Link href="#" className="block text-gray-700">
            Blog
          </Link>
        </li>
        <li className={styles.listItem}>
          <Information className={styles.svg} />
          <Link href="#" className="block text-gray-700">
            Information
          </Link>
        </li>
        <li className={styles.listItem}>
          <Tags className={styles.svg} />
          <Link href="#" className="block text-gray-700">
            Tags
          </Link>
        </li>
        <li className={styles.listItem}>
          <Users className={styles.svg} />
          <Link href="#" className="block text-gray-700">
            Users
          </Link>
        </li>
      </ul>
      <span className="my-2 h-0.5 w-full bg-gray-500/20 block"></span>
      <ul className="space-y-3 text-sm tracking-widest">
        <li className="hover:bg-gray-200/50 flex items-center justify-between p-2 rounded-sm">
          <a href="#" className="block text-gray-700">
            အကြည့်များဆုံး
          </a>
          <CaretDown className="w-5 h-5" />
        </li>
      </ul>
    </aside>
  );
}
