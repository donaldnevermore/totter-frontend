import React, { useState } from "react"

import { User } from "lib/user"
import styles from "./CreateTweet.module.css"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"
import { postData } from "lib/api"

export const CreateTweet: React.FC<{
    user?: User
}> = ({ user }) => {
    const handleTweet = async (content: string) => {
        // if (!user.token) {
        // }
        try {
            const result = await postData("/api/tweets/", {
                content,
                userId: 1
            })
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <MarkdownEditor text="Tweet" handleSubmit={handleTweet} />
    )
}
