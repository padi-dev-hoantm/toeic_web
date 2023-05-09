import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import CreateQuestionView from "@/view/question/CreateQuestionView";

const Admin = () => {
  return (
    <LayoutAdmin title="Admin">
      <CreateQuestionView />
    </LayoutAdmin>
  );
};

export default Admin;
