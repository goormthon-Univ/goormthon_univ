import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

export default function BenefitItem({ imgSrc, iconSrc, bgColor, title, description, url }) {
  return (
    <Link to={url} target="\_blank">
      <S.BenefitItemWrapper>
        <S.BenefitImgWrapper $bgColor={bgColor}>
          <S.BenefitImg src={imgSrc} />
        </S.BenefitImgWrapper>
        <S.BenefitContentsWrapper>
          <S.BenefitTextWrapper>
            <S.BenefitTitle>{title}</S.BenefitTitle>
            <S.BenefitDescription className="paragraph-lg">{description}</S.BenefitDescription>
          </S.BenefitTextWrapper>
          <S.Icon src={iconSrc} />
        </S.BenefitContentsWrapper>
      </S.BenefitItemWrapper>
    </Link>
  );
}
