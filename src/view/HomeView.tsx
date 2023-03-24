import React from "react";
import Image from "next/image";
import CustomButton from "@/components/common/Button";
import { useRouter } from "next/router";
import { routerConstant } from "@/constant/routerConstant";

const HomeView = () => {
  const router = useRouter();
  return (
    <div className="flex flex-wrap items-center ">
      <div>
        <Image
          src="/img/home-img.png"
          alt=""
          width={1000}
          height={500}
          className="aspect-video	h-screen"
          objectFit="cover"
        />
      </div>
      <div className="ml-[100px] text-center">
        <h1 className="text-4xl mb-[50px]">Sign up:</h1>
        <CustomButton
          text="Login"
          onClick={() => router.push(routerConstant.login)}
        />
      </div>
    </div>
  );
};

export default HomeView;
