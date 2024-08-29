import React, { useState, useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cardcharacter } from "./Cardcharacter";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

useEffect(() =>
actions.getdevData()
,[])



    return(
        <>
        {store.devCharacters.map((character, index)=>  <Cardcharacter key={index}/>)}
        
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