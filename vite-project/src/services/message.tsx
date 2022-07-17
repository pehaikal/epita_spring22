import axios, {AxiosError} from 'axios'

import { newMessageParams, editMessageParams, Message } from '../types/message'

export const getMessages = async () => {
    try {
        const response = await axios.get('http://localhost:4500/messages', {
            withCredentials: true
        })
        return response.data

    } catch(error: any) {

        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)

        } else {
            console.error(error)
        }
        return false
    }
}

export const getMessage = async (messageId?: string): Promise<editMessageParams | boolean> => {
    try {
        if (messageId == null) return false

        const response = await axios.get<editMessageParams>(`http://localhost:4500/messages/${messageId}`, {
            withCredentials: true
        })
        return response.data

    } catch(error: any) {

        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)
        } else {
            console.error(error)
        }
        return false
    }
}

export const createMessage = async (data: newMessageParams) => {
    try {
        const response = await axios.post('http://localhost:4500/messages', {
            message: data
        }, {
            withCredentials: true
        })
        return response.data

    } catch(error: any) {

        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)

        } else {
            console.error(error)
        }
        return false
    }
}

export const updateMessage = async (data: editMessageParams) => {
    try {
        const response = await axios.put(`http://localhost:4500/messages/${ data._id }`,{ message: data }, {
            withCredentials: true
        })
        return response.data

    } catch(error: any) {

        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)

        } else {
            console.error(error)
        }
        return false
    }
}

export const deleteMessage = async (messageId?: string) => {
    try {
        if (messageId == null) return false
        
        const response = await axios.delete(`http://localhost:4500/messages/${messageId}`, {
            withCredentials: true
        })
        return response.data

    } catch(error: any) {

        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)

        } else {
            console.error(error)
        }
        return false
    }
}