import React, { FC, useEffect, useState } from "react"
import axios from "axios"

import { Comment } from "components/Comment/Comment"

export const CommentList: FC<any> = ({ tweetId }) => {
    const [data, setData] = useState([])

    const getData = async () => {
        const { data } = await axios.get(`/api/comments/tweet/${tweetId}/`)
        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {data.map((comment: any) => <Comment comment={comment} key={comment.id} />)}
        </div>
    )
}
