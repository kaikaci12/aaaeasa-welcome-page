"use client";

import ByCountry from "./components/ByCountry";
import Global from "./components/Global";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-2 min-h-screen  ">
      <Global />

      <ByCountry />
    </div>
  );
}
