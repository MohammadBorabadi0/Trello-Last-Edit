import { FC } from "react";
import { IoClose } from "react-icons/io5";
import { Column, Id, Task } from "../types";

interface IProps {
  showColumnOptions?: boolean;
  showCardOptions?: boolean;
  setShowColumnOptions?: (isShow: boolean) => void;
  setShowCardOptions?: (isShow: boolean) => void;
  deleteColumn?: (id: Id) => void;
  deleteTask?: (id: Id) => void;
  setEditMode?: React.Dispatch<React.SetStateAction<boolean>>;
  column?: Column;
  task?: Task;
}

const Modal: FC<IProps> = ({
  showCardOptions,
  setShowColumnOptions,
  setShowCardOptions,
  deleteColumn,
  deleteTask,
  setEditMode,
  task,
  column,
}) => {
  return (
    <section
      onClick={(e) => {
        e.stopPropagation();
        if (showCardOptions) {
          setShowCardOptions!(false);
        } else {
          setShowColumnOptions!(false);
        }
      }}
      className="flex justify-center items-center z-40 bg-slate-700 cursor-default fixed inset-0 h-screen w-full opacity-90"
    >
      <div
        className="relative bg-white p-16 rounded-md shadow-md cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3 className="border-b pb-1 mb-3 font-semibold">Column Options</h3>
        <ul className="flex flex-col gap-3">
          <li
            onClick={() => {
              setEditMode!(true);
              if (showCardOptions) {
                setShowCardOptions!(false);
              } else {
                setShowColumnOptions!(false);
              }
            }}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700  transition-all duration-100 text-white rounded-md cursor-pointer"
          >
            Edit {showCardOptions ? "Card" : "Column"}
          </li>
          <li
            onClick={() => {
              if (showCardOptions) {
                setShowCardOptions!(false);
                deleteTask!(task.id);
              } else {
                setShowColumnOptions!(false);
                deleteColumn!(column?.id);
              }
            }}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700  transition-all duration-100 text-white rounded-md cursor-pointer"
          >
            Delete {showCardOptions ? "Card" : "Column"}
          </li>
          <li className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700  transition-all duration-100 text-white rounded-md cursor-pointer">
            Move {showCardOptions ? "Card" : "Column"}
          </li>
        </ul>
        <button
          onClick={() => {
            if (showCardOptions) {
              setShowCardOptions!(false);
            } else {
              setShowColumnOptions!(false);
            }
          }}
          className="flex justify-center items-center text-2xl absolute top-3 right-2 rounded-md hover:text-white hover:bg-slate-600 h-7 w-7"
        >
          <IoClose />
        </button>
      </div>
    </section>
  );
};

export default Modal;
