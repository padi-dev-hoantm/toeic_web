import React, { useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({
    control,
    name,
    rules,
    type,
    label,
    isRequired = false,
    errors,
    ...rest
}: any) => {
    const quillRef = useRef();

    const imageHandler = () => {
        const input = document.createElement('input');

        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            if (!input) return;
            if (!input.files) return;
            const file = input.files[0];
            const formData = new FormData();
            formData.append('files', file);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://14.225.192.48/api/exams/file', true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const response = xhr.responseText;
                    console.log(123, JSON.parse(response).paths[0])
                    const linkImg = JSON.parse(response).paths[0]
                    const quill = quillRef.current.getEditor();
                    const range = quill.getSelection(true);
                    quill.insertEmbed(range.index, 'image', linkImg)
                } else {
                    console.error('Upload error:', xhr.status);
                }
            };
            xhr.send(formData);

            //   mutate(formData);
        };
    };

    return (
        <div>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { value, onChange } }) => (
                    <div
                        className={`max-w-[400px] rounded-md border ${errors && errors[name] && errors[name].message ? 'border-red-400' : 'border-neutral/5'
                            }`}
                    >
                        <ReactQuill
                            {...rest}
                            theme='snow'
                            className='w-[400px]'
                            value={value}
                            ref={quillRef}
                            modules={{
                                toolbar: {
                                    container: [
                                        ['bold', 'italic', 'underline'],
                                        ['image'],
                                        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
                                    ],
                                    handlers: {
                                        image: imageHandler,
                                    },
                                },
                            }}
                            onChange={onChange}
                        />
                    </div>
                )}
            />
            {errors && errors[name] && errors[name].message && (
                <span className='text-xs text-red-400 mt-1'>{errors[name].message}</span>
            )}
        </div>
    );
};

export default TextEditor;
