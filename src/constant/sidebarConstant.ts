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
    {
        id: 5,
        name: 'Đăng xuất',
        icon: LogoutOutlined,
        currentMenu: 'Logout',
        router: routerConstant.login,
    }
]

export const sidebarItemTeacher = [
    {
        id: 9,
        name: 'Thống kê',
        icon: FileExcelOutlined,
        currentMenu: 'teacherDashboard',
        router: routerConstant.teacher.index
    },
    {
        id: 10,
        name: 'Mời thi',
        icon: UserOutlined,
        currentMenu: 'student',
        router: routerConstant.teacher.student.index
    },
    {
        id: 11,
        name: 'Đề thi',
        icon: BookOutlined,
        currentMenu: 'exam-teacher',
        router: routerConstant.teacher.exam.index

    },
    {
        id: 12,
        name: 'Đăng xuất',
        icon: LogoutOutlined,
        currentMenu: 'Logout',
        router: routerConstant.login,
    }
]