import React from 'react';
import Icons from '../components/icons';
import { Container, Box } from '@chakra-ui/react';
import Aside from '../components/aside';

const HomePage = () => {
  return (
    <Container
      alignItems="flex-start"
      display="flex"
      flexWrap="wrap"
      maxW="container.xl"
      pt="100px"
      flexDirection={{
        base: 'column-reverse',
        md: 'row',
      }}
    >
      <Box
        sx={{
          width: {
            base: '100%',
            md: 'calc(100% - 330px)',
          },
        }}
      >
        <Icons />
      </Box>
      <Box
        sx={{
          width: {
            base: '100%',
            md: '330px',
          },
          pl: {
            base: 0,
            md: '30px',
          },
          pb: {
            base: '30px',
            md: 0,
          },
        }}
      >
        <Aside />
      </Box>
    </Container>
  );
};

export default HomePage;
