import { Ranker } from "./Ranker";
interface DigiCardProps {
  name: string;
  rank?: string; // rank é opcional
}
export function DigiCard({ name, rank }: DigiCardProps) {

  return (
    <div className="border w-[150px] h-[210px] cursor-pointer flex flex-col items-center justify-between bg-gray-400/10 relative overflow-hidden">
      {rank && (
        <Ranker rank={rank}/>
      )}
      <div className="w-full h-full flex justify-center items-center overflow-hidden absolute mt-1 p-2">
        <img
          src={`/digimons_images/${name}.png`}
          alt={name}
          className="object-contain object-center max-w-full max-h-full z-0"
        />
      </div>
      <span
        className="mb-0 bg-gradient-to-r from-sky-500 to-indigo-500 w-full font-bold leading-tight h-6 flex justify-center items-center absolute bottom-0"
        style={{
          fontSize: `clamp(14px, ${150 / name.length}px, 16px)`,
        }}
      >
        {name}
      </span>
    </div>
  );
}
