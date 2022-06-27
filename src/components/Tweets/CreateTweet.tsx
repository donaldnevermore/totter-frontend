import React, { useState } from "react"
import { connect } from "react-redux"
import { Button, Box, TextareaAutosize } from "@mui/material"
import { TextButton } from "components/TextButton/TextButton"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { API } from "shared/api"
import { State } from "lib/states"
import { User } from "lib/user"
import styles from "components/Tweets/CreateTweet.module.css"

function Create(props: {user?: User}) {
    const [content, setContent] = useState("")
    const [isPreview, setPreview] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
    }

    const handleClick = () => {
        const { user } = props
        // if (!user.token) {
        // }
        console.log(content)
    }

    const handlePreview = () => {
        setPreview(!isPreview)
    }


    return (
        <Box className={styles.box}>
            <div onClick={handlePreview}>preview</div>
            <div className={isPreview ? styles.hide : ""}>
                <TextareaAutosize maxRows={30}
                    className={styles.editor}
                    placeholder="What's happening?"
                    onChange={handleChange} />
            </div>
            <div className={isPreview ? "" :  styles.hide}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} >
                    {content}
                </ReactMarkdown>
            </div>
            <TextButton onClick={handleClick}>Tweet</TextButton>
        </Box>
    )
}

function mapStateToProps(state: State) {
    const { user } = state
    return { user }
}

export const CreateTweet = connect(mapStateToProps, null)(Create)
