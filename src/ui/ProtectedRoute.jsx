import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../features/Authentication/useCurrentUser";
import { useEffect } from "react";
import Loading from "../ui/Loading";
/* eslint-disable react/prop-types */
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useCurrentUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading) return <Loading />;
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
