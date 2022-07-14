import { registerParams, loginParams } from '../types/auth'
import axios, {AxiosError} from 'axios'

export const register = async (data: registerParams): Promise<boolean> => {
    try {
        await axios.post('http://localhost:4500/register', data)
        return true

    } catch(error: any) {
        
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg);
        
        } else {
            console.error(error);
        }
        
        return false
    }
}

export const login = async (data: loginParams) => {

    try {
        const res = await axios.post('http://127.0.0.1:4500/login', data)
        // console.log(res)

        return {
            status: true,
            msg: res.data,
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
        const res = await axios.get('http://127.0.0.1:4500/me', {
            withCredentials: true
        })
        return res.data
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
        await axios.get('http://localhost:4500/logout', {
            withCredentials: true
        })
        return true

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