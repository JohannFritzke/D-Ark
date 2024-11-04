import { DigiCard } from "./DigiCard";

interface props {
  name: string;
  digimon: string;
  egg: string;
  requirements: string[];
}

export function ArmorTable({ name, digimon, egg, requirements }: props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-gray-300/10 rounded mt-3 p-2 text-center font-bold">
        {name}
      </div>
      <div className="flex bg-gray-300/10 p-2 gap-2">
        <DigiCard name={name} nameHidden={true} className="bg-[#27272a]" />
        <div className="flex flex-col flex-1 gap-2 justify-around">
          <div className="bg-[#27272a] p-2 rounded text-center">
            <span className="font-bold">Digmons Required</span>
            <div className="bg-gray-300/10 rounded mt-2">
              <span className="underline">{digimon}</span>
              <span>+</span>
              <span className="underline">{egg}</span>
            </div>
          </div>

          <div className="bg-[#27272a] rounded p-2 text-center">
            <span className="font-bold">Requirements</span>
            <div className="mt-2">
              {requirements.map((r, i) => (
                <p className="bg-gray-300/10 mt-1 rounded" key={i}>
                  {r}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
