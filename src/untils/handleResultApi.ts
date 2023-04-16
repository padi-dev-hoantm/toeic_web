import { routerConstant } from "@/constant/routerConstant";
import Router from "next/router";

export const handleResultApi = (response: any) => {
    if (!response) {
        return;
    }
    const message = Array.isArray(response.message) ? response.message[0] : response.message;

    if (response.statusCode === 400) {
        return Router.push(routerConstant.login)
    }

    if (!response.status) {
        return message !== '' ? alert(message) : alert('Server Error');
    }
    if (message && message !== '') {
        return response.status ? alert(message) : alert(message);
    }

}