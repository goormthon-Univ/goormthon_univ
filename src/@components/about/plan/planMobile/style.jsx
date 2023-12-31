import styled from 'styled-components';

export const PlanWrapper = styled.div`
  height: 100%;

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

export const TitleText = styled.h3`
  text-align: center;
  margin-bottom: 3.75rem;
  margin-top: 4rem;
`;

export const TimelineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.69rem;
`;

export const CardWrapper = styled.div`
  transition: top 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
`;

export const CardContentsWrapper = styled.div`
  width: 16.375rem;
  height: 100%;
  background-color: ${({ $isSelected }) => ($isSelected ? '#fff' : 'var(--gray-050)')};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  & > h5,
  & > p {
    color: ${({ $isSelected }) => ($isSelected ? '#000' : 'var(--info)')};
  }

  & svg > path {
    fill: ${({ $isSelected }) => ($isSelected ? '#000' : 'var(--info)')};
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 0.25rem;
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CardTitleText = styled.h5`
  margin-bottom: 1rem;
`;

export const CardDescriptionText = styled.p`
  margin: 0;
`;

export const TimelineBar = styled.figure`
  width: 2rem;
  height: 61.125rem;
  border-radius: 1rem;
  background: var(--light-gray-gray-050, #f7f7fa);
  margin-bottom: 12rem;
  position: relative;
`;

export const TimelineFillBar = styled.div`
  width: -webkit-fill-available;
  height: ${({ $fillRatio }) => $fillRatio}%;
  background-color: var(--blue-500);
  border-radius: 1.34375rem;
  position: absolute;
  transition: height 0.5s ease-in-out;
`;

export const ProgressBar = styled.div`
  position: absolute;
`;

export const MonthTextWrapper = styled.div`
  height: 61.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h5 {
    margin-top: 8rem;
  }
  & > h5:first-child {
    margin-top: 0;
  }
  & > h5:nth-child(2) {
    margin-top: 6.62rem;
  }
`;

export const MonthTextClickable = styled.h5`
  margin: 0;
  cursor: pointer;
  color: var(--gray-400);

  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  background-color: var(--gray-050);
  border-radius: 50%;
  &.active,
  &.prev {
    color: var(--light);
    background-color: var(--blue-500);
    border-radius: 50%;
  }
`;

export const CardListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
