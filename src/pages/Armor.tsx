import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { DigiCard } from "@/components/DigiCard";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import dataArmor from "../digimons/armor.json";
import { ArmorTable } from "@/components/ArmorTable";
export function Armor() {
  const data = dataArmor.armor;
  return (
    <main>
      <header>
        <Header />
      </header>

      <div id="content">
        <SearchBar />

        <div className="flex justify-center w-full mt-6 mb-6">
          <div className="grid grid-cols-7 gap-5">
            {data.map((a, i) => (
              <Dialog key={i}>
                <DialogTrigger>
                  <DigiCard name={a.name} className="bg-gray-400/10" />
                </DialogTrigger>
                <DialogContent className="bg-[#27272a] border-0">
                  <ArmorTable
                    name={a.name}
                    digimon={a.digimon}
                    egg={a.egg}
                    requirements={a.requirements}
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
