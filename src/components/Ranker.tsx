import "./components.css";

interface props{
  rank: string;
  className?: string;
}

export function Ranker({ rank, className}: props) {
  function setRankClass(rank: string) {
    const base = rank.replace(/[+-]/g, "");
    return `rank-${base}`;
  }
  return (
    <div className="flex w-full text-[0.9rem] z-10">
      <span
        className={`${setRankClass(rank)} bg-rank w-[60px] flex justify-center items-center rounded-sm absolute right-1 top-1 ${className}`}
      >
        {rank}
      </span>
    </div>
  );
}
