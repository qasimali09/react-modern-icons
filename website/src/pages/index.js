import React from 'react';
import Icons from '../components/icons';
import { Container, Box } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Container display="flex" flexWrap="wrap" maxW="container.xl" pt="100px">
      <Box
        sx={{
          width: '70%',
        }}
      >
        <Icons />
      </Box>
    </Container>
  );
};

export default HomePage;
