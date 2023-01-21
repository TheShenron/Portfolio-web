import React from 'react';
import { Avatar, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Icon, Image, Link, Spacer, useDisclosure } from "@chakra-ui/react"
import { FaHamburger } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import GouravProfilePic from '../img/GouravProfilePic.png'


function SizeExample() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>

      <Icon as={FaHamburger} color='blue.300' fontSize='2xl' onClick={() => onOpen()} />

      <Drawer onClose={onClose} isOpen={isOpen} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display='flex' alignItems='center' gap={[2, 4]} border="1px" borderColor='gray.100'>
            <Avatar name='GouravProfileIMG' src={GouravProfilePic} />
            Gourav
          </DrawerHeader>
          <DrawerBody p='0'>
            <Flex flexDirection='column'>
              <Box borderTop='1px solid' borderColor='gray.100' p='15px'>
                <Link onClick={onClose} href='#Home'>Home</Link>
              </Box>
              <Box borderTop='1px solid' borderColor='gray.100' p='15px'>
                <Link onClick={onClose} href='#About'>About</Link>
              </Box>
              <Box borderTop='1px solid' borderColor='gray.100' p='15px'>
                <Link onClick={onClose} href='#Skills'>Skills</Link>
              </Box>
              <Box borderTop='1px solid' borderColor='gray.100' p='15px'>
                <Link onClick={onClose} href='#Projects'>Project</Link>
              </Box>
              <Box borderTop='1px solid' borderColor='gray.100' p='15px'>
                <Link onClick={onClose} href='#Contact'>Contact</Link>
              </Box>
              <Box border='1px solid' borderColor='gray.100' p='15px'>
                <Link onClick={onClose} href='https://drive.google.com/uc?export=download&id=1DLwxuGQnKojzSAOcjgqF0TqZsZAG4R0M'> Resume <Icon as={FaArrowDown} position='relative' top='3px' /></Link>
              </Box>




            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}



function Nav(props) {
  return (
    <>
      <Flex minWidth='100%' alignItems='center' position='fixed' border='1px' borderColor='gray.100' py={[0, 1]} px={[1, 4, 6, 8]} backgroundColor="#ffff" zIndex={1}>
        <Box p='2'>
          <Link>
            <Heading size='lg'>
              <Image
                boxSize='40px'
                objectFit='cover'
                src='https://aux.iconspalace.com/uploads/1421321576980686818.png'
                alt='Dan Abramov'
              />
            </Heading>
          </Link>
        </Box>
        <Spacer />

        <Flex gap={[0, 0, 5, 7]} p='2' pr={[0, 2, 4, 10]} display={['none', 'none', 'flex', 'flex']} fontWeight='bold'>
          
          <Link _hover={{textDecoration:'none' , color:"#ef6817"}} href='#Home'>Home</Link>
          <Link _hover={{textDecoration:'none' , color:"#ef6817"}} href='#About'>About</Link>
          <Link _hover={{textDecoration:'none' , color:"#ef6817"}} href='#Skills'>Skills</Link>
          <Link _hover={{textDecoration:'none' , color:"#ef6817"}} href='#Projects'>Project</Link>
          <Link _hover={{textDecoration:'none' , color:"#ef6817"}} href='#Contact'>Contact</Link>
          <Link _hover={{textDecoration:'none' , color:"#ef6817"}} href='https://drive.google.com/uc?export=download&id=1DLwxuGQnKojzSAOcjgqF0TqZsZAG4R0M'> <Icon as={FaArrowDown} position='relative' top='3px' /> Resume</Link>
        </Flex>

        <Box p='2' display={['block', 'block', 'none', 'none']}>
          <SizeExample />
        </Box>
      </Flex>
    </>
  );
}

export default Nav