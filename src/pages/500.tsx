import { Error } from "@/components/common/Error";

export default function Page500() {
  return (
    <Error
      errorDesc="Internet server error"
      errorNumber={500}
      errorTitle="500 error"
    />
  );
}
