import React, { useState } from "react"

import { User } from "lib/user"
import styles from "./CreateTweet.module.css"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"
import { postData } from "lib/api"
import { TextButton } from "components/TextButton/TextButton"

export const CreateTweet: React.FC<{
    user?: User
}> = ({ user }) => {
    const handleTweet = async (content: string) => {
        try {
            const result = await postData("/api/tweets/", {
                content,
                authorId: 1
            })
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }
    }

    const createUser = async () => {
        try {
            const result = await postData("/api/users/", {
                username: "wang",
                password: "123456"
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <MarkdownEditor text="Tweet" handleSubmit={handleTweet} />
            <TextButton onClick={createUser}>Create User</TextButton>
        </div>
    )
}
