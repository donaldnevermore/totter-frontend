import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useParams } from "react-router-dom"

import { Layout } from "components/Layout/Layout"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"
import { CommentList } from "components/Comment/List"
import { fetchData, postData } from "lib/api"
import useSWR from "swr"

export function TweetView() {
    const params = useParams()
    const { data, error } = useSWR(`/api/tweets/${params.tweetId}/`, fetchData)
    if (error) {
        return <div>failed to load</div>
    }
    if (!data) {
        return <div>loading...</div>
    }

    const handleComment = async (content: string) => {
        try {
            const result = await postData("/api/comments/", {
                content,
                authorId: 1,
                tweetId: parseInt(params.tweetId!)
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
                {data.content}
            </ReactMarkdown>
            <MarkdownEditor text="Reply" handleSubmit={handleComment} />
            <CommentList tweetId={params.tweetId!} />
        </Layout>
    )
}
