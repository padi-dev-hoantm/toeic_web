import { useQueryGetMe } from "@/pages/api/auth.api";
import React from "react";

const ProfileMeView = () => {
    const { data: dataMe } = useQueryGetMe();
    const data = dataMe?.data;

    return (
        <div className="flex flex-wrap flex-col">
            <p>Họ và tên: {data?.name}</p>
            <p>Địa chỉ email: {data?.email}</p>
            <p>Số điện thoại: {data?.phone_number}</p>
        </div>
    );
};

export default ProfileMeView;
