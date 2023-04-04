import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const TextArea = () => {
  return (
    <div className="relative">
      <textarea className="border w-[95%] " name="" id="">
        <img src="https://i.pinimg.com/564x/9a/de/5b/9ade5bb8441e5c03e87a2b7b47bffffc.jpg" />
      </textarea>
      <label htmlFor="upload-photo">
        <AddPhotoAlternateIcon className="text-neutral-500 cursor-pointer" />
      </label>

      <input accept="image/*" hidden type="file" id="upload-photo" />
      {/* {imgPrev !== "" && (
        <div>
          <button type="submit">submit</button>
        </div>
      )} */}
    </div>
  );
};

export default TextArea;
