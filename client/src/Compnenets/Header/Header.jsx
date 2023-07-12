import { Button, Divider, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Heading, VStack, useDisclosure } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Link button component for navigation.
 * @param {string} url - The URL to navigate to.
 * @param {string} title - The title of the link button.
 * @param {Function} onClose - The function to close the drawer.
 */
const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant="ghost">{title}</Button>
  </Link>
);

/**
 * Header component.
 * Displays the header with navigation links and a drawer for mobile navigation.
 */
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Heading ml={"20"} mt={"10"} children="ResHack" />
      <ColorModeSwitcher />
      <Button zIndex={'overlay'} onClick={onOpen} colorScheme='blue' width='12' height={'12'} rounded='full' position={'fixed'} top='6' left='6'>
        <RiMenu5Fill />
      </Button>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>ResHack</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkButton url='/' title='Home' onClose={onClose} />
              <LinkButton url='/templateGallery' title='Explore Templates' onClose={onClose} />
              <LinkButton url='/howitworks' title='How it Works' onClose={onClose} />
              <LinkButton url='/about' title='About Me' onClose={onClose} />
              <HStack justifyContent={'space-evenly'} position={'absolute'} bottom={'2rem'} width={'80%'}>
                <VStack>
                  <Link onClick={onClose} to="https://pnavin9.github.io/Portfolio_site/">
                    <Button variant='solid' colorScheme='blue'>Explore other apps</Button>
                  </Link>
                </VStack>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Divider />
    </>
  );
};

export default Header;
