import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChatBubbleOutline } from "@mui/icons-material"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import styles from "./Tweet.module.css"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"
import { URL } from "lib/url"
import { AvatarSide } from "components/AvatarSide/AvatarSide"
import type { TweetItem } from "lib/tweet-item"

export const Tweet: React.FC<{
    tweet: TweetItem
}> = ({ tweet }) => {
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
        navigate(`${URL.TWEETS}/${tweet.id}`)
    }

    const goToUser = (event: React.MouseEvent) => {
        event.stopPropagation()
        navigate(`${URL.USERS}${author.id}`)
    }

    return (
        <div className={styles.wrapper}>
            <main className={styles.main} onClick={goToTweet}>
                <AvatarSide avatar={author.avatar}></AvatarSide>

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
                    <ReactMarkdown remarkPlugins={[remarkGfm]} >
                        {tweet.content}
                    </ReactMarkdown>
                    <article>
                    </article>
                    <footer>
                        <ChatBubbleOutline onClick={openEditor}></ChatBubbleOutline>
                    </footer>
                </article>
            </main>
            {show ? (<MarkdownEditor text="Reply" handleSubmit={handleComment} />) : null }
        </div>
    )
}
