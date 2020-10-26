import { useEffect, useState } from 'react';
import { ScrollDirection } from '../enums/scroll-direction.enum';

const OFFSET = 64; // 64 is height of Header.

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevOffset, setPrevOffset] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setScrollDirection(scrollY <= OFFSET ? null : scrollY > prevOffset ? ScrollDirection.Down : ScrollDirection.Up);
    setPrevOffset(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return scrollDirection;
};

export default useScrollDirection;
