import React from "react";
import Link from "next/link";
import CustomButton from "@/components/common/Button";
import { useRouter } from "next/router";
import { routerConstant } from "@/constant/routerConstant";

const HomeView = () => {
  const router = useRouter();
  return (
    <div className="box-shadow-item w-[600px] h-[500px] m-auto mt-[40px] bg-[#3085d6b5]">
      <img src="https://www.utc.edu.vn/assets/utc/images/logo.png" alt="" />
      <h1 className="text-center text-2xl font-bold text-[#fff] mt-[50px]">HỆ THỐNG THI TOEIC UTC</h1>
      <div className="flex flex-col mx-[30%] gap-[30px] mt-[20px] text-center">
        <Link href={routerConstant.admin.login}>
          <button className="bg-white p-[10px] font-bold rounded">Admin đăng nhập</button>
        </Link>
        <Link href={routerConstant.teacher.login}>
          <button className="bg-white p-[10px] font-bold rounded">Giảng viên đăng nhập</button>
        </Link>
        <Link href={routerConstant.student.login}>
          <button className="bg-white p-[10px] font-bold rounded">Thí sinh đăng nhập</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeView;
