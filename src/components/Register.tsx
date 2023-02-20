import { Box, Button, Checkbox, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import register from '../assets/images/register.png'
import signin_logo from '../assets/images/sign_in_logo.png'


const Register = () => {
  return (
    <section>
    <Box maxW={'100vw'} p='3rem'>
        <Grid templateColumns='repeat(2, 1fr)'>
            <GridItem colSpan={[2,2,1,1]} >                   
                <VStack>
                    <Text mb={'1rem'}>Register</Text>
                    <Image alt='signin_img' src={register} loading='lazy' w='350px' />
                </VStack>
            </GridItem>

            <GridItem colSpan={[2,2,1,1]} > 
                <Stack mt='2rem'>
                    <Image alt='signin_logo' src={signin_logo} w='60px' loading='lazy' ml={'6rem'} />
                    <Heading size={'sm'} mt='1rem' textAlign={'justify'}>
                    Create your King account and start trading 🤠
                    </Heading>
                              
                </Stack>

                {/* form */}

                <form>
                        <Stack mt='2rem' spacing={'1rem'}>
                            <FormControl w={['90%','90%','60%','60%']}>
                                <FormLabel>Full Name</FormLabel>
                                <Input type={'text'} placeholder='Full Name' />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']}>
                                <FormLabel>Username</FormLabel>
                                <Input type={'text'} placeholder='Username' />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']}>
                                <FormLabel>Email</FormLabel>
                                <Input type={'email'} placeholder='Email' />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']}>
                                <FormLabel>Phone</FormLabel>
                                <Input type={'tel'} placeholder='phone_number' />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']}>
                                <FormLabel>Password</FormLabel>
                                <Input type={'password'} placeholder='password' />
                            </FormControl>
                            
                            <Checkbox>
                            By signing up,  you agree to Tehlex’s terms and policy terms <br /> and policy
                            </Checkbox>

                            <Button w={['60%','60%','60%','60%']} colorScheme={'blue'} >
                                 Create account
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

export default Register
