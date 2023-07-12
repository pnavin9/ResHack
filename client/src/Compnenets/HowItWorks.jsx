/**
 * HowItWorks Component
 * Renders the explanation of how the resume generation process works
 */
import { Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const HowItWorks = () => {
  /**
   * Renders the HowItWorks component
   */
  return (
    <Container h="90vh" p="16" w="100%" maxW="800px" mx="auto">
      {/* Heading */}
      <Heading children="How It Works" pb={4} />

      {/* Explanation text */}
      <Text style={{ marginBottom: '16px' }}>
        &bull; We have provided a template gallery that fetches all the PDF files from the input directory and displays them.
      </Text>
      <Text style={{ marginBottom: '16px' }}>
        &bull; When you select a template, a POST request is sent to "/resume/TemplateName" with some default values for preview.
      </Text>
      <Text style={{ marginBottom: '16px' }}>
        &bull; Once you enter all the necessary values and click preview, our API sends a request to the Adobe server to fetch a PDF file based on your inputs and the chosen template. This rendered PDF is then passed to the frontend React App.
      </Text>
      <Text style={{ marginBottom: '16px' }}>
        &bull; The rendered PDF, along with the form, is displayed for your review. If you're satisfied with the resume, you can click on the download button.
      </Text>
      <Text style={{ marginBottom: '16px' }}>
        &bull; Upon clicking the download button, the resume is saved in your local drive for immediate use.
      </Text>
    </Container>
  );
}

export default HowItWorks;
