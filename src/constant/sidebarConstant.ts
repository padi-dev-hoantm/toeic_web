import { routerConstant } from "./routerConstant"

export const sidebarItemAdmin = [
    {
        id: 1,
        name: 'Dash board',
        icon: '',
        currentMenu: 'dashboard',
        router: routerConstant.admin.dashboard
    }, 
    {
        id: 2,
        name: 'List teacher',
        icon: '',
        currentMenu: 'listTeacher',
        router: routerConstant.admin.teacher.index
    },
    {
        id: 3,
        name: 'Schedule exam',
        icon: '',
        currentMenu: 'exam',
        router: routerConstant.admin.exam.index
    }, 
    {
        id: 4,
        name: 'Question',
        icon: '',
        currentMenu: 'question',
        router: routerConstant.admin.question.index
    },
    {
        id: 5,
        name: 'Logout',
        icon: '',
        currentMenu: 'Logout',
        router: routerConstant.home
    }
]

export const sidebarItemTeacher = [
    {
        id: 1,
        name: 'Dash board',
        icon: ''
    }, 
    {
        id: 2,
        name: 'List candidate',
        icon: ''
    },
    {
        id: 3,
        name: 'Exam test',
        icon: ''
    }, 
    {
        id: 4,
        name: 'Question',
        icon: ''
    }
]