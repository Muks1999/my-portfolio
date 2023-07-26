import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Search } from "./Components/SearchDiv/Search";
import { Jobs } from "./Components/JobDiv/Jobs";
import { Value } from "./Components/ValueDiv/Value";
import { Footer } from "./Components/FooterDiv/Footer";
import { SideNav } from "./Components/SideNav/SideNav";
import { Home } from "./Components/HomeDiv/Home";
import { Work } from "./Components/Work/Work";

export const App = () => {
  return(<div>
    {/* <SideNav/> */}
    <Home/>
    {/* <Work/> */}
    {/* <Search/>
    <Jobs/>
    <Value/>
    <Footer/> */}
  </div>)
};
