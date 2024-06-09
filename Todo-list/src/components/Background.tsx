import DoneTask from "./DoneTask";
import ToDoTask from "./ToDoTask";
import { FaPlus } from "react-icons/fa6";

const Background = () => {
  return (
    <>
      <div className="w-1/2 bg-[#181925] p-6 rounded-lg ">
        <div className="flex justify-between py-4">
          <div className="border-2 border-[#0AB6FF] rounded-lg ">
            <input
              type="text"
              placeholder="Add a new task"
              className="bg-[#181925] w-96 rounded-lg p-2"
            />
          </div>
          <div className="flex justify-center items-center bg-[#0AB6FF] rounded-lg p-2 h-10 w-10">
            <FaPlus />
          </div>
        </div>
        <h3 className="text-[#FFFFFF]">Tasks to do - 4 </h3>
        <div>
          <ToDoTask />
        </div>

        <h3 className="text-[#FFFFFF]">Done - 1 </h3>
        <div>
          <DoneTask />
        </div>
      </div>
    </>
  );
};

export default Background;
