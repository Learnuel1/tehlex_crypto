import { Box, Button, Heading,  Stack, Table, TableContainer, Tbody, Td, Text, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';

const NairaConfrimPayment = () => {
    const navigate = useNavigate();
  return (
   <Box maxW={'100vw'} minH='30vh' p='2rem' >
         <Stack px={'2rem'} justify='space-evenly' mb={'4rem'}>
            <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
            />            
            <Heading size={'md'} textAlign={'center'}>Confirm Payment</Heading>
        </Stack>

        <TableContainer fontWeight={'semibold'}>
            <Table>
                <Tbody>
                    <Tr>                        
                        <Td>Order ID</Td>                        
                        <Td>GHT234</Td>
                    </Tr>
                    <Tr>                        
                        <Td>Date</Td>                        
                        <Td>22 Oct, 2022</Td>
                    </Tr>
                    <Tr>                        
                        <Td>USDT</Td>                        
                        <Td>N10000.00</Td>
                    </Tr>
                    <Tr>                        
                        <Td>Transaction fee</Td>                        
                        <Td>N10.0</Td>
                    </Tr>
                    <Tr>                        
                        <Td>Pay to</Td>                        
                        <Td>456fdggx1dhhdb</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>

        <VStack my={'5rem'}>
            <Text>Payable Amount</Text>
            <Heading>N9990.00</Heading>
        </VStack>

        <Box w='50%' mx='auto' mb={'1rem'}>
            <Button size={'lg'} w='full' colorScheme={'blue'}
                 onClick={() =>navigate("/dashboard/confirmpin") }
            >
                Confirm
            </Button>
        </Box>
        
   </Box>
  )
}

export default NairaConfrimPayment
