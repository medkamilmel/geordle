import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import BannerView from "./BannerView"

export default function HelpView(props) {
    
    function gameACB() {
        window.location.hash = "#game"
    }

    return (
        <div>
            <BannerView/>
            <div class="header">
                <p style={{ color: "green" }}>The city guessing game</p>
            </div>
            <div class="body" style={{ color: "white" }}>
                The goal of this game is to find a mystery city using a limited
                number of guesses. Each new guess you make gives information on
                how the city you guessed compares to the one you need to find.
            </div>
        </div>
    )
}
