export const routerConstant = {
    me: "/me",
    admin: {
      index: "/admin",
      dashboard: "/admin/dashboard",
      teacher:{
        index: "/admin/teacher",
        exam: (teacher_id: number) =>  `/admin/teacher/${teacher_id}/exam`
      },
      exam: {
        index: "/admin/schedule-exam",
        edit: (exam_id: number) => `/admin/schedule-exam/${exam_id}`,
        create: "/admin/schedule-exam/create"
      }, 
      question: {
        index: "/admin/question"
      }
    },
    error404: "/404",
    error500: "/500",
    home: "/",
    login: "/login",
  };
  