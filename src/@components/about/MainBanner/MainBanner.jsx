import React from 'react';
import * as S from './style';

import GoormieeImg from '../../../assets/svgs/goormiee.svg';
import SlidingText from '../SlidingText/SlidingText';

export default function MainBanner({ scrollTrigger }) {
  return (
    <S.MainBannerWrapper>
      <S.HeaderTextWrapper>
        <S.HeaderTitleText>Being All Seasons with goorm</S.HeaderTitleText>
        <S.HeaderDescriptionText>사계절, 구름과 함께</S.HeaderDescriptionText>
      </S.HeaderTextWrapper>
      <S.MainImgWrapper>
        <S.MainImg src={GoormieeImg} />
        <S.AnimatedGoormieeEffect onClick={scrollTrigger} />
      </S.MainImgWrapper>
      <SlidingText />
    </S.MainBannerWrapper>
  );
}
