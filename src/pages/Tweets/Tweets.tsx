import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useParams } from "react-router-dom"

import { Frame } from "pages/Frame/Frame"
import { CreateTweet } from "components/Tweets/CreateTweet"

export function Tweets() {
    const params = useParams()
    console.log(params)
    const content = "# slkjkl"

    return (
        <Frame>
            <ReactMarkdown remarkPlugins={[remarkGfm]} >
                {content}
            </ReactMarkdown>
            <CreateTweet />
        </Frame>
    )
}
