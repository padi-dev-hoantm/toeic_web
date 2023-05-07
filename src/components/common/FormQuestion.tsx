import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  Popper,
  Typography,
  Fade,
  Paper,
} from "@mui/material";
import { PopperPlacementType } from "@mui/material/Popper";
import UploadImg from "./UploadImg";
import dynamic from "next/dynamic";
import Editor from "./Qill";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/common/Button";
import RadioInput from "./RadioInput";

const FormQuestion = ({
  onClick,
  part,
}: {
  onClick: () => void;
  part?: number;
}) => {
  const [open, setOpen] = useState(false);
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const handleCheck = (value: string) => {
    console.log("value", value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    setOpen(false);
    onClick();
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [openPop, setOpenPop] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
      (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpenPop((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
      };

  const DialogComponent = (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Bạn có chắc chắn muốn xóa không?
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleRemove}>Có</Button>
        <Button onClick={handleClose} autoFocus>
          Không
        </Button>
      </DialogActions>
    </Dialog>
  );

  const TextEditor = dynamic(() => import("./Qill"), { ssr: false });

  const PopOverComponent = (
    <Popper open={openPop} anchorEl={anchorEl} placement={placement} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <Typography sx={{ p: 2 }}>
              <AddPhotoAlternateIcon />
            </Typography>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
  return (
    <div className="question-form p-5 rounded-md box-shadow-item">

      <RadioInput name='resell'
        control={control}
        label='リセールの可否'
        type='text'
        listOption={[
          { value: 'on', label: 'リセール可能にする' },
          { value: 'off', label: 'リセール不可能にする' },
        ]} />
        
      {/* {DialogComponent}
      {PopOverComponent}
      {part === 1 ? (
        <>
          <p>Hãy chọn ảnh</p>
          <div className="text-center">
            <UploadImg />
          </div>
        </>
      ) : (
        <div className="flex items-center">
          <TextField label="Nhập nội dung câu hỏi?" variant="standard" />
          <button onClick={handleClick("top-end")}>
            <MoreVertIcon className="text-neutral-500 cursor-pointer	" />
          </button>
        </div>
      )}
      <RadioGroup
        onChange={(event, value) => handleCheck(value)}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        className="flex flex-col gap-[20px] mt-[20px]"
      >
        <FormControlLabel
          value="1"
          className="text-field"
          control={<Radio />}
          label={
            <div className="flex items-center gap-[15px]">
              <TextField variant="standard" placeholder="Câu trả lời..." />
              <MoreVertIcon className="text-neutral-500 cursor-pointer" />
            </div>
          }
        />
        <FormControlLabel
          value="2"
          className="text-field"
          control={<Radio />}
          label={
            <div className="flex items-center gap-[15px]">
              <TextField variant="standard" placeholder="Câu trả lời..." />
              <MoreVertIcon className="text-neutral-500 cursor-pointer	" />
            </div>
          }
        />
        <FormControlLabel
          value="3"
          className="text-field"
          control={<Radio />}
          label={
            <div className="flex items-center gap-[15px]">
              <TextField variant="standard" placeholder="Câu trả lời..." />
              <MoreVertIcon className="text-neutral-500 cursor-pointer	" />
            </div>
          }
        />
        {part !== 2 && (
          <FormControlLabel
            value="4"
            className="text-field"
            control={<Radio />}
            label={
              <div className="flex items-center gap-[15px]">
                <TextField variant="standard" placeholder="Câu trả lời..." />
                <MoreVertIcon cursor-pointer />
              </div>
            }
          />
        )}
      </RadioGroup>
      <div className="text-right mt-[10px] mr-[10px]">
        <DeleteOutlineIcon
          onClick={handleClickOpen}
          className="text-[36px] hover:text-red-500 text-neutral-500 cursor-pointer"
        />
      </div> */}

    </div>
  );
};

export default FormQuestion;
