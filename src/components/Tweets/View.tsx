import React, { FC, useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useParams } from "react-router-dom"

import { Layout } from "components/Layout/Layout"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"
import { CommentList } from "components/Comment/List"
import axios from "axios"

export const TweetView = () => {
    const params = useParams()
    const [data, setData] = useState<any>({})

    const getData = async () => {
        const { data } = await axios.get(`/api/tweets/${params.tweetId}/`)
        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])


    const handleComment = async (content: string) => {
        try {
            const result = await axios.post("/api/comments/", {
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
