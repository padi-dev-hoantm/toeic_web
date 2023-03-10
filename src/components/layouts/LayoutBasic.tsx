import { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

type Props = {
  children: ReactNode;
  title: string;
};
const LayoutDocument: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default LayoutDocument;
