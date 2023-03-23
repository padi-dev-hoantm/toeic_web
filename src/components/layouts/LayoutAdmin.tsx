import { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SidebarAdmin from "../admin/common/SidebarAdmin";

type Props = {
  children: ReactNode;
  title: string;
};
const LayoutBasic: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
        <div className="flex w-full min-h-screen bg-[#FFFFFF] layout-seller flex-wrap ">
          <SidebarAdmin />
          <div className="flex-1">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LayoutBasic;
