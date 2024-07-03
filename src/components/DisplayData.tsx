import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Sidebar from "./Sidebar";
import Mainbody from "./Mainbody";
import { useEffect, useState } from "react";
import { ApiType } from "@/utils/type";
import { Spinner } from "@nextui-org/react";

const DisplayData = () => {
  const [userData, setUserData] = useState<ApiType | null>(null);

  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["fetch-user-data"],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 1000));
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (isFetched && data && data.length > 0) {
      setUserData(data[0]);
    }
  }, [isFetched, data]);

  if (isLoading || isFetching) {
    return (
      <div className=" flex justify-center items-center h-screen text-2xl">
        <Spinner label="Data Loading..." color="success" size="lg" />
      </div>
    );
  }
  if (isFetched && isSuccess) {
    console.log(data);
  }

  return (
    <div className="grid lg:grid-cols-8">
      <div className="col-span-2">
        <Sidebar data={data} setUserData={setUserData} />
      </div>
      <div className="col-span-6">
        <Mainbody userData={userData} />
      </div>
    </div>
  );
};

export default DisplayData;
