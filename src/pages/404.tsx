import { Error } from "@/components/common/Error";

export default function Page404() {
  return (
    <Error
      errorDesc="Page not found"
      errorNumber={404}
      errorTitle="404 error"
    />
  );
}
