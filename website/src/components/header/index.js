import React from 'react';
import {
  Box,
  Container,
  useColorModeValue,
  Text,
  useTheme,
} from '@chakra-ui/react';
import logo from '../../images/react-modern-icons-logo.png';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  {
    label: 'Getting Started',
    href: '/',
  },
  {
    label: 'Icons',
    href: '/icons',
  },
];

const Header = () => {
  const linkColor = useColorModeValue('gray.400', 'gray.600');
  const linkHoverColor = useColorModeValue('gray.600', 'gray.400');
  const { pathname } = useLocation();
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        bg: useColorModeValue('white', 'gray.800'),
        borderBottom: '1px solid',
        borderColor: useColorModeValue('gray.50', 'gray.900'),
        px: 4,
        py: 2,
      }}
    >
      <Container maxW="container.xl">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '50px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Box
                as="img"
                src={logo}
                alt="React Modern Icons"
                sx={{
                  width: '40px',
                  height: '40px',
                  mr: 2,
                }}
              />
              <Text
                as="h1"
                sx={{
                  fontSize: '20px',
                  fontWeight: '900',
                  color: useColorModeValue('gray.500', 'gray.500'),
                }}
              >
                React Icons
              </Text>
              <Text
                sx={{
                  fontSize: '10px',
                  fontWeight: '900',
                  color: useColorModeValue('gray.500', 'gray.500'),
                  position: 'absolute',
                  top: '2px',
                  right: '0',
                }}
              >
                Modern
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: 8,
              }}
            >
              {menuItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    a: {
                      py: 4,
                      px: 2,
                      display: 'inline-block',
                      color:
                        pathname === item.href ? linkHoverColor : linkColor,
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '600',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: linkHoverColor,
                      },
                    },
                  }}
                >
                  <Link key={index} to={item.href}>
                    {item.label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
