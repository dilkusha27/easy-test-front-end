// 파일 유무, 확장자, 용량 검증 등
export const validateFile = (
  file: File
): { valid: boolean; message?: string } => {
  const allowedExt = ['py', 'zip', 'ipynb', 'gz'];
  const maxSize = 500 * 1024 * 1024; // 임시로 정해둠

  // '.'으로 쪼갠 후 마지막 요소를 소문자로 변환
  const ext = file.name.split('.').pop()?.toLocaleLowerCase();

  // 파일 확장자 유무 확인 : 굳이 있어야 하나 싶음
  if (!ext) return { valid: false, message: '파일 확장자가 없습니다.' };

  // 확장자 유효성 확인
  if (!allowedExt.includes(ext))
    return {
      valid: false,
      message: `허용되지 않는 파일 확장자입니다: ${ext}`,
    };

  // 파일 크기 유효성 확인
  if (file.size > maxSize)
    return {
      valid: false,
      message: `파일 크기가 업로드 가능한 용량을 초과하였습니다: ${file.size} > ${maxSize}`,
    };

  console.log('유효한 파일:', file.name, file.size, ext);
  return { valid: true };
};
