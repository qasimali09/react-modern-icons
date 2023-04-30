import React from 'react';
import { Box, useColorModeValue, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const IconBox = ({ children, name, onCopy }) => {
  return (
    <Box title={name}>
      <Box
        sx={{
          borderRadius: 'xl',
          boxShadow: '0 5px 20px -5px rgba(32,14,50,0.1)',
          bgColor: useColorModeValue('white', 'gray.700'),
          border: '1px solid',
          borderColor: useColorModeValue('gray.50', 'gray.600'),
          p: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80px',
          fontSize: '3xl',
          cursor: 'pointer',
          transition: '0.2s transform',
          _hover: {
            transform: 'scale(1.05)',
          },
          _active: {
            transform: 'scale(0.95)',
          },
        }}
        onClick={() => onCopy(name)}
      >
        {children}
      </Box>
      <Text
        sx={{
          fontSize: 'xs',
          textAlign: 'center',
          mt: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </Text>
    </Box>
  );
};

export default IconBox;

IconBox.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
};
