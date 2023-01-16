import React from 'react';
import { Box, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFilePdf } from 'react-icons/fa'


function Contact(props) {
    return (
        <>
            <Box width={['95%', '90%']} m='auto' my='20px' mb='80px' id='Contact'>

                <Flex align='center' justifyContent='space-between' borderBottom='1px' borderTop='1px' borderColor='gray.100' mb='30px'>
                    <Heading py={['10px']} fontWeight='400'>Contact Me:</Heading>
                </Flex>

                <Flex alignItems='center' gap='10px' my='10px' _hover={{textDecor:"none" , color:"#ef6817"}}>
                    <Icon as={FaPhoneSquareAlt} fontSize='3xl' position={'relative'} top='2px' /> <Link _hover={{textDecor:"none" , color:"#ef6817"}} href='tel:8750306696'> +91 8750306696  </Link>
                </Flex>

                <Flex alignItems='center' gap='10px' my='10px' _hover={{textDecor:"none" , color:"#ef6817"}}>
                    <Icon as={FaMailBulk} fontSize='3xl' position={'relative'} top='2px' />  <Link href='mailto:Gourav143faz@gmail.com' _hover={{textDecor:"none" , color:"#ef6817"}}> Gourav143faz@gmail.com  </Link>
                </Flex>

                <Flex gap='10px' mt='25px'>
                    <Link _hover={{textDecor:"none" , color:"#ef6817"}} href='https://www.linkedin.com/in/claverprogrammer/' target='_blank'> <Icon as={FaLinkedin} fontSize={['3xl' ,'3xl']} /> </Link>
                    <Link _hover={{textDecor:"none" , color:"#ef6817"}} href='https://github.com/TheShenron' target='_blank'> <Icon as={FaGithub} fontSize={['3xl' ,'3xl']} /> </Link>
                    <Link _hover={{textDecor:"none" , color:"#ef6817"}} href='https://drive.google.com/file/d/1-pTDoBmFM9OcunT1j2XUr56sqmhh0SAP/view' target='_blank'> <Flex gap='2' alignItems='center'> <Icon as={FaFilePdf} fontSize={['3xl' ,'3xl']} /> Resume</Flex> </Link>
                </Flex>

            </Box>
        </>
    );
}

export default Contact;