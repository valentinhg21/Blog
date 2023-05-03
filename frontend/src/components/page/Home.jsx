import React from "react";
import { SearchBar } from "../layout/SearchBar";
import { Container } from "@mui/material";
import "./css/Home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <SearchBar />
      <Container maxWidth="xl" className="Container Homepage">
        <div class="Content">
          <h1>
            Bienvenido Valentín al blog, creado con la tecnologia MERN (Mongo,
            Express, React, Node)
          </h1>
          <p>
            Aquí encontraras todos los articulos que se agregaron recientemente
          </p>
          <Link className="Link" to="/articles">Ver todos los articulos</Link>
        </div>
      </Container>
    </>
  );
};
