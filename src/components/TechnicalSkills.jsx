import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import bootstrap from "../img/bootstrap.png"
import javascript from "../img/javascript.png"
import react from "../img/react.png"
import html from "../img/html.png"
import css3 from "../img/css3.png"
import express from "../img/express.png"
import nodejs from "../img/nodejs.png"
import mongodb from "../img/mongodb.png"
import vs from "../img/vs.png"
import git from "../img/git.png"
import github from "../img/github.png"

function TechnicalSkills(props) {
    return (
        <Box width={['95%', '90%']} m='auto' my={['20px' , '50px']} id='Skills' >
            <Flex align='center' justifyContent='space-between' borderBottom='1px' borderTop='1px' borderColor='gray.100'>
                <Heading py={['10px']} fontWeight='400'>Technical Skills:</Heading>
            </Flex>
            <Flex py={['20px', '30px']} justifyContent='space-evenly' flexWrap='wrap' gap=''>

                <Box w={['100%' , '50%' , '20%']}>
                    <Text fontSize='2xl' fontWeight='500'> Language </Text>
                    <Flex >
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={javascript} />
                    </Flex>
                </Box>

                <Box w={['100%' , '50%' , '20%']}>
                    <Text fontSize='2xl' fontWeight='500'> Front-End </Text>
                    <Flex flexWrap='wrap'>
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={react}/>
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={bootstrap} />
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={html} />
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={css3} />
                    </Flex>
                </Box>

                <Box w={['100%' , '50%' , '20%']}>
                    <Text fontSize='2xl' fontWeight='500'>  Back-End </Text>
                    <Flex flexWrap='wrap'>
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={mongodb} />
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={nodejs} />
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={express} />
                    </Flex>
                </Box>

                <Box w={['1000%' , '50%' , '20%']}>
                    <Text fontSize='2xl' fontWeight='500'>  Tools </Text>
                    <Flex flexWrap='wrap'>
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={vs} />
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={git} />
                        <Image w={['70px' ,'80px']} h={['70px' ,'80px']} src={github} />
                    </Flex>
                </Box>

            </Flex>
        </Box>
    );
}

export default TechnicalSkills;