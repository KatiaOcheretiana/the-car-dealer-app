"use client";

import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-zinc-100">
      <div className="bg-indigo-400 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-lg mb-6">
          Unfortunately, we could not find the requested page or resource.
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
