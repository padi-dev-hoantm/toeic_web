export const routerConstant = {
  me: "/me",
  admin: {
    login:  "/admin/login",
    index: "/admin",
    dashboard: "/admin/dashboard",
    teacher: {
      index: "/admin/teacher",
      detail: (teacher_id: number) => `/admin/teacher/${teacher_id}`,
      create: "/admin/teacher/create"
    },
    candidate: {
      index: "/admin/candidate",
      detail: (candidate_id: number) => `/admin/candidate/${candidate_id}`,
      create: "/admin/candidate/create"
    },
    exam: {
      index: "/admin/schedule-exam",
      detail: (exam_id: number) => `/admin/schedule-exam/${exam_id}`,
      create: "/admin/schedule-exam/create"
    },
    question: {
      index: "/admin/question",
      create: "/admin/question/create",
    }
  },
  teacher: {
    login:  "/teacher/login",
    profile: "/teacher/profile",
    exam: {
      index: "/teacher/schedule-exam",
      detail: (exam_id: number) => `/teacher/schedule-exam/edit/${exam_id}`,
      invite: (exam_id: number) => `/teacher/schedule-exam/edit/${exam_id}/invite`,
      result: (exam_id: number) => `/teacher/schedule-exam/edit/${exam_id}/result`,
      create: "/teacher/schedule-exam/create",
    },
  },
  student: {
    login:  "/student/login",
    result:  "/student/result",
    profile: "/student/profile",
    exam: {
      index: "/student/exam",
      result: "/student/exam/result",
      error: "/student/exam/error"
    }
  },
  error404: "/404",
  error500: "/500",
  home: "/",
  login: "/login",
};
