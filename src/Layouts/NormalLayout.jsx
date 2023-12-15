import React from "react";

import { Outlet } from "react-router-dom";

const NormalLayout = () => {
  return (
    <div className="side-layout">
      <Outlet />
    </div>
  );
};

export default NormalLayout;
