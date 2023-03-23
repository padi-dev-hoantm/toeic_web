import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import AdminDashboardView from "@/view/admin/dashboard/AdminDashboardView";
import React from "react";

const Admin = () => {
  return (
    <LayoutAdmin title="Admin">
      <AdminDashboardView />
    </LayoutAdmin>
  );
};

export default Admin;
