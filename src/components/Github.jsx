import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';

function Github(props) {
    return (
        <>
            <Box width={['95%', '90%']} m='auto' my='20px'>
                <Flex align='center' justifyContent='space-between' borderBottom='1px' borderTop='1px' borderColor='gray.100' backgroundColor={'blue.100'}>
                    <Heading py={['10px']} px='10px' fontWeight='400'>My Github Statistics:</Heading>
                </Flex>
                <Flex py={['20px', '30px']} justifyContent='space-evenly' flexWrap='wrap' gap=''>

                    <Box w='100%' py={['40px']}>
                        <Image src="https://ghchart.rshah.org/27A741/theshenron" alt="theshenron's Github chart" w={["100%", "100%", '90%', '85%']}/>
                    </Box>

                    <Flex w='100%' gap={['10px', '15px', '30px']} py={['40px']} flexDirection={['column', 'row']}>
                        <Image src="https://github-readme-streak-stats.herokuapp.com/?user=TheShenron&hide=smalltalk&layout=compact" alt="theshenron's Github chart" w={['100%', '50%']} />
                        <Image src="https://github-readme-stats.vercel.app/api?username=TheShenron&show_icons=true&count_private=true" alt="theshenron's Github chart" w={['100%', '50%']} />
                    </Flex>


                </Flex>
            </Box>
        </>
    );
}

export default Github;