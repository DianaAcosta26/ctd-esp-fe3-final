import { createContext, useReducer, useMemo, useEffect } from "react";

export const initialState = {
  theme: "light",
  favorites: JSON.parse(localStorage.getItem("favorites")) || []
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      }
      // HACER ESTO

    case "ADD_FAVORITE":
      if (state.favorites.some((fav) => fav.id === action.payload.id)) {
        return state
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((dentist) => dentist.id !== action.payload.id),
      }

    default:
      return state
  }
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites))
  }, [state.favorites])

  const value = useMemo(() => ({ state, dispatch }), [state])

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};