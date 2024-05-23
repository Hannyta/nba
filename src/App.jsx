import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Teams } from "./pages/Teams";
import { TeamCard } from "./components/TeamCard";
import { PlayerDetail } from "./components/PlayerDetail";
import { GameList } from "./pages/GameList";
import { Navbar } from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";

import './App.css'
import { Players } from "./pages/Players";

export const App = () => {

  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
      localStorage.setItem("currentTheme", theme)
  }, [theme])

  return (
    <BrowserRouter>
      <div className={`containerTheme ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamCard />} />
          <Route path="/players" element={<Players />} />
          <Route path="/player/:playerId" element={<PlayerDetail />} />
          <Route path="/games" element={<GameList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
};