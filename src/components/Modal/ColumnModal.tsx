import { FC } from "react";
import { Column, Id } from "../../types";
import { IoClose } from "react-icons/io5";

interface IProps {
  showColumnOptions: boolean;
  setShowColumnOptions: (isShow: boolean) => void;
  deleteColumn: (id: Id) => void;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  column: Column;
}

const ColumnModal: FC<IProps> = ({
  setShowColumnOptions,
  deleteColumn,
  setEditMode,
  column,
}) => {
  return (
    <section
      onClick={(e) => {
        e.stopPropagation();
        setShowColumnOptions(false);
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
              setEditMode(true);
              setShowColumnOptions(false);
            }}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700  transition-all duration-100 text-white rounded-md cursor-pointer"
          >
            Edit Column
          </li>
          <li
            onClick={() => {
              setShowColumnOptions(false);
              deleteColumn(column.id);
            }}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700  transition-all duration-100 text-white rounded-md cursor-pointer"
          >
            Delete Column
          </li>
          <li className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700  transition-all duration-100 text-white rounded-md cursor-pointer">
            Move Column
          </li>
        </ul>
        <button
          onClick={() => {
            setShowColumnOptions(false);
          }}
          className="flex justify-center items-center text-2xl absolute top-3 right-2 rounded-md hover:text-white hover:bg-slate-600 h-7 w-7"
        >
          <IoClose />
        </button>
      </div>
    </section>
  );
};

export default ColumnModal;
