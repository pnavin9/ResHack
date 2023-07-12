import { Box, FormControl, FormLabel, Grid, Heading, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { jobTitle, careerObjective } from './Resume';

/**
 * JobDetails component.
 * Displays a form to input job details such as job title and job summary.
 */
const JobDetails = () => {
  const [focusedField, setFocusedField] = useState('');
  const [jobDetails, setJobDetails] = useState(() => {
    // Retrieve the stored job details from localStorage on component mount
    const storedJobDetails = localStorage.getItem('jobDetails');
    return storedJobDetails ? JSON.parse(storedJobDetails) : {
      jobTitle: 'Software Development Engineer',
      jobSummary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.'
    };
  });

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleChange = (fieldName, value) => {
    setFocusedField(fieldName);
    setJobDetails((prevJobDetails) => {
      const updatedJobDetails = { ...prevJobDetails, [fieldName]: value };
      submitForm(updatedJobDetails); // Auto-submit the form whenever a field is changed
      return updatedJobDetails;
    });
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  useEffect(() => {
    // Store the job details in localStorage whenever it changes
    localStorage.setItem('jobDetails', JSON.stringify(jobDetails));
    submitForm(jobDetails)
  }, [jobDetails]);

  // Function to handle submitting the form data
  const submitForm = (formData) => {
    // Check if both job title and job summary are filled
    if (formData.jobTitle && formData.jobSummary) {
      // Convert the formData object to JSON
      jobTitle(JSON.stringify(formData.jobTitle));
      careerObjective(JSON.stringify(formData.jobSummary));
    }
  };

  return (
    <Box borderRadius="md" mt="5" height="fit-content" p={4} borderWidth={1} borderColor={focusedField ? 'blue.500' : 'gray.200'}>
      <Heading as="h2" size="md" mb={4}>
        Job Details
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <FormControl>
          <FormLabel>Job Title</FormLabel>
          <Input
            placeholder="Enter the job title"
            value={jobDetails.jobTitle}
            onFocus={() => handleFocus('jobTitle')}
            onBlur={handleBlur}
            onChange={(e) => handleChange('jobTitle', e.target.value)}
          />
        </FormControl>

        <FormControl gridColumn="span 2">
          <FormLabel>Job Summary</FormLabel>
          <Input
            placeholder="Enter the job summary"
            value={jobDetails.jobSummary}
            onFocus={() => handleFocus('jobSummary')}
            onBlur={handleBlur}
            onChange={(e) => handleChange('jobSummary', e.target.value)}
          />
        </FormControl>
      </Grid>
    </Box>
  );
};

export default JobDetails;
