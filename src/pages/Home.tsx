import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { DigiCard } from "@/components/DigiCard";
import { DigiTable } from "@/components/DigiTable";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import data from "../digimons/digimons.json";

interface Digimon {
  name: string;
  tree: string;
  stage: string;
  rank?: string;
}

const ALL_STAGES = ["In-Training", "Rookie", "Champion", "Ultimate", "Mega"];

export function Home() {
  const [selectedStage, setSelectedStage] = useState("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const digimons: Digimon[] = data.digimons;

  const sortDigimons = (digimons: Digimon[]) => {
    return digimons.sort((a, b) => {
      return ALL_STAGES.indexOf(a.stage) - ALL_STAGES.indexOf(b.stage);
    });
  };

  const filteredDigimons = selectedStage
    ? digimons.filter((digimon) => digimon.stage === selectedStage)
    : digimons;

  const searchedDigimons = filteredDigimons.filter((digimon) =>
    digimon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedDigimons = sortDigimons(searchedDigimons);

  return (
    <main>
      <header>
        <Header />
      </header>
      <div id="content">
        <SearchBar onSearch={setSearchQuery} />

        <div className="flex flex-col w-full items-center mt-3">
          <div className="bg-gray-400/10 w-[33%] flex flex-col items-center p-1 pb-3 rounded gap-2">
            <h2>Filters:</h2>
            <div className="flex gap-2 mt-1">
              {ALL_STAGES.map((stage) => (
                <button
                  key={stage}
                  className={`rounded-lg p-1  ${
                    selectedStage === stage ? "bg-orange-500" : "bg-purple-700"
                  }`}
                  onClick={() =>
                    setSelectedStage((prevStage) =>
                      prevStage === stage ? "" : stage
                    )
                  }
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center mt-6 mb-6">
          <div className="grid grid-cols-7 gap-5">
            {sortedDigimons.map((digimon) => (
              <Dialog key={digimon.name}>
                <DialogTrigger>
                  <DigiCard
                    name={digimon.name}
                    rank={digimon.rank}
                    className="bg-gray-400/10"
                  />
                </DialogTrigger>
                <DialogContent className="bg-[#27272a] border-gray-800 w-[90%] max-w-screen-xl h-[500px] overflow-auto scrollbar-hide flex flex-col gap-3">
                  <DigiTable tree={digimon.tree} />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
