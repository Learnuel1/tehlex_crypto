import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, Select,  Text, VStack} from '@chakra-ui/react'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


type FormInitials = {
    network_type: string;
    crypto: string;
    wallet_address: string;
} ;

const initial:FormInitials = {
    network_type: '',
    crypto:'USDT',
    wallet_address: '',
};



const AddUsdWallet = () => {
    const [formdata, setFormData] = useState(initial)
    const navigate = useNavigate();
    // console.log(formdata)

    // handle change
    const handleChange = (e:React.FormEvent) => {
        const {name, value}:any = e.target;
        setFormData({...formdata, [name]: value})
    };

    // handle submit 
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        
    };

  return (
    <Box maxW={'100vw'} p='2rem'>
        <HStack justify={'space-between'} mb='2rem'>
            <Text >
                    <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                            onClick={() =>navigate(-1) }
                        />    
            </Text>  
            <Heading my={'1rem'}  size={'lg'}>
                Wallet Address Set up
            </Heading>
        </HStack>

        <VStack>
            <Heading my={'1rem'}  size={'md'}>
                Add your Wallet Address
            </Heading>
            <Text fontSize={'1.2rem'}>
                You will need this for Withdrawal mode of payment
            </Text>
        </VStack>

        <form onSubmit={handleSubmit}>
            <VStack gap={'1.5rem'} my='2rem'>
                <FormControl isRequired  w={['90%','90%','50%',]}>
                    <FormLabel>Network Type</FormLabel>
                    <Select placeholder='select network type' name='network_type'                        
                        onChange={handleChange}
                        value={formdata.network_type}
                    >
                        <option value={'TRC 20'}>TRC 20</option>
                        <option value={'TRC 10'}>TRC 10</option>
                    </Select>
                </FormControl>

                <FormControl isRequired   w={['90%','90%','50%',]}>
                    <FormLabel>Crypto</FormLabel>
                    <Input type={'type'}
                    name='crypto' 
                    value={formdata.crypto}
                    onChange={handleChange}
                    />
                </FormControl>

                <FormControl isRequired   w={['90%','90%','50%',]}>
                    <FormLabel>Wallet Address</FormLabel>
                    <Input type={'text'} placeholder='Enter wallet address' 
                    name='wallet_address' 
                    value={formdata.wallet_address}
                    onChange={handleChange}
                    />
                </FormControl>

                <Button w='50%' colorScheme={'blue'} size='lg' type='submit'>
                    Confirm
                </Button>

            </VStack>
        </form>
    </Box>
  )
}

export default AddUsdWallet
