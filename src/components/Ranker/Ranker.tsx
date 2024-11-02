import "./ranker.css";

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
    <div className="text-[0.9rem] z-10">
      <span
        className={`${setRankClass(rank)} bg-rank w-[60px] flex justify-center items-center rounded-sm absolute  ${className}`}
      >
        {rank}
      </span>
    </div>
  );
}
