import React from "react"
import { RecoilRoot } from "recoil"
import { Outlet } from "react-router-dom"
import { Grid } from "@mui/material"

import { Nav } from "components/Nav/Nav"

export default function App() {
    return (
        <RecoilRoot>
            <React.StrictMode>
                <Grid container>
                    <Grid item xs={2}>
                        <Nav />
                    </Grid>
                    <Grid item xs={10}>
                        <Outlet />
                    </Grid>
                </Grid>
            </React.StrictMode>
        </RecoilRoot>
    )
}
