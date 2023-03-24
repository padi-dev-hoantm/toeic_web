import { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SidebarAdmin from "../admin/common/SidebarAdmin";
import { Box, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={2} className="shadow-sidebar mr-[3%]">
              <SidebarAdmin />
            </Grid>
            <Grid item xs={9}>
              {children}
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default LayoutBasic;
