import testing from '../../assets/testing.svg';
import ProgressBar from '../atoms/ProgressBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePollingTestInfo } from '../../hooks/useResult';
import {
  getProcessingFileInfo,
  getTestProgressRate,
} from '../../hooks/useTest';

const TestProgressPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const jobId = location.state?.jobId;

  // 테스트 정보 주기적으로 호출
  // 성공 응답값 받으면 job_id와 테스트 데이터와 함께 결과 페이지로 이동
  // 실패 응답값 받으면 실패 페이지로 이동
  usePollingTestInfo(jobId, navigate);

  // 테스트 파일 수, 진행 중인 파일명, 테스트 진행률 반영하는 커스텀 훅 사용
  const {
    processingFileCount,
    setProcessingFileCount,
    totalFileCount,
    // setTotalFileCount,
    processingFileName,
    // setProcessingFileName,
  } = getProcessingFileInfo();
  const { progressRate, setProgressRate } = getTestProgressRate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        {/* 테스팅 중 컴포넌트 */}
        <p style={{ margin: '24px 0', fontSize: '28px', fontWeight: 'bold' }}>
          Testing files : {processingFileCount} / {totalFileCount} (
          {Math.round((processingFileCount / totalFileCount) * 100)}%)
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
          <p
            style={{
              margin: '24px 0',
              fontSize: '40px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Now Testing:
          </p>
          <p
            style={{ margin: '24px 0', fontSize: '24px', textAlign: 'center' }}
          >
            {processingFileName}
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
          <ProgressBar progress={progressRate} />
          <p style={{ fontSize: '24px' }}>{progressRate}%</p>
        </div>
      </div>
    </div>
  );
};

export default TestProgressPage;
