import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading, Input, Stack, Text, useToast, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USER_REGISTRATION_ENDPOINT } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';


 function AccountVerification() {
    // const location = useLocation();
    const navigate = useNavigate();
    const toast = useToast();
    const [email, setEmail] = useState('')

    // const mail = location.state.email;
    // console.log(mail)
    // const phone = location.state.phone;


    // handle verify
    // const handleVerify = () => {
    //     if(mail){           
    //         // post to email endpoint
    //         thelex
    //         .post(USER_REGISTRATION_ENDPOINT.SENT_OTP, {email: mail})
    //         .then(res => {
    //             toast({
    //                 title: 'Success',
    //                 description: "OTP Sent Successfully",
    //                 status: 'success',
    //                 duration: 4000,
    //                 isClosable: true,
    //               })
    //         navigate('/verifyEmail', {state: location})
    //         })
    //         .catch( (error) => {
    //             toast({
    //                 title: 'Error',
    //                 description: "verification error",
    //                 status: 'error',
    //                 duration: 4000,
    //                 isClosable: true,
    //               })
    //         });
    //     } else if(phone){

    //         // post to phone number
    //         thelex
    //         .post(USER_REGISTRATION_ENDPOINT.VERIFY_OTP, {phone: phone} )
    //         .then(res => {
    //             toast({
    //                 title: res.statusText,
    //                 description: "Verification successful",
    //                 status: 'success',
    //                 duration: 4000,
    //                 isClosable: true,
    //               })
    //         navigate('/verifyPhone', {state: phone})
    //         })
    //         .catch(function (error) {
    //             toast({
    //                 title: error.response.statusText,
    //                 description: "Verification Not Successfull",
    //                 status: 'error',
    //                 duration: 4000,
    //                 isClosable: true,
    //               })
    //         });
    //     }  
        
        // testing
        // navigate('/verifyEmail', {state: mail})
    // };
    
    // protecting route
    // useEffect(() => {
    //     if(!location.state){
    //         navigate(-1)
    //     }
    // },[]);

    const handleVerifys = (e:React.FormEvent) => {
        e.preventDefault();
        thelex
            .post(USER_REGISTRATION_ENDPOINT.SENT_OTP(), {email: email})
            .then(res => {
                console.log(res)
                toast({
                    title: 'Success',
                    description: "OTP Sent Successfully",
                    status: 'success',
                    duration: 6000,
                    isClosable: true,
                  })
            navigate('/verifyEmail')
            })
            .catch( () => {
                toast({
                    title: 'Error',
                    description: "invalid email",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                  })
            });
    }

  return (
    <section>
        <Box maxW={'100vw'} p='5rem' >
            <Text my='1rem'>Create account</Text>            

            <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
                <GridItem colSpan={[2,2,1,1]}>
                    <Stack spacing={'2rem'}>
                    <Heading size={['lg']}>
                        Account Verification
                    </Heading>

                    <Text color={'red.200'}> 
                        Choose how you would like to verify <br/> your account
                    </Text>
                    </Stack>
                </GridItem>
                
                <GridItem colSpan={[2,2,1,1]}>
                    <Stack spacing={'2rem'} >
                        <form onSubmit={handleVerifys}>
                            <VStack>
                                <FormControl w='fit-content' isRequired>
                                    <FormLabel> Registration email</FormLabel>
                                    <Input type={'email'} size='sm' name='email'
                                        rounded={'full'} p-2 
                                        placeholder='valid email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Text color={'red'} p='.5rem'>Input the email you used to register</Text>
                                </FormControl>
                                <Button colorScheme={'blue'}
                                    type='submit'
                                    // onClick={ handleVerify}
                                >
                                    Via Email Address
                                </Button>
                            </VStack>
                        </form>

                        {/* <Button disabled
                        onClick={ handleVerify}
                        >
                            Via Phone Number
                        </Button> */}
                    </Stack>
                </GridItem>

            </Grid>
        </Box>
    </section>
  )
}

export default AccountVerification;


