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
    index: "/teacher",
    dashboard: "/admin/dashboard",
    student: {
      index: "/teacher/student",
      invite: "/teacher/student/invite",
    },
    exam: {
      index: "/teacher/schedule-exam",
      detail: (exam_id: number) => `/teacher/schedule-exam/edit/${exam_id}`,
      invite: (exam_id: number) => `/teacher/schedule-exam/edit/${exam_id}/invite`,
      create: "/teacher/schedule-exam/create",
    },
    result: {
      index: "/teacher/result",
    }
  },
  student: {
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
