import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "@mui/material"
import { ChatBubbleOutline } from "@mui/icons-material"

import styles from "pages/Tweets/Tweet.module.css"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"
import { URL } from "shared/url"

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

export function Tweet(props: { tweet: TweetItem }) {
    const { tweet } = props
    const { author } = tweet
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const openEditor = (event: React.MouseEvent) => {
        event.stopPropagation()
        setShow(!show)
    }

    const handleComment = (content: string) => {
        console.log(content)
    }

    const goToTweet = () => {
        navigate(`${URL.TWEETS}${tweet.id}`)
    }

    const goToUser = (event: React.MouseEvent) => {
        event.stopPropagation()
        navigate(`${URL.USERS}${author.id}`)
    }

    return (
        <div>
            <main className={styles.main} onClick={goToTweet}>
                <aside className={styles.menu}>
                    <Avatar className={styles.avatar}>
                        {author.avatar}
                    </Avatar>
                </aside>

                <article className={styles.content}>
                    <header className={styles.head}>
                        <div className={styles.info}>
                            <span className={styles.name} onClick={goToUser}>
                                {author.name}
                            </span>
                            <span className={styles.username}>
                                {author.username}
                            </span>
                            <span className={styles.dot}>·</span>
                            <time className={styles.time}>2h</time>
                        </div>
                        <div className={styles.more}>
                            <span className={styles.icon}>
                        ...
                            </span>
                        </div>
                    </header>
                    <article className={styles.body}>
                        新开了一个标签 #深海的面条 记录和评价我吃的各种面条, 争取一周更一条叭 w
                    </article>
                    <footer>
                        <ChatBubbleOutline onClick={openEditor}></ChatBubbleOutline>
                        <span>Retweet</span>
                        <span>Like</span>
                    </footer>
                </article>
            </main>
            {show ? (<MarkdownEditor text="Reply" handleSubmit={handleComment} />) : null }
        </div>
    )
}
