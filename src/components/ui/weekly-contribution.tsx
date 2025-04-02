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
    "bg-mugi-300 text-mugi-red-500 hover:bg-gray-50 hover:text-gray-500",
  normal: "bg-gray-50 hover:bg-mugi-100 hover:text-mugi-red-500",
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
      <div className="bg-white shadow rounded-lg p-4 mb-6 font-mm">
        <div className="flex justify-between items-center">
          <h1 className="font-black items-center justify-between">
            အပတ်စဥ် ပါဝင်မှုများ
          </h1>
          <table className="text-xs">
            <tbody className="">
              <tr className="">
                <td className="">
                  <button
                    onClick={() => selectGenre("q")}
                    className={`font-bold px-0.5 py-1 text-xs cursor-pointer border-gray-300 rounded-l-sm border 
                      ${
                        selectedGenre === "q"
                          ? leaderboard_genre_classes["selected"]
                          : leaderboard_genre_classes["normal"]
                      }`}
                  >
                    အမေးအဖြေ
                  </button>
                </td>
                <td className="">
                  <button
                    onClick={() => selectGenre("a")}
                    className={`font-bold px-0.5 py-1 text-xs cursor-pointer border-gray-300 border-y relative 
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
                    className={`font-bold px-0.5 py-1 text-xs cursor-pointer border-gray-300 rounded-r-sm border 
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

        <span className="w-full border-b h-1 border-gray-500 block my-1 p-0"></span>
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
