import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Form, Radio, Input, Button } from 'antd';

const QuizForm = () => {
  const { handleSubmit, control, reset } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <div key={item.id}>
          <Form.Item label={`Câu hỏi ${index + 1}`}>
            <Controller
              name={`questions[${index}].exam_questions`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="Nhập câu hỏi" />
              )}
            />
            <Controller
              name={`questions[${index}].answers1`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Radio.Group>
                  <Radio value="A">
                    <Input {...field} placeholder="Lựa chọn A" />
                  </Radio>
                </Radio.Group>
              )}
            />
             <Controller
              name={`questions[${index}].answers2`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Radio.Group>
                  <Radio value="B">
                    <Input {...field} placeholder="Lựa chọn B" />
                  </Radio>
                </Radio.Group>
              )}
            />
             <Controller
              name={`questions[${index}].answers3`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Radio.Group>
                  <Radio value="C">
                    <Input {...field} placeholder="Lựa chọn C" />
                  </Radio>
                </Radio.Group>
              )}
            />
             <Controller
              name={`questions[${index}].answers4`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Radio.Group>
                  <Radio value="D">
                    <Input {...field} placeholder="Lựa chọn D" />
                  </Radio>
                </Radio.Group>
              )}
            />
          </Form.Item>
          <Button  onClick={() => remove(index)}>
            Xóa câu hỏi
          </Button>
        </div>
      ))}

      <Form.Item>
        <Button type="primary" onClick={() => append({ question: '', answer: '' })}>
          Thêm câu hỏi
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default QuizForm;
