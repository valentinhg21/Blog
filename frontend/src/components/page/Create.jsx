import React, {useState} from "react";
import { Container, Box, TextField, Button, Alert } from "@mui/material";
import { FormControl } from "@mui/base";
import { useForm } from "../../hooks/useForm"

import { Fetching } from "../../helpers/Fetching"
import { Global } from "../../helpers/helper"
export const Create = () => {
  const { form, sent, changed } = useForm({})
  const [result, setResult ] = useState("no_enviado");
  const saveArticle = async (e) => {
    e.preventDefault();
    let newArticle = form;

    const {data, loading} = await Fetching(`${Global.url}/create`, "POST", newArticle);
   
    if(data.status === 'success'){
      setResult("save")
    }else{
      setResult("error")
    }

  }
  return (
    <Container maxWidth="xl" className="Container">
      <h1 className="Title">Agregar Articulo</h1>

      <FormControl >

      {result == "save" ? <Alert severity="success">Articulo creado correctamente!</Alert> : ""}
      {result == "error" ? <Alert severity="error">Error al crear el articulo.</Alert> : ""}
        <Box  sx={{ mt: 1, p: 1 }}>
          <TextField name="title" fullWidth  label="Nombre del Articulo" variant="outlined" onChange={changed}/>
        </Box>
        <Box  sx={{ mt: 1, p: 1 }}>
        <TextField
          name="content"
          label="Contenido"
          multiline
          fullWidth 
          rows={5}
          defaultValue=""
          onChange={changed}
        />
        </Box>
        <Box  sx={{ mt: 1, p: 1 }}>
          <Button  variant="contained" component="label" fullWidth>
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Box>
        <Box  sx={{ mt: 4, p: 1 }}>
          <Button type="submit" onClick={saveArticle} variant="outlined" fullWidth color="success" size="large">
            Crear Articulo
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
};
