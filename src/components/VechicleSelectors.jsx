"use client";
import { VehicleService } from "@/lib/vechicleService";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function VehicleSelectors() {
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [makeId, setMakeId] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const getVehicleData = async () => {
      try {
        const data = await VehicleService.getVehicleMakes();
        setVehicleMakes(data.Results);
      } catch (error) {
        toast.error(
          error.Message ||
            "Failed to get vechicle make, please try again later!",
        );
      }
    };
    getVehicleData();
  }, []);

  const modelYears = Array.from(
    { length: new Date().getFullYear() - 2015 + 1 },
    (_, index) => 2015 + index,
  );

  return (
    <div className="flex flex-col space-y-4 p-4  bg-zinc-200 rounded-sm shadow-sm max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        {/* Model Makes Selector */}
        <label className="text-md font-medium text-zink-900">
          Select Vehicle Make:
          <select
            onChange={(e) => setMakeId(e.target.value)}
            value={makeId}
            className="w-full p-2 border border-zink-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-blue-500 text-gray-700"
          >
            <option value="" disabled>
              -- Select a Make --
            </option>
            {vehicleMakes?.length > 0 &&
              vehicleMakes.map((make) => (
                <option key={make.MakeId} value={make.MakeId}>
                  {make.MakeName}
                </option>
              ))}
          </select>
        </label>

        {/* Model Year Selector */}
        <label className="text-md font-medium text-zink-900">
          Select Model Year:
          <select
            onChange={(e) => setYear(e.target.value)}
            value={year}
            className="w-full p-2 border border-zink-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-blue-500 text-gray-700"
          >
            <option value="" disabled>
              -- Select a Year --
            </option>
            {modelYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Link href={`/result/${makeId}/${year}`}>
        <button
          disabled={!makeId || !year}
          className={`w-full py-2 px-4 text-white rounded-md shadow-md ${
            makeId && year
              ? "bg-indigo-600 hover:bg-indigo-900"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
