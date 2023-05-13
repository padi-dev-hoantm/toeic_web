export const userRole = (role: number) => {
    if (role === 1) {
        return "ADMIN"
    }
    else if (role === 2) {
        return "STUDENT"
    }
    else if (role === 3) {
        return "LECTURER"
    }
    else {
        return;
    }
}