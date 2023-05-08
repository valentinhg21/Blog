import React from 'react'
import { Grid } from "@mui/material";
import { ArticleItem } from '../layout/ArticleItem';

export const List = ({articles}) => {
  return (
    articles.map((article) => {
        return(
          <Grid item xs={12} md={6} key={article._id}>
            <ArticleItem  article={article}/>
          </Grid> 
        )
    })
  )
}

