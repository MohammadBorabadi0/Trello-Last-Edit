import { FC } from "react";
import { IoClose } from "react-icons/io5";
import { Id, Task } from "../../types";

interface IProps {
  showCardOptions: boolean;
  setShowCardOptions: (isShow: boolean) => void;
  deleteTask: (id: Id) => void;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  task: Task;
}

const TaskModal: FC<IProps> = ({
  setShowCardOptions,
  deleteTask,
  setEditMode,
  task,
}) => {
  return (
    <section
      onClick={(e) => {
        e.stopPropagation();
        setShowCardOptions(false);
      }}
      className="flex justify-center items-center z-40 bg-slate-700 cursor-default fixed inset-0 h-screen w-full opacity-90"
    >
      <div
        className="relative bg-white p-16 rounded-md shadow-md cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3 className="border-b pb-1 mb-3 font-semibold">Card Options</h3>
        <ul className="flex flex-col gap-3">
          <li
            onClick={() => {
              setEditMode(true);
              setShowCardOptions(false);
            }}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700  transition-all duration-100 text-white rounded-md cursor-pointer"
          >
            Edit Card
          </li>
          <li
            onClick={() => {
              setShowCardOptions(false);
              deleteTask(task.id);
            }}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700  transition-all duration-100 text-white rounded-md cursor-pointer"
          >
            Delete Card
          </li>
          <li className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700  transition-all duration-100 text-white rounded-md cursor-pointer">
            Move Card
          </li>
        </ul>
        <button
          onClick={() => {
            setShowCardOptions(false);
          }}
          className="flex justify-center items-center text-2xl absolute top-3 right-2 rounded-md hover:text-white hover:bg-slate-600 h-7 w-7"
        >
          <IoClose />
        </button>
      </div>
    </section>
  );
};

export default TaskModal;
