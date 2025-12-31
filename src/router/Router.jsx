import React, { useEffect, useState, createContext, useContext } from "react";

const LocationContext = createContext({ pathname: "/" });

const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return children.map(child =>
    child.props.path === currentPath ? child : null
  );
};

export const Route = ({ component: Component }) => <Component />;

// ✅ ADD THIS
export const useLocation = () => {
  return useContext(LocationContext);
};

export default Router;
