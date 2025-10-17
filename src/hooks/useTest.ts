// 테스트 진행 관리 훅

import { useEffect, useState } from 'react';
import { requestTest } from '../services/testService';

export async function getJobId(formData: FormData) {
  const data = await requestTest(formData);

  // 현재는 job_id만 반환
  return data.job_id;

  // 수행 여부, 수행 시간 등의 값도 필요할 경우
  // const { job_id, status, queued_at } = data;
  // return { job_id, status, queued_at };
}

export function getProcessingFileInfo() {
  // 테스트 진행 중인 파일의 수, 전체 파일 수, 진행 중인 파일명을 관리하기 위한 상태 변수
  // default 값은 임시로 지정한 것, 추후 백엔드와의 연동 통해 받아오는 방식으로 변경 필요
  const [processingFileCount, setProcessingFileCount] = useState<number>(1);
  const [totalFileCount, setTotalFileCount] = useState<number>(100);
  const [processingFileName, setProcessingFileName] = useState<string>(
    'project/tools/commitstats.py'
  );

  // (임시) TestProgressPage 렌더링 후 1초 간격으로 processingFileCount 상태 업데이트
  // 추후 백엔드와의 연동 통해 실시간으로 받아오는 방식으로 변경 필요
  useEffect(() => {
    const interval = setInterval(() => {
      if (processingFileCount < totalFileCount)
        setProcessingFileCount(processingFileCount + 1);
      else clearInterval(interval);
    }, 1000);
  }, []);

  return {
    processingFileCount,
    setProcessingFileCount,
    totalFileCount,
    setTotalFileCount,
    processingFileName,
    setProcessingFileName,
  };
}

export function getTestProgressRate() {
  // 테스트 진행률을 관리하기 위한 상태 변수
  const [progressRate, setProgressRate] = useState<number>(0);

  // 테스트 진행률 상태 업데이트 함수
  const updateProgressRate = () => {
    if (progressRate < 80) setProgressRate(progressRate + 5);
    else setProgressRate(progressRate + 1);
  };

  // (임시) TestProgressPage 렌더링 후 5초 간격으로 updateProgress 호출
  // 추후 백엔드와의 연동 통해 실시간으로 받아오는 방식으로 변경 필요
  useEffect(() => {
    const interval = setInterval(updateProgressRate, 5000);
    if (progressRate === 100) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
      // setProgressRate(100);
    };
  }, []);

  return {
    progressRate,
    setProgressRate,
  };
}
