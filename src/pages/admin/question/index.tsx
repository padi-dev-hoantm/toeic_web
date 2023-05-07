import { Form, Input, Button } from 'antd';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

const ExamForm = () => {
  const { control, handleSubmit, register } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'exam_questions',
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Gửi dữ liệu lên server hoặc xử lý dữ liệu ở đây
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      {fields.map((question: any, index) => (
        <div key={question.id}>
          <Form.Item label={`Câu hỏi ${index + 1}`}>
            <Input
              {...register(`exam_questions.${index}.question_text`)}
              placeholder="Nhập câu hỏi"
            />
          </Form.Item>
          {question.answers?.map((answer: any, answerIndex: number) => (
            <div key={answer.id}>
              <Form.Item label={`Câu trả lời ${answerIndex + 1}`}>
                <Controller
                  control={control}
                  name={`exam_questions.${index}.answers.${answerIndex}.is_correct`}
                  defaultValue={0}
                  render={({ field }) => (
                    <>
                      <Input
                        {...register(
                          `exam_questions.${index}.answers.${answerIndex}.content`
                        )}
                        placeholder="Nhập nội dung câu trả lời"
                      />
                      <input
                        {...field}
                        type="radio"
                        value={1}
                        style={{ marginLeft: '10px' }}
                      />
                      <span style={{ marginRight: '10px' }}>Đúng</span>
                      <input
                        {...field}
                        type="radio"
                        value={0}
                        style={{ marginLeft: '10px' }}
                      />
                      <span>Sai</span>
                    </>
                  )}
                />
              </Form.Item>
              {answerIndex === question.answers.length - 1 && (
                <Button type="link" onClick={() => remove(index)}>
                  Xóa câu trả lời
                </Button>
              )}
            </div>
          ))}
          <Form.Item>
            <Button
              type="link"
              onClick={() =>
                append({
                  question_text: '',
                  answers: [{ content: '', is_correct: 0 }],
                })
              }
            >
              Thêm câu trả lời
            </Button>
          </Form.Item>
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

export default ExamForm;
