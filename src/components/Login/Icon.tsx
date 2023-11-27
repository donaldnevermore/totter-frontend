import React, { FC, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, MenuItem, Avatar, Box, IconButton } from "@mui/material"

import { User } from "lib/user.js"
import styles from "./Icon.module.css"
import { getLocal, setLocal } from "lib/util.js"
import { TextButton } from "components/TextButton/TextButton.js"

export const LoginIcon: FC = () => {
    const navigate = useNavigate()
    const user: any = getLocal("/users/login/")
    const isLoggedIn = !!user.token

    const handleLogout = () => {
        setLocal("/users/login/", "")
    }

    const goToLogin = () => {
        navigate("/login")
    }

    if (isLoggedIn) {
        return (
            <div>
                <IconButton>
                    <Avatar src={user.avatar} />
                </IconButton>
                <Menu open={true}>
                    <MenuItem>
                        <Link to={`personal/${user.id}`}>
                            <div className={styles.item}>
                                我的主页
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <div className={styles.item} onClick={handleLogout}>
                            退出登录
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        )
    }

    return (
        <TextButton onClick={goToLogin}>Login / Signup</TextButton>
    )
}
