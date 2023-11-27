import React from "react"
import { Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"

import styles from "./Nav.module.css"
import { IconTextButton } from "components/IconTextButton/IconTextButton.js"
import { LoginIcon } from "components/Login/Icon.js"

export const Nav = () => {
    const navigate = useNavigate()

    return (
        <Stack className={styles.nav}>
            <IconTextButton onClick={() => navigate("/")}>Home</IconTextButton>
            <IconTextButton>Profile {user.username}</IconTextButton>
            {/* <LoginIcon /> */}
        </Stack>
    )
}
