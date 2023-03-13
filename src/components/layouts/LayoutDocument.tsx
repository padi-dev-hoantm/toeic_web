import { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";

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
      <div>{children}</div>
    </>
  );
};

export default LayoutDocument;
