import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import CreateQuestionView from "@/view/question/CreateQuestionView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminScheduleExamCreate = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("exam");
  }, []);

  return (
    <LayoutAdmin title="Schedule exam create">
      <CreateQuestionView />
    </LayoutAdmin>
  );
};

export default AdminScheduleExamCreate;
