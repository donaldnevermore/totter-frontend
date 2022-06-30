import React, { useState, useEffect } from "react"
import { Pagination } from "@mui/material"
import useSWR from "swr"

import { Tweet } from "components/Tweets/Tweet"
import { fetchData } from "lib/api"
import type { TweetItem } from "lib/tweet-item"
import styles from "./List.module.css"

export const TweetList = () => {
    const [page, setPage] = useState(1)

    const { data, error } = useSWR("/api/tweets/", fetchData)
    if (error) {
        return <div>failed to load</div>
    }
    if (!data) {
        return <div>loading...</div>
    }

    const changePage = (event: React.ChangeEvent<unknown>, page: number) => {
        return
    }

    return (
        <div className={styles.item}>
            {
                data.map((tweet: TweetItem) => <Tweet tweet={tweet} key={tweet.id} />)
            }
            <div className={styles.page}>
                <Pagination count={10} onChange={changePage} />
            </div>
        </div>
    )
}
