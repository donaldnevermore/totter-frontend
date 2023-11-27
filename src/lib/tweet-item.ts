import type { User } from "./user.js"

export type TweetItem = {
    id: number
    content: string
    createdAt: number
    updatedAt: number
    author: User
}
