import { DeleteParams, IExam, IExamInvite } from "@/type/common.type";
import apiClient from "./apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { routerConstant } from "@/constant/routerConstant";

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
    updateQuestion: (id: number, data: any) => apiClient.put(`/api/exams/secured/question/${id}`, data),
    getListTakersAdded: (id: number) => apiClient.get(`/api/exams/participants/${id}`),
    inviteExam: (id: number) => apiClient.post(`/api/exams/invite/${id}`),
}

export const useMutationCreateExam = () => {
    return useMutation(['create-exams'], (data: any) => {
        return examApi.createExam(data);
    });
}

export const useMutationUpdateExam = () => {
    return useMutation(['update-exams'], (data: any) => {
        return examApi.updateExam(data.id, data);
    });
}

export const useMutationUpdateQuestion = () => {
    return useMutation(['update-question'], (data: any) => {
        return examApi.updateQuestion(data.id, data);
    });
}


export const useQueryGetListExam = () => {
    return useQuery(
        ['get-list-exam'],
        () => {
            return examApi.listExam();
        },
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
    const router = useRouter()
    return useQuery(['get-detail-exam', id],
        () => {
            return examApi.getDetailExam(id)
        },
        {
            onSuccess: (response) => {
                if (!response.data) {
                    alert('Bài thi không tồn tại, xin vui lòng liên hệ với giảng viên ')
                }
            },
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

export const useQueryGetListTakersAdded = (id: number) => {
    return useQuery(['get-list-takers-added', id],
        () => {
            return examApi.getListTakersAdded(id)
        },
        {
            enabled: !!id
        })
};

export const useMutationInviteExam = (id: number) => {
    return useMutation(['invite-exam'], () => {
        return examApi.inviteExam(id);
    });
}


