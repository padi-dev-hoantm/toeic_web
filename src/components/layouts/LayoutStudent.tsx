import { Box, Grid } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import Header from "../common/Header";
import SidebarStudent from "../student/SidebarStudent";

type Props = {
    children: ReactNode;
    title: string;
};

const LayoutStudent: NextPage<Props> = ({ children, title }) => {
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
                            <SidebarStudent />
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

export default LayoutStudent;
