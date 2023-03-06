import { Box, Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Notification = () => {
    const navigate = useNavigate();
  return (
    <Box maxW={'100vw'} minH='50vh' p={'1rem'}>
        <Stack  gap='1rem'>
            <Text my='.5rem'>
                <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                        onClick={() =>navigate(-1) }
                    />    
            </Text>            
            <Heading size='md' textAlign={'center'} fontWeight='bold'>Notifications</Heading>

            <HStack gap={'1rem'}>
                <Button>All</Button>

                <Button bg={'blue'} color='white'>New</Button>
            </HStack>
        </Stack>
        
        <VStack mt={'4rem'}>
            <Text>No Notification yet</Text>
        </VStack>
    </Box>
  )
}

export default Notification
