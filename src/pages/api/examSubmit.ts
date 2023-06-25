import { FilterScoreParams } from "@/type/common.type";
import apiClient from "./apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";


const examSubmitApi = {
    submitExam: (data: any) => apiClient.post("/api/exam-submit", data),
    getExamSubmit: () => apiClient.get("/api/exam-submit"),
    adminGetAllResult: (params: FilterScoreParams) => apiClient.get("/api/exam-submit/admin", {params}),
    teacherGetResultExam: (examId?: number) => apiClient.get(`/api/exam-submit/admin/?examId=${examId}`),
}

export const useMutationSubmitExam = () => {
    return useMutation(['exam-submit'], (data: any) => {
        return examSubmitApi.submitExam(data);
    });
}

export const useQueryGetExamSubmit = () => {
    return useQuery(
        ['get-exam-submit'],
        () => {
            return examSubmitApi.getExamSubmit();
        },
        // {
        //     onSuccess: (response) => {
        //         if (!response.data) {
        //             alert('Bạn chưa làm bài thi nào, kết quả thi của bạn trống')
        //             }
        //     },
        //     // cacheTime: Infinity, staleTime: Infinity
        // },
    );
}

export const useQueryGetAllResult = (score: number) => {
    return useQuery(
        ['admin-get-all-result', score],
        () => {
            return examSubmitApi.adminGetAllResult({score: score});
        },
        // { cacheTime: Infinity, staleTime: Infinity },
    );
}

export const useQueryGetResultExam = (examId: number) => {
    return useQuery(
        ['admin-get-result-exam', examId],
        () => {
            return examSubmitApi.teacherGetResultExam(examId);
        },
        // { cacheTime: Infinity, staleTime: Infinity },
    );
}