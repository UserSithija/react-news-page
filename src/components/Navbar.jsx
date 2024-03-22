import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinkStyle = "border-r-4 sm:border-r-0 sm:border-b-2 sm:py-8  ";
  const glassBackground =
    "bg-white backdrop-filter  backdrop-blur-xl bg-opacity-10";

  const navlinkElements = navLinks.map((link, index) => (
    <NavLink
      key={link.id}
      to={link.path}
      className={({ isActive }) => (isActive ? navLinkStyle : " sm:py-8")}
    >
      <span className="font-bold mr-2">0{index}</span> {link.name}
    </NavLink>
  ));

  return (
    <nav className="fixed relative top-0 w-full h-auto mt-4 flex justify-between items-center sm:mt-0 lg:mt-8">
      <div className={`flex  justify-center items-center w-1/6   sm:h-24`}>
        <img src={logo} alt="" />
      </div>
      <button
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="block sm:hidden p-4"
      >
        <img
          className=" relative z-40"
          src={isSidebarOpen ? close : hamburger}
          alt=""
        />
      </button>
      <Sidebar
        isOpen={isSidebarOpen}
        navlinkElements={navlinkElements}
        glassBackground={glassBackground}
      />
      <span className="hidden  bg-white  lg:block md:w-2/6 h-[1px]"></span>
      {/* links */}
      <div
        className={`hidden sm:w-4/6 justify-between  items-center capitalize  ${glassBackground} h-24 px-8 sm:flex lg:w-3/6`}
      >
        {navlinkElements}
      </div>
    </nav>
  );
};

const Sidebar = ({ isOpen, navlinkElements, glassBackground }) => {
  return (
    <aside
      className={`fixed top-0 right-0 w-[60vw] h-screen ${glassBackground} ${
        isOpen ? "translate-x-0 " : "translate-x-full "
      } duration-300 ease-in-out transition  sm:hidden`}
    >
      <div className="mt-20 pl-8 pt-8 flex flex-col space-y-4 uppercase">
        {navlinkElements}
      </div>
    </aside>
  );
};

export default Navbar;
