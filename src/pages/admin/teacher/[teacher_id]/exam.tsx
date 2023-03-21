import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { DummyData } from "@/untils/fakeData";

const AdminTeacherAdminTeacher = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("listTeacher");
  }, []);
  const teacher = DummyData;
  return (
    <LayoutAdmin title="Teacher exam">
      <h1>{teacher[0].name}</h1>
      <p>Trình độ: {teacher[0].level} </p>
    </LayoutAdmin>
  );
};

export default AdminTeacherAdminTeacher;
