import React, { useState, useEffect } from "react"
import { Pagination } from "@mui/material"
import useSWR from "swr"

import { Tweet } from "components/Tweets/Tweet"
import { fetchData } from "lib/api"
import type { TweetItem } from "lib/tweet-item"
import styles from "./List.module.css"

export const TweetList = () => {
    const [page, setPage] = useState(1)
    const [tweets, setTweets] = useState(
        [{
            id: 1,
            content: "* sdf",
            createdAt: 18000,
            updatedAt: 18000,
            author: {
                id: 1,
                username: "sdfjlksd",
                name: "sdfjl",
                avatar: ""
            }
        }, {
            id: 2,
            content: "* sdf",
            createdAt: 18000,
            updatedAt: 18000,
            author: {
                id: 1,
                username: "sdfjlksd",
                name: "sdfjl",
                avatar: ""
            }
        }
        , {
            createdAt: 18000,
            updatedAt: 18000,
            id: 3,
            content: "* sdf",
            author: {
                id: 1,
                username: "sdfjlksd",
                name: "sdfjl",
                avatar: ""
            }
        }]
    )

    // const { data, error } = useSWR("/api/tweets/", fetchData)

    const changePage = (event: React.ChangeEvent<unknown>, page: number) => {
        return
    }

    return (
        <div className={styles.item}>
            {
                tweets.map((tweet: TweetItem) => <Tweet tweet={tweet} key={tweet.id} />)
            }
            <div className={styles.page}>
                <Pagination count={10} onChange={changePage} />
            </div>
        </div>
    )
}
