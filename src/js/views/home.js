import React, { useState, useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cardcharacter } from "./Cardcharacter";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [id, setid] = useState([])

    return(
        <>
        <h1 className="text-danger">Characters</h1>

        <div className="row d-flex flex-nowrap my-5" style={{overflowX:"scroll"}}>
        {store.devCharacters.map((character, index)=>  <Cardcharacter key={index}
        
         name={character.name} 
         hairColor={character.hair_color} 
         eyeColor={character.eye_color} 
         gender={character.gender}
         index={character.url[character.url.length - 2]}

         />)}
        </div>
         <h1 className="text-danger">Planets</h1>
        <div className="row d-flex flex-nowrap my-5" style={{overflowX:"scroll"}}>
        {store.devCharacters.map((character, index)=>  <Cardcharacter key={index}
        
         name={character.name} 
         hairColor={character.hair_color} 
         eyeColor={character.eye_color} 
         gender={character.gender}
         index={character.url[character.url.length - 2]}

         />)}
        </div>

        </>

    )
};









/* 
pseudocodigo
crear componente de cartas
traer componentes de api para rellenar cartas
agregar visualizacion de cartas individuales
agregar boton para cambiar de visualizacion
agregar boton de favoritos a las cartas
agregar lista de favoritos
agregar enlace a visualizacion de cartas individuales en distintos botones
agregar boton de eliminar de favoritos
actualizar estilo de boton de favoritos acorde a el estado actual
agregar boton para volver al home con el logo de starwars
*/