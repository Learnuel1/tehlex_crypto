import { Box, Button, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

const ResetPassword = () => {
    const navigate = useNavigate();
  return (
    <section>
        <Box maxW={'100vw'} h='80vh' p='2rem' >
        <Stack  gap={'1rem'} mb='3rem'>
            <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
            />
            <Heading  textAlign={'center'}>Forget Password</Heading>
        </Stack>
            <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
                <GridItem colSpan={[2,2,1,1]}>
                    <Stack spacing={'2rem'}>
                    <Heading size={'md'} textAlign={'center'} >
                        Reset your Password
                    </Heading>

                    <Text color={'red.300'} textAlign='center'>
                     Choose how you would you like to reset your  password
                    </Text>
                    </Stack>
                </GridItem>
                
                <GridItem colSpan={[2,2,1,1]}>
                    <Stack spacing={'2rem'} >
                        <Button 
                        onClick={() => navigate('/resetviaemail')}
                        >
                            Via Email Address
                        </Button>

                        <Button
                         onClick={() => navigate('/resetviaphone')}
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

export default ResetPassword
