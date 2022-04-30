import React, { useEffect, useState } from "react"
import "./App.css"
import GameModel from "./GameModel.js"

import { getCityDetails } from "./citySource.js"
import data from "./test_guesses.json"

import GameBoardView from "./views/GameBoardView"

import GuessForm from "./reactjs/GuessFormPresenter"

const App = () => {
    const model = new GameModel()

    const [target, setTarget] = useState()
    useEffect(() => {
        getCityDetails("Q1748").then((c) => setTarget(c.data))
    }, [])

    return (
        <div className="container" style={{}}>
            <div class="header">
                <h1 style={{ color: "blue" }}>Geordle</h1>
                <p style={{ color: "green" }}>The city guessing game</p>
            </div>
            <div class="body">
                The goal of this game is to find a mystery city using a limited
                number of guesses. Each new guess you make gives information on
                how the city you guessed compares to the one you need to find.
            </div>
            <br />
            <GuessForm model={model} />
            <br />
            <GameBoardView guesses={data} target={target} />
            {target ? (
                <div>
                    <p> Mystery city:</p>
                    <p> City: {target.name} </p>
                    <p> Country: {target.country} </p>
                    <p> Population: {target.population} </p>
                    <p> Latitude: {target.latitude.toFixed(2)} </p>
                    <p> Longitude: {target.longitude.toFixed(2)} </p>
                </div>
            ) : (
                "no data"
            )}
        </div>
    )
}

export default App