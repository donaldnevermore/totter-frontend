
import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ChatBubbleOutline } from "@mui/icons-material"

import { AvatarSide } from "components/AvatarSide/AvatarSide"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"
import styles from "./Article.module.css"
import { postData } from "lib/api"

export const Article: React.FC<any> = ({ data }) => {
    const [show, setShow] = useState(false)

    const openEditor = (event: React.MouseEvent) => {
        event.stopPropagation()
        setShow(!show)
    }

    const handleReply = async (content: string) => {
        try {
            const result = await postData("/api/replies/", {
                content,
                userId: 1,
                commentId: data.id,
            })
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }
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
            {show ? (<MarkdownEditor text="Reply" handleSubmit={handleReply} />) : null }
        </div>
    )
}
