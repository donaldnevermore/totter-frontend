
import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { AvatarSide } from "components/AvatarSide/AvatarSide"
import styles from "./Article.module.css"

export const Article: React.FC<any> = ({ data }) => {
    return (
        <article className={styles.article}>
            <AvatarSide avatar={data.author.avatar}/>

            <main className={styles.body}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} >
                    {data.content}
                </ReactMarkdown>
                <footer>
                    {/* <ChatBubbleOutline onClick={openEditor}></ChatBubbleOutline> */}
                    <span>Retweet</span>
                    <span>Like</span>
                </footer>
            </main>
        </article>
    )
}
