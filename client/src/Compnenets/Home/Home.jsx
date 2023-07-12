import { Button, Container, Flex, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import vg from "../../Assets/Home_IMG.png"

const Home = () => {
  return (
    <Container minH = {'95vh'} maxW = "90%" py="8">
    <Heading mt={"4"} size={'2xl'} justifyContent={"left"} textAlign="left" >
    Craft Your{" "}
      <Text as="span" color= "rgb(6,163,248)">
        Perfect Resume
      </Text>{" "}
      with Ease
    </Heading>
    
    
    <div className="container">
    <Stack
            width={"100%"}
            direction = {["column","row"]}
            height = "100%"
            justifyContent={['center','space-between']}
            alignItems={["center"]}
            spacing={['16','56']}
            >
            <VStack width = {["full","70%"]} alignItems={["left","flex"]} spacing={'4'}>
    <Heading fontWeight={"normal"} size={"md"} ml={"4"} mt={"4"} justifyContent={"left"} textAlign="left" children="Unlock Your Full Potential and Stand Out from the Crowd with ResHack's Free Online Resume Maker" />
    <Heading fontWeight={"normal"} mt={"12"} size={"xl"} justifyContent={"left"} textAlign={"left"}>
        Build your Resume in Three Simple Steps
    </Heading>
    <HStack>
    <Heading fontWeight={"normal"} ml={"5"} mt={"4"} size={"md"}>1.</Heading>  
    <Heading fontWeight={"normal"} ml={"5"} mt={"4"} size={"md"}>
        Choose a template from our extensive collection of professional designs.
    </Heading>
    </HStack>
    <HStack>
    <Heading fontWeight={"normal"} ml={"5"} mt={"4"} size={"md"}>2.</Heading>  
    <Heading fontWeight={"normal"} ml={"5"} mt={"4"} size={"md"}>
    Fill out your resume using our industry-specific bullet points, tailored to your needs.
    </Heading>
    </HStack>
    <HStack>
    <Heading fontWeight={"normal"} ml={"5"} mt={"4"} size={"md"}>3.</Heading>  
    <Heading fontWeight={"normal"} ml={"5"} mt={"4"} size={"md"}>
    Download your completed resume and get ready to make an impact!
    </Heading>
    </HStack>
    </VStack>
    <Image className = "vector-graphics" boxSize={"md"} src={vg} objectFit="contain" />
    </Stack>
    </div>
    <Flex mt={"15"} justifyContent={"center"}>
        <Link to="/templateGallery">
        <Button  colorScheme='blue' variant={"solid"}>Create your Resume</Button>
        </Link>
    </Flex>
    </Container>
  )
}

export default Home