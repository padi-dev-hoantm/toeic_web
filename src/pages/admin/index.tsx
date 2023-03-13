import LayoutBasic from "@/components/layouts/LayoutBasic";
import LayoutDocument from "@/components/layouts/LayoutDocument";
import HomeView from "@/view/HomeView";
import AdminDashboardView from "@/view/admin/AdminDashboardView";
import React from "react";

const Admin = () => {
  return (
    <LayoutBasic title="Admin">
      <AdminDashboardView />
    </LayoutBasic>
  );
};

export default Admin;
