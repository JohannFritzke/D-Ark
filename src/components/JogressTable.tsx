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
      <thead className="border text-center">
        <td className="border">Digimon</td>
        <td className="border">DNA Recipe</td>
        <td>Requirements</td>
      </thead>
      <tbody className="border align-top">
        <tr className="ml-2">
          <td className="border pt-3 text-center"><div>{name}</div></td>
          <td className=" pt-3 flex h-full justify-center">
            <div>
              <ul>
                {dna.map((pair, index) => (
                  <li key={index}>
                    {pair.digimon1} + {pair.digimon2}
                  </li>
                ))}
              </ul>
            </div>
          </td>
          <td className="border pt-3">
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
