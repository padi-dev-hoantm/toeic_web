import { IFormLogin } from "@/type/common.type";
import apiClient from "./apiClient";
import { useMutation } from "@tanstack/react-query";

export const useMutationLogin = () => {
    return useMutation((data: IFormLogin)=> {
        return apiClient.post("/auth/login", data)
    }) 
}