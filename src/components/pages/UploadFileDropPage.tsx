// import { useNavigate } from 'react-router-dom';
// import { validateFile } from '../../utils/fileUtils';
import UploadButton from '../../assets/upload-button.svg';
import { handleFileChange } from '../../hooks/useFileUpload';

const UploadFileDropPage = () => {
  const { fileChange } = handleFileChange();

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
            onChange={(e) => fileChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadFileDropPage;
