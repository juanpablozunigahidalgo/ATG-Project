import { Route, Routes } from "react-router-dom";
import * as React from "react";
import Display from "./Pages/Display/Display";
import Home from "./Pages/Home/Home";

type AppRouterProps = {};

const AppRouter = ({}: AppRouterProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/display/:id" element={<Display />} />
    </Routes>
  );
};
export default AppRouter;
