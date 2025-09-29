import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed z-5 backdrop-blur-2xl flex  justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer">
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44"
        onClick={() => navigate("/")}
      />
      <button>
        Get Started <ArrowRight />
      </button>
    </div>
  );
};

export default Navbar;
