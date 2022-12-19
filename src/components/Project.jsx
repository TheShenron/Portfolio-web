import React from 'react';
import { Box, Flex, Heading, Icon, Image, Link, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

import kickstater from "../img/kickstater.png"
import kindMeal from '../img/kindMeal.png'
import LMS from '../img/LMS.png'


function Project(props) {
    return (
        <>
            <Box width={['95%', '90%']} m='auto' my='20px' mb='80px' id='Projects'>

                <Flex align='center' justifyContent='space-between' borderBottom='1px' borderTop='1px' borderColor='gray.100'>
                    <Heading py={['10px']} fontWeight='5400'>Featured Projects:</Heading>
                </Flex>


                <Flex my={['20px']} flexWrap='wrap' flexDirection={['column', 'column', 'row']}>

                    <Box w={['100%', '100%', '50%']} p={['5px', '30px 20px']}>

                        <Box overflow='hidden'>
                            <Image src={LMS} w={['100%', '95%']} />
                        </Box>

                        <Flex direction='column' gap='15px' py='20px'>
                            <Text fontWeight='500' fontSize='2xl'>Integrated_Library_Software_ILS 
                            <Link href='https://github.com/TheShenron/Integrated_Library_Software_ILS' target='_blank'> <Icon as={FaExternalLinkSquareAlt} position='relative' top='3px' /> 
                            </Link>  <Link target='_blank' href='https://github.com/TheShenron/Integrated_Library_Software_ILS'> <Icon as={FaGithub} position='relative' top='3px' /> </Link>   </Text>
                            <Text fontSize=''> The purpose of this LMS is to manage & track the daily work of the
                                library such as issuing books, return books, due calculations, etc.</Text>
                            <Text fontWeight='500' fontSize='xl'>Features:</Text>
                            <List spacing={1}>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Token-based authentication with JWT
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Password Hashing with bcrypt
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Persisting data on page refresh in react
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Admin panel with roles & permissions
                                </ListItem>
                            </List>
                            <Text fontWeight='500' fontSize='xl'>Tech stack:  ReactJS | NodeJS | Express | MongoDB | ChakraUI</Text>
                            <Text fontWeight='500' fontSize='xl'>Area of Responsibility:</Text>
                            <List spacing={1}>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Planning, Organizing, and Controlling.
                                </ListItem>
                            </List>
                            <Text fontWeight='500' fontSize='md'>Executed in 6 days (solo project)</Text>
                        </Flex>
                    </Box>


                    <Box w={['100%', '100%', '50%']} p={['5px', '30px 20px']}>

                        <Box overflow='hidden'>
                            <Image src={kindMeal} w={['100%', '95%']} />
                        </Box>

                        <Flex direction='column' gap='15px' py='20px'>
                            <Text fontWeight='500' fontSize='2xl'>Kindmeal Web Colne  
                            <Link target='_blank' href='https://github.com/TheShenron/numberless-silk-6009'> <Icon as={FaExternalLinkSquareAlt} position='relative' top='3px' /> </Link>  
                            <Link target='_blank' href='https://github.com/TheShenron/numberless-silk-6009'> <Icon as={FaGithub} position='relative' top='3px' /> </Link>   </Text>
                            <Text fontSize=''>KindMeal.my is Malaysia's leading meat-free lifestyle platform</Text>
                            <Text fontWeight='500' fontSize='xl'>Features:</Text>
                            <List spacing={1}>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Implemented comment system
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Product tracking with admin panel
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Form validation
                                </ListItem>
                            </List>
                            <Text fontWeight='500' fontSize='xl'>ReactJS | NodeJS | Express | MongoDB | ChakraUI</Text>
                            <Text fontWeight='500' fontSize='xl'>Area of Responsibility:</Text>
                            <List spacing={1}>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    discover restaurants, read and write customer generated reviews and view and upload photos,
                                </ListItem>
                            </List>
                            <Text fontWeight='500' fontSize='md'>Executed in 5 days with a team of 6</Text>
                        </Flex>
                    </Box>




                    <Box w={['100%', '100%', '50%']} p={['5px', '30px 20px']}>

                        <Box overflow='hidden'>
                            <Image src={kickstater} w={['100%', '95%']} />
                        </Box>

                        <Flex direction='column' gap='15px' py='20px'>
                            <Text fontWeight='500' fontSize='2xl'>kickstarter Clone 
                            <Link href='https://kickstarter-clone-def219.netlify.app/' target='_blank'> <Icon as={FaExternalLinkSquareAlt} position='relative' top='3px' /> </Link>  
                            <Link target='_blank' href='https://github.com/TheShenron/overconfident-door-5197'> <Icon as={FaGithub} position='relative' top='3px' /> </Link>   </Text>
                            <Text fontSize=''>Itʼs where creators share new visions for creative work with the communities that will come together to fund them.</Text>
                            <Text fontWeight='500' fontSize='xl'>Features:</Text>
                            <List spacing={1}>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Soft Landing Page
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Form validation
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={BsDot} />
                                    Responsiveness UI
                                </ListItem>
                            </List>
                            <Text fontWeight='500' fontSize='xl'>Tech stack: HTML | CSS | JS</Text>
                            <Text fontWeight='500' fontSize='md'>Executed in 4 days (solo project)</Text>
                        </Flex>
                    </Box>



                </Flex>

            </Box>
        </>
    );
}

export default Project;