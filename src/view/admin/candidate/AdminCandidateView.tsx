import { useQueryGetListStudent } from "@/pages/api/auth.api";
import { IRegister } from "@/type/common.type";
import Link from "next/link";
import { Title } from "@/components/common/Title";
import CustomButton from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";
import { PaginationCommon } from "@/components/common/PaginationCommon";
import { useState } from "react";
import { LIMIT_ITEM } from "@/constant/constant";
import { useLoading } from "@/hook/useLoading";
import Search from 'antd/lib/input/Search';
import { AdminCandidateItem } from "@/components/admin/candidate/AdminCandidateItem";

const AdminCandidateView = () => {
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>();
  const [textSearchInput, setTextSearchInput] = useState<string>();

  const { data, isLoading } = useQueryGetListStudent(page, keyword)
  const countListUser = data?.total;

  const candidates = data?.data

  const handleChange = (page: number) => {
    setPage(page);
  };

  const onSearch = () => {
    setPage(1);
    setKeyword(textSearchInput);
  };

  useLoading(isLoading);

  return (
    <div>
      <div className="flex items-center	px-5 justify-between">
        <Title text="Danh sách thí sinh" />
        <Link href={routerConstant.admin.candidate.create}>
          <CustomButton text="Tạo mới" />
        </Link>
      </div>
      <Search
          placeholder='Nhập mã số người dùng'
          className='px-5'
          onSearch={onSearch}
          onChange={(e) => setTextSearchInput(e.target.value)}
          style={{ width: 264 }}
        />
      {candidates?.map((candidate: IRegister) => (
        <div key={candidate.ID}>
          <AdminCandidateItem
            avatar={candidate.avatar}
            ID={candidate.ID}
            name={candidate.name}
            email={candidate.email}
          />
        </div>
      ))}
      {
        countListUser > LIMIT_ITEM &&
        <PaginationCommon
          onChange={(page: number) => handleChange(page)}
          pageSize={LIMIT_ITEM}
          total={countListUser}
          current={page}
        />
      }
    </div>
  );
};

export default AdminCandidateView;
