import py from '../../assets/py.svg';
import ipynb from '../../assets/ipynb.svg';
import gz from '../../assets/gz.svg';
import zip from '../../assets/zip.svg';
import ProgressBar from '../atoms/ProgressBar';

const UploadPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* 각 단계에서 취해야 할 행동이나 상태를 알려주는 텍스트 */}
      {/* 현재는 ImportPage.tsx, 추후 컴포넌트화 및 분리 => Header로 구분 예정 */}
      <div>
        {/* 업로드 중 컴포넌트 */}
        <p style={{ margin: '24px 0', fontSize: '28px', fontWeight: 'bold' }}>
          File importing. Please wait…
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
            Loading...
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
        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <ProgressBar progress={50} />
          <p style={{ fontSize: '24px' }}>50%</p>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
