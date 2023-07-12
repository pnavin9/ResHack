import { Container, HStack, Heading, Text, Grid, Box, FormControl, FormLabel, Input, Button, VStack, CSSReset, Flex, Spinner, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PDFViewer, { setPdf } from '../PDFViewer/PDFViewer';
import { Global } from '@emotion/react';
import PersonalDetails from './PersonalDetails';
import WorkExperienceForm from './WorkExperience';
import EducationalDetailsForm from './EducationDetails';
import SkillsForm from './Skills';
import AchievementsForm from './Achievements';
import JobDetailsForm from './JobDetails';
import axios from 'axios';
import { RiErrorWarningFill } from 'react-icons/ri';

// Define initial data as JSON strings for each section
var achievement_data = JSON.stringify([{ field: 'Academics', award: '<a href=\"https://www.google.com\">Institute</a> Topper' }]);
var education_data = JSON.stringify([{ school_name: 'School', passing_year: '201X-201Y', description: 'There are many variations of passages of <a href=\"https://www.google.com\">Lorem Ipsum</a> available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.' },
{ school_name: 'College', passing_year: '203X-203Y', description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.' }]);
var job_title = JSON.stringify({job_title: "Software Development Engineer"});
var career_objective = JSON.stringify({career_objective: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper."});
var personal_data = JSON.stringify({
  name: 'Lorem',
  last_name: 'ipsum',
  email_address: 'ipsum@abc.com',
  phone_number: '+91 99xx14xx99',
  linkedin_url: '<a href=\"https://www.linkedin.com\">linkedIn</a>'
});
var skills_data = JSON.stringify(["Java", "ReactJs", "Strong interpersonal & communication skills"]);
var work_data = JSON.stringify([{ company_name: 'Adobe', passing_year: '201X-201Y', responsibilities: 'It is a long <a href=\"https://www.adobe.com\">established</a> fact that a reader will be distracted by the readable content of a page when looking at its layout.' }]);

// Functions to update data variables
export const achievementData = (jsonData) => {
  achievement_data = jsonData;
};
export const educationData = (jsonData) => {
  education_data = jsonData;
};
export const jobTitle = (jsonData) => {
  job_title = jsonData;
};
export const careerObjective = (jsonData) => {
  career_objective = jsonData;
};
export const personalData = (jsonData) => {
  personal_data = jsonData;
};
export const skillsData = (jsonData) => {
  skills_data = jsonData;
};
export const workData = (jsonData) => {
  work_data = jsonData;
};

const Resume = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State variable for loading status
  const [error, setError] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const id = useParams();

  useEffect(() => {
    submitHandler(); // Call the submitHandler when the component mounts
  }, []);

  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const submitHandler = async () => {
    setIsLoading(true); // Set loading status to true

    // Prepare request data
    const requestData = {
      achievements: achievement_data,
      education: education_data,
      personal_information: personal_data,
      job_title: job_title,
      career_objective: career_objective,
      skills: skills_data,
      experience: work_data
    };

    try {
      requestData.template_id = id;
      requestData.career_objective = career_objective;
      requestData.job_title = job_title;

      // Send a POST request to the server to generate the resume PDF
      const response = await axios.post("http://localhost:8080/api/v1/resume", requestData, {
        responseType: "blob" // Set the response type to 'blob' to receive binary data
      });

      // Create a File object from the response data
      const file = new File([response.data], "generatedResume.pdf", { type: "application/pdf" });
      setPdfFile(file);
    } catch (error) {
      console.error(error);
      setError(true);
    }

    setIsLoading(false); // Set loading status to false after receiving the response
  };

  const handleDownload = () => {
    if (pdfFile) {
      const url = URL.createObjectURL(pdfFile);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', pdfFile.name);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.location.href = "/thanks";
    }
  };

  return (
    <>
      {error ? (
        <Container h={'90vh'} p="16">
          <VStack justifyContent={"center"} h={"full"} spacing={"4"}>
            <RiErrorWarningFill size="5rem" />
            <Heading my="8" textAlign="center">Template Not Found</Heading>
            <Link to="/templateGallery">
              <Button variant={"ghost"}>Explore other Templates</Button>
            </Link>
          </VStack>
        </Container>
      ) : (
        <>
          <CSSReset />
          <Global
            styles={`
              ::-webkit-scrollbar {
                width: 8px;
              }
              ::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 4px;
              }
              ::-webkit-scrollbar-thumb {
                background: #888;
                border-radius: 4px;
              }
              ::-webkit-scrollbar-thumb:hover {
                background: #555;
              }
            `}
          />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

          <section className="step-wizard">
            <ul className="step-wizard-list">
              <li className="step-wizard-item">
                <span className="progress-count">1</span>
                <span className="progress-label">Select a Template</span>
              </li>
              <li className="step-wizard-item current-item">
                <span className="progress-count">2</span>
                <span className="progress-label">Fill in the blanks</span>
              </li>
              <li className="step-wizard-item">
                <span className="progress-count">3</span>
                <span className="progress-label">Download</span>
              </li>
            </ul>
          </section>

          <Container minH={'80vh'} maxW="90%" py="8" overflow={"auto"}>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
              <VStack maxH={'95vh'} overflow={"auto"} mt={"5"}>
                {/* Render sub-components */}
                <PersonalDetails />
                <JobDetailsForm />
                <WorkExperienceForm />
                <EducationalDetailsForm />
                <SkillsForm />
                <AchievementsForm />
              </VStack>

              <HStack justifyContent="flex-end">
                <PDFViewer pdfFile={pdfFile} />
              </HStack>
            </Grid>

            <Flex w={'100%'} justifyContent={"center"} alignItems={"center"}>
              {isLoading ? (
                <Spinner size="lg" color="blue.500" />
              ) : (
                <>
                  <Button onClick={submitHandler} type='submit' ml={["0%", "6%"]} colorScheme='blue' variant={"solid"}>Preview</Button>
                  <Button onClick={clearStorage} ml={["0%", "6%"]} variant={"solid"}>Reset</Button>
                </>
              )}
            </Flex>

            <HStack>
              <Button onClick={onOpen}>Styling Tips</Button>
              {isLoading ? (
                <></>
              ) : (
                <>
                  <Flex>
                    {pdfFile && (
                      <Button onClick={handleDownload} ml={["0%", "6%"]} variant="solid" colorScheme={"blue"}>Download</Button>
                    )}
                  </Flex>
                </>
              )}
            </HStack>

            {/* Render the styling tips modal */}
            <TipsBox isOpen={isOpen} onClose={onClose} />
          </Container>
        </>
      )}
    </>
  );
};

function TipsBox({ isOpen, onClose }) {
  const closeHandler = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Font Styling Tips</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <table style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th>Tag</th>
                  <th>Example</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ marginBottom: '10px' }}>
                  <td>&lt;b&gt;</td>
                  <td>&lt;b&gt;Text&lt;/b&gt;</td>
                  <td>Bold the text.</td>
                </tr>
                <tr style={{ marginBottom: '10px' }}>
                  <td>&lt;a&gt;</td>
                  <td>&lt;a href="Your Link"&gt;Text&lt;/a&gt;</td>
                  <td>Create a link.</td>
                </tr>
              </tbody>
            </table>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Got It!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Resume;
