import React from "react"
import { Article } from "components/Article/Article"

export function Comment(props: any) {
    const { comment } = props

    const replies: any[] = [comment]

    return (
        <div>
            <Article data={comment} />
            {replies.map((reply) => <Article data={reply} key={reply.id} />)}
        </div>
    )
}
