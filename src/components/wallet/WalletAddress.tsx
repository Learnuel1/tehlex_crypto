import { Box, Button, HStack, Stack, VStack, Text, Image, Heading } from '@chakra-ui/react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import usdt from "../../assets/images/usdt.jpg";

const WalletAddress = () => {
    const navigate = useNavigate();

    return (
        <Box maxW={'100vw'} minH='40vh' p='2rem'>
            <Stack mb='2rem'>
                <Text >
                    <IoIosArrowRoundBack size={'2rem'} color='blue'
                        onClick={() => navigate(-1)}
                    />
                </Text>
                <Heading size={'md'}>Wallet Address</Heading>
            </Stack>

            <HStack justify={'space-between'} mb='1rem'>
                <Box>
                    <Text color={'gray.400'}>Default</Text>
                    <Image alt='wallet_logo' src={usdt} w='40px' />
                </Box>

                <Box >
                    <Text>344gdhhdhgfdjjsggs</Text>
                    <Text>TRC 20</Text>
                </Box>

                <Text>Edit</Text>
                <Text color={'red'}>Delete</Text>
            </HStack>

            <VStack mt={'3rem'}>
                <Button colorScheme={'blue'}
                    onClick={() => navigate("/dashboard/setup/addusdwallet")}
                >
                    Add Wallet Address
                </Button>
            </VStack>
        </Box>
    )
}

export default WalletAddress
