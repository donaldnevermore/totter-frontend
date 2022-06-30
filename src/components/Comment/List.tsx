import React from "react"
import useSWR from "swr"

import { Comment } from "components/Comment/Comment"
import { fetchData } from "lib/api"

export const CommentList: React.FC<{
    tweetId: string
}> = ({ tweetId }) => {
    const { data, error } = useSWR(`/api/comments/tweet/${tweetId}/`, fetchData)
    if (error) {
        return <div>failed to load</div>
    }
    if (!data) {
        return <div>loading...</div>
    }

    return (
        <div>
            {data.map((comment: any) => <Comment comment={comment} key={comment.id} />)}
        </div>
    )
}
