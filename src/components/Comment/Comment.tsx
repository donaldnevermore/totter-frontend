import React from "react"
import { Article } from "components/Article/Article"

export function Comment(props: any) {
    const { comment } = props

    return <Article data={comment} />
}
