import { AdminTeacherItem } from "@/components/admin/teacher/AdminTeacherItem";
import CustomButton from "@/components/common/Button";
import { PaginationCommon } from "@/components/common/PaginationCommon";
import { Title } from "@/components/common/Title";
import { LIMIT_ITEM } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { useLoading } from "@/hook/useLoading";
import { useQueryGetListTeacher } from "@/pages/api/auth.api";
import { IRegister } from "@/type/common.type";
import Search from 'antd/lib/input/Search';
import Link from "next/link";
import { useState } from "react";

const AdminTeacherView = () => {
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>();
  const [textSearchInput, setTextSearchInput] = useState<string>();

  const limit = LIMIT_ITEM
  const { data, isLoading} = useQueryGetListTeacher( page, keyword)

  const teachers = data?.data
  const countListUser = data?.total
  const totalPage = Math.floor(countListUser / limit);


  const handleChange = async (page: number) => {
    setPage(page);
  };

  const onSearch = () => {
    setPage(1);
    setKeyword(textSearchInput);
  };

  useLoading(isLoading)

  return (
    <div>
      <div className="flex items-center	px-5 justify-between">
        <Title text="Danh sách giảng viên" />
        <Link href={routerConstant.admin.teacher.create}>
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
      {teachers?.map((teacher: IRegister) => (
        <div key={teacher.ID}>
          <AdminTeacherItem
            avatar={teacher.avatar}
            ID={teacher.ID}
            name={teacher.name}
            email={teacher.email}
          />
        </div>
      ))}

      {!!totalPage && (
        <PaginationCommon
          onChange={(page: number) => handleChange(page)}
          pageSize={limit}
          total={countListUser}
          current={page}
        />
      )}
    </div>
  );
};

export default AdminTeacherView;
