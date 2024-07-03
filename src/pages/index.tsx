import DisplayData from "@/components/DisplayData";
import Navbar from "@/components/Navbar";
import { DataType } from "@/components/Sidebar";

const index = ({ data, setUserData }: DataType) => {
  return (
    <>
      <div className="">
        <Navbar data={data} setUserData={setUserData} />
        <DisplayData />
      </div>
    </>
  );
};

export default index;
