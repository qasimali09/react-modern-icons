import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    gray: {
      900: '#000000',
      800: '#0a0a0a',
      700: '#141414',
      600: '#1f1f1f',
      500: '#333333',
      400: '#757575',
      300: '#a3a3a3',
      200: '#d1d1d1',
      100: '#e0e0e0',
      50: '#f0f0f0',
    },
  },
  fonts: {
    heading:
      'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Cantarell,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    body: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Cantarell,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
  },
});

export default theme;
