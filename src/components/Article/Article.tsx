import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ChatBubbleOutline } from "@mui/icons-material"

import { AvatarSide } from "components/AvatarSide/AvatarSide.js"
import { MDEditor } from "components/MDEditor/MDEditor.js"
import styles from "./Article.module.css"

export const Article: React.FC<any> = ({ data, handleSubmit }) => {
    const [show, setShow] = useState(false)

    const openEditor = (event: React.MouseEvent) => {
        event.stopPropagation()
        setShow(!show)
    }

    return (
        <div>
            <article className={styles.article}>
                <AvatarSide avatar={data.author.avatar}/>

                <main className={styles.body}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} >
                        {data.content}
                    </ReactMarkdown>
                    <footer>
                        <ChatBubbleOutline onClick={openEditor}></ChatBubbleOutline>
                    </footer>
                </main>
            </article>
            {show ? (<MDEditor text="Reply" handleSubmit={handleSubmit} />) : null }
        </div>
    )
}
