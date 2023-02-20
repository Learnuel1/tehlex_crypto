import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import emoji from '../assets/images/emoji.png';
import app_store from '../assets/images/app_store.png';
import google_store from '../assets/images/googl_store.png'
import { Link } from 'react-router-dom';

const Feedback = () => {
  return (
    <section>
        <Box maxW={'100vw'} p='3rem' >
            <VStack>
                <Image alt='emoji' src={emoji} loading='lazy' w='100px' mb={'2rem'} />

                <Text>
                     Thank you for signing up
                </Text>

                <Heading size={['md', 'md', 'lg']}>
                    For a Better Experience with Tehlex
                </Heading>                
            </VStack>

            <VStack spacing={'3rem'}>
                <HStack mt='2rem'>
                        <Link to={'/'}>
                            <Image alt='app_store' src={app_store} loading='lazy' w='150px' />
                        </Link>

                        <Link to={'/'}>
                            <Image alt='google_store' src={google_store} loading='lazy' w='150px' />
                        </Link>
                </HStack>

                <Text color={'blue'} textDecoration='underline'>
                    <Link to={'/'}>Continue with webapp</Link>
                </Text>
            </VStack>
            
        </Box>
    </section>
  )
}

export default Feedback
