import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function Editor() {
  const { quill, quillRef } = useQuill();
  console.log(11, quill)
  return (
    <div >
      <div ref={quillRef} />
    </div>
  );
}
