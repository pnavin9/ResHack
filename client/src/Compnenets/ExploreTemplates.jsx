/**
 * Templates Component
 * Renders a selection of resume templates
 */
import { Container, Flex, HStack, Heading, Image, VStack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import template1 from "../Assets/BasicTemplate-1.png";
import template2 from "../Assets/LinkTemplate-1.png";
import template3 from "../Assets/ImageTemplate-1.png";
import "../Compnenets/Styles/Createresume.css";
import { Link } from 'react-router-dom';

const Templates = () => {
  /**
   * Renders the Templates component
   */
  return (
    <>
      {/* External font stylesheet */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

      {/* Progress steps */}
      <section className="step-wizard">
        <ul className="step-wizard-list">
          <li className="step-wizard-item current-item">
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

      {/* Container for template selection */}
      <Container minH="95vh" maxW="90%" py="8">
        {/* Heading */}
        <Heading fontWeight="normal" mt="4" size="xl" justifyContent="left" textAlign="left">
          How will{' '}
          <Text as="span" color="rgb(6, 163, 248)">
            your Resume
          </Text>{' '}
          Look?
        </Heading>
        {/* Template selection */}
        <HStack mt="8" justifyContent="center">
          {/* Template 1 */}
          <Box
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
            transition="transform 0.3s ease"
          >
            <Link to="/resume/1">
              <Image boxSize="300px" objectFit="contain" src={template1} alt="Template 1" />
              <Text textAlign="center" children="Basic" />
            </Link>
          </Box>
          {/* Template 2 */}
          <Box
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
            transition="transform 0.3s ease"
          >
            <Link to="/resume/2">
              <Image boxSize="300px" objectFit="contain" src={template2} alt="Template 2" />
              <Text textAlign="center" children="Link" />
            </Link>
          </Box>
          {/* Template 3 */}
          <Box
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
            transition="transform 0.3s ease"
          >
            <Link to="resume/3">
              <Image boxSize="300px" objectFit="contain" src={template3} alt="Template 3" />
              <Text textAlign="center" children="Image" />
            </Link>
          </Box>
        </HStack>
      </Container>
    </>
  );
};

export default Templates;
