import { toggleAtom } from "@/utils/atom";
import { ApiType } from "@/utils/type";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
export type DataType = {
  data: ApiType[];
  setUserData: React.Dispatch<React.SetStateAction<ApiType | null>>;
};

const Sidebar: React.FC<DataType> = ({ data, setUserData }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useAtom(toggleAtom);
  const userDataHandler = (key: string) => {
    const user = data.find((user: ApiType) => user.profile.username === key);
    if (user) {
      setUserData(user);
    }
    setToggle(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle, setToggle]);

  return (
    <>
      <div
        className={` bg-slate-700 h-screen lg:h-[90dvh] overflow-y-scroll ${
          toggle ? "absolute z-10 w-[80%]" : "hidden"
        } lg:block`}
        ref={sidebarRef}>
        {data && data.length > 0 ? (
          data.map((user: ApiType) => {
            return (
              <>
                <div
                  className="px-3 cursor-pointer flex items-center gap-5 space-y-10 border-b-1 border-solid border-gray-800 shadow-sm shadow-blue-100 "
                  key={user.profile.username}
                  onClick={() => userDataHandler(user.profile.username)}>
                  <img
                    src={user.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-lg font-semibold">
                    {user.profile.username}
                  </p>
                </div>
              </>
            );
          })
        ) : (
          <div className="">No Data Found</div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
