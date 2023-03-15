import { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SidebarTeacher from "../teacher/SidebarTeacher";

type Props = {
  children: ReactNode;
  title: string;
};
const LayoutTeacher: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
        <div className="flex w-full min-h-screen bg-[#FFFFFF] layout-seller flex-wrap">
          <SidebarTeacher />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LayoutTeacher;
