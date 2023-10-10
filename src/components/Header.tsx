// Icons
// import { BsTrello } from "react-icons/bs";
// import Nav from "./Nav";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Header = () => {
  return (
    <>
      {/* Start Mobile Header  */}
      {/* <header className="flex px-3 h-12">
        <img src="/more.svg" className="w-6" />
      </header> */}
      {/* End Mobile Header  */}
      <header className="flex fixed top-0 left-0 right-0 z-30 bg-blue-500 justify-between items-center h-12 shadow-sm border-b border-gray-400 px-3 overflow-hidden">
        <LeftSection />
        <RightSection />
      </header>
    </>
  );
};

export default Header;
