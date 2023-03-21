export const routerConstant = {
    admin: {
      index: "/admin",
      dashboard: "/admin/dashboard",
      teacher:{
        index: "/admin/teacher",
        exam: (teacher_id: number) =>  `/admin/teacher/${teacher_id}/exam`
      }
    },
    error404: "/404",
    error500: "/500",
    home: "/",
    login: "/login",
  };
  