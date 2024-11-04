import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ALL_STAGES = ["In-Training", "Rookie", "Champion", "Ultimate", "Mega"];

interface Digimon {
  name: string;
  requirements: string[];
}

export function DigiTable({ tree }: { tree: string }) {
  const [treeData, setTreeData] = useState<any>(null);

  const fecthTree = async () => {
    try {
      const response = await fetch(`/trees/${tree}.json`);
      const data = await response.json();
      setTreeData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fecthTree();
  }, [tree]);

  return (
    <div className="grid grid-cols-5 gap-5 bg-gray-300/10 h-full rounded overflow-auto scrollbar-hide p-3 mt-3 ">
      {ALL_STAGES.map((s, i) => (
        <div key={i} className="flex flex-col gap-2 relative">
          <p className="font-bold bg-[#27272a] rounded text-center">{s}</p>
          {treeData &&
            treeData[s].map((d: Digimon, i: number) =>
              d.name !== "N/A" ? (
                <Accordion type="single" collapsible key={i}>
                  <AccordionItem
                    value={`item-${i + 1}`}
                    className="border-0 w-full flex items-center  p-2 gap-2 rounded bg-[#27272a]"
                  >
                    <div>
                      <img
                        src={`/digimons_images/${d.name}.png`}
                        className=""
                      />
                    </div>
                    <div className="w-full pr-1 ">
                      <AccordionTrigger className="flex justify-betwee ">
                        {d.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="bg-slate-300/10 pl-1">
                          {d.requirements.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </Accordion>
              ) : (
                <div className="bg-gray-300/10 rounded h-[50px] flex items-center pl-2">
                  <p className="text-gray-400">{d.name}</p>
                </div>
              )
            )}
        </div>
      ))}
    </div>
  );
}
