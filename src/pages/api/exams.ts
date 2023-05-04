import { DeleteParams, IExam, IExamInvite } from "@/type/common.type";
import apiClient from "./apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";

const examApi = {
    createExam: (data: IExam) => apiClient.post("/api/exams/secured", data),
    listExam: () => apiClient.get("/api/exams"),
    getListExamByCreator: (id: number) => apiClient.get(`/api/exams/creators/${id}`),
    getDetailExam: (id: number) => apiClient.get(`/api/exams/${id}`),
    addTakersToExam: (data: IExamInvite) => apiClient.post("/api/exam_invite", data),
    deleteUserFromExam: (params: DeleteParams) => apiClient.delete("/api/exam_invite", {params}),
    getExamsByTakers: (id: number) => apiClient.get(`/api/exams/takers/${id}`)
}

export const useMutationCreateExam = () => {
    return useMutation(['create-exams'], (data: IExam) => {
        return examApi.createExam(data);
    });
}

export const useQueryGetListExam = () => {
    return useQuery(
        ['get-list-exam'],
        () => {
            return examApi.listExam();
        },
        { cacheTime: Infinity, staleTime: Infinity },
    );
}

export const useQueryGetListExamByCreator = (id: number) => {
    return useQuery(['get-list-exam-by-creator', id], 
    ()=> {
        return examApi.getListExamByCreator(id)
    }, 
    {
        enabled: !!id
    })
}

export const useQueryGetDetailExam = (id: number) => {
    return useQuery(['get-detail-exam', id], 
    ()=> {
        return examApi.getDetailExam(id)
    }, 
    {
        enabled: !!id
    })
}

export const useMutationAddTakersToExam = () => {
    return useMutation(['add-exams'], (data: IExamInvite) => {
        return examApi.addTakersToExam(data);
    });
}

export const useMutationDeleteUserFromExam = () => {
    return useMutation(['add-exams'], (params: DeleteParams) => {
        return examApi.deleteUserFromExam(params);
    });
}


export const useQueryGetExamsByTakers = (id: number) => {
    return useQuery(['get-exam-by-creator', id], 
    ()=> {
        return examApi.getExamsByTakers(id)
    }, 
    {
        enabled: !!id
    })
}