import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";


const PlanetInfo = () => {
    const params = useParams();
    const { id } = params;
    const { store } = useContext(Context);
    const [actualPage, setActualPage] = useState();

    useEffect(() => {
        if (store.planets == 0) return;
        const actualInfo = store.planets.find((item) => item.result.uid == id);
        console.log(actualInfo);
        setActualPage(actualInfo);
    }, [params])

    return (
        <>
            <div className="row m-5 ">
                <div className="col-6 text-center">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${actualPage?.result.uid}.jpg`} />
                </div>
                <div className="col-6 text-start">
                    <h2>{actualPage?.result.properties.name}</h2>
                    <p> {actualPage?.result.description}</p>
                    <p>What is the name of the galaxy in Star Wars?
                        The Star Wars Galaxy. Its dimension is around 120,000 light-years or about 37,000 parsecs (with a parsec being equivalent to 3,258 light-years). It is estimated that some 100 quadrillion different life forms inhabit it.</p>

                </div>
            </div>
            <div className="row text-danger p-5 border-top border-danger m-5">
                <div className="col-2 text-center">
                    <h4>Name</h4>
                    <h5>{actualPage?.result.properties.name}</h5>
                </div>
                <div className="col-2 text-center">
                    <h4>Climate</h4>
                    <h5>{actualPage?.result.properties.climate}</h5>
                </div>
                <div className="col-2 text-center">
                    <h4>Population</h4>
                    <h5>{actualPage?.result.properties.populetion}</h5>
                </div>
                <div className="col-1 text-center">
                    <h4>Orbital Period</h4>
                    <h5>{actualPage?.result.properties.orbital_period}</h5>
                </div>
                <div className="col-2 text-center">
                    <h4>Rotation Period</h4>
                    <h5>{actualPage?.result.properties.rotation_period}</h5>
                </div>
                <div className="col-2 text-center">
                    <h4>Diameter</h4>
                    <h5>{actualPage?.result.properties.diameter}</h5>
                </div>
            </div>
        </>
    )
}

export default PlanetInfo;