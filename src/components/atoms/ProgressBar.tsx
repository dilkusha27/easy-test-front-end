import styled from 'styled-components';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressWrapper>
      <ProgressFill progress={progress} />
    </ProgressWrapper>
  );
};

export default ProgressBar;

const ProgressWrapper = styled.div`
  width: 676px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 5px;
`;

const ProgressFill = styled.div<ProgressBarProps>`
  width: ${(props) => props.progress}%; //입력받은 progress 만큼 채우기
  height: 100%;
  background: linear-gradient(90deg, #313131); #그라데이션 효과
  border-radius: 5px;
  transition: width 0.3s ease;
  overflow: hidden;
`;
