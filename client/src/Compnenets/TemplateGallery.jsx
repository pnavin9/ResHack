/**
 * TemplateGallery Component
 * Renders a gallery of templates fetched from the backend API.
 * Allows the user to search for templates by name and view them.
 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PDFViewer from './PDFViewer/PDFViewer';
import PDFCard from './PDFViewer/PDFCard';
import { Box, Container, HStack, Heading, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiSearch2Fill, RiSearchEyeLine } from 'react-icons/ri';

const TemplateGallery = () => {
  // State variables
  const [fileList, setFileList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFileList, setFilteredFileList] = useState([]);

  // Fetch the file list from the backend API on component mount
  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/templateGallery');
        const { fileList } = response.data;
        setFileList(fileList);
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    };
    fetchFileList();
  }, []);

  // Update the filtered file list based on the search query and file list
  useEffect(() => {
    const filteredList = fileList.filter(file =>
      file.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFileList(filteredList);
  }, [searchQuery, fileList]);

  // Handle search input change
  const handleSearchInputChange = e => {
    setSearchQuery(e.target.value);
  };

  /**
   * Renders the TemplateGallery component
   */
  return (
    <>
      {/* Add any required external CSS or font imports here */}

      {/* Step wizard section */}
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

      <Container minH="95vh" maxW="90%" py="8">
        {/* Heading */}
        <Heading fontWeight="normal" mt="4" size="xl" justifyContent="left" textAlign="left">
          How will{' '}
          <Text as="span" color="rgb(6,163,248)">
            your Resume
          </Text>{' '}
          Look ?
        </Heading>

        {/* Search input */}
        <InputGroup mt={4}>
          <InputLeftElement pointerEvents="none">
            <RiSearchEyeLine color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search templates by name"
            size="sm"
            borderRadius="md"
          />
        </InputGroup>

        {/* Template cards */}
        <Box
          display="grid"
          gridTemplateColumns={['1fr', '1fr 1fr 1fr']}
          maxW="100%"
          mt="8"
          justifyContent="center"
          alignItems="center"
          justifyItems="center"
        >
          {filteredFileList.map((file, index) => (
            <Box
              _hover={{
                transform: 'scale(1.1)', // Increase the scale value to your desired size
                transition: 'transform 0.3s ease', // Adjust the transition duration and easing as desired
              }}
              transition="transform 0.3s ease"
              maxWidth={['100%', '60%']}
              overflow="hidden"
              key={index}
              justifyContent="center"
              alignItems="center"
            >
              {/* Link to the resume route */}
              <Link to={`/resume/${file.fileName}`}>
                {/* PDF card */}
                <PDFCard pdfFile={file.fileContent} />
                {/* Text */}
                <Text textAlign="center" children={file.fileName.split('.')[0]} />
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default TemplateGallery;
