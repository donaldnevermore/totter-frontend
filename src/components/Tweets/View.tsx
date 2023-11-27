import React, { FC, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Layout } from "components/Layout/Layout.js"
import { MDEditor, MDViewer } from "components/MDEditor/MDEditor.js"
import { CommentList } from "components/Comment/List.js"
import axios from "axios"

export default function TweetView() {
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
            <MDViewer value={data.content} />
            <MDEditor text="Reply" handleSubmit={handleComment} />
            <CommentList tweetId={params.tweetId!} />
        </Layout>
    )
}
