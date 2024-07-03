import { ApiType } from "@/utils/type";
import { Card, CardBody } from "@nextui-org/react";
import { FaMailBulk, FaUser } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { IoDocuments } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
type DataType = {
  data: ApiType[];
};

const Mainbody = ({ userData }: any) => {
  return (
    <>
      <div className="flex items-center justify-center lg:h-[90dvh] relative">
        {userData ? (
          <Card className="w-full h-screen lg:w-[600px] lg:h-[40rem]">
            <CardBody className="space-y-8">
              <div className="space-y-10">
                <div className="">
                  <div className=" w-40 h-40 flex mx-auto rounded-full bg-gray-200 relative">
                    <img
                      src={userData.avatar}
                      alt=""
                      className="flex mx-auto w-40 h-40 rounded-full absolute"
                    />
                  </div>
                </div>
                <hr />

                <div className="flex items-center gap-5">
                  <FaUser size={25} />
                  <div className="">
                    <div className="text-md italic">Name</div>
                    <div className="text-xl font-semibold">
                      <span>{userData.profile.firstName} </span>
                      <span>{userData.profile.lastName} </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <IoDocuments size={25} />

                  <div className="">
                    <div className="text-md italic">Bio</div>
                    <div className="text-xl font-semibold">{userData.Bio}</div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <FaMailBulk size={25} />
                  <div className="">
                    <div className="text-md italic">Email</div>
                    <div className="text-xl font-semibold">
                      {userData.profile.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <GrUserExpert size={25} />
                  <div className="">
                    <div className="text-md italic">Job Title</div>
                    <div className="text-xl font-semibold">
                      {userData.jobTitle}
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ) : (
          <div className="text-2xl">... Select User From The Sidebar ...</div>
        )}
      </div>
    </>
  );
};

export default Mainbody;
