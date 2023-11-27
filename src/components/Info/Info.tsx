import React, { FC } from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"


import styles from "./Info.module.css"

dayjs.locale("zh-CN")
dayjs.extend(relativeTime)

export const Info: FC< {author: string, createdAt: string, updatedAt: string }> = ({ author, createdAt, updatedAt }) => {
    return (
        <div className={styles.info}>
            <span>{author}</span>
            <span>发布于</span>
            <span>{dayjs(createdAt).format("YYYY-MM-DD HH:mm")}</span>
            <span>更新于</span>
            <span>{dayjs(updatedAt).fromNow()}</span>
        </div>
    )
}
