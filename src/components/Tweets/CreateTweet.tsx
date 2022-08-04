import React, { useState } from "react"
import axios from "axios"

import { User } from "lib/user"
import styles from "./CreateTweet.module.css"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"
import { TextButton } from "components/TextButton/TextButton"

export const CreateTweet: React.FC<{
    user?: User
}> = ({ user }) => {
    const handleTweet = async (content: string) => {
        try {
            const { data } = await axios.post("/api/tweets/", {
                content,
                authorId: 1
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    const createUser = async () => {
        try {
            const { data } = await axios.post("/api/users/", {
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
