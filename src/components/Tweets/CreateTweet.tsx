import React, { useState } from "react"
import axios from "axios"

import { User } from "lib/user.js"
import styles from "./CreateTweet.module.css"
import { MDEditor } from "components/MDEditor/MDEditor.js"
import { TextButton } from "components/TextButton/TextButton.js"

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
            <MDEditor text="Tweet" handleSubmit={handleTweet} />
            <TextButton onClick={createUser}>Create User</TextButton>
        </div>
    )
}
