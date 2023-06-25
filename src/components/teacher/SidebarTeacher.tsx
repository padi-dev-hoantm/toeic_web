import CustomButton from "@/components/common/Button";
import { ID_PERSON } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { sidebarItemTeacher } from "@/constant/sidebarConstant";
import { useQueryGetMe } from "@/pages/api/auth.api";
import { useCurrentMenuItemState } from "@/recoil/side-bar.recoil";
import { addCookie } from "@/untils/addCookies";
import { removeCookies } from "@/untils/removeCookies";
import { userRole } from "@/untils/role";
import { Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const SidebarTeacher = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const currentMenuItem = useCurrentMenuItemState();
  const cookies = new Cookies();

  const { data: dataMe, isFetchedAfterMount } = useQueryGetMe();
  const data = dataMe?.data;
  addCookie(data)
  const role = cookies.get(ID_PERSON)
  
  // useEffect(()=> {
  //   const role = data?.role
  //   if(role !== 3){
  //     router.push(routerConstant.home)
  //     alert("Bạn không có quyền truy cập!")
  //   }
  // }, [data])
  
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    removeCookies()
    localStorage.clear();
    handleCancel()
    router.push(routerConstant.home)
  };

  const handleCancel = () => {
    setOpen(false);
  };
  console.log(role)
  return <>
    {
      isFetchedAfterMount && (
        <div className="bg-[#FAFAFA] left-0 h-full p-3 h-screen pt-[30px] ">
          <div className="text-center text-base font-bold uppercase">
            <Link href={routerConstant.me}>
              <h1 className="">{data?.name}</h1>
            </Link>
            <p >{userRole(data?.role)}</p>
          </div>
          <div className="flex flex-col">
            {
              sidebarItemTeacher.map((item) => (
                <Link
                  className={`p-2 my-2 ${currentMenuItem === item.currentMenu
                    ? "side-active"
                    : "hover:bg-[lightsteelblue]"
                    }`}
                  href={item.router}
                  key={item.id}
                >
                  <div className="flex items-center">
                    <item.icon />
                    <span className="ml-[10px]">{item.name}</span>
                  </div>
                </Link>
              ))
            }
            <Modal
              title="Bạn có chắc chắn muốn đăng xuất không?"
              open={open}
              onOk={handleOk}
              onCancel={handleCancel}
            >
            </Modal>
            <section className="mt-[20px] text-center" onClick={() => showModal()}>
              <CustomButton type="submit" text="Đăng xuất" />
            </section>
          </div>
        </div>
      )
    }
  </>
    ;
};

export default SidebarTeacher;
