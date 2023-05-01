import React, { useState } from 'react';
import Icons from '../components/icons';
import { Container, Box } from '@chakra-ui/react';
import Aside from '../components/aside';
import Filter from '../components/icons/filter';

const HomePage = () => {
  const [variant, setVariant] = useState('regular');
  const [search, setSearch] = useState('');

  return (
    <Container
      alignItems="flex-start"
      display="flex"
      flexWrap="wrap"
      maxW="container.xl"
      pt="100px"
      flexDirection={{
        base: 'column',
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
        <Filter
          search={search}
          setSearch={setSearch}
          variant={variant}
          setVariant={setVariant}
        />
        <Icons search={search} variant={variant} />
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
          pt: {
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
