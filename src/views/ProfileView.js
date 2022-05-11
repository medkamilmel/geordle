import React from "react"
import BannerView from "../views/BannerView.js"
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    doc,
    setDoc,
    orderBy,
    limit,
    updateDoc,
    increment,
    onSnapshot,
    arrayUnion,
    arrayRemove,
    addDoc,
    getDoc,
} from "firebase/firestore"
import { auth, db } from "../firebaseModel"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { getUserInfo } from "../firebaseModel"
import { createTheme, ThemeProvider } from "@mui/material/styles"

export default function ProfileView(props) {
    console.log(props.currentUser)

    return (
        <div>
            <BannerView />
            <div>{props.currentUser}</div>
            <br />
            <Typography
                color="white"
                variant="body1"
                align="center"
                style={{ width: "50%" }}
            >
                The goal of this game is to find a mystery city using a limited
                number of guesses. Each new guess you make gives information on
                how the city you guessed compares to the one you need to find.
            </Typography>
        </div>
    )
}