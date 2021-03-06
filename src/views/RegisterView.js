import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Image from "../img/Fond.png"

export default function LoginView(props) {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const theme = createTheme()

    function RegisterAndRedirect() {
        props.register()
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${Image})`,
                        backgroundRepeat: "no-repeat",

                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} elevation={6}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "green" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography
                            style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                                color: "white",
                            }}
                        >
                            Register
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                variant="standard"
                                color="success"
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                type="username"
                                id="username"
                                onChange={props.setUsername}
                                InputLabelProps={{
                                    style: { color: "white" },
                                }}
                                sx={{ input: { color: "white" } }}
                            />
                            <TextField
                                id="emailRegister"
                                variant="standard"
                                color="success"
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                InputLabelProps={{
                                    style: {
                                        color: "white",
                                    },
                                }}
                                name="email"
                                autoComplete="email"
                                sx={{ input: { color: "white" } }}
                                onChange={props.setEmail}
                                autoFocus
                            />

                            <TextField
                                margin="normal"
                                variant="standard"
                                color="success"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="passwordRegister"
                                onChange={props.setPwd}
                                InputLabelProps={{
                                    style: { color: "white" },
                                }}
                                sx={{ input: { color: "white" } }}
                                autoComplete="current-password"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{ backgroundColor: "green" }}
                                onClick={RegisterAndRedirect}
                            >
                                Register
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}
