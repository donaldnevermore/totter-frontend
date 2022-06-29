import React from "react"
import { Avatar } from "@mui/material"

import styles from "./AvatarSide.module.css"

export const AvatarSide: React.FC<{
    avatar: string
}> = ({ avatar }) => {
    return (
        <main className={styles.main}>
            <Avatar className={styles.avatar}>
                {avatar}
            </Avatar>
        </main>
    )
}
