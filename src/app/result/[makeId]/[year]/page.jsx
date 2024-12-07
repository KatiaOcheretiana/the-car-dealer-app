import { VehicleService } from "@/lib/vechicleService";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const vehicleMakes = await VehicleService.getVehicleMakes();

  const modelYears = Array.from(
    { length: new Date().getFullYear() - 2015 + 1 },
    (_, index) => 2015 + index,
  );

  const staticPaths = vehicleMakes.Results.map((make) =>
    modelYears.map((year) => ({
      params: {
        makeId: make.MakeId,
        year: String(year),
      },
    })),
  ).flat();

  return staticPaths;
}

export default async function ResultPage({ params }) {
  const { makeId, year } = await params;

  const vehicleData = await VehicleService.getVechicleData(makeId, year);

  console.log(vehicleData);

  return (
    <div className="mt-12 p-6 bg-zinc-200 rounded-lg shadow-lg max-w-4xl mx-auto">
      {vehicleData.Results.length > 0 && vehicleData.Results[0].Make_ID ? (
        <>
          <h1 className="text-xl font-bold text-zinc-800 mb-6">
            Vehicle Models for {vehicleData.Results[0].Make_Name} - {year} year
          </h1>
          <table className="table-auto w-full border-separate border-spacing-0.5">
            <thead>
              <tr className="bg-zinc-900 text-white">
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Make
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Model
                </th>
              </tr>
            </thead>
            <tbody>
              {vehicleData.Results.map((model, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-zinc-100 transition-colors duration-300"
                >
                  <td className="px-6 py-4 text-sm text-zinc-700">
                    {model.Make_Name}
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-700">
                    {model.Model_Name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="text-zinc-700">
          {vehicleData.Results[0]?.Message ||
            "No vehicle models found for the selected criteria."}
        </p>
      )}
    </div>
  );
}
