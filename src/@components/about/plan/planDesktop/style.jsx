import styled from 'styled-components';

export const PlanWrapper = styled.div`
  height: 100vh;
  @supports (height: 100dvh) {
    height: 100dvh;
  }

  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-100);
`;

export const TitleText = styled.h2`
  text-align: center;
  margin-bottom: 3.63rem;
`;

export const CardWrapper = styled.div`
  transition: left 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
`;

export const CardContentsWrapper = styled.div`
  width: 22.75rem;
  height: 10.375rem;
  background-color: ${({ $isSelected }) => ($isSelected ? '#fff' : 'var(--gray-050)')};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem 1.25rem 1.5rem 1.25rem;

  & > h4,
  & > p {
    color: ${({ $isSelected }) => ($isSelected ? '#000' : 'var(--info)')};
  }

  & svg > path {
    fill: ${({ $isSelected }) => ($isSelected ? '#000' : 'var(--info)')};
  }

  border: ${({ $isSelected }) => $isSelected && '2px solid #5094FA'};
`;

export const IconWrapper = styled.div`
  color: var(--black);
  margin-bottom: 0.44rem;
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CardTitleText = styled.h4`
  margin-bottom: 1.25rem;
`;

export const CardDescriptionText = styled.p`
  color: var(--black);
  white-space: pre-wrap;
`;

export const TimelineBar = styled.figure`
  width: -webkit-fill-available;
  height: 2.75rem;
  border-radius: 1.34375rem;
  background: var(--gray-050);
  position: relative;
  margin: 0;
`;

export const TimelineFillBar = styled.div`
  width: ${({ $fillRatio }) => $fillRatio}%;
  height: var(--size-500);
  background-color: var(--blue-500);
  border-radius: 1.34375rem;
  position: absolute;
  transition: width 0.5s ease-in-out;
`;

export const ProgressBar = styled.div`
  position: absolute;
`;

export const MonthTextWrapper = styled.div`
  width: -webkit-fill-available;
  height: var(--size-500);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MonthTextClickable = styled.h5`
  margin: 0;
  cursor: pointer;
  color: var(--gray-400);

  width: 3.875rem;
  height: 3.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.active,
  &.prev {
    color: var(--light);
  }
`;

export const CardListUpperWrapper = styled.div`
  display: flex;
  gap: 2.19rem;
`;

export const CardListLowerWrapper = styled.div`
  gap: 1.38rem;
  display: flex;
  margin-left: 2.88rem;
`;

export const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;
