import React, { useState } from "react"
import { connect } from "react-redux"

import { State } from "lib/states"
import { User } from "lib/user"
import styles from "components/Tweets/CreateTweet.module.css"
import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor"

function Create(props: {user?: User}) {
    const handleTweet = (content: string) => {
        const { user } = props
        // if (!user.token) {
        // }
        console.log(content)
    }

    return (
        <MarkdownEditor text="Tweet" handleSubmit={handleTweet}></MarkdownEditor>
    )
}

function mapStateToProps(state: State) {
    const { user } = state
    return { user }
}

export const CreateTweet = connect(mapStateToProps, null)(Create)
