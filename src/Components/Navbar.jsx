import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal);
  const changeTheme = () =>{
    dispatch({type: "TOGGLE_THEME"})
  }

  // className={` ${state.theme}`
  return (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contacto</Link>
    <Link to="/favs">Destacados</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>Change theme</button>
  </nav>
  )
}

export default Navbar