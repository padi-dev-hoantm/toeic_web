import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import AdminDashboardView from "@/view/admin/dashboard/AdminDashboardView";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminDashboard = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("dashboard");
  }, []);

  return (
    <LayoutAdmin title="Admin">
      <AdminDashboardView />
    </LayoutAdmin>
  );
};

export default AdminDashboard;
