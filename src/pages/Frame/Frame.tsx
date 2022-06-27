import React, { PropsWithChildren } from "react"
import { Stack, Box, Grid } from "@mui/material"

import styles from "./Frame.module.css"

export function Frame(props: PropsWithChildren) {
    return (
        <Grid container>
            <Grid item xs={10} className={styles.main}>
                {props.children}
            </Grid>
            <Grid item xs={2}>Ads</Grid>
        </Grid>
    )
}
