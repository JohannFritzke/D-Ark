import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { DigiCard } from "@/components/DigiCard";
import { JogressTable } from "@/components/JogressTable";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Ranker } from "@/components/Ranker/Ranker";
import dataJogress from "../digimons/jogress.json";

interface Digimon {
  name: string;
  DNA: { digimon1: string; digimon2: string }[];
  requirements: string[];
  rank?: string;
}
const ALL_RANKS = ["S", "A", "B", "C", "D"];

export function Jogress() {
  const data: Digimon[] = dataJogress.jogress;
  const [selectedRank, setSelectedRank] = useState("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sortDigimons = (data: Digimon[]) => {
    const order: { [key: string]: number } = { S: 0, A: 1, B: 2, C: 3, D: 4 };
    return data.sort((a, b) => {
      const rankA = a.rank ? order[a.rank[0]] ?? Infinity : Infinity;
      const rankB = b.rank ? order[b.rank[0]] ?? Infinity : Infinity;

      return rankA - rankB;
    });
  };

  const filterDigimons = selectedRank
    ? data.filter((digimon) => digimon.rank && digimon.rank[0] === selectedRank)
    : data;

  const searchedDigimons = filterDigimons.filter((digimon) =>
    digimon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedDigimons = sortDigimons(searchedDigimons);
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="content">
        <SearchBar onSearch={setSearchQuery} />

        <div className="flex flex-col w-full items-center mt-3 ">
          <div className="bg-gray-400/10 w-[33%] flex flex-col items-center p-1 pb-3 rounded gap-2">
            <h2>Filters:</h2>
            <div className="flex gap-2 mt-1">
              {ALL_RANKS.map((rank) => (
                <button
                  key={rank}
                  className={`rounded-lg p-1 w-[50px] ${
                    selectedRank === rank ? "bg-orange-500" : "bg-purple-700"
                  }`}
                  onClick={() =>
                    setSelectedRank((prevRank) =>
                      prevRank === rank ? "" : rank
                    )
                  }
                >
                  {rank}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center mt-6 mb-6">
          <div className="grid grid-cols-1 sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-5">
            {sortedDigimons.map((d) => (
              <Dialog key={d.name}>
                <DialogTrigger>
                  <DigiCard name={d.name} rank={d.rank} className="bg-gray-400/10"/>
                </DialogTrigger>
                <DialogContent className="bg-[#27272a] border-gray-800 max-w-screen-md h-[80%] flex flex-col overflow-auto scrollbar-hide">
                  <DialogTitle className="bg-gray-300/10 w-full h-[10%] mt-4 flex items-center p-2 relative rounded">
                    <span className="font-bold text-base ">
                      {d.name} - Jogress Evolution
                    </span>
                    {d.rank && (
                      <Ranker
                        rank={d.rank}
                        className="h-[70%]  top-[16%] right-[1%]"
                      />
                    )}
                  </DialogTitle>
                  <JogressTable
                    requirements={d.requirements}
                    dna={d.DNA}
                    name={d.name}
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
