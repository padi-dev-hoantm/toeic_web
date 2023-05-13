import { IFormLogin, IRegister } from "@/type/common.type";
import apiClient from "./apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";

const authApi = {
    login: (data: IFormLogin) => apiClient.post("/api/auth/login", data),
    register: (data: IRegister) => apiClient.post("/api/auth/register", data),
    getMe: () => apiClient.get("/api/auth/secured/me"),
    getListTeacher: () => apiClient.get("/api/auth/teachers"),
    getListStudent: () => apiClient.get("/api/auth/students"),
    updateUser: (data: IRegister) => apiClient.put("/api/auth/secured/update", data),
    getDetailUser: (id: number) => apiClient.get(`/api/auth/secured/user/${id}`),
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

export const useQueryGetListTeacher = () => {
    return useQuery(['get-teacher'], 
    ()=> {
        return authApi.getListTeacher()
    })
}

export const useQueryGetListStudent = () => {
    return useQuery(['get-student'], 
    ()=> {
        return authApi.getListStudent()
    })
}

export const useMutationUpdateUser = () => {
    return useMutation((data: IRegister) => {
        return authApi.updateUser(data)
    })
}

export const useQueryGetDetailUser = (id: number) => {
    return useQuery(['get-detail-user'], 
    ()=> {
        return authApi.getDetailUser(id)
    })
}