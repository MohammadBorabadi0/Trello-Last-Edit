import { BiChevronLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

// interface IProps {

// }

const MoveOption = () => {
  return (
    <section
      onClick={(e) => {
        e.stopPropagation();
        // if (showCardOptions) {
        //   setShowCardOptions!(false);
        // } else {
        //   setShowColumnOptions!(false);
        // }
      }}
      className="flex justify-center items-center z-40 bg-slate-700 cursor-default fixed inset-0 h-screen w-full opacity-90"
    >
      <div
        className="relative bg-white p-16 rounded-md shadow-md cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex items-center justify-between">
          <button>
            <BiChevronLeft />
          </button>
          <h3>Move List</h3>
          <button>
            <IoClose />
          </button>
        </div>
        <div>
          <h4>Board</h4>
          <span>Board-1</span>
        </div>
        <div>
          <button>Move</button>
        </div>
      </div>
    </section>
  );
};

export default MoveOption;
