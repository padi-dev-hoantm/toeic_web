import { IFormLogin, IRegister } from "@/type/common.type";
import apiClient from "./apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";

const authApi = {
    login: (data: IFormLogin) => apiClient.post("/api/auth/login", data),
    register: (data: IRegister) => apiClient.post("/api/auth/register", data),
    getMe: () => apiClient.get("/api/auth/secured/me"),
}

export const useMutationLogin = () => {
    return useMutation((data: IFormLogin) => {
        return authApi.login(data)
    })
}

export const useMutationRegister = () => {
    return useMutation((data: IRegister) => {
        return authApi.register(data)
    })
}


export const useQueryGetMe = () => {
    return useQuery(['get-me'], 
    ()=> {
        return authApi.getMe()
    })
}
