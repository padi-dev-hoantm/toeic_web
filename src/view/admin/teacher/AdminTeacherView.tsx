import { AdminTeacherItem } from "@/components/admin/teacher/AdminTeacherItem";
import { useQueryGetListStudent, useQueryGetListTeacher } from "@/pages/api/auth.api";
import { IRegister } from "@/type/common.type";
import Link from "next/link";
import { Title } from "@/components/common/Title";
import CustomButton from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";
import { useEffect, useState } from "react";
import { PaginationCommon } from "@/components/common/PaginationCommon";
import Search from 'antd/lib/input/Search';

const AdminTeacherView = () => {
  const [page, setPage] = useState(1);

  const { data } = useQueryGetListTeacher(3, page)
  const teachers = data?.data
  const countListUser = 4
  const [keyword, setKeyword] = useState<string>();
  const [textSearchInput, setTextSearchInput] = useState<string>();

  const handleChange = (page: number) => {
    setPage(page);
  };
  console.log(123, countListUser)

  const onSearch = () => {
    setPage(1);
    setKeyword(textSearchInput);
  };

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

      {countListUser > 2 && (
        <PaginationCommon
          onChange={(page: number) => handleChange(page)}
          pageSize={2}
          total={countListUser}
          current={page}
        />
      )}
    </div>
  );
};

export default AdminTeacherView;
