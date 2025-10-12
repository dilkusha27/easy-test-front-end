import CSV from '../../assets/csv.svg';
import ZIP from '../../assets/zip.svg';
import Download from '../../assets/download_icon.svg';

const ReportPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* 각 단계에서 취해야 할 행동이나 상태를 알려주는 텍스트 */}
      {/* 현재는 ImportPage.tsx, 추후 컴포넌트화 및 분리 => Header로 구분 예정 */}
      <div>
        {/* 업로드 전 컴포넌트 */}
        <p style={{ margin: '24px 0', fontSize: '28px', fontWeight: 'bold' }}>
          Making reports of{' '}
          <span style={{ color: '#FF5555' }}>project.tar.gz</span>
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
            Testing Done!
          </p>
        </div>
        <div style={{ margin: '0 0 24px 0' }}>
          <p style={{ fontSize: '18px' }}>
            <span style={{ fontWeight: 'bold' }}>Explored lines:</span> 25M /
            44M
          </p>
          <p style={{ fontSize: '18px' }}>
            <span style={{ fontWeight: 'bold' }}>
              Detected callable objects:
            </span>{' '}
            435
          </p>
          <p style={{ fontSize: '18px' }}>
            <span style={{ fontWeight: 'bold' }}>Elapsed:</span> 3 mins 25
            seconds
          </p>
          <p style={{ fontSize: '18px' }}>
            <span style={{ fontWeight: 'bold' }}>Used tokens:</span> 1.5M
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Summary</p>
            <img
              src={CSV}
              alt="CSV"
              style={{ width: '91px', height: '95px' }}
            />
            {/* 버튼 컴포넌트 만들 예정 */}
            <button
              style={{
                width: 'auto',
                height: '42px',
                background: '#313131',
                color: '#fff',
                fontSize: '20px',
                fontWeight: 'semibold',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                padding: '0 32px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                margin: '0 auto',
              }}
            >
              <span>DOWNLOAD</span>
              <img src={Download} alt="download-icon" />
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <p style={{ fontSize: '24px', fontWeight: 500 }}>Test-cases</p>
            <img
              src={ZIP}
              alt="CSV"
              style={{ width: '91px', height: '95px' }}
            />
            {/* 버튼 컴포넌트 만들 예정 */}
            <button
              style={{
                width: 'auto',
                height: '42px',
                background: '#313131',
                color: '#fff',
                fontSize: '20px',
                fontWeight: 'semibold',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                padding: '0 32px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                margin: '0 auto',
              }}
            >
              <span>DOWNLOAD</span>
              <img src={Download} alt="download-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
