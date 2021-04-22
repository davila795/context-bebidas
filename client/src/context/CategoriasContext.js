import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CategoriasContext = createContext(); //Crear Context

//Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {
  const [categorias, categoriasSet] = useState([]); //Crear el state del context

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      const { data } = await axios.get(url);
      categoriasSet(data.drinks);
    }
    fetchApi();
  }, [])

  return (
    <CategoriasContext.Provider
      value={{
        categorias
      }}
    >{props.children}</CategoriasContext.Provider>
  )
}

export default CategoriasProvider;
