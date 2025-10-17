import { useEffect, useRef } from 'react';
import { fetchTestResultInfo } from '../services/resultService';

// 결과 데이터 fetch 함수를 주기적으로 호출하는 훅
// jobId: 테스트 식별자
export function usePollingTestResultInfo(jobId: string, navigate: any) {
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 15초 후 polling 시작
    const startPolling = setTimeout(() => {
      // 5초 간격으로 fetchTestInfo 호출
      pollingRef.current = setInterval(async () => {
        try {
          const data = await fetchTestResultInfo(jobId);
          // status에 따라 페이지 이동
          // succeeded: 결과 페이지로 데이터와 함께 라우팅
          if (data.status === 'succeeded') {
            if (pollingRef.current) clearInterval(pollingRef.current);
            navigate('/reports', { state: { data, jobId } });
            // failed: 실패 페이지로 이동
          } else if (data.status === 'failed') {
            if (pollingRef.current) clearInterval(pollingRef.current);
            navigate('/testfailed');
          }
          // status가 running이면 아무것도 하지 않음 (polling 유지)
        } catch (err) {
          // 에러 처리 필요시 추가
        }
      }, 5000);
    }, 15000);

    return () => {
      // 컴포넌트 언마운트 시 타이머 정리
      if (pollingRef.current) clearInterval(pollingRef.current);
      // 컴포넌트 언마운트 시 시작 타이머 정리
      clearTimeout(startPolling);
    };
  }, [navigate]);
}

// Blob 데이터를 파일로 다운로드하는 훅
export function useDownloadBlob(blob: Blob, filename: string) {
  if (blob.size === 0) return;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
