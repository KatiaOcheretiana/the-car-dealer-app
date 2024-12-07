"use client";

import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-zinc-100">
      <div className="bg-indigo-400 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">An error occurred!</h1>
        <p className="text-lg mb-6">
          Failed to fetch vehicle data. Please try again later.
        </p>
        <Link
          href={"/"}
          className="px-6 py-2 bg-orange-300 hover:bg-orange-600 text-zinc-800 font-semibold rounded-md transition-colors duration-300"
        >
          Go to Home page
        </Link>
      </div>
    </main>
  );
}
