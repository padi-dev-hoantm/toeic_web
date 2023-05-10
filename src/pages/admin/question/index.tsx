import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import ListQuestionView from "@/view/question/ListQuestionView";
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
      <ListQuestionView />
    </LayoutAdmin>
  );
};

export default Admin;
