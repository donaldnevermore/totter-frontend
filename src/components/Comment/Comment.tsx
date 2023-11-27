import React, { FC } from "react"
import axios from "axios"

import styles from "./Comment.module.css"
import { Article } from "components/Article/Article.js"

export const Comment: FC<{
    comment: any
}> = ({ comment }) => {
    const handleReplyToComment = async (content: string) => {
        try {
            const result = await axios.post("/api/replies/", {
                content,
                authorId: 1,
                commentId: comment.id,
                replyToId: 0
            })
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleReplyToReply = async (content: string) => {
        try {
            const result = await axios.post("/api/replies/", {
                content,
                authorId: 1,
                commentId: comment.id,
                replyToId: 1
            })
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.wrapper}>
            <Article data={comment} handleSubmit={handleReplyToComment} />
            {comment.replies.map((reply: any) => <Article data={reply} handleSubmit={handleReplyToReply} key={reply.id} />)}
        </div>
    )
}
