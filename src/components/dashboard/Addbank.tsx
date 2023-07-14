import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, Select, Stack, Text, VStack, Image } from '@chakra-ui/react'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import left_arrow from '../../assets/images/arrowleft.png'

type FormInitials = {
    bank_name: string;
    account_name: string;
    account_number: number
};

const initial: FormInitials = {
    bank_name: '',
    account_name: '',
    account_number: 0,
};


const Addbank = () => {
    const [formdata, setFormData] = useState(initial)
    const navigate = useNavigate();
    console.log(formdata)

    // handle change
    const handleChange = (e: React.FormEvent) => {
        const { name, value }: any = e.target;
        setFormData({ ...formdata, [name]: value })
    };

    // handle submit 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    }

    return (
        <Box maxW={'100vw'} p='2rem'>
            <HStack justify={{ md: 'space-between', base: 'start' }} mb='2rem' gap={{ base: '20px' }}>
                <Text display={{ md: 'block', base: 'none' }}>
                    <IoIosArrowRoundBack size={'2.5rem'} color='blue'
                        onClick={() => navigate(-1)}
                    />
                </Text>
                <Image alt='left-arrow' src={left_arrow} w='40px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                <Heading my={'1rem'} size={{ md: 'lg' }} color={{ base: '#303030', md: 'inherit' }} fontSize={{ base: '20px', md: 'auto' }} fontFamily='Mulish' fontWeight={{ base: 'bold', md: 'medium' }}
                    onClick={() => navigate(-1)}>
                    Bank Account Set up
                </Heading>
            </HStack>

            <VStack display={{ base: 'flex' }} alignItems={{ base: 'flex-start', md: 'center' }}>
                <Heading my={'1rem'} size={{ md: 'md' }} textAlign={{ base: 'start' }} color={{ base: '#303030', md: 'inherit' }} fontSize={{ base: '20px', md: 'auto' }} fontFamily='Mulish' fontWeight={{ base: 'bold', md: 'medium' }}>
                    Add your Bank account
                </Heading>
                <Text fontSize={'1.2rem'} color={{ base: '#111', md: 'inherit' }} maxWidth={{ base: '25rem', md: 'inherit' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: '23.5px' }}>
                    You will need this for Withdrawal mode of payment
                </Text>
            </VStack>

            <form onSubmit={handleSubmit}>
                <VStack gap={'1.5rem'} my='2rem'>

                    <FormControl isRequired w={['90%', '90%', '50%',]}>
                        <FormLabel>Bank Name</FormLabel>
                        <Select placeholder='select bank' name='bank_name'
                            onChange={handleChange}
                            value={formdata.bank_name}
                            borderRadius={{ base: '8px', md: 'auto' }}
                            borderWidth={{ base: '1px' }} borderStyle={{ base: 'solid' }}
                            height={{ base: '51px' }}
                        >
                            <option value={'union bank'}>union bank</option>
                            <option value={'united bank of africa'}>united bank of africa</option>
                        </Select>
                    </FormControl>

                    <FormControl isRequired w={['90%', '90%', '50%',]}>
                        <FormLabel>Account Number</FormLabel>
                        <Input type={'number'} placeholder='account number'
                            name='account_number'
                            value={formdata.account_number}
                            onChange={handleChange}
                            borderRadius={{ base: '8px', md: 'auto' }}
                            borderWidth={{ base: '1px' }} borderStyle={{ base: 'solid' }}
                            height={{ base: '51px' }}
                        />
                    </FormControl>

                    <FormControl isRequired w={['90%', '90%', '50%',]} pb={{ base: '50px', md: '0px' }}>
                        <FormLabel>Account Name</FormLabel>
                        <Input type={'text'} placeholder='account name'
                            name='account_name'
                            value={formdata.account_name}
                            onChange={handleChange}
                            borderRadius={{ base: '8px', md: 'auto' }}
                            borderWidth={{ base: '1px' }} borderStyle={{ base: 'solid' }}
                            height={{ base: '51px' }}

                        />
                    </FormControl>

                    <Button w={{ base: '95%', md: '20%' }} bg={{ md: 'blue.500', base: '#0F37F6' }} borderRadius={{ base: '20px', md: 'auto' }} colorScheme={'blue'} fontFamily='Mulish' type={'submit'}>
                        Confirm
                    </Button>

                </VStack>
            </form>
        </Box>
    )
}

export default Addbank
