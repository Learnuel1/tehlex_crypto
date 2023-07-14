import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, Select, Text, VStack, Image } from '@chakra-ui/react'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import left_arrow from '../../assets/images/arrowleft.png'

type FormInitials = {
    network_type: string;
    crypto: string;
    wallet_address: string;
};

const initial: FormInitials = {
    network_type: '',
    crypto: 'USDT',
    wallet_address: '',
};



const AddUsdWallet = () => {
    const [formdata, setFormData] = useState(initial)
    const navigate = useNavigate();
    // console.log(formdata)

    // handle change
    const handleChange = (e: React.FormEvent) => {
        const { name, value }: any = e.target;
        setFormData({ ...formdata, [name]: value })
    };

    // handle submit 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    };

    return (
        <Box maxW={'100vw'} p='2rem'>
            <HStack justify={{ md: 'space-between', base: 'start' }} mb='2rem' gap={{ base: '20px' }}>
                <Text display={{ md: 'block', base: 'none' }}>
                    <IoIosArrowRoundBack size={'2.5rem'} color='blue'
                        onClick={() => navigate(-1)}
                    />
                </Text>
                <Image alt='left-arrow' src={left_arrow} w='20px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                <Heading my={'1rem'} size={{ md: 'lg' }} color={{ base: '#303030', md: 'inherit' }} fontSize={{ base: '20px', md: 'auto' }} fontFamily='Mulish' fontWeight={{ base: 'bold', md: 'medium' }}
                    onClick={() => navigate(-1)}>
                    Wallet Address Set up
                </Heading>
            </HStack>

            <VStack display={{ base: 'flex' }} alignItems={{ base: 'flex-start', md: 'center' }}>
                <Heading my={'1rem'} size={{ md: 'md' }} textAlign={{ base: 'start' }} color={{ base: '#303030', md: 'inherit' }} fontSize={{ base: '20px', md: 'auto' }} fontFamily='Mulish' fontWeight={{ base: 'bold', md: 'medium' }}>
                    Add your Wallet Address
                </Heading>
                <Text fontSize={'1.2rem'} color={{ base: '#111', md: 'inherit' }} maxWidth={{ base: '25rem', md: 'inherit' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: '23.5px' }}>
                    You will need this for Withdrawal mode of payment
                </Text>
            </VStack>

            <form onSubmit={handleSubmit}>
                <VStack gap={'1.5rem'} my='2rem'>
                    <FormControl isRequired w={['90%', '90%', '50%',]} mt={{ base: '25px', md: '0px' }}>
                        <FormLabel>Network Type</FormLabel>
                        <Select placeholder='select network type' name='network_type'
                            onChange={handleChange}
                            value={formdata.network_type}
                            borderRadius={{ base: '8px', md: 'auto' }}
                            borderWidth={{ base: '1px' }} borderStyle={{ base: 'solid' }}
                            height={{ base: '51px' }}
                        >
                            <option value={'TRC 20'}>TRC 20</option>
                            <option value={'TRC 10'}>TRC 10</option>
                        </Select>
                    </FormControl>

                    <FormControl isRequired w={['90%', '90%', '50%',]}>
                        <FormLabel>Crypto</FormLabel>
                        <Input type={'type'}
                            name='crypto'
                            value={formdata.crypto}
                            onChange={handleChange}
                            borderRadius={{ base: '8px', md: 'auto' }}
                            borderWidth={{ base: '1px' }} borderStyle={{ base: 'solid' }}
                            height={{ base: '51px' }}
                        />
                    </FormControl>

                    <FormControl isRequired w={['90%', '90%', '50%',]}>
                        <FormLabel>Wallet Address</FormLabel>
                        <Input type={'text'} placeholder='Enter wallet address'
                            name='wallet_address'
                            value={formdata.wallet_address}
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

export default AddUsdWallet
