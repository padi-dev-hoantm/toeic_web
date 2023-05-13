import axios, { AxiosResponse } from "axios";
import Cookies from "universal-cookie";

const baseURLApp = process.env.NEXT_PUBLIC_API
const apiClient = axios.create({
    baseURL: baseURLApp,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: {
        encode: (params: any) => String(params)
    }
})


const cookies = new Cookies();


apiClient.interceptors.request.use(
    async (config) => {
        const jwt = cookies.get('jwt')

        if (jwt && config.headers) {
            config.headers['Authorization'] = jwt;
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response && response.data) {
            return response.data
        }
        return response
    },
    (error) => {
        if (error.message === 'Network error') {
            console.log(error.message)
        }
        return Promise.reject(error)
    }
)

export default apiClient