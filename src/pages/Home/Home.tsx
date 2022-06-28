import React from "react"
import { Stack, Box, Grid } from "@mui/material"

import { CreateTweet } from "components/Tweet/CreateTweet"
import { TweetList } from "pages/Tweets/List"
import { Layout } from "pages/Layout/Layout"
import styles from "./Home.module.css"

export function Home() {
    return (
        <Layout>
            <CreateTweet />
            <TweetList />
        </Layout>
    )
}
