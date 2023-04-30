import React from 'react';
import Installation from './installation';
import { Stack } from '@chakra-ui/react';
import Usage from './usage';

const Aside = () => {
  return (
    <Stack
      sx={{
        position: 'sticky',
        top: '100px',
      }}
      spacing={6}
    >
      <Installation />
      <Usage />
    </Stack>
  );
};

export default Aside;
