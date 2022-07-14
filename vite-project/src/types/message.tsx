import { User } from "./user"

export type Message = {
    _id: string,
    name: string,
    user: User,
    created_at?: Date,
    updated_at?: Date,
    __v?: number
}