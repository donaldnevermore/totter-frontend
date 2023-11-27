import React from "react"
import { Link, BrowserRouter } from "react-router-dom"
import { AppBar, Toolbar, Input, Box } from "@mui/material"

import { Feature } from "components/Nav2/Feature.js"
import styles from "./Nav2.module.css"

export function Nav2() {
    return (
        <AppBar className={styles.whiteHeader}>
            <Toolbar className={styles.nav}>
                <Box>
                    <BrowserRouter>
                        <Link to="/">
                            <img className={styles.logo} src="/logo192.png" alt="logo" />
                            <span>Post Bar</span>
                        </Link>
                    </BrowserRouter>
                    <Input className={styles.search}
                        placeholder="搜点感兴趣的东西…"
                    />
                </Box>
                <Box >
                    <Feature />
                </Box>
                <Box >
                </Box>
            </Toolbar>
        </AppBar>
    )
}
