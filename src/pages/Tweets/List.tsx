import React, { useState, useEffect } from "react"
import { Pagination } from "@mui/material"
import useSWR from "swr"

import { Tweet, TweetItem } from "pages/Tweets/Tweet"
import { fetcher } from "shared/api"
import styles from "./List.module.css"

export function TweetList(props: any) {
    const [page, setPage] = useState(1)
    const [tweets, setTweets] = useState(
        [{
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
    )

    // const { data, error } = useSWR("/api/tweets/", fetcher)

    const changePage = (event: React.ChangeEvent<unknown>, page: number) => {
        return
    }

    return (
        <div className={styles.item}>
            {
                tweets.map((tweet: TweetItem) => (<Tweet tweet={tweet} key={tweet.id} />))
            }
            <div className={styles.page}>
                <Pagination count={10} onChange={changePage} />
            </div>
        </div>
    )
}
