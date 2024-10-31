export function JogressTable({
  name,
  requirements,
  dna,
}: {
  name: string;
  requirements: string[];
  dna: { digimon1: string; digimon2: string }[];
}) {
  return (
    <table className="h-full">
      <thead className="text-center">
        <td className=" bg-gray-400/10 border-r">DNA Recipe</td>
        <td className="bg-gray-400/10">Requirements</td>
      </thead>
      <tbody className="align-top bg-gray-400/10 mt-2">
        <tr className="ml-2">
          <td className=" pt-3 flex h-full justify-center">
            <ul className="w-full flex flex-col items-center gap-2 ">
              {dna.map((pair, index) => (
                <li key={index} className="flex gap-2 items-center w-[80%] justify-center p-2 bg-gray-400/10 ">
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src={`/digimons_images/${pair.digimon1}.png`}
                      alt=""
                      className="w-10"
                    />
                    {pair.digimon1}
                  </div>
                  +
                  <div className="flex justify-center items-center gap-1">
                    {pair.digimon2}
                    <img
                      src={`/digimons_images/${pair.digimon2}.png`}
                      alt=""
                      className="w-10"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </td>
          <td className="border-l pt-3">
            <div className="flex justify-center">
              <ul>
                {requirements.map((r, index) => (
                  <li key={index}>{r}</li>
                ))}
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
