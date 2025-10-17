// 결과 fetch / 다운로드 API

import { API_BASE_URL } from '../utils/constants';

// fetch 앞에 return이 오는 이유
// fetch() 자체가 Promise<Response> 를 반환함.
// then() 내부에서 response.json()도 Promise<object> 를 반환.
// 즉, 이 함수 전체가 Promise<object>를 반환하게 됨.

// fetch 앞에 return이 없으면
// fetch()의 결과를 반환하지 않음.
// 함수는 명시적인 return이 없기 때문에 자동으로 undefined를 반환.
// 따라서 외부에서는 Promise를 받을 수 없음.

// [GET] 테스트 정보 조회 API
export function fetchTestResultInfo(jobId: string) {
  return fetch(`${API_BASE_URL}/api/v1/tests/${jobId}`).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch test info');
    }
    return response.json();
  });
}

// [GET] 테스트 결과 (JSON) 요청 API
export function fetchTestReportJson(jobId: string) {
  return fetch(`${API_BASE_URL}/api/v1/tests/${jobId}/report.json`).then(
    (response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch test report (JSON)');
      }
      return response.blob();
    }
  );
}

// [GET] 테스트 결과 (ZIP) 요청 API
export function fetchTestReportZip(jobId: string) {
  return fetch(`${API_BASE_URL}/api/v1/tests/${jobId}/report.zip`).then(
    (response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch test report (ZIP)');
      }
      return response.blob();
    }
  );
}
