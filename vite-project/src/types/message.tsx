import { User } from './user';

// Message
export type Message = {
    _id: string,
    name: string,
    user: User,
    created_at?: Date,
    updated_at?: Date,
    __v: number
}

// new Message
export type newMessageParams = {
    name: string,
}

// update Message
export type editMessageParams = {
    _id: string,
    name: string
}