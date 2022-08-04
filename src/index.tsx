import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"

import "./index.css"
import App from "./components/App"
import { Home } from "components/Home/Home"
import { TweetView } from "components/Tweets/View"
import { LoginForm } from "components/Login/Form"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="tweets/:tweetId" element={<TweetView />} />
                <Route path="login" element={<LoginForm />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
