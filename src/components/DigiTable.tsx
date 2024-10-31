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
    <table className="h-full">
      <thead className="">
        <tr className="">
          {ALL_STAGES.map((stage) => (
            <th key={stage} className="border ">
              {stage}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border border-t-0">
        <tr>
          {ALL_STAGES.map((stage) => (
            <td key={stage} className="border-l border-inherit h-full">
              <div className="flex flex-col h-full">
                {treeData
                  ? treeData[stage].map((digimon: Digimon, index: number) => (
                      <Accordion
                        type="single"
                        collapsible
                        key={`${digimon.name}-${index}`}
                      >
                        {digimon.name !== "N/A" && (
                          <AccordionItem
                            value="item-1"
                            className="border-0  h-full p-2"
                          >
                            <div className="flex gap-2 w-full items-center bg-gray-400/10 pl-2">
                            <img src={`/digimons_images/${digimon.name}.png`} className="object-contain object-center max-w-[20%]"/>
                              <AccordionTrigger>
                                {digimon.name}
                              </AccordionTrigger>
                            </div>
                            <AccordionContent className="pl-12 bg-gray-400/10 ">
                              <ul>
                                {digimon.requirements.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                      </Accordion>
                    ))
                  : ""}
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
