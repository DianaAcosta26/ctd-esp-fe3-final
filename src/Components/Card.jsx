import {useContext} from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";



const Card = ({dentist, isFav = false}) => {
  const {state, dispatch} = useContext(ContextGlobal);

  const addFavorite = (dentist) =>{
    if (state.favorites.some((fav) => fav.id === dentist.id)) {
      alert(`El dentista ${dentist.name}  ya está agregado`)
      }else{
        alert(`El dentista ${dentist.name} se agregó`)
      }
    dispatch({type: "ADD_FAVORITE", payload: dentist })
  }
  const removeFavorite = (dentist) =>{
    dispatch({type: "REMOVE_FAVORITE", payload: dentist})
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        <Link to={`/dentist/${dentist.id}`} className="card-link">
        <img src="/images/doctor.jpg" alt="" className="card-img" />
        <h3>{dentist.name}</h3>
        <p><strong>Username:</strong> {dentist.username}</p>
      </Link>
        <button onClick={()=> isFav ? removeFavorite (dentist): addFavorite(dentist)} className="favButton">{isFav ? "Remover" : "Favorito"}</button>
    </div>
  );
};

export default Card;
