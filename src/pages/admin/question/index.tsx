import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import ListQuestionView from "@/view/question/ListQuestionView";

const Admin = () => {
  return (
    <LayoutAdmin title="Admin">
      <ListQuestionView />
    </LayoutAdmin>
  );
};

export default Admin;
