import { Box, Button, Grid, GridItem, Heading, HStack,  PinInput, PinInputField, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import { thelex } from '../endpoint/thelex';
import { LOGIN_ENDPOINT } from '../endpoint/route';


const VerifyLogin = () => {
    const [otp, setOtp] = useState();
    const [submitting, setSubmitting] = useState(false); 
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToast();

    // const handle verify otp    
    const handleVerifyOtp = (e:React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true)
        thelex.post(LOGIN_ENDPOINT.VERIFY_LOGIN, { otp: otp },
            {
            headers:{Authorization: `Bearer ${location.state?.token}`}
        })
        .then(res => {
            toast({
                title: res.statusText,
                description: "Otp verification successfully",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
            setSubmitting(false)
            navigate("/dashboard")  
        })
        .catch(function (error) {
            toast({
                title:error.response.data.error,
                description: "",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
              setSubmitting(false)
          });
    };

    //protecting route
    useEffect(() => {
        if(!location.state){
            navigate("/login")
        }
    },[]);

  return (
    <section>
    <Box maxW={'100vw'} p='5rem' >

        <Text my='1rem'>
        <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
            />
        </Text>            

        <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
            <GridItem colSpan={[2,2,1,1]}>
                <Stack spacing={'2rem'}>
                <Heading size={['lg']}>
                    Enter otp to Login
                </Heading>

                <Text>
                    Enter 4 digit otp code sent to
                     <span style={{color:'blue'}}> the email associated  with {location.state?.user}</span>
                </Text>
                </Stack>
            </GridItem>
            
            <GridItem colSpan={[2,2,1,1]}>
                <form onSubmit={handleVerifyOtp}>
                    <Stack spacing={'4rem'}>
                        <HStack spacing={'1rem'}>
                            <PinInput otp type='number'
                                onChange={(e:any) => setOtp(e)} 
                                value={otp}                      
                            >
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                            </PinInput>                           
                        </HStack>

                    <Button w='fit-content' colorScheme={'blue'}
                        type={'submit'}
                        isDisabled={submitting}
                    >
                        {submitting? 'Verifying Otp...' : 'Confirm Otp'}
                    </Button>
                    </Stack>
                </form>
            </GridItem>

        </Grid>
    </Box>
</section>
  )
}

export default VerifyLogin;
