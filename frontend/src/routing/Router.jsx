import React from "react";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/page/Home";
import { Articles } from "../components/page/Articles"
import { Create } from "../components/page/Create";

import { Header } from "../components/layout/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};
