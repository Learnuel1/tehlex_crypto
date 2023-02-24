import { Box, Button, Grid, GridItem, Heading, Stack, Text, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REGISTRATION_ENDPOINT } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';


export default function AccountVerification() {
    const location = useLocation();
    const navigate = useNavigate();
    const toast = useToast();

    const mail = location.state.email;
    const phone = location.state.phone;

    // handle verify
    const handleVerify = (type:string) => {
        if(type ==='email'){           
            // post to email endpoint
            thelex
            .post(REGISTRATION_ENDPOINT.SENT_OTP, {email: mail})
            .then(res => {
                toast({
                    title: res.statusText,
                    description: "OTP Sent Successfully",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                  })
            navigate('/verifyEmail', {state: mail})
            })
            .catch( (error) => {
                toast({
                    title: error.response.statusText,
                    description: "verification error",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                  })
            });
        } else if(type === 'phone'){

            // post to phone number
            thelex
            .post(REGISTRATION_ENDPOINT.VERIFY_OTP, {phone: phone} )
            .then(res => {
                toast({
                    title: res.statusText,
                    description: "Verification successful",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                  })
            navigate('/verifyPhone', {state: phone})
            })
            .catch(function (error) {
                toast({
                    title: error.response.statusText,
                    description: "Verification Not Successfull",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                  })
            });
        }
        
    };
    
    // protecting route
    useEffect(() => {
        if(!location.state){
            navigate('/register')
        }
    },[]);

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

                    <Text>
                        Choose how you would like to verify <br/> your account
                    </Text>
                    </Stack>
                </GridItem>
                
                <GridItem colSpan={[2,2,1,1]}>
                    <Stack spacing={'2rem'} >
                        <Button
                       onClick={() => handleVerify('email')}
                        >
                            Via Email Address
                        </Button>

                        <Button disabled
                        // onClick={() => handleVerify('phone')}
                        >
                            Via Phone Number
                        </Button>
                    </Stack>
                </GridItem>

            </Grid>
        </Box>
    </section>
  )
}


