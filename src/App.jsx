import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/Team";
import Projects from "./Pages/Projects/Projects";
import Event from "./Pages/EventsPage/Event";
import Cta from "./Pages/Cta/Cta";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />

        {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} /> */}

        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Projects />} />
        <Route path="events" element={<Event />} />
        <Route path="cta" element={<Cta />} />
      </Route>
    </Routes>
  );
};

export default App;
