import { routerConstant } from "@/constant/routerConstant";
import Link from "next/link";

export const Error = ({
  errorNumber,
  errorTitle,
  errorDesc,
}: {
  errorNumber: number;
  errorTitle: string;
  errorDesc: string;
}) => {
  return (
    <>
      <div>{errorNumber}</div>
      <div>{errorTitle}</div>
      <div>{errorDesc}</div>
      <Link href={routerConstant.home}>Quay về trang chủ</Link>
    </>
  );
};
