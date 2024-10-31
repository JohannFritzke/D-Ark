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
import { Ranker } from "@/components/Ranker";
import dataJogress from "../digimons/jogress.json";
export function Jogress() {
  const data = dataJogress.jogress;
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="content">
        <SearchBar />

        <div className="flex w-full justify-center mt-6 mb-6">
          <div className="grid grid-cols-7 gap-5">
            {data.map((d) => (
              <Dialog key={d.name}>
                <DialogTrigger>
                  <DigiCard name={d.name} rank={d.rank} />
                </DialogTrigger>
                <DialogContent className="bg-gray-800 border-gray-800 max-w-screen-md h-[80%] flex flex-col">
                  <DialogTitle className="flex justify-center items-center bg-gray-400/10 p-3 mt-3 gap-4 relative">
                    <img
                      src={`/digimons_images/${d.name}.png`}
                      className="w-20"
                    />
                    <span>{d.name} DNA Digivolution</span>
                    {d.rank && (
                      <div> 
                        <Ranker rank={d.rank} className="h-[20px]"/>
                      </div>
                    )}
                  </DialogTitle>
                  <JogressTable
                    name={d.name}
                    requirements={d.requirements}
                    dna={d.DNA}
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
