export const userRole = (role: number) => {
    if (role === 1) {
        return "ADMIN"
    }
    else if (role === 2) {
        return "Sinh viên"
    }
    else if (role === 3) {
        return "Giảng viên"
    }
    else {
        return;
    }
}