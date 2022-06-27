import React, { PropsWithChildren, useState } from "react"
import { Box, TextareaAutosize } from "@mui/material"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import styles from "./MarkdownEditor.module.css"
import { TextButton } from "components/TextButton/TextButton"

export function MarkdownEditor(props: {text: string, handleComment: (content: string) => void}) {
    const [content, setContent] = useState("")
    const [isPreview, setPreview] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
    }

    const handlePreview = () => {
        setPreview(!isPreview)
    }

    const handleClick = () => {
        // const { user } = props
        // if (!user.token) {
        // }
        props.handleComment(content)
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
            <TextButton onClick={handleClick}>
                {props.text}
            </TextButton>
        </Box>
    )
}
