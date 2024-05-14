import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Teams } from "./pages/Teams";
import { TeamCard } from "./components/TeamCard";
import { Stats } from "./components/Stats";

import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= { <Home/> }/>
        <Route path="/teams" element= { <Teams/> }/>
        <Route path="/teams/:teamId" element= { <TeamCard/> }/>
        <Route path="/stats" element= { <Stats/>}/>
      </Routes>
    </BrowserRouter>
  )
};