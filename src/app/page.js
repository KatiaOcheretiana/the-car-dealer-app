import VechicleSelectors from "@/components/VechicleSelectors";

export default function Home() {
  return (
    <div className="grid mt-20 items-center justify-items-center   gap-4 sm:p-2">
      <h1 className="font-bold	text-4xl">Filter Page</h1>
      <p className="font-semibold	text-md">Use form to search vehicles</p>
      <VechicleSelectors />
    </div>
  );
}
