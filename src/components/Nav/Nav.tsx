import React from "react"
import { Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { atom, selector, useRecoilState, useRecoilValue } from "recoil"

import styles from "./Nav.module.css"
import { IconTextButton } from "components/IconTextButton/IconTextButton"
import { LoginIcon } from "components/Login/Icon"

const userState = atom({
    key: "user_state",
    default: {
        username: "123"
    }
})

export const Nav = () => {
    const navigate = useNavigate()
    const [user, _] = useRecoilState<any>(userState)

    return (
        <Stack className={styles.nav}>
            <IconTextButton onClick={() => navigate("/")}>Home</IconTextButton>
            <IconTextButton>Profile {user.username}</IconTextButton>
            {/* <LoginIcon /> */}
        </Stack>
    )
}
