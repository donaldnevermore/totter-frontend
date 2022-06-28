import React, { PropsWithChildren } from "react"
import { Stack, Box, Grid } from "@mui/material"

import styles from "./Layout.module.css"

export function Layout(props: PropsWithChildren) {
    return (
        <Grid container>
            <Grid item xs={10} className={styles.main}>
                {props.children}
            </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>
    )
}
