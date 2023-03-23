export const routerConstant = {
    admin: {
      index: "/admin",
      dashboard: "/admin/dashboard",
      teacher:{
        index: "/admin/teacher",
        exam: (teacher_id: number) =>  `/admin/teacher/${teacher_id}/exam`
      },
      exam: {
        index: "/admin/schedule-exam",
        edit: (exam_id: number) => `/admin/schedule-exam/${exam_id}`
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
  