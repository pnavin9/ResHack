import { Box, Button, FormControl, FormLabel, Grid, Heading, Input, CloseButton } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { achievementData } from './Resume';

/**
 * AchievementsForm component.
 * Displays a form to add and manage achievements.
 */
const AchievementsForm = () => {
  const [achievements, setAchievements] = useState(() => {
    const storedData = localStorage.getItem('achievements');
    return storedData ? JSON.parse(storedData) :[{ field: 'Academics', award: '<a href=\"https://www.google.com\">Institute</a> Topper' }];
  });

  useEffect(() => {
    const storedData = localStorage.getItem('achievements');
    if (storedData) {
      setAchievements(JSON.parse(storedData));
      submitForm(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, [achievements]);

  const handleInputChange = (index, field, value) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index][field] = value;
    setAchievements(updatedAchievements);
    submitForm(updatedAchievements);
  };

  const handleAddAchievement = () => {
    setAchievements([...achievements, { field: '', awards: '' }]);
  };

  const handleDeleteAchievement = (index) => {
    if (index === 0) return;
    const updatedAchievements = [...achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
    submitForm(updatedAchievements);
  };

  const submitForm = (formData) => {
    const jsonData = JSON.stringify(formData);
    achievementData(jsonData);
  };

  return (
    <Box borderRadius="md" mt="5" height="fit-content" p={4} borderWidth={1} borderColor="gray.200">
      <Heading as="h2" size="md" mb={4}>
        Achievements
      </Heading>

      {achievements.map((achievement, index) => (
        <Box key={index} mt={index !== 0 ? '2' : '0'} position="relative" marginBottom={4}>
          {index !== 0 && (
            <CloseButton
              position="absolute"
              right="-15px"
              transform="translateY(-50%)"
              onClick={() => handleDeleteAchievement(index)}
              size="sm"
            />
          )}

          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Input
                placeholder="Enter field"
                value={achievement.field}
                onChange={(e) => handleInputChange(index, 'field', e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Enter description"
                value={achievement.awards}
                onChange={(e) => handleInputChange(index, 'awards', e.target.value)}
              />
            </FormControl>
          </Grid>
        </Box>
      ))}

      <Button colorScheme="blue" mt={4} onClick={handleAddAchievement}>
        +
      </Button>
    </Box>
  );
};

export default AchievementsForm;
