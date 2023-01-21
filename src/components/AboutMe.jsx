import { Avatar, Box, Flex, Heading, Highlight, Image, Text } from '@chakra-ui/react';
import React from 'react';
import GouravProfilePic from '../img/GouravProfilePic.png'


function AboutMe(props) {
    return (
        <Box width={['95%', '90%']} m='auto' my='20px' id='About' >
            <Flex align='center' justifyContent='space-between' borderBottom='1px' borderTop='1px' borderColor='gray.100' backgroundColor={'blue.100'}>
                <Heading py={['10px']} px='10px' fontWeight='400'>About Me:</Heading>
                <Avatar display={["none" , 'block' , 'none']} mr="20px" src={GouravProfilePic} />
            </Flex>
            <Flex py={['20px', '30px']} flexDirection={['column' , 'row']} gap={['10px' , 0]}>
                <Box w={['100%' , '30%']} display={["block" , 'none' , 'block']}>
                    <Box maxW={['90%', '200px', '250px']} h={['90%', '200px', '250px']} borderRadius='5px' overflow={'hidden'} m='auto'>
                        <Image
                            src={GouravProfilePic}
                            alt='GouravProfilePic'
                            border='10px solid'
                            borderColor='gray.100'
                        />
                    </Box>
                </Box>

                <Box w={['100%' , '100%' , '70%']} px={['5px', '10px', '15px']} >
                    <Text fontWeight='400' lineHeight={[ '28px' ,'30px']}>
                        <Highlight query={['JavaScript', 'TypeScript', "HTML", 'CSS', 'REAct js', 'Nodejs', 'Expressjs', 'MongoDB']} styles={{ px: '1', py: '1', bg: 'blue.200', borderRadius: "3px" }}>
                        An Aspiring Full Stack Web Developer. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Self- motivated and hardworking fresher seeking for an opportunity

                            My specialties include quickly learning new skills and programming languages, problem-solving, responsive design principles, and website optimization, So far I have JavaScript, TypeScript, HTML, CSS, React js, Nodejs, Expressjs, MongoDB, and Git/GitHub under my belt.

                        </Highlight>
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default AboutMe;