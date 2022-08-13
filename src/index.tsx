import React, { Suspense, lazy } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"

import "./index.css"
import App from "./components/App"

const Home = lazy(() => import("components/Home/Home"))
const TweetView = lazy(() => import("components/Tweets/View"))
const LoginForm = lazy(() => import("components/Login/Form"))

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="tweets/:tweetId" element={<TweetView />} />
                    <Route path="login" element={<LoginForm />} />
                </Route>
            </Routes>
        </Suspense>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
