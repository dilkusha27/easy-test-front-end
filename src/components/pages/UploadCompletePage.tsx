import py from '../../assets/py.svg';
import ipynb from '../../assets/ipynb.svg';
import gz from '../../assets/gz.svg';
import zip from '../../assets/zip.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { getJobId } from '../../hooks/useTest';

const UploadCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 업로드된 파일 FormData로 변환
  const file = location.state?.file;
  const fileFormData = new FormData();
  fileFormData.append('file', file);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* 각 단계에서 취해야 할 행동이나 상태를 알려주는 텍스트 */}
      {/* 현재는 ImportPage.tsx, 추후 컴포넌트화 및 분리 => Header로 구분 예정 */}
      <div>
        {/* 업로드 전 컴포넌트 */}
        <p style={{ margin: '24px 0', fontSize: '28px', fontWeight: 'bold' }}>
          File imported.
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
        {/* 업로드 중 컴포넌트 */}
        <div>
          <p style={{ margin: '24px 0', fontSize: '40px', fontWeight: 'bold' }}>
            Done!
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <img src={py} alt="py image" />
          <img src={ipynb} alt="ipynb image" />
          <img src={gz} alt="gz image" />
          <img src={zip} alt="zip image" />
        </div>
        <div style={{ margin: '24px 0', fontSize: '40px', fontWeight: 'bold' }}>
          {/* 버튼 컴포넌트 만들 예정 */}
          <button
            onClick={async () => {
              // FormData로 변환된 파일을 매개변수로 테스트 요청 후 job_id 반환
              const jobId = await getJobId(fileFormData);
              // 테스트 진행 현황 페이지로 이동
              navigate('/testing', { state: { jobId } });
            }}
            style={{
              width: 'auto',
              height: '61px',
              background: '#313131',
              color: '#fff',
              fontSize: '24px',
              fontWeight: 'semibold',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              padding: '0 32px',
              display: 'block',
              margin: '0 auto',
            }}
          >
            START TESTING
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCompletePage;
