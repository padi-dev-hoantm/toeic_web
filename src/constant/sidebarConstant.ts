import { LogoutOutlined, BookOutlined, UserOutlined, FileExcelOutlined  } from "@ant-design/icons"
import { routerConstant } from "./routerConstant"

export const sidebarItemAdmin = [
    {
        id: 1,
        name: 'Thống kê',
        icon: FileExcelOutlined,
        currentMenu: 'dashboard',
        router: routerConstant.admin.dashboard
    },
    {
        id: 2,
        name: 'Giảng viên',
        icon: UserOutlined,
        currentMenu: 'listTeacher',
        router: routerConstant.admin.teacher.index
    },
    {
        id: 6,
        name: 'Thí sinh',
        icon: UserOutlined,
        currentMenu: 'student',
        router: routerConstant.admin.candidate.index
    },
    {
        id: 3,
        name: 'Bài thi',
        icon: BookOutlined,
        currentMenu: 'exam',
        router: routerConstant.admin.exam.index
    },

]

export const sidebarItemTeacher = [
    {
        id: 11,
        name: 'Cập nhật thông tin',
        icon: UserOutlined,
        currentMenu: 'profile-teacher',
        router: routerConstant.teacher.profile

    },
    {
        id: 12,
        name: 'Đề thi',
        icon: BookOutlined,
        currentMenu: 'exam-teacher',
        router: routerConstant.teacher.exam.index

    },

]

export const sidebarItemStudent = [
    {
        id: 13,
        name: 'Cập nhật thông tin',
        icon: UserOutlined,
        currentMenu: 'profile-student',
        router: routerConstant.student.profile

    },
    {
        id: 14,
        name: 'Điểm thi',
        icon: BookOutlined,
        currentMenu: 'result-student',
        router: routerConstant.student.result
    },

]