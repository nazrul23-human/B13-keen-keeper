import React from 'react';

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Outlet />
    </div>
  );
};

export default MainLayout;