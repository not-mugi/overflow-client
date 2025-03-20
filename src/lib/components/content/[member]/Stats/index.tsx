import Cog from "@/lib/assets/images/icons/cog.svg";
import Leaderboard from "@/lib/assets/images/icons/leaderboard.svg";
import Button from "@/lib/components/common/Button";

interface IContributionCard {
  reputation: number;
}

export function ContributionCard({ reputation }: IContributionCard) {
  return (
    <div className="border border-gray-300 rounded-sm w-full h-full">
      <div className="p-2">
        <Leaderboard className="w-6 h-6 border hover:bg-mugi-bg-300 border-gray-200 bg-gray-200/50 rounded-full p-1" />
      </div>
      <div className="h-10 w-full flex items-center justify-center grow gap-10">
        <span className="flex flex-col items-center">
          <h1 className="text-4xl">{reputation}</h1>
          <h3 className="">Contribution</h3>
        </span>
        <h5 className="text-xs text-gray-700/70 inline-block text-nowrap">
          Earn CP by
          <legend className="text-blue-500 underline cursor-pointer hover:text-blue-700">
            Asking
          </legend>
          <legend className="text-blue-500 underline cursor-pointer hover:text-blue-700">
            Answering
          </legend>
          and
          <legend className="text-blue-500 underline cursor-pointer hover:text-blue-700">
            Contributing.
          </legend>
        </h5>
      </div>
    </div>
  );
}

interface IWatchedTags {
  tags: string[];
}

export function WatchingTags({ tags = [] }: IWatchedTags) {
  return (
    <div className="flex flex-col border border-gray-300 rounded-sm w-full h-full">
      <div className="p-2 w-full h-8 flex justify-between">
        <h3 className="p-1">Watching Tags</h3>
        <Cog className="w-6 h-6 border hover:bg-mugi-bg-300 border-gray-200 bg-gray-200/50 rounded-full p-1" />
      </div>
      <div className="w-full grow p-2">
        {tags.length > 0 ? (
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <Button key={index} text={tag} theme="light" />
            ))}
          </div>
        ) : (
          <h5 className="p-1 font-serif text-xs text-gray-700/70 inline-block text-nowrap">
            You are not watching any tags currently yet.
          </h5>
        )}
      </div>
      <div className="w-full p-2">
        <Button text="Customize Watchlist" theme="light" />
      </div>
    </div>
  );
}

export default function StatsBoard() {
  const reputation = 1;

  return (
    <div className="flex gap-4">
      <div className="flex flex-col w-1/3 h-32">
        <ContributionCard reputation={reputation} />
      </div>
      <div className="w-1/3 h-32">
        <WatchingTags tags={["typescript", "react"]} />
      </div>
    </div>
  );
}
