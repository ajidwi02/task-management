import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LogOut, CheckSquare } from "lucide-react";
import Button from "../common/Button";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <CheckSquare className="text-blue-600" size={28} />
            <span className="ml-2 text-xl font-bold text-gray-900">
              TaskManager
            </span>
          </div>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            variant="secondary"
            className="flex items-center"
          >
            <LogOut size={18} className="mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
