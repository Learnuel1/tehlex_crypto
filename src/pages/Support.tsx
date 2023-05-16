import { Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import support from '.././assets/images/support.png';
import { GoLocation } from "react-icons/go";
import { AiTwotoneMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Support = () => {
  return (
    <section>
        <Box maxW={'100vw'} >
         <Image alt='support' src={support} w='full'
         h={['200px','200px','500px']} p='1rem' mt={'1rem'} />

            <Stack p={'1rem'} >                
                <VStack gap={'1rem'}>
                    <Heading size={['md','lg']}>
                        We would love to hear from you.
                    </Heading>
                    <Text fontSize={['.9rem', '1rem', '1.2rem']}>
                        Our Front desk is ever supportive to your need 24/7 
                    </Text>
                </VStack>
            </Stack>

            {/* drop a message */}

            <Grid templateColumns='repeat(4, 1fr)' mb={'2rem'} p='2rem'>
                <GridItem colSpan={[4,4,3,3]} >
                    <Heading color={'gray'} p='1rem' size='md'>Drop a message</Heading>

                    <form>
                        <Flex w='100%' gap={'2rem'} flexWrap='wrap'>
                            <FormControl isRequired w={['95%','95%', '45%', '45%']}>
                                    <FormLabel>Your name</FormLabel>
                                    <Input type={'text'} name='name' placeholder='John Doe' />
                                </FormControl>

                                <FormControl isRequired w={['95%','95%', '45%', '45%']}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type={'email'} name='email' placeholder='john@gmail.com' />
                            </FormControl>

                            <FormControl isRequired w={['95%','95%', '45%', '45%']}>
                                    <FormLabel>Phone number</FormLabel>
                                    <Input type={'number'} name='phone' placeholder='20 111 2345 6789' />
                                </FormControl>

                                <FormControl isRequired w={['95%','95%', '45%', '45%']}>
                                    <FormLabel>Subject</FormLabel>
                                    <Input type={'text'} name='subject' placeholder='Type here' />
                            </FormControl>

                            <FormControl w='95%'>
                                <FormLabel>Message</FormLabel>
                                <Textarea rows={5} cols={5} placeholder='Type here' />
                            </FormControl>
                        </Flex>    

                        <Button mt={'2rem'} colorScheme='blue'>
                            Submit
                        </Button>   
                    </form>

                </GridItem>

                <GridItem colSpan={[4,4,1,1]} >
                    <VStack p='1.5rem' bg='blue' mt={'4rem'} color='white' rounded={'3xl'} spacing='1.5rem' > 
                        <Heading size={'sm'}>Contact Info</Heading>

                        <VStack spacing={0}>
                             <GoLocation size={'1.5rem'} />
                            <Text>Lekki Phase 1, Lagos</Text>
                            <Text>Lugbe, Abuja</Text>
                        </VStack>

                        <VStack spacing={0}>
                             <AiTwotoneMail size={'1.5rem'} />
                            <Text>support@website.com</Text>                            
                        </VStack>

                        <VStack spacing={0}>
                             <FiPhoneCall size={'1.5rem'} />
                            <Text>+234 (480) 555-0103</Text>   
                            <Text>+234 (480) 555-0103</Text>  
                            <Text>+234 (480) 555-0103</Text>                       
                        </VStack>
                    </VStack>
                </GridItem>
            </Grid>

        </Box>
    </section>
  )
}

export default Support
