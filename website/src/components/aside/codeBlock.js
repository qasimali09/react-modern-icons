/* eslint-disable jsx-a11y/anchor-is-valid */
import { Highlight, themes } from 'prism-react-renderer';
import React from 'react';
import { Clipboard } from 'react-modern-icons';
import {
  useClipboard,
  Tooltip,
  IconButton,
  Box,
  useColorMode,
} from '@chakra-ui/react';

export default function CodeBlock({ code, language }) {
  const { hasCopied, onCopy } = useClipboard(code);
  const { colorMode } = useColorMode();
  return (
    <Box
      sx={{
        '& .prism-code': {
          fontSize: '11px',
          overflow: 'auto',
          p: 4,
          borderRadius: 'md',
          position: 'relative',
          bgColor:
            colorMode === 'light' ? 'white !important' : 'gray.700 !important',
          border: '1px solid',
          borderColor:
            colorMode === 'light'
              ? 'gray.50 !important'
              : 'gray.600 !important',
          boxShadow: '0 5px 20px -5px rgba(32,14,50,0.1)',
        },
      }}
    >
      <Highlight
        theme={colorMode === 'light' ? themes.vsLight : themes.vsDark}
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} code`} style={style}>
            <Tooltip
              label={hasCopied ? 'Copied' : 'Copy'}
              closeOnClick={false}
              hasArrow
              placement="top"
              borderRadius="lg"
            >
              <IconButton
                size="sm"
                fontSize="lg"
                onClick={onCopy}
                icon={<Clipboard />}
                variant="ghost"
                sx={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  bgColor: 'transparent',
                  _hover: {
                    bgColor: 'transparent',
                  },
                }}
              />
            </Tooltip>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
}
