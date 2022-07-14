import { Message } from "./message";

export type User = {
    username: string,
    email: string,
    password: string,
    active: boolean,
    messages: [Message],
    created_at: Date,
    update_at: Date,
    __v: number
}