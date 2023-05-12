import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import UpdateQuestionView from "@/view/question/UpdateQuestionView";

const Admin = () => {
  return (
    <LayoutAdmin title="Admin">
        <UpdateQuestionView />
    </LayoutAdmin>
  );
};

export default Admin;
