import { DigiCard } from "./DigiCard";

interface props {
  requirements: string[];
  dna: { digimon1: string; digimon2: string }[];
  name: string;
}

export function JogressTable({ requirements, dna, name }: props) {
  return (
    <div className="bg-gray-300/10 w-full h-full p-2 flex flex-col rounded">
      <div className="flex gap-2 ">
        <DigiCard name={name} className="bg-[#27272a] border-0 rounded" nameHidden={true}/>
        <div className="bg-[#27272a] flex-1 flex flex-col text-center rounded p-2">
          <span className="font-bold">Digmons Required</span>
          <div className="text-sm flex flex-col items-center">
            {dna.map((d, i) => (
              <div className="bg-gray-100/10 p-2 my-1 rounded grid grid-cols-3 max-w-full min-w-[70%]">
                <span className="text-right underline">{d.digimon1}</span>
                <span className="mx-2">+</span>
                <span className="text-left underline">{d.digimon2}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#27272a] w-full h-full p-2 mt-2 flex flex-col items-center flex-1 rounded">
        <span className="font-bold ">Requirements for Jogress</span>
        <div className="flex gap-3 underline mt-2 bg-gray-100/10 p-2 my-1 rounded">
          {requirements.map((r, i) => (
            <p key={i}>{r}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
