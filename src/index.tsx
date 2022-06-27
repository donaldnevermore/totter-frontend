import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"

import "./index.css"
import App from "./App"
import { Home } from "pages/Home/Home"
import { Tweets } from "pages/Tweets/Tweets"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />}/>
                    <Route path="tweets" element={<Home />}>
                        <Route path=":tweetId" element={<Tweets />}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
