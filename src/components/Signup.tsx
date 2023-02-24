import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import signin from '../assets/images/signin.png'
import signin_logo from '../assets/images/sign_in_logo.png'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { thelex } from '../endpoint/thelex'
import { LOGIN_ENDPOINT } from '../endpoint/route'

const Signup = () => {
    const [password, setPassword] = useState<string>('');
    const [userName, setuserName] = useState<string>('');
    const [data, setdata] = useState()

    // handle submit
    const handleSubmit =async (e:React.FormEvent) => {
        e.preventDefault();
       try {
        const res = await thelex.post(LOGIN_ENDPOINT.VERIFY_LOGIN, {
            userName,
            password,
            email: userName,
        })
        
        // alert
       } catch (error) {
        //alert
       }
    };

    useEffect(() => {
       const isData = true;

    },[])

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

                    <form onSubmit={handleSubmit}>
                            <Stack mt='2rem' spacing={'1rem'}>
                                <FormControl w={['90%','90%','60%','60%']} isRequired>
                                    <FormLabel>Username or Email</FormLabel>
                                    <Input type={'text/email'} placeholder='username/email'
                                    name='username'
                                                                        value={userName}
                                    onChange={(e) => (setuserName(e.target.value)) }
                                    />
                                </FormControl>

                                <FormControl w={['90%','90%','60%','60%']} isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input type={'password'} placeholder='password' 
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormControl>
                                <Text color={'blue'}  mb={'1rem'} fontSize='14px'>
                                    <Link to={'/'}>Forgot Password ?</Link>
                                </Text>

                                <Button w={['60%','60%','60%','60%']} colorScheme={'blue'} type='submit' >
                                    Submit
                                </Button>

                                <Text color='blue'>
                                    Don’t have an account? <Link to={'/register'} >Create one</Link>
                                </Text>
                            </Stack>
                        </form>
                 </GridItem>
            </Grid>
        </Box>
    </section>
  )
}

export default Signup
