import React, { useRef } from 'react';
import {
  Box,
  InputGroup,
  Input,
  Kbd,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const variants = ['light', 'regular', 'bold', 'filled'];

const Filter = ({ setVariant, variant, search, setSearch }) => {
  const inputRef = useRef(null);

  const btnColor = useColorModeValue('gray.400', 'gray.400');
  const activeBtnColor = useColorModeValue('gray.800', 'gray.200');
  const activeBtnBgColor = useColorModeValue('gray.50', 'gray.600');

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'f' && e.metaKey) {
        e.preventDefault();
        inputRef.current.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <Box
      sx={{
        mb: '30px',
        display: 'flex',
        alignItems: {
          base: 'flex-start',
          sm: 'center',
        },
        flexDirection: {
          base: 'column',
          sm: 'row',
        },
      }}
    >
      <InputGroup
        sx={{
          position: 'relative',
        }}
      >
        <Input
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            bgColor: 'transparent',
            position: 'relative',
            zIndex: 1,
            pr: '50px',
            boxShadow: 'none !important',
            _focus: {
              boxShadow: 'none !important',
              borderColor: useColorModeValue('gray.300', 'gray.400'),
            },
            _placeholder: {
              color: useColorModeValue('gray.300', 'gray.400'),
            },
          }}
          placeholder="Search icons..."
        />
        <Kbd
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            fontWeight: '400',
            bgColor: 'transparent',
            color: useColorModeValue('gray.400', 'gray.400'),
            border: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.500'),
          }}
        >
          ⌘ F
        </Kbd>
      </InputGroup>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          ml: {
            base: 0,
            sm: 4,
          },
          mt: {
            base: 4,
            sm: 0,
          },
          gap: '5px',
          borderRadius: 'md',
          border: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.500'),
          p: '5px',
        }}
      >
        {variants.map((a) => (
          <Button
            onClick={() => setVariant(a)}
            sx={{
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '1',
              textTransform: 'capitalize',
              color: variant === a ? activeBtnColor : btnColor,
              bgColor: variant === a ? activeBtnBgColor : 'transparent',
              _hover: {
                bgColor: variant === a ? activeBtnBgColor : 'transparent',
                color: activeBtnColor,
              },
            }}
            size="sm"
            key={a}
          >
            {a}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Filter;

Filter.propTypes = {
  setVariant: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
