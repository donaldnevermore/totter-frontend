import React from "react"

import { CreateTweet } from "components/Tweets/CreateTweet.js"
import { TweetList } from "components/Tweets/List.js"
import { Layout } from "components/Layout/Layout.js"

export default function Home() {
    return (
        <Layout>
            <CreateTweet />
            <TweetList />
        </Layout>
    )
}
