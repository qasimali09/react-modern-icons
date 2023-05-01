/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import * as iconLists from 'react-modern-icons';
import IconBox from './iconBox';
import { useToast, useClipboard } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Icons = ({ variant, search }) => {
  // eslint-disable-next-line no-unused-vars
  const [icons, setIcons] = useState(Object.keys(iconLists));
  const toast = useToast();
  const { setValue, value, onCopy } = useClipboard('');

  const handleCopy = (name) => {
    setValue(name);
  };

  useEffect(() => {
    if (value !== '') {
      onCopy();
      toast({
        description: (
          <>
            <strong>{value}</strong> copied to clipboard
          </>
        ),
        status: 'success',
        variant: 'left-accent',
        duration: 3000,
        isClosable: true,
        containerStyle: {
          bgColor: 'gray.700',
          borderRadius: 'xl',
        },
      });
    }
  }, [value]);

  useEffect(() => {
    if (search === '') {
      setIcons(Object.keys(iconLists));
    } else {
      setIcons(
        Object.keys(iconLists).filter((icon) =>
          icon.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }
  }, [search]);
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(90px, 1fr))" gap={5}>
      {icons?.map((icon) => {
        const Icon = iconLists[icon];
        return (
          <GridItem onCopy={handleCopy} as={IconBox} name={icon} key={icon}>
            <Icon variant={variant} />
          </GridItem>
        );
      })}
      {icons.length === 0 && (
        <GridItem
          sx={{
            gridColumn: '1 / -1',
            py: '50px',
            fontSize: 'xl',
          }}
          colSpan={3}
          textAlign="center"
        >
          No icons found
        </GridItem>
      )}
    </Grid>
  );
};

export default Icons;

Icons.propTypes = {
  variant: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};
