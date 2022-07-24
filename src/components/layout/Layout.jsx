import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Header from "components/Header/Header";
// import Footer from "components/Footer/Footer";
import { SMain } from "./styles";

const Layout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  // console.log(currentPath);
  const [isHeader, setIsheader] = useState(true);

  useEffect(() => {
    if (currentPath === "/login" || currentPath === "/register") {
      setIsheader(false);
      console.log(isHeader);
    } else {
      setIsheader(true);
    }
  }, []);

  return (
    <SMain>
      {isHeader && <header>header</header>}

      {/* PAGE CONTENT */}
      {children}

      {isHeader && <header>Footer</header>}
    </SMain>
  );
};

export default Layout;
