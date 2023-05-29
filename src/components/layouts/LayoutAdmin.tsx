import { Box, Grid } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import SidebarAdmin from "../admin/common/SidebarAdmin";
import Header from "../common/Header";

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
          <Grid container className="flex gap-[40px]">
            <Grid item xs={2} className="shadow-sidebar">
              <SidebarAdmin />
            </Grid>
            <Grid item xs={9}>
              {children}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default LayoutBasic;
