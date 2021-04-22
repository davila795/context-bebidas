import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, recetasSet] = useState([]);
  const [busqueda, busquedaSearch] = useState({
    nombre: "",
    categoria: ""
  });
  const [fetch, fetchSet] = useState(false);
  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (fetch) {
      const fetchApi = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const { data } = await axios.get(url);
        recetasSet(data.drinks);
      }
      fetchApi();
    }
  }, [busqueda]);

  return (
    <RecetasContext.Provider
      value={{
        busquedaSearch,
        fetchSet
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  )
}

export default RecetasProvider;
