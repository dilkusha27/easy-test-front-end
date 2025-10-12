import testing from '../../assets/testing.svg';
import ProgressBar from '../atoms/ProgressBar';

const TestProgressPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        {/* 테스팅 중 컴포넌트 */}
        <p style={{ margin: '24px 0', fontSize: '28px', fontWeight: 'bold' }}>
          Testing files : 23 / 100 (23%)
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
        {/* 테스팅 중 컴포넌트 */}
        <div>
          <p style={{ margin: '24px 0', fontSize: '40px', fontWeight: 'bold' }}>
            Now Testing:
          </p>
          <p style={{ margin: '24px 0', fontSize: '24px' }}>
            project/tools/commitstats.py
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src={testing} alt="testing-image" />
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
          <ProgressBar progress={70} />
          <p style={{ fontSize: '24px' }}>70%</p>
        </div>
      </div>
    </div>
  );
};

export default TestProgressPage;
