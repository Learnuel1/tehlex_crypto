import { Box, Button, Heading,  Stack, Text,  } from '@chakra-ui/react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const AccountSetup = () => {
    const navigate = useNavigate();
  return (
    <Box maxW={'100vw'} p='2rem'>
        <Text >
                <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                        onClick={() =>navigate(-1) }
                    />    
        </Text>  
        <Heading my={'1rem'} textAlign={'center'} size={'lg'}>Account Setup</Heading>

        <Stack my={'2rem'} w='50%' mx={'auto'} gap='2rem'>            
            <Button size={'lg'} onClick={() => navigate('/dashboard/setup/setuppin')}>
                 Transaction Pin  
            </Button>

            <Button size={'lg'} onClick={() => navigate("/dashboard/setup/addbank")}> 
                Add Bank Account 
            </Button>

            <Button size={'lg'} onClick={() => navigate("/dashboard/setup/addusdwallet")}> 
                Add USD Wallet  
            </Button>
        </Stack>

        <Box my={'4rem'} color='white' w='50%' mx={'auto'} >
            <Button  w={'full'} colorScheme='blue' size={'lg'}
                onClick={() => navigate('/dashboard')}
            >
                I’ll do this later
            </Button>
        </Box>
    </Box>
  )
}

export default AccountSetup
