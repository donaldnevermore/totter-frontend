import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals.js"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import "./index.css"
import App from "./App.js"

const Home = lazy(() => import("components/Home/Home.js"))
const TweetView = lazy(() => import("components/Tweets/View.js"))
const LoginForm = lazy(() => import("components/Login/Form.js"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [{
            index: true,
            element: <Home/>
        }]
    },
    {
        path:"tweets/:tweetId",
        element: <TweetView />
    },
    {
        path:"login", element: <LoginForm />
    }
])

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
)

root.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
