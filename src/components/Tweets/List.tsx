import React, { useState, useEffect } from "react"
import { Pagination } from "@mui/material"
import axios from "axios"

import { Tweet } from "components/Tweets/Tweet"
import type { TweetItem } from "lib/tweet-item"
import styles from "./List.module.css"

export const TweetList = () => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    const getData = async () => {
        const { data } = await axios.get("/api/tweets/")
        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])

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
