import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { cn } from "../utils/utils";
import Header from "../components/Header/Index";
import Home from "../pages/Home/Index";
import Details from "../pages/Details/Index";

const Router: FC = () => {
  return (
    <div className={cn("sm:hidden overflow-x-hidden")}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:pokeName" element={<Details />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
