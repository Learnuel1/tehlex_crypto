import { Box, Flex,  Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import about from '.././assets/images/about.png';
import team from '.././assets/images/ourteam.png';
import { BsArrowRightShort } from "react-icons/bs";




const AboutUs = () => {
  return (
    <section>
        <Image alt='about_us' src={about} w='full' h={['200px','200px','500px']} p='1rem' mt={'1rem'} />
        <Box  maxW='100vw' >
            <Stack ml={['1rem','1rem','2rem','2rem']} color='blue' fontSize={'.8rem'}>            
                <Text ml='2rem' fontSize={'1rem'}>
                Check out our Gallery
                    {/* <Link to={'/'}>
                        
                    </Link> */}
                </Text>
            </Stack>

            <Stack my={'2rem'} px={['2rem','2rem','3rem', '5rem']} gap={'2rem'}>
                <Heading size={['sm', 'lg', '2xl', '2xl']}>
                    We’re made of unique set of teams <br/> with a bla bla bla
                </Heading>

                <Text >
                Lorem ipsum dolor sit amet consectetur. Maecenas massa pretium elit est volutpat tristique in. Quis consequat purus morbi amet laoreet adipiscing ac dui facilisis. Facilisis amet sed nulla sagittis ut tempus ipsum dolor. Lacus arcu nisi sed aliquam. Sit aliquam eget malesuada odio. Mauris commodo massa sed sed nec felis neque facilisis.<br/><br/>

                amet sed nulla sagittis ut tempus ipsum dolor. Lacus arcu nisi sed aliquam. Sit aliquam eget malesuada odio. Mauris commodo massa sed sed nec felis neque facilisis.<br/><br/>

                amet sed nulla sagittis ut tempus ipsum dolor. Lacus arcu nisi sed aliquam. Sit aliquam eget malesuada odio. Mauris commodo massa sed sed nec felis neque facilisis. amet sed nulla sa<br/><br/>
                </Text>

                <HStack  p='.5rem' gap={'2rem'} justify='center' wrap={'wrap'} >
                    <Stack>
                        <Text fontWeight={'semibold'} >Founded</Text>
                        <Heading size={'md'}>2017</Heading>
                    </Stack>

                    <Stack>
                        <Text fontWeight={'semibold'}>Employees</Text>
                        <Heading size={'md'}>10</Heading>
                    </Stack>
                       
                    <Stack>
                        <Text fontWeight={'semibold'}>Customer</Text>
                        <Heading size={'md'}>500</Heading>
                    </Stack>

                    <Stack>
                        <Text fontWeight={'semibold'}>Raised</Text>
                        <Heading size={'md'}>$100M</Heading>
                    </Stack>
                </HStack>
            </Stack>

            {/* our team */}

            <Box w={'100vw'} p="1rem" px={["1rem","2rem","4rem"]} mx='auto' bg={'#F5FAFF'} >
                <Box w={["90%","90%","60%","60%"]} mx={'auto'}>
                <Text my={'.5rem'} color={'blue'}>Our Team</Text>
                <Heading size={'md'} mb={'2rem'}>Meet the creative team</Heading>
                </Box>

               <Flex w={["100vw","100vw","60vw","60vw"]} mx={'auto'} justify="center" alignItems={'center'} 
               gap={['2rem','2rem','3rem']} flexWrap={'wrap'}>
                    <Stack bg={'white'} pb='.5rem'  w='200px' h={['fit-content','fit-content','300px','300px']} >
                        <Image alt='our_team' src={team} w='200px'  loading='lazy' />
                        <Text fontWeight={'bold'} px='.5rem'>Vincent Onwudiwe</Text>
                        <Text px='.5rem'>Project Manager/CEO</Text>
                    </Stack>

                    
                    <Stack bg={'white'} pb='.5rem' w='200px' h={['fit-content','fit-content','300px','300px']}>
                        <Image alt='our_team' src={team} w='200px' loading='lazy' />
                        <Text fontWeight={'bold'} px='.5rem'>John Emmanuel</Text>
                        <Text px='.5rem'>Product Manager / Growth</Text>
                    </Stack>

                    <Stack bg={'white'} pb='.5rem' w='200px' h={['fit-content','fit-content','300px','300px']}>
                        <Image alt='our_team' src={team} w='200px' loading='lazy' />
                        <Text fontWeight={'bold'} px='.5rem'>Uche ThankGod</Text>
                        <Text px='.5rem'>Lead Product Designer / Engineer</Text>
                    </Stack>


                    <Stack bg={'white'} pb='.5rem' w='200px' h={['fit-content','fit-content','300px','300px']}>
                        <Image alt='our_team' src={team} w='200px' loading='lazy' />
                        <Text fontWeight={'bold'} px='.5rem'>Oladimeji</Text>
                        <Text px='.5rem'>CTO / Chief Engineering</Text>
                    </Stack>

                    <Stack bg={'white'} pb='.5rem' w='200px' h={['fit-content','fit-content','300px','300px']}>
                        <Image alt='our_team' src={team} w='200px' loading='lazy' />
                        <Text fontWeight={'bold'} px='.5rem'>Valentine</Text>
                        <Text px='.5rem'>Finance</Text>
                    </Stack>

                    <Stack bg={'white'} pb='.5rem' w='200px' h={['fit-content','fit-content','300px','300px']}>
                        <Image alt='our_team' src={team} w='200px' loading='lazy' />
                        <Text fontWeight={'bold'} px='.5rem'>Beauty Godsking</Text>
                        <Text px='.5rem'>Marketing / Brand</Text>
                    </Stack>
               </Flex>
            </Box>

            {/* part of our team */}

            <Box w={["80%","80%","60%","50%"]} mx={'auto'} my={'2rem'}>
            <VStack color={'blue'} bg='#F7F7F7' p='3rem' >
                <Heading color={'black'} size={['sm','sm','md','md']}>
                    Would you love to be part of the Kings Team?
                </Heading>

                <Link to={'/login'}>
                  <HStack my={'1rem'}> 
                  <Text>See career Opportunities</Text> 
                  <BsArrowRightShort size={'2rem'} color='blue'/>      
                </HStack>  
                </Link>
            </VStack>
            </Box>

        </Box>
    </section>
  )
}

export default AboutUs

