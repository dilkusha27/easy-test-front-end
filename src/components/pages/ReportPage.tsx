import CSV from '../../assets/csv.svg';
import ZIP from '../../assets/zip.svg';
import Download from '../../assets/download_icon.svg';
import { useLocation } from 'react-router-dom';
import { elapsedTime } from '../../utils/formatUtils';
import {
  fetchTestReportJson,
  fetchTestReportZip,
} from '../../services/resultService';
import { useDownloadBlob } from '../../hooks/useResult';

const ReportPage = () => {
  const location = useLocation();

  // refactor: 변수 및 함수 추후 useResult 훅으로 분리 예정

  // TestProgressPage.tsx(테스트 진행 페이지)로부터 전달된 테스트 정보
  const jobId = location.state.jobId || {};
  const testInfo = location.state.data || {};

  // 테스트 시작 시간, 종료 시간, 요약 정보
  const { started_at, finished_at, summary = {} } = testInfo;

  // 경과 시간 계산 (계산 및 포맷팅 유틸 함수 사용)
  const { hours, mins, secs } = elapsedTime(
    new Date(started_at).getTime(),
    new Date(finished_at).getTime()
  );

  // 요약 세부 정보 (호출가능한 객체 수, 토큰 사용량)
  const { callables_total, token_usage = {} } = summary;

  // 토큰 사용량 세부 내역
  const { input, output, total } = token_usage;

  // JSON 다운로드 핸들러
  const handleDownloadJson = async () => {
    if (!jobId) return;
    try {
      const blob = await fetchTestReportJson(jobId);
      useDownloadBlob(blob, `${jobId}_report.json`);
    } catch (err) {
      // 에러 처리 필요시 추가
    }
  };

  // Zip 다운로드 핸들러
  const handleDownloadZip = async () => {
    if (!jobId) return;
    try {
      const blob = await fetchTestReportZip(jobId);
      useDownloadBlob(blob, `${jobId}_report.zip`);
    } catch (err) {
      // 에러 처리 필요시 추가
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 각 단계에서 취해야 할 행동이나 상태를 알려주는 텍스트 */}
      {/* 현재는 ImportPage.tsx, 추후 컴포넌트화 및 분리 => Header로 구분 예정 */}
      <div>
        {/* 전역 컴포넌트*/}
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
        {/* 테스트 리포트 컴포넌트 */}
        {/* 전역 컴포넌트 */}
        <div>
          <p
            style={{
              margin: '24px 0',
              fontSize: '40px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Testing Done!
          </p>
        </div>

        <div style={{ margin: '0 0 24px 0' }}>
          {/* 로컬 컴포넌트 */}
          <p style={{ fontSize: '18px', textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>Explored lines:</span> 25M /
            44M
          </p>
          {/* 로컬 컴포넌트 */}
          <p style={{ fontSize: '18px', textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>
              Detected callable objects:
            </span>{' '}
            {callables_total || 0}
          </p>
          {/* 로컬 컴포넌트 */}
          <p style={{ fontSize: '18px', textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>Elapsed:</span>{' '}
            {hours !== 0 ? `${hours} hours ` : ''}
            {mins !== 0 ? `${mins} mins ` : ''}
            {secs} seconds
          </p>
          {/* 로컬 컴포넌트 */}
          <p style={{ fontSize: '18px', textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>Used tokens:</span>{' '}
            {total || 0}
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {/* 로컬 컴포넌트 */}
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
              onClick={handleDownloadJson}
            >
              <span>DOWNLOAD</span>
              <img src={Download} alt="download-icon" />
            </button>
          </div>
          {/* 로컬 컴포넌트 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Test-cases</p>
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
              onClick={handleDownloadZip}
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
