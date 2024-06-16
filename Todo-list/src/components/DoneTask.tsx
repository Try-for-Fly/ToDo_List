import axios from "axios";
import { useEffect, useState } from "react";

interface DoneList {
  id: number;
  title: string;
  completed: boolean;
}

const DoneTask = () => {
  const [doneList, setDoneList] = useState<DoneList[]>([]);

  useEffect(() => {
    axios
      .get<DoneList[]>("http://localhost:9090/todo-service/dones")
      .then((res) => setDoneList(res.data));
  }, []);

  return (
    <>
      <div className="flex justify-between px-6 py-5 mt-6 bg-[#070814] text-[#78CFB0] rounded-md">
        {doneList.map((item) => (
          <li className="text-center line-through">{item.title}</li>
        ))}
      </div>
    </>
  );
};

export default DoneTask;
