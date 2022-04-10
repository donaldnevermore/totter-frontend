import React from "react"
import styles from "./TextButton.module.css"

export function TextButton(props: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={styles.btn}></div>
}
