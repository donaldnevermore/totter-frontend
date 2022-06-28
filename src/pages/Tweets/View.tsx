import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useParams } from "react-router-dom"

import { Layout } from "pages/Layout/Layout"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"
import { CommentList } from "components/Comment/List"

export function TweetView() {
    const params = useParams()
    const content = "# slkjkl"

    const handleReply = (content: string) => {
        return
    }

    return (
        <Layout>
            <ReactMarkdown remarkPlugins={[remarkGfm]} >
                {content}
            </ReactMarkdown>
            <MarkdownEditor text="Reply" handleSubmit={handleReply} />
            <CommentList />
        </Layout>
    )
}
