import React from "react"
import { Stack, Box, Grid } from "@mui/material"

import { Tweet } from "components/Tweets/Tweet"
import { CreateTweet } from "components/Tweets/CreateTweet"
import { Frame } from "pages/Frame/Frame"
import styles from "./Home.module.css"

export function Home() {
    return (
        <Frame>
            <CreateTweet />
            <Tweet />
        </Frame>
    )
}
