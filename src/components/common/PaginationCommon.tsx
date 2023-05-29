import { Pagination, PaginationProps } from 'antd';

export const PaginationCommon = ({ ...rest }: PaginationProps) => {
  return (
    <Pagination
      {...rest}
      showSizeChanger={false}
      size='small'
      className='text-center mt-[17px]'
    />
  );
};
