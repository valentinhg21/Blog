import React, {useState, useEffect} from "react";

import { List } from "../page/List";

import "./css/Articles.css";
import { Container, Grid } from "@mui/material";
import { Global } from '../../helpers/helper'
import { Fetching } from "../../helpers/Fetching";


export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [load, setLoad ] = useState(true);
  useEffect(() => {
    getArticles();

  }, [])

  const getArticles = async () => {
    const BASE_URL = `${Global.url}/articles/`
    const {data, loading} = await Fetching(BASE_URL, "GET", setArticles );
    if(data.status === 'success'){
      setArticles(data.articles)
    }
    setLoad(loading)

  }
  return (
    <Container maxWidth="xl" className="Container">
      <h1 className="Title">Articulos</h1>
      <Grid
      container 
      spacing={2}
      >
        {load ? (<div className="Loader__container"><span className="loader"></span></div>) 
        
        : 
        
        
        articles.length >= 1 ? (
          <List articles={articles}/>
        ) : (
          <p>No hay articulos para mostrar</p>
        )
     
        }


      </Grid>
    </Container>
  );
};
