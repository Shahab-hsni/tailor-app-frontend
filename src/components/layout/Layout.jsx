import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBeer, FaUserTie } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/Ri";

import { SMain, RMain } from "./styles";
import Sidebar from "../Sidebar/Sidebar";

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

  const pages = [
    {
      name: "Dashboard",
      source: "/",
      icon: <RiDashboardFill />,
    },
    {
      name: "Customers",
      source: "/customers",
      icon: <FaUserTie />,
    },
    {
      name: "Orders",
      source: "/orders",
      icon: <FaBeer />,
    },
  ];

  return (
    <>
      {isHeader ? (
        <RMain>
          <Sidebar pages={pages} />
          {children}
        </RMain>
      ) : (
        <SMain>{children}</SMain>
      )}
    </>

    // <SMain>
    //   {isHeader && <header>header</header>}
    //   {isHeader && <Sidebar pages={pages} />}

    //   {/* PAGE CONTENT */}
    //   {children}

    //   {isHeader && <header>Footer</header>}
    // </SMain>
  );
};

export default Layout;
