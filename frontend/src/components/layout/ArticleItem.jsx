import React from "react";
import "./css/ArticleItem.css";
import { truncateString } from '../../helpers/helper'
import { Button, Stack } from "@mui/material";


export const ArticleItem = ({article}) => {
    const { title, content, image } = article
    return (
    <div className="Article__Item">
      <div className="Article__Item-img">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="Article__Item-content">
        <h2>{title}</h2>
        <p className="text">{truncateString(content, 100, "...")}</p>
        <p className="author">Valentín Gutiérrez</p>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="info" spacing={2}>Editar</Button>
          <Button variant="contained" color="error">Eliminar</Button>
        </Stack>

      </div>
    </div>
  );
};
