import { Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import support from '.././assets/images/support.png'

const Support = () => {
  return (
    <section>
        <Box maxW={'100vw'} >
         <Image alt='wupport' src={support} loading='lazy' w='fit-content' p={'1rem'} />

            <Stack p={'1rem'} >                
                <VStack>
                    <Heading size={['md','lg']}>
                        We would love to hear from you.
                    </Heading>
                    <Text fontSize={['.9rem', '1rem', '1.2rem']}>
                        Our Front desk is ever supportive to your need 24/7 
                    </Text>
                </VStack>
            </Stack>

            {/* drop a message */}

            <Grid templateColumns='repeat(4, 1fr)' my={'2rem'} p='2rem'>
                <GridItem colSpan={[4,4,3,3]} >
                    <Heading color={'gray'} p='1rem' size='md'>Drop a message</Heading>

                    <form>
                        <Flex w='100%' gap={'2rem'} flexWrap='wrap'>
                            <FormControl isRequired w={['95%','95%', '45%', '45%']}>
                                    <FormLabel>Your name</FormLabel>
                                    <Input type={'text'} name='name' placeholder='your name' />
                                </FormControl>

                                <FormControl isRequired w={['95%','95%', '45%', '45%']}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type={'email'} name='email' placeholder='email address' />
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
                                <Textarea rows={5} cols={5} />
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

                        <Stack spacing={0}>
                             <span>icon</span>
                            <Text>Lekki Phase 1, Lagos</Text>
                            <Text>Lugbe, Abuja</Text>
                        </Stack>

                        <Stack spacing={0}>
                             <span>icon</span>
                            <Text>support@website.com</Text>                            
                        </Stack>

                        <Stack spacing={0}>
                             <span>icon</span>
                            <Text>+234 (480) 555-0103</Text>   
                            <Text>+234 (480) 555-0103</Text>  
                            <Text>+234 (480) 555-0103</Text>                       
                        </Stack>
                    </VStack>
                </GridItem>
            </Grid>

        </Box>
    </section>
  )
}

export default Support
