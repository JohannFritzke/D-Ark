import { Ranker } from "./Ranker/Ranker";
interface DigiCardProps {
  name: string;
  rank?: string;
  className?:string
  nameHidden?:boolean
}
export function DigiCard({ name, rank, className,nameHidden }: DigiCardProps) {



  return (
    <div className={`card rounded border w-[150px] h-[210px] cursor-pointer flex flex-col items-center justify-between relative overflow-hidden ${className}`}>
      {rank && (
        <Ranker rank={rank} className="right-1 top-1"/>
      )}
      <div className="w-full h-full flex justify-center items-center overflow-hidden absolute p-2">
        <img
          src={`/digimons_images/${name}.png`}
          alt={name}
          className="object-contain object-center max-w-full max-h-full z-0"
        />
      </div>
      <span
        className={`${nameHidden && "hidden"} digiName mb-0 bg-gradient-to-r from-sky-500 to-indigo-500 w-full font-bold leading-tight h-6 flex justify-center items-center absolute bottom-0`}
        style={{
          fontSize: `clamp(14px, ${150 / name.length}px, 16px)`,
        }}
      >
        {name}
      </span>
    </div>
  );
}
