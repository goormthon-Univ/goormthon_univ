import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import * as S from './style';
import ActivityItem from './ActivityItem';
import { ACTIVITY_DATA } from '../../../utilities/AboutData';

export default function ActivityList() {
  const [visibleItems, setVisibleItems] = useState(new Array(ACTIVITY_DATA.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const isMobile = window.innerWidth <= 768; // 768px 미만을 모바일로 간주
      // 모바일 및 데스크탑 환경에 따른 스크롤 위치 조정
      const mobileBreakpoints = [5400, 6300, 6500]; // 모바일용 브레이크포인트
      const desktopBreakpoints = [3800, 4100, 4500]; // 데스크탑용 브레이크포인트

      const newVisibleItems = visibleItems.map((_, idx) => {
        let breakpoint;
        switch (idx) {
          case 0:
          case 1:
            breakpoint = isMobile ? mobileBreakpoints[0] : desktopBreakpoints[0];
            break;
          case 2:
            breakpoint = isMobile ? mobileBreakpoints[1] : desktopBreakpoints[1];
            break;
          case 3:
          case 4:
            breakpoint = isMobile ? mobileBreakpoints[2] : desktopBreakpoints[2];
            break;
          default:
            return false;
        }
        return scrollY >= breakpoint;
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems]);

  // 아이템의 애니메이션 속성
  const itemAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <S.ActivityListWrapper>
      {ACTIVITY_DATA.map((item, idx) => {
        let customStyle = {};
        if (idx === 2) {
          customStyle = { gridColumn: '1 / -1', width: '100%' };
        }

        return (
          <motion.div
            key={item.title}
            initial="hidden"
            animate={visibleItems[idx] ? 'visible' : 'hidden'}
            transition={{ duration: 0.85 }}
            variants={itemAnimation}
            style={customStyle}
          >
            <ActivityItem
              idx={idx}
              imgSrc={item.imgSrc}
              title={item.title}
              title_en={item.title_en}
              description={item.description}
            />
          </motion.div>
        );
      })}
    </S.ActivityListWrapper>
  );
}
