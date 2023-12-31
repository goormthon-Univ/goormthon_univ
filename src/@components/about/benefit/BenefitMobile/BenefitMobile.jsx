import React from 'react';
import GridContainer from '../../../layout/GridContainer';
import BenefitList from './BenefitList';

import * as S from './style';

export default function BenefitMobile() {
  return (
    <S.BenefitWrapper>
      <GridContainer>
        <S.HeaderTitleText>구름톤유니브에서 마음껏 누려요</S.HeaderTitleText>
        <BenefitList />
      </GridContainer>
    </S.BenefitWrapper>
  );
}
