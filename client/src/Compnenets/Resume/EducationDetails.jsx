import { Box, Button, FormControl, FormLabel, Grid, Heading, Input, CloseButton } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { educationData } from './Resume';

/**
 * EducationalDetailsForm component.
 * Displays a form to add and manage educational details.
 */
const EducationalDetailsForm = () => {
  const [details, setDetails] = useState([{ school_name: 'College', passing_year: '203X-203Y', description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.' }]);

  useEffect(() => {
    // Retrieve stored form data from local storage
    const storedFormData = localStorage.getItem('educationalDetails');
    if (storedFormData) {
      setDetails(JSON.parse(storedFormData));
      submitForm(JSON.parse(storedFormData)); // Call the submission logic
    }
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedDetails = [...details];
    updatedDetails[index][field] = value;
    setDetails(updatedDetails);
    submitForm(updatedDetails); // Call the submission logic
  };

  const handleAddDetail = () => {
    setDetails([...details, { school_name: '', passing_year: '', description: '' }]);
  };

  const handleDeleteDetail = (index) => {
    if (index === 0) return; // Prevent removing the first educational detail
    const updatedDetails = [...details];
    updatedDetails.splice(index, 1);
    setDetails(updatedDetails);
    submitForm(updatedDetails); // Call the submission logic
  };

  // Function to handle submitting the form data
  const submitForm = (formData) => {
    // Convert the formData object to JSON
    const jsonData = JSON.stringify(formData);
    // Store the form data in local storage
    localStorage.setItem('educationalDetails', jsonData);
    educationData(jsonData);
  };

  return (
    <Box borderRadius="md" mt="5" height="fit-content" p={4} borderWidth={1} borderColor="gray.200">
      <Heading as="h2" size="md" mb={4}>
        Educational Details
      </Heading>

      {details.map((detail, index) => (
        <Box key={index} mt={index !== 0 ? '2' : '0'} position="relative" marginBottom={4}>
          {index !== 0 && (
            <CloseButton
              position="absolute"
              right="-15px"
              transform="translateY(-50%)"
              onClick={() => handleDeleteDetail(index)}
              size="sm"
            />
          )}

          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <FormControl>
              <FormLabel>Institute</FormLabel>
              <Input
                placeholder="Enter institute"
                value={detail.school_name}
                onChange={(e) => handleInputChange(index, 'school_name', e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Period</FormLabel>
              <Input
                placeholder="Enter period"
                value={detail.passing_year}
                onChange={(e) => handleInputChange(index, 'passing_year', e.target.value)}
              />
            </FormControl>

            <FormControl gridColumn="span 2">
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Enter description"
                value={detail.description}
                onChange={(e) => handleInputChange(index, 'description', e.target.value)}
              />
            </FormControl>
          </Grid>
        </Box>
      ))}

      <Button colorScheme="blue" mt={4} onClick={handleAddDetail}>
        +
      </Button>
    </Box>
  );
};

export default EducationalDetailsForm;
