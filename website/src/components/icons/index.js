/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import * as iconLists from 'react-modern-icons';
import IconBox from './iconBox';
import { useToast, useClipboard } from '@chakra-ui/react';

const Icons = () => {
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
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(90px, 1fr))" gap={5}>
      {icons.map((icon) => {
        const Icon = iconLists[icon];
        return (
          <GridItem onCopy={handleCopy} as={IconBox} name={icon} key={icon}>
            <Icon />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Icons;
