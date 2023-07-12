/**
 * Thanks Component
 * Renders a thank you message and provides an option to try other templates.
 */
import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiUserHeartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Thanks = () => {
  /**
   * Renders the Thanks component
   */
  return (
    <>
      {/* Add any required external CSS or font imports here */}

      {/* Step wizard section */}
      <section className="step-wizard">
        <ul className="step-wizard-list">
          <li className="step-wizard-item">
            <span className="progress-count">1</span>
            <span className="progress-label">Select a Template</span>
          </li>
          <li className="step-wizard-item">
            <span className="progress-count">2</span>
            <span className="progress-label">Fill in the blanks</span>
          </li>
          <li className="step-wizard-item">
            <span className="progress-count">3</span>
            <span className="progress-label">Download</span>
          </li>
        </ul>
      </section>

      <Container h="90vh" p="16">
        <VStack justifyContent="center" h="full" spacing="4">
          {/* Thank you icon */}
          <RiUserHeartLine color="rgb(11,127,171)" size="5rem" />
          {/* Thank you message */}
          <Heading my="8" textAlign="center">
            Thanks For Using ResHack
          </Heading>

          {/* Link to template gallery */}
          <Link to="/templateGallery">
            <Button variant="ghost">Try other Templates</Button>
          </Link>
        </VStack>
      </Container>
    </>
  );
};

export default Thanks;
