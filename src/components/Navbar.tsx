import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Sidebar, { DataType } from "./Sidebar";
import { useAtom } from "jotai";
import { toggleAtom } from "@/utils/atom";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = ({ data, setUserData }: DataType) => {
  const [toggle, setToggle] = useAtom(toggleAtom);
  return (
    <>
      <div className="px-5 bg-slate-700 h-[10dvh] border-b-2 border-slate-400 border-solid flex items-center justify-between lg:justify-center">
        <p className="text-2xl lg:text-4xl font-semibold text-gray-300">
          Find User Details
        </p>
        <div className="lg:hidden">
          {toggle ? (
            <MdOutlineCancel size={25} onClick={() => setToggle(!toggle)} />
          ) : (
            <IoMdMenu size={25} onClick={() => setToggle(!toggle)} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
