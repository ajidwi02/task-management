import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Button
          onClick={() => navigate("/dashboard")}
          className="flex items-center mx-auto"
        >
          <Home size={20} className="mr-2" />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
