// 테스트 관련 API

import { API_BASE_URL } from '../utils/constants';

// [POST] 테스트 수행 요청 API
export async function requestTest(formData: FormData) {
  const res = await fetch(`${API_BASE_URL}/api/v1/tests`, {
    method: 'POST',
    body: formData, // 테스트 대상 파일을 변환한 FormData 객체
  });
  return res.json();
}
