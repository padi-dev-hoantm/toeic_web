import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import CreateQuestionView from "@/view/question/CreateQuestionView";
import { useSetRecoilState } from "recoil";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import { useEffect } from "react";

const Admin = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("question");
  }, []);

  return (
    <LayoutAdmin title="Admin">
      <CreateQuestionView />
    </LayoutAdmin>
  );
};

export default Admin;
