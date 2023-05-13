export const routerConstant = {
  me: "/me",
  admin: {
    index: "/admin",
    dashboard: "/admin/dashboard",
    teacher: {
      index: "/admin/teacher",
      detail: (teacher_id: number) => `/admin/teacher/${teacher_id}`,
      create: "/admin/teacher/create"
    },
    exam: {
      index: "/admin/schedule-exam",
      edit: (exam_id: number) => `/admin/schedule-exam/${exam_id}`,
      create: "/admin/schedule-exam/create"
    },
    question: {
      index: "/admin/question",
      create: "/admin/question/create",
    }
  },
  teacher: {
    index: "/teacher",
    dashboard: "/admin/dashboard",
    student: {
      index: "/teacher/student",
      invite: "/teacher/invite",
    },
    exam: {
      index: "/teacher/schedule-exam",
      edit: (exam_id: number) => `/teacher/schedule-exam/edit/${exam_id}`,
      create: "/teacher/schedule-exam/create"
    },
    result: {
      index: "/teacher/result",
    }
  },
  error404: "/404",
  error500: "/500",
  home: "/",
  login: "/login",
};
