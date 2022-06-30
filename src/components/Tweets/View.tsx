import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useParams } from "react-router-dom"

import { Layout } from "components/Layout/Layout"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"
import { CommentList } from "components/Comment/List"
import { postData } from "lib/api"

export function TweetView() {
    const params = useParams()
    const content = "# slkjkl"

    const handleComment = async (content: string) => {
        try {
            const result = await postData("/api/comments/", {
                content,
                userId: 1,
                tweetId: params.tweetId
            })
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <Layout>
            <ReactMarkdown remarkPlugins={[remarkGfm]} >
                {content}
            </ReactMarkdown>
            <MarkdownEditor text="Reply" handleSubmit={handleComment} />
            <CommentList />
        </Layout>
    )
}
