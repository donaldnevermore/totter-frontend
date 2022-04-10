import React from "react"
import { Link } from "react-router-dom"
import { Avatar, Stack } from "@mui/material"

import { Info } from "components/Tweets/Info"
import { URL } from "shared/url"
import styles from "components/Tweets/Tweet.module.css"

export interface TweetItem {
    title: string
    id: number
    content: string
    created_at: number
    updated_at: number
    author: {
        id: number
        username: string
        name: string
        avatar: string
    }
}

export function Tweet(props: { tweet?: TweetItem }) {
    // const { tweet } = props
    const tweet: any = {}

    return (
        <div>
            <main className={styles.main}>
                <aside className={styles.menu}>
                    <Avatar className={styles.avatar}>xxx</Avatar>
                </aside>
                <article className={styles.content}>
                    <header className={styles.head}>
                        <div className={styles.info}>
                            <span className={styles.name}>nameesjdflk</span>
                            <span className={styles.username}>@username</span>
                            <span className={styles.dot}>·</span>
                            <time className={styles.time}>2h</time>
                        </div>
                        <div className={styles.more}>
                            <span className={styles.icon}>
                        ...
                            </span>
                        </div>
                    </header>
                    <article className={styles.body}>新开了一个标签 #深海的面条 记录和评价我吃的各种面条, 争取一周更一条叭 w</article>
                </article>
            </main>

            <article className={styles.article}>
                <div className={styles.menu}>
                    <Avatar className={styles.avatar}>xxx</Avatar>
                </div>
                <div className={styles.content}>
                    <div className={styles.head}>
                        <span className={styles.name}>nameesjdflk</span>
                        <span >@username</span>
                        <span className={styles.dot}>·</span>
                        <time className={styles.time}>2h</time>
                    </div>
                    <div className={styles.body}>新开了一个标签 #深海的面条 记录和评价我吃的各种面条, 争取一周更一条叭 w</div>
                </div>
            </article>
        </div>
    )
}
