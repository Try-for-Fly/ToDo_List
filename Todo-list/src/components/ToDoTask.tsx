import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const ToDoTask = () => {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-5 my-4 bg-[#070814] text-[#0AB6FF] rounded-md">
        <p className="text-center">To study React fundamentals</p>
        <div className="flex text-[18px]">
          <div className="p-2 mr-1 bg-[#181B25] ">
            <FaCheck />
          </div>
          <div className="p-2 bg-[#181B25]">
            <MdDeleteOutline />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoTask;
