import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div>
      <header className="bg-red-500 h-16">
        <nav className="bg-green-500 h-full flex justify-between items-center w-full max-w-[1220px] mx-auto px-5">
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
    </div>
  );
};

export default Navbar;
