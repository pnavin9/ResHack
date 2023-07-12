import { Box, FormControl, FormLabel, Grid, Heading, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { personalData } from './Resume';

/**
 * PersonalDetails component.
 * Displays a form to input personal details such as name, email, phone number, and LinkedIn URL.
 */
const PersonalDetails = () => {
  const params = useParams();
  const [focusedField, setFocusedField] = useState('');
  const [formData, setFormData] = useState(() => {
    // Retrieve the stored form data from localStorage on component mount
    const storedFormData = localStorage.getItem('formData');
    return storedFormData
      ? JSON.parse(storedFormData)
      : {
        name: 'Lorem',
        last_name: 'ipsum',
        email_address: 'ipsum@abc.com',
        phone_number: '+91 99xx14xx99',
        linkedin_url: '<a href=\"https://www.linkedin.com\">linkedIn</a>'
        };
  });

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
    setFocusedField(fieldName);
    submitForm(); // Call the submission logic
  };

  useEffect(() => {
    submitForm(); // Call the submission logic whenever formData changes
  }, [formData]);

  const handleBlur = () => {
    setFocusedField('');
  };

  // Function to handle submitting the form data
  const submitForm = () => {
    // Convert the formData object to JSON
    const jsonData = JSON.stringify(formData);
    localStorage.setItem('formData', jsonData); // Store the form data in localStorage
    personalData(jsonData);
  };

  return (
    <Box borderRadius="md" mt="5" height="fit-content" p={4} borderWidth={1} borderColor={focusedField ? 'blue.500' : 'gray.200'}>
      <Heading as="h2" size="md" mb={4}>
        Personal Details
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="Enter your first name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            placeholder="Enter your last name"
            value={formData.last_name}
            onChange={(e) => handleChange('last_name', e.target.value)}
            onFocus={() => handleFocus('last_name')}
            onBlur={handleBlur}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input
            placeholder="Enter your email address"
            value={formData.email_address}
            onChange={(e) => handleChange('email_address', e.target.value)}
            onFocus={() => handleFocus('email_address')}
            onBlur={handleBlur}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input
            placeholder="Enter your phone number"
            value={formData.phone_number}
            onChange={(e) => handleChange('phone_number', e.target.value)}
            onFocus={() => handleFocus('phone_number')}
            onBlur={handleBlur}
          />
        </FormControl>

        <FormControl gridColumn="span 2">
          <FormLabel>LinkedIn URL</FormLabel>
          <Input
            placeholder="Enter your LinkedIn URL"
            value={formData.linkedin_url}
            onChange={(e) => handleChange('linkedin_url', e.target.value)}
            onFocus={() => handleFocus('linkedin_url')}
            onBlur={handleBlur}
          />
        </FormControl>
      </Grid>
    </Box>
  );
};

export default PersonalDetails;
