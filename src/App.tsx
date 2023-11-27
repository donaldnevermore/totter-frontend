import React from "react"
import { Outlet } from "react-router-dom"
import { Grid } from "@mui/material"

import { Nav } from "components/Nav/Nav.js"
import "./App.css"

export default function App() {
    return (
        <Grid container className="App">
            <Grid item xs={2}>
                <Nav />
            </Grid>
            <Grid item xs={10}>
                <Outlet />
            </Grid>
        </Grid>
    )
}
