import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const nav = {
    start: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
  return (
    <motion.div variants={nav} initial="start" animate="visible">
      <header className="bg-red-500 h-16 fixed w-full z-[999]">
        <nav className="bg-green-500 h-full flex justify-between items-center w-full max-w-[1230px] mx-auto px-[20px]">
          <span className="text-3xl">IRepare</span>
          <ul className="space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/login">
              <Button>Login</Button>
            </NavLink>
          </ul>
        </nav>
      </header>
    </motion.div>
  );
};

export default Navbar;
