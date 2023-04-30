import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  useClipboard,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { Clipboard } from 'react-modern-icons';

const Installation = () => {
  const { hasCopied, onCopy } = useClipboard('npm i react-modern-icons');
  const { hasCopied: hasCopiedYarn, onCopy: onCopyYarn } = useClipboard(
    'yarn add react-modern-icons',
  );

  return (
    <Stack
      sx={{
        border: '1px solid',
        borderColor: useColorModeValue('gray.50', 'gray.600'),
        borderRadius: 'xl',
        bgColor: useColorModeValue('white', 'gray.700'),
        p: 6,
        boxShadow: '0 5px 20px -5px rgba(32,14,50,0.1)',
      }}
      spacing={4}
    >
      <Heading as="h3" size="md" fontWeight="semibold" mb={2}>
        Installation
      </Heading>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 'lg',
          boxShadow: '0 5px 20px -5px rgba(32,14,50,0.1)',
          bgColor: useColorModeValue('white', 'gray.700'),
          border: '1px solid',
          borderColor: useColorModeValue('gray.50', 'gray.500'),
          p: 2,
        }}
      >
        <Text
          sx={{
            fontSize: 'xs',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          npm i react-modern-icons
        </Text>
        <Tooltip
          label={hasCopied ? 'Copied' : 'Copy'}
          closeOnClick={false}
          hasArrow
          placement="top"
          borderRadius="lg"
        >
          <IconButton
            aria-label="Copy to clipboard"
            icon={<Clipboard />}
            onClick={onCopy}
            size="xs"
            variant="outline"
          />
        </Tooltip>
      </Box>
      <Text
        sx={{
          color: useColorModeValue('gray.500', 'gray.300'),
          fontSize: 'xs',
        }}
      >
        OR
      </Text>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 'lg',
          boxShadow: '0 5px 20px -5px rgba(32,14,50,0.1)',
          bgColor: useColorModeValue('white', 'gray.700'),
          border: '1px solid',
          borderColor: useColorModeValue('gray.50', 'gray.500'),
          p: 2,
        }}
      >
        <Text
          sx={{
            fontSize: 'xs',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          yarn add react-modern-icons
        </Text>
        <Tooltip
          label={hasCopiedYarn ? 'Copied' : 'Copy'}
          closeOnClick={false}
          hasArrow
          placement="top"
          borderRadius="lg"
        >
          <IconButton
            aria-label="Copy to clipboard"
            icon={<Clipboard />}
            onClick={onCopyYarn}
            size="xs"
            variant="outline"
          />
        </Tooltip>
      </Box>
    </Stack>
  );
};

export default Installation;
