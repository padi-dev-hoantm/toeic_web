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
    async (config) =>{
        const jwt = cookies.get('jwt')
        console.log('jwt',jwt )

        if(jwt && config.headers){
            config.headers['Authorization'] = 'Bearer' + jwt;
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

apiClient.interceptors.response.use(
    (response: AxiosResponse) =>{
        if(response && response.data){
            return response.data
        }
        return response
    },
    (error) => {
        if(error.message === 'Network error'){
            alert(error.message)
        }
        return Promise.reject(error)
    }
)

export default apiClient