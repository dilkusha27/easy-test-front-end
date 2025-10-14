import { useNavigate } from 'react-router-dom';
import { validateFile } from '../utils/fileUtils';

// 파일 업로드 감지 핸들러 (추후 다른 모듈로 분리 필요)
export const handleFileChange = () => {
  const navigate = useNavigate();

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 업로드된 파일이 하나인지 확인 (수정 필요)
    const file = e.target.files?.[0];

    // 파일 유무 여부 확인
    if (!file) return;

    // 파일 확장자 유효성 검사
    const result = validateFile(file);

    // 파일 확장자 유효성
    if (!result.valid) {
      alert(result.message);

      // 동일 파일 업로드 시 onChange 이벤트가 발생하지 않는 문제를 위한 초기화
      e.target.value = '';
      return;
    }

    // 파일이 유효할 경우 업로드 진행 페이지로 이동 (업로드 소요시간 10초 이상일 경우)
    // navigate('/uploading', { state: { file } });

    // 파일이 유효할 경우 업로드 진행 페이지로 이동 (업로드 소요시간 10초 미만일 경우)
    navigate('/uploaded', { state: { file } });
  };

  return { fileChange };
};
