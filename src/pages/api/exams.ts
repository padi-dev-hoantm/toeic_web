import { DeleteParams, IExam, IExamInvite } from "@/type/common.type";
import apiClient from "./apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";

const examApi = {
    createExam: (data: IExam) => apiClient.post("/api/exams/secured", data),
    listExam: () => apiClient.get("/api/exams"),
    getListExamByCreator: (id: number) => apiClient.get(`/api/exams/creators/${id}`),
    getDetailExam: (id: number) => apiClient.get(`/api/exams/${id}`),
    getDetailByOwner: (id: number) => apiClient.get(`/api/exams/admin/${id}`),
    addTakersToExam: (data: IExamInvite) => apiClient.post("/api/exam_invite", data),
    deleteUserFromExam: (params: DeleteParams) => apiClient.delete("/api/exam_invite", { params }),
    getExamsByTakers: (id: number) => apiClient.get(`/api/exams/takers/${id}`),
    deleteExam: (id: number) => apiClient.delete(`/api/exams/secured/${id}`),
    updateExam: (id: number, data: any) => apiClient.put(`/api/exams/secured/${id}`, data),
    updateQuestion: (id: number, data: any) => apiClient.put(`/api/exams/secured/question/`, data),
}

export const useMutationCreateExam = () => {
    return useMutation(['create-exams'], (data: any) => {
        return examApi.createExam(data);
    });
}

export const useMutationUpdateExam = (id: number) => {
    return useMutation(['update-exams'], (data: any) => {
        return examApi.updateExam(id, data);
    });
}

export const useMutationUpdateQuestion = (id: number) => {
    return useMutation(['update-question'], (data: any) => {
        return examApi.updateQuestion(id, data);
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
        () => {
            return examApi.getListExamByCreator(id)
        },
        {
            enabled: !!id
        })
}

export const useQueryGetDetailExam = (id: number) => {
    return useQuery(['get-detail-exam', id],
        () => {
            return examApi.getDetailExam(id)
        },
        {
            enabled: !!id
        })
}

export const useMutationAddTakersToExam = () => {
    return useMutation(['add-exam'], (data: IExamInvite) => {
        return examApi.addTakersToExam(data);
    });
}

export const useMutationDeleteUserFromExam = () => {
    return useMutation(['delete-user-in-exam'], (params: DeleteParams) => {
        return examApi.deleteUserFromExam(params);
    });
}


export const useQueryGetExamsByTakers = (id: number) => {
    return useQuery(['get-exam-by-creator', id],
        () => {
            return examApi.getExamsByTakers(id)
        },
        {
            enabled: !!id
        })
}

export const useMutationDeleteExam = () => {
    return useMutation(['delete-exam'], (id: number) => {
        return examApi.deleteExam(id)
    });
};

export const useQuerygetDetailByOwner = (id: number) => {
    return useQuery(['get-detail-exam-owner', id],
        () => {
            return examApi.getDetailByOwner(id)
        },
        {
            enabled: !!id
        })
};