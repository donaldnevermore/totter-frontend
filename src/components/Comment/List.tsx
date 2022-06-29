import React from "react"
import { Comment } from "components/Comment/Comment"

export function CommentList(props: any) {
    const  comments  = [{
        title: "sdfsdf",
        id: 1,
        content: "* sdf",
        created_at: 18000,
        updated_at: 18000,
        author: {
            id: 1,
            username: "sdfjlksd",
            name: "sdfjl",
            avatar: ""
        }
    }, {
        title: "sdfsdf",
        id: 2,
        content: "* sdf",
        created_at: 18000,
        updated_at: 18000,
        author: {
            id: 1,
            username: "sdfjlksd",
            name: "sdfjl",
            avatar: ""
        }
    }
    , {
        title: "sdfsdf",
        id: 3,
        content: "* sdf",
        created_at: 18000,
        updated_at: 18000,
        author: {
            id: 1,
            username: "sdfjlksd",
            name: "sdfjl",
            avatar: ""
        }
    }]

    return (
        <div>
            {comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
        </div>
    )
}
