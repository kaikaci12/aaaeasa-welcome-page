import Image from "next/image";
import React from "react";
import { EASA_GLOBAL_URL, EASA_LOGO_URL } from "@/images.js";
import Link from "next/link";
function Global() {
  return (
    <div className="md:w-[30%] w-full    bg-[#062F58]  flex flex-col p-5 items-center ">
      <div className="border-[#2970FF] flex justify-center rounded-md border-2 bg-[#062F58] w-full ">
        <span className="text-[27px] text-[#00FF43] font-semibold text-center">
          VISIT AAA GLOBAL PAGE
        </span>
      </div>
      <div className=" mt-[50px] bg-[#EAEFF3] border-2 border-[#2970FF] flex-col w-full p-5 rounded-[10px]">
        <div className="w-full flex justify-between">
          <Image alt="logo" width={100} height={100} src={EASA_GLOBAL_URL} />
          <Image alt="logo" width={100} height={100} src={EASA_LOGO_URL} />
        </div>
        <div className="my-[20px] flex justify-center">
          <p className="text-[#395388] text-[22px] font-semibold text-center">
            World Most Complete Organization In Aviation Industry
          </p>
        </div>
        <p className="text-[#252627] text-[16px] text-center">
          AAA is a global provider of Technical and Mechanical Management for
          the Aviation Industry and has its organisations Approved and Certified
          as European Aviation Safety Agency (EASA) Part 147, Part 145, AOC/A,
          AOC/H ATO/A, ATO/H, CCM, SMS, and AIRCRAFT MANUFACTURING COMPONENTS
        </p>

        <Link
          href="/aaa-global"
          className="flex items-center mt-[50px] text-center justify-center text-[#252627] px-[26px] py-[17px] text-[16px] font-light rounded-sm bg-[#00FF43]"
        >
          VISIT AAA GLOBAL
        </Link>
      </div>
    </div>
  );
}

export default Global;
