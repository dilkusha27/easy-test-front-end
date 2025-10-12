import testing from '../../assets/testing.svg';

const TestCompletePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* 각 단계에서 취해야 할 행동이나 상태를 알려주는 텍스트 */}
      {/* 현재는 ImportPage.tsx, 추후 컴포넌트화 및 분리 => Header로 구분 예정 */}
      <div>
        {/* 업로드 전 컴포넌트 */}
        <p style={{ margin: '24px 0', fontSize: '28px', fontWeight: 'bold' }}>
          Testing files : 100 / 100 (100%)
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src={testing} alt="testing-image" />
        </div>
        <div style={{ margin: '24px 0', fontSize: '40px', fontWeight: 'bold' }}>
          {/* 버튼 컴포넌트 만들 예정 */}
          <button
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
            VIEW RESULT
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCompletePage;
