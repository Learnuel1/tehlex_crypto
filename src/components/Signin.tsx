import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import signin from '../assets/images/signin.png'
import signin_logo from '../assets/images/sign_in_logo.png'

const Signin = () => {
  return (
    <section>
        <Box maxW={'100vw'} p='3rem'>
            <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem colSpan={[2,2,1,1]} >                   
                    <VStack>
                        <Text mb={'1rem'}>Sign in</Text>
                        <Image alt='signin_img' src={signin} loading='lazy' w='350px' />
                    </VStack>
                </GridItem>

                <GridItem colSpan={[2,2,1,1]} > 
                    <Stack mt='2rem'>
                        <Image alt='signin_logo' src={signin_logo} w='60px' loading='lazy' ml={'4rem'} />
                        <Heading size={'lg'}>
                            Welcome Back 🤠
                        </Heading>
                        <Text>
                             Keep Trading like a King you are
                        </Text>                
                    </Stack>

                    {/* form */}

                    <form>
                            <Stack mt='2rem' spacing={'1rem'}>
                                <FormControl w={['90%','90%','60%','60%']}>
                                    <FormLabel>Username or Email</FormLabel>
                                    <Input type={'text/email'} placeholder='username/email' />
                                </FormControl>

                                <FormControl w={['90%','90%','60%','60%']}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type={'password'} placeholder='password' />
                                </FormControl>
                                <Text color={'blue'}  mb={'1rem'} fontSize='14px'>
                                    <Link to={'/'}>Forgot Password ?</Link>
                                </Text>

                                <Button w={['60%','60%','60%','60%']} colorScheme={'blue'} >
                                    Submit
                                </Button>

                                <Text color='blue'>
                                    Don’t have an account? <Link to={'/'} >Create one</Link>
                                </Text>
                            </Stack>
                        </form>
                 </GridItem>
            </Grid>
        </Box>
    </section>
  )
}

export default Signin
