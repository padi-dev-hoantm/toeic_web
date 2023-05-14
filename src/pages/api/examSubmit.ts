import apiClient from "./apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";

const examSubmitApi = {
    submitExam: (data: any) => apiClient.post("/api/exam-submit", data),
    getExamSubmit: () => apiClient.get("/api/exam-submit"),
}

export const useMutationSubmitExam = () => {
    return useMutation(['exam-submit'], (data: any) => {
        return examSubmitApi.submitExam(data);
    });
}

export const useQueryGetExamSubmitm = () => {
    return useQuery(
        ['get-exam-submit'],
        () => {
            return examSubmitApi.getExamSubmit();
        },
        { cacheTime: Infinity, staleTime: Infinity },
    );
}