import { loadingState } from '@/recoil/loading.recoil';
import { useRecoilValue } from 'recoil';

export default function Loading() {
  const loading = useRecoilValue(loadingState);

  return (
    <>
      {loading && (
        <div className='loader'>
          <div className='loader-inner'>
            <div className='loader-line-wrap'>
              <div className='loader-line'></div>
            </div>
            <div className='loader-line-wrap'>
              <div className='loader-line'></div>
            </div>
            <div className='loader-line-wrap'>
              <div className='loader-line'></div>
            </div>
            <div className='loader-line-wrap'>
              <div className='loader-line'></div>
            </div>
            <div className='loader-line-wrap'>
              <div className='loader-line'></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
