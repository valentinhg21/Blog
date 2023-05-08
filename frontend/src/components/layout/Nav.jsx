import React from "react";

import { Link } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import './css/Nav.css'

export const Nav = ({pages, handleCloseNavMenu, textColor}) => {


  return (
    <>
        {pages.map((page) => (
          <MenuItem               
          key={page}
          onClick={handleCloseNavMenu}>
            <Link
              to = {page}
            >
              <Typography textAlign="center" color={textColor} className="Nav__link">{page}</Typography>
            </Link>
          </MenuItem>
        ))}
   
    </>
  );
};
