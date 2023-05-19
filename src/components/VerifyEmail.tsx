import { Box, Button,  Grid, GridItem, Heading, HStack, PinInput, PinInputField, Stack, Text,  useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USER_REGISTRATION_ENDPOINT } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';



const VerifyEmail = () => {
    const location = useLocation();
   const email = location.state
    const [otp, setOtp] = useState();
    const toast = useToast();
    const navigate = useNavigate();

    // handle confirm otp
    const handleConfirmOtp = async (e:React.FormEvent) => {
        e.preventDefault();
       await thelex
        .post( USER_REGISTRATION_ENDPOINT.VERIFY_OTP , {'otp': otp})
        .then((res) => {
            toast({
                title: res.statusText,
                description: "Registration Completed Successfully",
                status: 'success',
                duration: 4000,
                isClosable: true,
              });
            navigate('/feedback');
          })
          .catch((error) => {
            toast({
                title: error.response.data.error,
                description: "Check again",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
          });

          //testing
        //   navigate('/feedback');
    };

        // resend otp
    const OtpResend = () => {
        thelex
        .post(USER_REGISTRATION_ENDPOINT.SENT_OTP ,{email:email})
    }
     
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
                <Stack gap={'2rem'}>
                <Heading size={['lg']}>
                 Verify Email Address
                </Heading>

                <Text>
                    Enter 4 digit code sent to <span style={{color:'blue'}}>{location.state}</span>
                </Text>
                   
                </Stack>
            </GridItem>
            
            <GridItem colSpan={[2,2,1,1]}>
               <form onSubmit={handleConfirmOtp}>
                <Stack gap={'2rem'}>
                        <HStack gap={'1rem'}> 
                            <PinInput  otp type='number' 
                            onChange={(e:any) => setOtp(e) } 
                            value={otp}                          
                            >
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                            </PinInput>
                        </HStack>

                    <Button w='fit-content' colorScheme={'blue'} type='submit'>
                        Confirm
                    </Button>
                    </Stack>

                    <Box mt={'2rem'}>
                        <Button cursor={'pointer'} _hover={{color:'blue'}} 
                        color='red.300' onClick={OtpResend} colorScheme='none' border={'none'}>
                        Resend Otp
                        </Button>
                    </Box>
               </form>
            </GridItem>

        </Grid>
    </Box>
</section>
  )
}

export default VerifyEmail
