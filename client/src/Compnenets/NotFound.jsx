/**
 * NotFound Component
 * Renders a page not found message with an error icon and a button to go back to the home page.
 */
import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NotFound = () => {
  /**
   * Renders the NotFound component
   */
  return (
    <Container h="90vh" p="16">
      {/* Vertical stack to center content */}
      <VStack justifyContent="center" h="full" spacing="4">
        {/* Error icon */}
        <RiErrorWarningFill size="5rem" />

        {/* Heading */}
        <Heading my="8" textAlign="center">
          Page Not Found
        </Heading>

        {/* Button to go to home */}
        <Link to="/">
          <Button variant="ghost">Go to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
}

export default NotFound;
