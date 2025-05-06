"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { MAP_URL, PIN_LOGO_URL, EASA_GLOBAL_URL } from "@/images";
import pins from "../pins.json";
import Link from "next/link";

function ByCountry() {
  const [hoveredPinIndex, setHoveredPinIndex] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (mapRef.current) {
        const { offsetWidth, offsetHeight } = mapRef.current;
        setMapSize({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="flex flex-col bg-[#062F58] w-full md:w-[70%]  mx-auto py-5 px-3  items-center">
      <div className="border-[#2970FF] flex justify-center rounded-md border-2 bg-[#062F58] w-full mb-4">
        <span className="text-[27px] text-[#00FF43] font-semibold text-center">
          VISIT AAA GLOBAL PAGE
        </span>
      </div>

      <div ref={mapRef} className="relative w-full aspect-[2/1]">
        <Image src={MAP_URL} alt="Map" fill style={{ objectFit: "contain" }} />

        {mapSize.width > 0 &&
          pins.map((pin, index) => {
            const left = (pin.x / 100) * mapSize.width;
            const top = (pin.y / 100) * mapSize.height;
            return (
              <Link href={`/aaa-${pin.name.toLowerCase()}`} key={index}>
                <div
                  className="absolute"
                  style={{
                    left,
                    top,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHoveredPinIndex(index)}
                  onMouseLeave={() => setHoveredPinIndex(null)}
                >
                  <Image
                    src={PIN_LOGO_URL}
                    width={30}
                    height={30}
                    alt="pin"
                    className="w-6 h-6 rounded-full cursor-pointer z-10"
                  />

                  {hoveredPinIndex === index && (
                    <div className="absolute top-[-160px] left-[-100px] w-[220px] bg-white border border-gray-300 rounded shadow-xl p-2 z-20">
                      <Image
                        src={EASA_GLOBAL_URL}
                        alt="pin-preview"
                        width={200}
                        height={100}
                        className="rounded"
                      />
                      <p className="text-center mt-2 text-sm font-semibold text-black">
                        {`AAA ${pin.name}`}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default ByCountry;
