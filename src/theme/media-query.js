import { Breakpoint } from '../enums/breakpoint.enum';

const transformMinWidthToMediaQuery = (minWidth) => `@media screen and (min-width:${minWidth})`;

export const createMediaQueries = () => {
  const breakpointToMinWidthMap = {
    [Breakpoint.ViewPort4]: '480px', // mobile(landscape) ~ tablet(portrait)
    [Breakpoint.ViewPort9]: '992px', // tablet(landscape) ~ desktop
    [Breakpoint.ViewPort12]: '1200px', // fullhd ~
  };

  return Object.keys(Breakpoint).reduce((acc, key) => {
    return {
      ...acc,
      [Breakpoint[key]]: transformMinWidthToMediaQuery(breakpointToMinWidthMap[Breakpoint[key]]),
    };
  }, {});
};
