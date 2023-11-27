import React, { FC, useState } from "react"
import MarkdownEditor from "@uiw/react-markdown-editor"
import { Box, TextareaAutosize } from "@mui/material"

import styles from "./MDEditor.module.css"
import { TextButton } from "components/TextButton/TextButton.js"

export function MDEditor(props: {text: string, handleSubmit: (content: string) => void}) {
    const [markdown, setMarkdown] = useState("")
    const [isPreview, setPreview] = useState(false)

    const handleChange = (event: any) => {
        setMarkdown(event.target.value)
    }

    const handlePreview = () => {
        setPreview(!isPreview)
    }

    const handleClick = () => {
        // const { user } = props
        // if (!user.token) {
        // }
        props.handleSubmit(markdown)
    }

    return (
        <Box className={styles.box}>
            <section onClick={handlePreview}>preview</section>
            <section className={isPreview ? styles.hide : ""}>
                <TextareaAutosize maxRows={30}
                    className={styles.editor}
                    placeholder="What's happening?"
                    onChange={handleChange} />
            </section>
            <section className={isPreview ? "" :  styles.hide}>
                <MarkdownEditor value={markdown} onChange={handleChange} />
            </section>
            <TextButton onClick={handleClick}>
                {props.text}
            </TextButton>
        </Box>
    )
}

export const MDViewer: FC<{value: string}> = ({ value }) => {
    return <MarkdownEditor.Markdown source={value} />
}
