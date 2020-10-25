import { useEffect, useState } from 'react';
import { ScrollDirection } from '../enums/scroll-direction.enum';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevOffset, setPrevOffset] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setScrollDirection(scrollY === 0 ? null : scrollY > prevOffset ? ScrollDirection.Down : ScrollDirection.Up);
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
