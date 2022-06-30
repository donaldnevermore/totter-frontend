import React from "react"

import { CreateTweet } from "components/Tweets/CreateTweet"
import { TweetList } from "components/Tweets/List"
import { Layout } from "components/Layout/Layout"
import styles from "./Home.module.css"

export function Home() {
    return (
        <Layout>
            <CreateTweet />
            <TweetList />
        </Layout>
    )
}
