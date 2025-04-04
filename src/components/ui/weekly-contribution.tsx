"use client";

import { Contributor } from "@/lib/types";

import AbsoluteTag from "./absolute-tag";
import mn from "myanmar-numeral";
import { Trophy } from "lucide-react";
import { useState } from "react";

type LeaderboardGenres = "q" | "a" | "all";

interface WeeklyContributionProps {
  topContributors: Contributor[];
}

const leaderboard_genre_classes = {
  selected:
    "bg-mugi-300 text-mugi-red-500",
  normal: "hover:bg-mugi-300 hover:text-mugi-red-500",
};

const trophy_tailwind_classes = {
  gold: "fill-mugi-red-600 text-mugi-red-600",
  sliver: "fill-gray-500 text-gray-500",
  bronze: "fill-[#cd9a62] text-[#cd9a62]",
};

type TwContributionTrophy = keyof typeof trophy_tailwind_classes;

export default function WeeklyContribution({
  topContributors,
}: WeeklyContributionProps) {
  const rank_map: Record<number, TwContributionTrophy> = {
    0: "gold",
    1: "sliver",
    2: "bronze",
  };

  const [selectedGenre, selectGenre] = useState<LeaderboardGenres>("all");

  return (
    <div className="hidden lg:block w-80">
      <div className="bg-white border-gray-500/20 border rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="items-center justify-between">
            <span className="font-mono font-light tracking-wider">Weekly</span> <span className="font-mm">ပါဝင်မှုများ</span>
          </h1>
          <table className="text-sm font-mm">
            <tbody className="">
              <tr className="">
                <td className="">
                  <button
                    onClick={() => selectGenre("q")}
                    className={`py-2 px-1 cursor-pointer border-gray-300/30 rounded-l-sm border-2 
                      ${
                        selectedGenre === "q"
                          ? leaderboard_genre_classes["selected"]
                          : leaderboard_genre_classes["normal"]
                      }`}
                  >
                    မေးခွန်း
                  </button>
                </td>
                <td>
                  <button
                    // onClick={() => selectGenre("a")}
                    className={`py-2 px-1 cursor-not-allowed border-gray-300/30 border-y-2 relative 
                      ${
                        selectedGenre === "a"
                          ? leaderboard_genre_classes["selected"]
                          : leaderboard_genre_classes["normal"]
                      }`}
                  >
                    ဆောင်းပါး <AbsoluteTag right="none" content="wip" />
                  </button>
                </td>
                <td className="">
                  <button
                    onClick={() => selectGenre("all")}
                    className={`py-2 px-1 cursor-pointer border-gray-300/30 rounded-r-sm border-2 
                      ${
                        selectedGenre === "all"
                          ? leaderboard_genre_classes["selected"]
                          : leaderboard_genre_classes["normal"]
                      }`}
                  >
                    အားလုံး
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <span className="w-full border-b h-1 border-gray-500/30 block my-1 p-0"></span>
        <table className="w-full">
          <tbody>
            {topContributors.map((tc, rank) => (
              <tr
                key={`${rank} ${tc.username}`}
                className="flex items-center w-full"
              >
                <td className="text-center p-1 font-mm text-gray-600">
                  {rank < 3 ? (
                    <Trophy
                      className={`w-4 h-4 ${
                        trophy_tailwind_classes[rank_map[rank]]
                      }`}
                    />
                  ) : (
                    <p className="w-4 h-4 font-bold text-gray-400 text-center align-top table-cell">
                      {mn(rank + 1)}
                    </p>
                  )}
                </td>
                <td className="grow p-1 font-mm text-gray-500 ml-2 tracking-wide">
                  {tc.username}
                </td>
                <td className="p-1 font-mm text-gray-600 tracking-widest">
                  +{mn(tc.totalRepsEarned)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
