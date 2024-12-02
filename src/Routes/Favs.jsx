import React, {useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContext(ContextGlobal);

  return (
    <div className={`favs ${state.theme}`}>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favorites.map((dentist) => (
        <Card key={dentist.id} dentist={dentist} isFav={true} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
