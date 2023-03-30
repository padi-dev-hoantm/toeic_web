import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
} from "@mui/material";

const FormQuestion = () => {
  const [open, setOpen] = useState(false);

  const handleCheck = (value: string) => {
    console.log("value", value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="question-form p-5 rounded-md box-shadow-item">
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
          <Button onClick={handleClose}>Có</Button>
          <Button onClick={handleClose} autoFocus>
            Không
          </Button>
        </DialogActions>
      </Dialog>
      <TextField label="Nhập nội dung câu hỏi?" variant="standard" />
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
              <MoreVertIcon className="text-neutral-500" />
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
              <MoreVertIcon className="text-neutral-500" />
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
              <MoreVertIcon className="text-neutral-500" />
            </div>
          }
        />
        <FormControlLabel
          value="4"
          className="text-field"
          control={<Radio />}
          label={
            <div className="flex items-center gap-[15px]">
              <TextField variant="standard" placeholder="Câu trả lời..." />
              <MoreVertIcon />
            </div>
          }
        />
      </RadioGroup>
      <div className="text-right mt-[10px] mr-[10px]">
        <DeleteOutlineIcon
          onClick={handleClickOpen}
          className="text-[36px] hover:text-red-500 text-neutral-500"
        />
      </div>
    </div>
  );
};

export default FormQuestion;
