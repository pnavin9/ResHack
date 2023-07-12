import { Box, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

/**
 * Footer component.
 * Displays the footer with information about the project.
 */
const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'5vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading size={'sm'} children="Built with passion during Adobe Papyrus Round 2 by Navin" color={'white'} />
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
