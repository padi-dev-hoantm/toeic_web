import { FormUser, IFormLogin, IRegister, ParamsListUser } from "@/type/common.type";
import apiClient from "./apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";

const authApi = {
    login: (data: IFormLogin) => apiClient.post("/api/auth/login", data),
    register: (data: IRegister) => apiClient.post("/api/auth/register", data),
    getMe: () => apiClient.get("/api/auth/secured/me"),
    getListTeacher: (params: ParamsListUser) => apiClient.get("/api/auth/teachers", {params}),
    getListStudent: () => apiClient.get("/api/auth/students"),
    updateUser: (data: FormUser) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('password', data.password);
        formData.append('address', data.address);
        formData.append('file_avatar', data.avatar);
        formData.append('phone_number', data.phone_number);
        formData.append('code', data.code);
        formData.append('date_of_birth', data.date_of_birth);

        return apiClient.put("/api/auth/secured/update", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
              },
        })
    },
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

export const useQueryGetListTeacher =  (
    limit: number,
    page: number,
    code?: string,
  ) => {
    return useQuery(['get-teacher'], 
    ()=> {
        return authApi.getListTeacher({
            offset: limit * (page - 1),
            limit: limit,
            code: code,
          })
    })
}

export const useQueryGetListStudent = () => {
    return useQuery(['get-student'], 
    ()=> {
        return authApi.getListStudent()
    })
}

export const useMutationUpdateUser = () => {
    return useMutation((data: FormUser) => {
        return authApi.updateUser(data)
    })
}

export const useQueryGetDetailUser = (id: number) => {
    return useQuery(['get-detail-user'], 
    ()=> {
        return authApi.getDetailUser(id)
    })
}