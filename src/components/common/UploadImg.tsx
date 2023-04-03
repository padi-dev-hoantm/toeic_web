import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const UploadImg = () => {
  const [file, setFile] = useState<string>();
  const [imgPrev, setImgPrev] = useState<any>("");
  const [base64, setBase64] = useState<string>();
  const [name, setName] = useState<string>();
  const [size, setSize] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (e: any) => {
    let file = e.target.files[0];
    if (file) {
      const render = new FileReader();
      render.onload = handleReaderLoaded;
      render.readAsBinaryString(file);
    }
  };

  const handleReaderLoaded = (readerEvent: any) => {
    let binaryString = readerEvent.target.result;
    setBase64(btoa(binaryString));
  };

  const onFileSubmit = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    let payload = { image: base64 };

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const photoUpload = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log("reader", reader);
    console.log("file", file);
    if (reader !== undefined && file !== undefined) {
      if (file.size / 1024 / 1024 >= 10) {
        alert("dung lượng ảnh phải nhỏ hơn 10MB");
        return;
      }
      const _URL = window.URL || window.webkitURL;
      const img = new Image();
      img.src = _URL.createObjectURL(file);
      console.log("img", img);
      img.onload = function () {
        console.log("img", img.width);
      };
      reader.onloadend = () => {
        setFile(file);
        setSize(file.size);
        setName(file.name);
        setImgPrev(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const remove = () => {
    setFile("");
    setImgPrev("");
    setBase64("");
    setName("");
    setSize("");
  };

  return (
    <div className="relative">
      <label htmlFor="upload-photo">
        <AddPhotoAlternateIcon />
      </label>
      <input id="photo-upload" accept="image/*" type="file" hidden />
      {imgPrev === "" ? (
        <p>no img</p>
      ) : (
        <div className="flex">
          <img className="h-[400px] w-[100%] object-contain	" src={imgPrev} />
          <span
            className="cursor-pointer absolute right-[-12px] top-[-5px]"
            onClick={remove}
          >
            <HighlightOffIcon className=" text-[red] text-[40px]" />
          </span>
        </div>
      )}
      <input
        accept="image/*"
        hidden
        type="file"
        id="upload-photo"
        onChange={photoUpload}
      />
      {imgPrev !== "" && (
        <div>
          <button type="submit">submit</button>
        </div>
      )}
    </div>
  );
};

export default UploadImg;
