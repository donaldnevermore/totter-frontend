import React from "react"
import { Stack, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"

import styles from "./Side.module.css"
import { IconTextButton } from "components/IconTextButton/IconTextButton"

export function Side() {
    const navigate = useNavigate()

    return (
        <Stack className={styles.side}>
            <IconTextButton onClick={() => navigate("/home")}>Home</IconTextButton>
            <IconTextButton>Profile</IconTextButton>
        </Stack>
    )
}
