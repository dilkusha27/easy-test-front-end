// 시간/숫자 포맷 등 공통 함수

// 시작 시간과 종료 시간(밀리초 단위)을 받아 경과 시간을 포맷팅
export function elapsedTime(
  start: number,
  end: number
): {
  hours: number;
  mins: number;
  secs: number;
} {
  const seconds = Math.floor((end - start) / 1000);
  return getDurationParts(seconds);
}

// 초 단위 값을 'X hours Y mins Z seconds' 형태로 포맷
function getDurationParts(seconds: number): {
  hours: number;
  mins: number;
  secs: number;
} {
  return {
    hours: Math.floor(seconds / 3600) || 0,
    mins: Math.floor((seconds % 3600) / 60) || 0,
    secs: seconds % 60,
  };
}
