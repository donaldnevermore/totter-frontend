import React, { useState, useEffect, Component } from "react"
// import ReactMarkdown from "react-markdown";
import moment from "moment"
import { connect } from "react-redux"
import { Box, List, Button, Avatar, Input, Grid } from "@mui/material"

import { Comment } from "components/Comment/Comment"
import styles from "./View.module.css"

moment.locale("zh-CN")

const handleReply = (item: any) => {
    console.log(item)
}

function PostView({ issue, commentList, user, onCommentAdd }: any) {
    function RenderItem(item: any) {
        return (
            <li>
                <Comment className={styles.addComment}
                    actions={[
                        <span className={styles.pointer}
                            key="0"
                            onClick={() => handleReply(item)}>
                            回复
                        </span>
                    ]}
                    author={item.author.name}
                    avatar={item.author.avatar}
                    content={item.content}
                    datetime={moment(issue.updated_at).fromNow()}>
                    {item.replies ? "" : null}
                </Comment>
            </li>
        )
    }

    return (
        <div>
            <div className={styles.white}>
                <Box>{issue.title}</Box>
                {/* <ReactMarkdown source={issue.content} /> */}
            </div>
            <List />
        </div>
    )
}

class PostState extends Component {
    props: any
    state: any = {
        issue: {},
        commentList: []
    }

    constructor(props: any) {
        super(props)
    }

    async componentDidMount() {
        try {
            const { id } = { id: 1 }
            // const { data } = await axios.get(`${API.TWEETS}${id}/`)
            // this.setState({
            //     issue: data.issue
            // })
            this.getCommentList()
        }
        catch (err) {
            console.log(err)
        }
    }

    getCommentList = async() => {
        // const { data } = await axios.get(
        //     `${API.COMMENTS}${this.state.issue.id}/`
        // )
        // this.setState({
        //     commentList: data.comment_list
        // })
    }

    render() {
        const { user } = this.props

        return (
            <PostView
                onCommentAdd={this.getCommentList}
                issue={this.state.issue}
                commentList={this.state.commentList}
                user={user}
            />
        )
    }
}

function mapStateToProps(state: any) {
    const { user } = state
    return { user }
}

export const TweetView = connect(mapStateToProps, null)(PostState)
