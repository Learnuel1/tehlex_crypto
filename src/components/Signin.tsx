import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, InputGroup, InputRightElement, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import signin from '../assets/images/signin.png'
import signin_logo from '../assets/images/sign_in_logo.png'
import {useState} from 'react'
import { thelex } from '../endpoint/thelex'
import { LOGIN_ENDPOINT } from '../endpoint/route';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Signin = () => {
    const [password, setPassword] = useState<string>('');
    const [userName, setuserName] = useState<string>('');
    const navigate = useNavigate();
    const toast = useToast();
    const [show, setShow] = useState(false)

    // handle show password 
    const handleClick = () => setShow(!show)
   

    // handle submit
    const handleSubmit =async (e:React.FormEvent) => {
        e.preventDefault();
      await  thelex.post(LOGIN_ENDPOINT.LOGIN, {
            username: userName,
            password: password,
        } )
        .then(res => {  
            toast({
                title: res.statusText,
                description: "Login successful",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
        navigate('/dashboard')
        })
        .catch(function (error) {
            toast({
                title:error.response.statusText,
                description: "Check username and password",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
          });
        //   navigate('/dashboard')
    }
      

  return (
    <section>
        <Box maxW={'100vw'}  p='3rem'>
            <Grid templateColumns='repeat(2, 1fr)' gap={[0, 0, '2rem']}>
                <GridItem colSpan={[2,2,1,1]}  >                   
                    <VStack>
                        <Text mb={'1rem'} fontWeight='bold' color={'blue'} >Sign in</Text>
                        <Image alt='signin_img' src={signin} loading='lazy' w='350px' />
                    </VStack>
                </GridItem>

                <GridItem colSpan={[2,2,1,1]}  > 
                    <Stack mt='2rem'>
                        <Image alt='signin_logo' src={signin_logo} w='60px' loading='lazy' ml={'4rem'} />
                        <Heading size={'lg'}>
                            Welcome Back 🤠
                        </Heading>
                        <Text color={'blue'}>
                             Keep Trading like a King you are
                        </Text>                
                    </Stack>

                    {/* form */}

                    <form onSubmit={handleSubmit}>
                            <Stack mt='2rem' spacing={'1rem'}>
                                <FormControl w={['90%','90%','60%','60%']} isRequired>
                                    <FormLabel>Username</FormLabel>
                                    <Input type={'text'} placeholder='username'
                                    name='username'                                                                         value={userName}
                                    onChange={(e) => (setuserName(e.target.value)) }
                                    />
                                </FormControl>
                                
                                <FormControl w={['90%','90%','60%','60%']} isRequired>
                                    <FormLabel>password</FormLabel>
                                    <InputGroup size='md' >
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputRightElement>
                                        <Text cursor={'pointer'} onClick={handleClick} >
                                            {show ? <AiOutlineEye size={'1.2rem'} /> : <AiOutlineEyeInvisible size={'1.2rem'} />}
                                        </Text>                                   
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                                <Text color={'blue'}  mb={'1rem'} fontSize='14px'>
                                    <Link to={'/resetpassword'}>Forgot Password ?</Link>
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

export default Signin
