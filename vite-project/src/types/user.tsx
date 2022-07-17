import { Message } from './message'

// User
export type User = {
    _id: string,
    username: string,
    email: string,
    password: string,
    active: boolean,
    messages: [Message],
    created_at?: Date,
    updated_at?: Date,
    __v: number
}