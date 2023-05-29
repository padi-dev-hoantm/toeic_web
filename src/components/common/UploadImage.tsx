import { Modal, Upload } from 'antd';
import Cookies from 'universal-cookie';
import { RcFile, UploadFile } from 'antd/lib/upload';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import NextImage from 'next/image';

export const UploadImage = ({
    fileList,
    handleChangeImage,
    number,
    minHeight = 512,
    minWidth = 312,
    widthRate = 1,
    heightRate = 1,
    errorMessage,
    maxSize = 1,
}: any) => {
    const cookies = new Cookies();

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [error, setError] = useState('');

    const getBase64 = (file: RcFile): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        if (!file.url) {
            setPreviewTitle(file.name);
            return;
        }
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div className='mt-[8px] text-black/[0.45]'>Upload</div>
        </div>
    );

    const handleCancel = () => setPreviewOpen(false);

    const handleBeforeUpload = async (file: RcFile): Promise<string | boolean> => {
        const allowFile = ['jpg', 'png', 'webp'];
        console.log(11, file)
        const typeImage = file?.name?.split('.').pop();

        if (typeImage && !allowFile.includes(typeImage)) {
            setError('Ảnh phải đúng định dạng png, jpg hoặc webp');
            return Upload.LIST_IGNORE;
        }

        const allowedTypes = ['image/png', 'image/jpeg', 'image/webp'];

        if (!allowedTypes.includes(file.type)) {
            setError('Ảnh phải đúng định dạng png, jpg hoặc webp');
            return Upload.LIST_IGNORE;
        }

        const _URL = window.URL || window.webkitURL;
        const img = new Image();
        img.src = _URL.createObjectURL(file);

        return new Promise((resolve) => {
            setError('');
            img.onload = function () {
                if (img.width * heightRate != img.height * widthRate) {
                    setError(`Ảnh phải đúng định dạng ${widthRate} : ${heightRate}`);
                    resolve(Upload.LIST_IGNORE);
                } else if (img.width < minWidth || img.height < minHeight) {
                    setError(`Ảnh phải nhỏ nhất ${minWidth}x${minHeight}`);
                    resolve(Upload.LIST_IGNORE);
                } else {
                    resolve(true);
                }
            };
        });
    };

    return (
        <>
            <Upload
                action={process.env.NEXT_PUBLIC_API + 'api/exams/file'}
                listType='picture-card'
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChangeImage}
                name='file'
                beforeUpload={(file) => handleBeforeUpload(file)}
                accept='.png, .jpg, .webp'
                method='POST'
            >
                {number && fileList.length >= number ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <NextImage alt='' style={{ width: '100%' }} width={500} height={500} src={previewImage} />
            </Modal>
            <p className='text-xs text-red-400 mt-1'>{error}</p>
            {errorMessage ? <p className='text-xs text-red-400 mt-1'>{errorMessage}</p> : null}
        </>
    );
};
