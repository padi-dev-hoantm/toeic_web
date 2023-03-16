import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const Teacher = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("listTeacher");
  }, []);

  return <LayoutAdmin title="Lis teacher"> Teacher</LayoutAdmin>;
};

export default Teacher;
