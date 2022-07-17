import { registerParams, loginParams } from '../types/auth'
import axios, {AxiosError} from 'axios'

export const register = async (data: registerParams): Promise<boolean> => {
    try {
        await axios.post('http://localhost:4500/register', data, {
            withCredentials: true
        })
        return true

    } catch(error: any) {

        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)

        } else {
            console.error(error)
        }
        return false
    }
}

export const login = async (data: loginParams) => {
    try {
        const response = await axios.post('http://localhost:4500/login', data, {
            withCredentials: true
        })
        
        return {
            status: true,
            msg: response.data
        }

    } catch(error: any) {
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)

        } else {
            console.error(error)
        }

        return {
            status: false,
            msg: error.response?.data?.msg
        }
    }
}

export const getMe = async () => {
    try {
        const response = await axios.get('http://localhost:4500/me', {
            withCredentials: true
        })
        return response.data

    } catch(error: any) {
        
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)

        } else {
            console.error(error)
        }

        return {
            status: false,
            msg: error.response?.data?.msg
        }
    }
}

export const logout = async () => {
    try {
        const response = await axios.get('http://localhost:4500/logout', {
            withCredentials: true
        })
        return response.data

    } catch(error: any) {
        
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)

        } else {
            console.error(error)
        }

        return {
            status: false,
            msg: error.response?.data?.msg
        }
    }
}