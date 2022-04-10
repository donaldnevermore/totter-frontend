import React from "react"
import { Stack, Box } from "@mui/material"

import styles from "./Side.module.css"
import { IconTextButton } from "components/IconTextButton/IconTextButton"

export function Side() {
    return (
        <Stack className={styles.side}>
            <IconTextButton>Home</IconTextButton>
            <IconTextButton>Profile</IconTextButton>
        </Stack>
    )
}
