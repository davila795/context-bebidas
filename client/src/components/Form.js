import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

function Form() {
  const [busqueda, busquedaSet] = useState({
    nombre: "",
    categoria: ""
  });

  const { categorias } = useContext(CategoriasContext);
  const { busquedaSearch, fetchSet } = useContext(RecetasContext);

  const handleInputChange = (e) => {
    busquedaSet({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSet(true);
    busquedaSearch(busqueda);
  }

  return (
    <form
      className="col-12"
      onSubmit={handleSubmit}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="co-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por ingrediente"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={handleInputChange}
          >
            <option value="">-- Selecciona categoría --</option>
            {categorias.map(categoria => (
              <option
                key={categoria.strCategory}
                value={categoria.strCategory}
              >{categoria.strCategory}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar bebidas"
          />
        </div>
      </div>
    </form>
  )
}

export default Form
