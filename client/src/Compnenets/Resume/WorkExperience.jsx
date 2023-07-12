import { Box, Button, FormControl, FormLabel, Grid, Heading, Input, CloseButton } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { workData } from './Resume';

/**
 * WorkExperienceForm component.
 * Displays a form to input work experience details and manage work experience entries.
 */
const WorkExperienceForm = () => {
  const [experiences, setExperiences] = useState([{company_name: 'Adobe', passing_year: '201X-201Y', responsibilities: 'It is a long <a href=\"https://www.adobe.com\">established</a> fact that a reader will be distracted by the readable content of a page when looking at its layout.' }]);

  useEffect(() => {
    // Retrieve stored form data from local storage
    const storedFormData = localStorage.getItem('workExperience');
    if (storedFormData) {
      setExperiences(JSON.parse(storedFormData));
      submitForm(JSON.parse(storedFormData));
    }
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
    submitForm(updatedExperiences); // Call the submission logic
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, { company_name: '', passing_year: '', responsibilities: '' }]);
  };

  const handleDeleteExperience = (index) => {
    if (index === 0) return; // Prevent removing the first work experience
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
    submitForm(updatedExperiences); // Call the submission logic
  };

  // Function to handle submitting the form data
  const submitForm = (formData) => {
    // Convert the formData object to JSON
    const jsonData = JSON.stringify(formData);
    // Store the form data in local storage
    localStorage.setItem('workExperience', jsonData);
    workData(jsonData);
  };

  return (
    <Box borderRadius="md" mt="5" height="fit-content" p={4} borderWidth={1} borderColor="gray.200">
      <Heading as="h2" size="md" mb={4}>
        Work Experience
      </Heading>

      {experiences.map((experience, index) => (
        <Box key={index} mt={index !== 0 ? '2' : '0'} position="relative" marginBottom={4}>
          {index !== 0 && (
            <CloseButton
              position="absolute"
              right="-15px"
              transform="translateY(-50%)"
              onClick={() => handleDeleteExperience(index)}
              size="sm"
            />
          )}

          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <FormControl>
              <FormLabel>Organisation</FormLabel>
              <Input
                placeholder="Enter organisation"
                value={experience.company_name}
                onChange={(e) => handleInputChange(index, 'company_name', e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Period</FormLabel>
              <Input
                placeholder="Enter period"
                value={experience.passing_year}
                onChange={(e) => handleInputChange(index, 'passing_year', e.target.value)}
              />
            </FormControl>

            <FormControl gridColumn="span 2">
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Enter description"
                value={experience.responsibilities}
                onChange={(e) => handleInputChange(index, 'responsibilities', e.target.value)}
              />
            </FormControl>
          </Grid>
        </Box>
      ))}

      <Button colorScheme="blue" mt={4} onClick={handleAddExperience}>
        +
      </Button>
    </Box>
  );
};

export default WorkExperienceForm;
