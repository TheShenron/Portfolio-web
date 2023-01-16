import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaHandSparkles } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFilePdf } from 'react-icons/fa'

function HeroImage(props) {
    return (
        <>
            <Box pt={['100px', '15vh']} pb={['50px', '100px']}  w={['95%' ,"90%"]} m='auto' id='Home'>

                <Flex alignItems='center'>
                    <Box py={['0px','30px','50px']}>
                        <Icon as={FaHandSparkles} fontSize={['6xl', '7xl']} color='#FED762'/>
                        <Text fontWeight='bold' fontSize={['2xl', '2xl']}>Hello, I'am</Text>
                        <Flex gap={4}> 
                            <Text fontSize={['7xl', '7xl', '8xl']} fontWeight='bold'> <span style={{textShadow: '-0.03em 0 #ffc052, 0.03em 0 #00ff9d'}}>G</span>ourav</Text>
                            <Text fontSize={['7xl', '7xl', '8xl']} fontWeight='bold' display={["none" , "block"]}>   <span style={{textShadow: '-0.03em 0 #ffc052, 0.03em 0 #00ff9d'}}>K</span>umar</Text> 
                        </Flex>
                        <Text fontSize={['2xl', '2xl']} fontWeight='bold'>Full Stack web Developer and love to play football</Text>
                        <Flex gap='10px' mt='25px'>
                            <Link _hover={{textDecoration:'none' , color:"#ef6817"}} href='https://www.linkedin.com/in/claverprogrammer/' target='_blank'> <Icon as={FaLinkedin} fontSize={['3xl' ,'3xl']} /> </Link>
                            <Link _hover={{textDecoration:'none' , color:"#ef6817"}} href='https://github.com/TheShenron' target='_blank'> <Icon as={FaGithub} fontSize={['3xl' ,'3xl']} /> </Link>
                            <Link _hover={{textDecoration:'none' , color:"#ef6817"}} href='https://drive.google.com/file/d/1-pTDoBmFM9OcunT1j2XUr56sqmhh0SAP/view?usp=sharing' target='_blank'> <Flex gap='2' alignItems='center'> <Icon as={FaFilePdf} fontSize={['3xl' ,'3xl']} /> Resume</Flex> </Link>
                        </Flex>
                    </Box>

                </Flex>

            </Box>
        </>
    );
}

export default HeroImage;