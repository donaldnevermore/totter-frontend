import React from "react"
import styles from "./IconTextButton.module.css"

export function IconTextButton(props: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={styles.btn}></div>
}
