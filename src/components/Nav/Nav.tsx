import React from "react"
import { Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"

import styles from "./Nav.module.css"
import { IconTextButton } from "components/IconTextButton/IconTextButton"

export function Nav() {
    const navigate = useNavigate()

    return (
        <Stack className={styles.side}>
            <IconTextButton onClick={() => navigate("/")}>Home</IconTextButton>
            <IconTextButton>Profile</IconTextButton>
        </Stack>
    )
}
