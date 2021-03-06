import React from "react"
import styles from "./IconTextButton.module.css"

export function IconTextButton(props: React.HTMLProps<HTMLDivElement>) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.btn} {...props}></div>
        </div>
    )
}
