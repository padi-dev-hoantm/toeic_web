import { ExportToExcel } from "@/components/common/ExportToExcel";
import { useQueryGetAllResult, useQueryGetExamSubmit } from "@/pages/api/examSubmit";
import Search from 'antd/lib/input/Search';
import { useState } from "react";

const AdminDashboardView = () => {
  const { data } = useQueryGetExamSubmit();
  const fileName = "myfile";
  const [keyword, setKeyword] = useState<string>("");
  const [textSearchInput, setTextSearchInput] = useState<string>("");

  const onSearch = () => {
    setKeyword(textSearchInput);
  };

  const { data: dataResult } = useQueryGetAllResult(Number(keyword));
  const dataExport = dataResult?.data.map((result: any) => ({
    ID: result?.id,
    Name: result?.user?.name,
    Code: result?.user?.code,
    Total: result?.total_score,
  }));

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className=" text-2xl font-bold text-[#4F4F4F] mt-[20px]">Kết quả toàn bộ hệ thống</h1>
        <ExportToExcel apiData={dataExport} fileName={fileName} />
      </div>
      <h1 className=" text-2xl font-bold text-[#4F4F4F] my-[20px]">Thống kê điểm</h1>

      <Search
          placeholder='Nhập điểm'
          className='px-5'
          onSearch={onSearch}
          onChange={(e) => setTextSearchInput(e.target.value)}
          style={{ width: 264 }}
        />
      {
        dataResult?.data.map((result: any, index: number) => (
          <p key={index}>
            <p className="font-bold mt-[30px]">Họ và tên: {result?.user?.name} 
            {/* - Mã số: {result?.user?.code} */}
             -email: {result?.user?.email}</p>
            <table className="w-full text-center  border border-gray-400 ">
              <tr >
                <th className="p-[20px] border-r-[2px]">Tổng điểm</th>
                <th className="border-r-[2px]">Điểm phần đọc</th>
                <th className="border-r-[2px]">Điểm phần nghe</th>
                <th>Số lần chuyển tab</th>
              </tr>
              <tr className="border-t-[2px]">
                <td className="p-[20px] border-r-[2px]">{result?.total_score}</td>
                <td className="border-r-[2px]">{result?.reading_score}</td>
                <td className="border-r-[2px]">{result?.listening_score}</td>
                <td>{result?.tab_switch_count}</td>
              </tr>
            </table>
          </p>
        ))
      }
    </div>
  );
};

export default AdminDashboardView;