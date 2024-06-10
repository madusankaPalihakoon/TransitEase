import { Navigate } from "react-router-dom";
import { getItem, getUser } from "../util/handleStorage";

const ProtectedRoute = ({ children }) => {
  const token = getItem("token");
  const user = getUser();

  if (!token || !user) {
    // If no token or user is found, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If token and user are found, render the child components
  return children;
};

export default ProtectedRoute;
