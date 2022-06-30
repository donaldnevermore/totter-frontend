import type { User } from "./user"

export type TweetItem = {
    id: number
    content: string
    createdAt: number
    updatedAt: number
    author: User
}
