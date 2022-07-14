import axios, {AxiosError} from 'axios'

export const getMessages = async () => {
    
    try {
        const res = await axios.get('http://localhost:4500/messages', {
            withCredentials: true
        })
        return res.data

    } catch(error: any) {
        
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)
            
        } else {
            console.error(error)
        }

        return false
    }
}