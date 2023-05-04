import dayjs from "dayjs";

export const formatDate = (dateTime: string | undefined) => {
    if(!dateTime) return
    const date = new Date(dateTime);
    const options = { timeZone: 'Asia/Kolkata' };
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
}

export const formatDateTime = (date: string | undefined) => {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss');
}