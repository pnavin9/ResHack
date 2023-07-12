import { Box, Button, Flex, Grid, Heading, Input, CloseButton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { skillsData } from './Resume';

/**
 * SkillsForm component.
 * Displays a form to input skills and manage skill entries.
 */
const SkillsForm = () => {
  const [skills, setSkills] = useState(() => {
    // Retrieve the stored skills from localStorage on component mount
    const storedSkills = localStorage.getItem('skills');
    return storedSkills ? JSON.parse(storedSkills) : ["Java", "ReactJs", "Strong interpersonal & communication skills"];
  });

  useEffect(() => {
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
      submitForm(JSON.parse(storedSkills));
    }
  }, []);

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
    submitForm(updatedSkills); // Call the submission logic
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleRemoveSkill = (index) => {
    if (index !== 0) {
      const updatedSkills = [...skills];
      updatedSkills.splice(index, 1);
      setSkills(updatedSkills);
      submitForm(updatedSkills); // Call the submission logic
    }
  };

  const maxSkillsPerRow = 4; // Maximum number of skills per row

  const renderSkills = () => {
    const skillRows = [];
    let currentRow = [];

    skills.forEach((skill, index) => {
      const skillElement = (
        <Flex key={index} alignItems="left" mb={4}>
          <Input
            w="fit-content"
            placeholder="Enter skill"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            mr={2}
          />
          {index !== 0 && <CloseButton size="sm" onClick={() => handleRemoveSkill(index)} />}
        </Flex>
      );

      currentRow.push(skillElement);

      if (currentRow.length === maxSkillsPerRow || index === skills.length - 1) {
        skillRows.push(
          <Flex key={`row-${skillRows.length}`} flexWrap="wrap" justifyContent="left" alignItems="left">
            {currentRow}
          </Flex>
        );
        currentRow = [];
      }
    });

    return skillRows;
  };

  useEffect(() => {
    // Store the skills in localStorage whenever it changes
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  // Function to handle submitting the form data
  const submitForm = (formData) => {
    // Convert the formData object to JSON
    const jsonData = JSON.stringify(formData);
    skillsData(jsonData);
  };

  return (
    <Box borderRadius="md" mt="5" height="fit-content" p={4} borderWidth={1} borderColor="gray.200" maxW={["90%", "73.5%"]}>
      <Heading as="h2" size="md" mb={4}>
        Skills
      </Heading>

      <Grid templateColumns={`repeat(${maxSkillsPerRow}, 1fr)`} gap={4}>
        {renderSkills()}
      </Grid>

      <Button colorScheme="blue" mt={4} onClick={handleAddSkill}>
        Add Skill
      </Button>
    </Box>
  );
};

export default SkillsForm;
