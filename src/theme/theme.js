import { createMediaQueries } from './media-query';

export const defaultTheme = {
  mediaQueries: createMediaQueries(),
  sharedSizes: {
    headerHeight: '64px',
    sidebarWidth: '240px',
  },
  colors: {
    gray0: '#e9ecef',
    gray1: '#ced4da',
    gray2: '#868e96',
    gray3: '#495057',
    gray4: '#343a40',
    primary: '#ae3ec9',
    anchor: '#da77f2',
  },
  zIndexes: {
    sidebar: 900,
    header: 1000,
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semiBold: 600,
  },
  duration: {
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
  },
};
