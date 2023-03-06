import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, Select, Stack, Text, VStack} from '@chakra-ui/react'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


type FormInitials = {
    bank_name: string;
    account_name: string;
    account_number: number
} ;

const initial:FormInitials = {
    bank_name: '',
    account_name:'',
    account_number: 0,
};


const Addbank = () => {
    const [formdata, setFormData] = useState(initial)
    const navigate = useNavigate();
    console.log(formdata)

    // handle change
    const handleChange = (e:React.FormEvent) => {
        const {name, value}:any = e.target;
        setFormData({...formdata, [name]: value})
    };

    // handle submit 
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        
    }

  return (
    <Box maxW={'100vw'} p='2rem'>
        <HStack justify={'space-between'} mb='2rem'>
            <Text >
                    <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                            onClick={() =>navigate(-1) }
                        />    
            </Text>  
            <Heading my={'1rem'}  size={'lg'}>
                Bank Account Set up
            </Heading>
        </HStack>

        <VStack>
            <Heading my={'1rem'}  size={'md'}>
                Add your Bank account
            </Heading>
            <Text fontSize={'1.2rem'}>
                You will need this for Withdrawal mode of payment
            </Text>
        </VStack>

        <form onSubmit={handleSubmit}>
            <VStack gap={'1.5rem'} my='2rem'>                

                <FormControl isRequired  w={['90%','90%','50%',]}>
                    <FormLabel>Bank Name</FormLabel>
                    <Select placeholder='select bank' name='bank_name'                        
                        onChange={handleChange}
                        value={formdata.bank_name}
                    >
                        <option value={'union bank'}>union bank</option>
                        <option value={'united bank of africa'}>united bank of africa</option>
                    </Select>
                </FormControl>      

                <FormControl isRequired   w={['90%','90%','50%',]}>
                    <FormLabel>Account</FormLabel>
                    <Input type={'number'} placeholder='account number' 
                    name='account_number' 
                    value={formdata.account_number}
                    onChange={handleChange}
                    />
                </FormControl>          

                <FormControl isRequired   w={['90%','90%','50%',]}>
                    <FormLabel>Account Name</FormLabel>
                    <Input type={'text'} placeholder='account name' 
                    name='account_name' 
                    value={formdata.account_name}
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

export default Addbank
