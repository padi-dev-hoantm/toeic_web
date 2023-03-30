import CustomButton from "@/components/common/Button";
import FormQuestion from "@/components/common/FormQuestion";
import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { REGEX_EMAIL } from "@/constant/constant";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

const AdminQuestion = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("question");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log("data", data);
  };
  const [quests, setQuests] = useState(1);
  const handleAddQuest = () => {
    setQuests(quests + 1);
    console.log("quest", quests);
  };
  for (var i = 0; i < quests; i++) {
    <FormQuestion />;
  }
  const renderTD = () => {
    let div = [];

    for (let i = 1; i <= quests; i++) {
      div.push(
        <div key={i}>
          <FormQuestion />;
        </div>
      );
    }
    return div;
  };
  return (
    <LayoutAdmin title="List question">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        {renderTD()}
        <div className="fixed bottom-0.5 right-5">
          <CustomButton text="Tạo câu hỏi mới" onClick={handleAddQuest} />
        </div>

        <div className="mt-5">
          <CustomButton type="submit" text="Submit"></CustomButton>
        </div>
      </form>
    </LayoutAdmin>
  );
};

export default AdminQuestion;
