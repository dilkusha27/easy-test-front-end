import { useNavigate } from 'react-router-dom';
import UploadButton from '../../assets/upload-button.svg';
import { validateFile } from '../../utils/fileUtils';

const UploadFileDropPage = () => {
  const navigate = useNavigate();

  // 파일 업로드 감지 핸들러 (추후 다른 모듈로 분리 필요)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    navigate('/uploading', { state: { file } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* 각 단계에서 취해야 할 행동이나 상태를 알려주는 텍스트 */}
      {/* 현재는 ImportPage.tsx, 추후 컴포넌트화 및 분리 => Header로 구분 예정 */}
      <div>
        {/* 업로드 전 컴포넌트 */}
        <p style={{ margin: '24px 0', fontSize: '28px', fontWeight: 'bold' }}>
          Import your project file into Easy-Test.
        </p>
      </div>
      {/* <CenteredContainer> */}
      <div
        style={{
          width: '1000px',
          height: '500px',
          background: '#F5F5F5',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* 업로드 전 컴포넌트 */}
        <div>
          {/* 현재는 ImportPage.tsx, 추후 컴포넌트화 및 분리 */}
          <p style={{ margin: '24px 0', fontSize: '40px', fontWeight: 'bold' }}>
            Drag & Drop
          </p>
          <p style={{ margin: '24px 0', fontSize: '24px' }}>
            Upload your project file (.zip, .gz, ...) to upload, or{' '}
            <label htmlFor="fileInput">
              <span
                style={{ color: '#FF5555', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = 'underline';
                  e.currentTarget.style.fontWeight = 'bold';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = 'none';
                  e.currentTarget.style.fontWeight = 'normal';
                }}
              >
                browse
              </span>
            </label>
          </p>
        </div>
        <div
          style={{
            width: '156px',
            height: '156px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
          }}
        >
          <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
            <img src={UploadButton} alt="upload-button" />
          </label>
          <input
            type="file"
            name="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadFileDropPage;
