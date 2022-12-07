import React from 'react';
import { Box, Flex, Heading, Icon, Image, Link, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

function Project(props) {
    return (
        <>
            <Box width={['95%', '90%']} m='auto' my='20px' mb='80px' id='Projects'>

                <Flex align='center' justifyContent='space-between' borderBottom='1px' borderTop='1px' borderColor='gray.100'>
                    <Heading py={['10px']} fontWeight='5400'>Featured Projects:</Heading>
                </Flex>


                <Flex my={['20px']} flexWrap='wrap' flexDirection={['column' , 'column' ,'row']}>

                    <Box w={['100%' , '100%' , '50%']} p={['5px', '30px 20px']}>

                        <Box overflow='hidden'>
                            <Image src='https://theshenron.github.io/Portfolio-web/img/millap.PNG' w={['100%','95%']}/>
                        </Box>

                        <Flex direction='column' gap='15px' py='20px'>
                            <Text fontWeight='500' fontSize='2xl'>Milaap.org Clone  <Link href='https://milaap-reactapp-ab2b6e.netlify.app/' target='_blank'> <Icon as={FaExternalLinkSquareAlt} position='relative' top='3px'/> </Link>  <Link target='_blank' href='https://github.com/TheShenron/vigorous-ticket-1895'> <Icon as={FaGithub} position='relative' top='3px'/> </Link>   </Text>
                            <Text fontSize=''>We enable anyone across India to raise funds for medical, environmental, educational, animal welfare, community causes and more</Text>
                            <Text fontWeight='500' fontSize='xl'>Features:</Text>
                            <List spacing={1}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle}/>
                                    Social Sign-in/Sign-up
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} />
                                    Ecommerce functionality
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} />
                                    Different Payment Gateway
                                </ListItem>
                            </List>
                            <Text fontWeight='500' fontSize='xl'>Tech stack: ReactJS | ChakraUI | Icons</Text>
                            <Text fontWeight='500' fontSize='xl'>Area of Responsibility:</Text>
                            <List spacing={1}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} />
                                    Built the Authentication via React/Privit Routing
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} />
                                    Developed the Product Page and Filter/Sorting in the website
                                </ListItem>
                            </List>
                        </Flex>
                    </Box>




                    <Box w={['100%' , '100%' , '50%']} p={['5px', '30px 20px']}>

                        <Box overflow='hidden'>
                            <Image src='https://theshenron.github.io/Portfolio-web/img/Kickstater.PNG' w={['100%','95%']}/>
                        </Box>

                        <Flex direction='column' gap='15px' py='20px'>
                            <Text fontWeight='500' fontSize='2xl'>kickstarter.com Clone  <Link target='_blank' href='https://kickstarter-clone-def219.netlify.app/'> <Icon as={FaExternalLinkSquareAlt} position='relative' top='3px'/> </Link>  <Link target='_blank' href='https://github.com/TheShenron/overconfident-door-5197'> <Icon as={FaGithub} position='relative' top='3px'/> </Link>   </Text>
                            <Text fontSize=''>It’s where creators share new visions for creative work with the communities that will come together to fund them.</Text>
                            <Text fontWeight='500' fontSize='xl'>Features:</Text>
                            <List spacing={1}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle}/>
                                    Sign-in/Sign-up
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} />
                                    Soft Landing Page
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} />
                                    Responsiveness
                                </ListItem>
                            </List>
                            <Text fontWeight='500' fontSize='xl'>Tech stack: HTML | CSS | JS</Text>
                        </Flex>
                    </Box>

                    

                </Flex>

            </Box>
        </>
    );
}

export default Project;