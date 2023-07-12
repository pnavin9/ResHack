import { Button, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * About component.
 * Displays information about the author.
 */
const About = () => {
  return (
    <Container h="90vh" p="16" w="100%" maxW="800px" mx="auto">
      <Heading size="2xl" color="rgb(3, 138, 255)" pb={4}>
        Who am I?
      </Heading>
      <Heading pb={4} size="xl">
        I am Navin Patwari. A Full Stack Developer and ML Enthusiast
      </Heading>
      <Text pb={4}>
        I am a student from the Indian Institute of Technology, Guwahati, and I have been building noteworthy web applications on data science and machine learning, which comply with the latest technology in the field. I help bring out insights from the data and make predictions using various statistical methods also called machine learning models. Having a dedicated mindset for machine learning and data analytics projects helps me build and improve on projects, iterate fast, and contribute something for tomorrow.
      </Text>
      <Link pt={4} to="https://pnavin9.github.io/Portfolio_site/">
        <Button colorScheme="blue">View My Portfolio</Button>
      </Link>
    </Container>
  );
};

export default About;
