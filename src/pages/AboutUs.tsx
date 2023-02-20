import { Box, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import about from '.././assets/images/about.png';
import team from '.././assets/images/ourteam.png'

const AboutUs = () => {
  return (
    <section>
        <Image alt='about_us' src={about} loading='lazy' w='fit-content' h={['200px','210px','fit-content']} p='1rem' mt={'1rem'} />
        <Box  maxW='100vw' >
            <Stack ml={['1rem','1rem','2rem','2rem']} color='blue' fontSize={'.8rem'}>            
                <Link to={'/'}>
                    Check out our Gallery
                </Link>
            </Stack>

            <Stack my={'2rem'} px={['2rem','2rem','3rem', '5rem']} gap={'2rem'}>
                <Heading size={['sm', 'lg', '2xl', '2xl']}>
                    We’re made of unique set of teams <br/> with a bla bla bla
                </Heading>

                <Text >
                Lorem ipsum dolor sit amet consectetur. Maecenas massa pretium elit est volutpat tristique in. Quis consequat purus morbi amet laoreet adipiscing ac dui facilisis. Facilisis amet sed nulla sagittis ut tempus ipsum dolor. Lacus arcu nisi sed aliquam. Sit aliquam eget malesuada odio. Mauris commodo massa sed sed nec felis neque facilisis.

                amet sed nulla sagittis ut tempus ipsum dolor. Lacus arcu nisi sed aliquam. Sit aliquam eget malesuada odio. Mauris commodo massa sed sed nec felis neque facilisis.

                amet sed nulla sagittis ut tempus ipsum dolor. Lacus arcu nisi sed aliquam. Sit aliquam eget malesuada odio. Mauris commodo massa sed sed nec felis neque facilisis. amet sed nulla sa
                </Text>

                <HStack  p='.5rem' fontSize={['.6rem', '8rem', '1rem']} boxShadow={'base'} justify='space-evenly'   >
                    <Stack>
                        <Text fontWeight={'bold'} >Founded</Text>
                        <Heading size={'md'}>2017</Heading>
                    </Stack>

                    <Stack>
                        <Text fontWeight={'bold'}>Employees</Text>
                        <Heading size={'md'}>10</Heading>
                    </Stack>

                    <Stack>
                        <Text fontWeight={'bold'}>Customer</Text>
                        <Heading size={'md'}>500</Heading>
                    </Stack>

                    <Stack>
                        <Text fontWeight={'bold'}>Raised</Text>
                        <Heading size={'md'}>$100M</Heading>
                    </Stack>
                </HStack>
            </Stack>

            {/* our team */}

            <Box  px='5rem' my={'3rem'} bg='blue.100' p={'4rem'}>
                <Stack mb={'3rem'}>
                    <Text color={'blue'}>Our Team</Text>
                    <Heading  size={['lg']}>
                        Meet the creative team
                    </Heading>
                </Stack>

                <HStack w={['90vw','90vw','80vw','70vw']} mx='auto' wrap={'wrap'}  gap={'1rem'} >
                    <Stack bg={'white'} pb='.5rem' >
                        <Image alt='our_team' src={team} w='200px' loading='lazy' />
                        <Text fontWeight={'bold'} px='.5rem'>Vincent Onwudiwe</Text>
                        <Text px='.5rem'>Project Manager/CEO</Text>
                    </Stack>

                    <Stack bg={'white'} pb='.5rem'>
                        <Image alt='our_team' src={team} w='200px' loading='lazy' />
                        <Text fontWeight={'bold'} px='.5rem'>Vincent Onwudiwe</Text>
                        <Text px='.5rem'>Project Manager/CEO</Text>
                    </Stack>

                    <Stack bg={'white'} pb='.5rem'>
                        <Image alt='our_team' src={team} w='200px' loading='lazy' />
                        <Text fontWeight={'bold'} px='.5rem'>Vincent Onwudiwe</Text>
                        <Text px='.5rem'>Project Manager/CEO</Text>
                    </Stack>

                    <Stack bg={'white'} pb='.5rem'>
                        <Image alt='our_team' src={team} w='200px' loading='lazy' />
                        <Text fontWeight={'bold'} px='.5rem'>Vincent Onwudiwe</Text>
                        <Text px='.5rem'>Project Manager/CEO</Text>
                    </Stack>
                </HStack>
            </Box>

            {/* part of our team */}

            <VStack color={'blue'} bg='gray.200' p='2rem' >
                <Heading color={'black'} size='lg'>
                    Would you love to be part of the Kings Team?
                </Heading>

                <Link to={'/'}>See career Opportunities</Link>
            </VStack>

        </Box>
    </section>
  )
}

export default AboutUs
