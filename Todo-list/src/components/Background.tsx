import DoneTask from "./DoneTask";
import ToDoTask from "./ToDoTask";

const Background = () => {
  return (
    <>
    <h3>Tasks to do - 4 </h3>
    <ToDoTask />
    <h3>Done - 1 </h3>
    <DoneTask/>
    </>
  );
};

export default Background;
