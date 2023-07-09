import { Box, Flex, Grid, GridItem, Heading, Image, List, ListIcon, ListItem, Stack, Text, } from '@chakra-ui/react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import earnpoint from "../../assets/images/tradeandearn.png"
import EllipseFour from "../../assets/images/ellipse_one.png"
import EllipseTwo from "../../assets/images/ellipse_two.png"
import EllipseThree from "../../assets/images/ellipse_three.png"
import EllipseOne from "../../assets/images/ellipse_four.png"
const DashHome = () => {
    const navigate = useNavigate();
    return (
        <Box maxW={'100vw'} minH='100vh' p={'2rem'}>
            {/* complete setup */}
            <Box p={'2rem'} mx='1rem' >
                <Heading size={'md'}>Complete Setup</Heading>
                <Flex justify={'space-between'} alignItems='center' my={'2rem'} >
                    <List spacing='1rem' fontWeight={'semibold'}>
                        <ListItem>
                            <ListIcon />
                            Transaction Pin
                        </ListItem>

                        <ListItem>
                            <ListIcon />
                            Add Bank Account
                        </ListItem>

                        <ListItem>
                            <ListIcon />
                            Add USD Wallet
                        </ListItem>

                        <ListItem>
                            <ListIcon />
                            KYC Identity
                        </ListItem>
                    </List>

                    <Text my='1rem' onClick={() => navigate('/dashboard/setup')} display={{ base: 'none', md: 'block' }}>
                        <IoIosArrowRoundBack size={'2.5rem'} color='blue'
                        />
                    </Text>
                    <Flex justify={{ base: 'center' }} align={{ base: 'center ' }} display={{ base: 'flex', md: 'none' }} backgroundColor={{ base: 'blue' }} rounded={{ base: 'full' }} >     <IoIosArrowRoundForward size={'2rem'} color='#fff' /></Flex>
                </Flex >
            </Box>

            {/* quick action */}
            <Grid templateColumns='repeat(4, 1fr)' gap={'1rem'} p='1rem'>
                <GridItem colSpan={[4, 4, 2, 2]}>
                    <Stack bg={'#E8EBFF'} p='1rem' position={{ base: 'relative' }} >
                        <Heading size={'md'}>Sell gift cards</Heading>
                        <Text zIndex={{ base: '2' }}>
                            We trade xbox, walmart, moneycard, robolox, and <br /> footlocker cards—there are no limits.
                        </Text>
                        <Image alt='ellipse_one' src={EllipseOne} w='4rem' display={{ md: 'none', base: 'block' }} position={{ base: 'absolute' }} bottom={{ base: '0px' }} right={{ base: '0px' }} zIndex={{ base: '1' }} />
                    </Stack>

                </GridItem>

                <GridItem colSpan={[4, 4, 2, 2]}>
                    <Stack bg={'#FFF8E8'} p='1rem' position={{ base: 'relative' }}>
                        <Heading size={'md'}>Sell Crypto</Heading>
                        <Text zIndex={{ base: '2' }}>
                            We trade different kinds of cryptocurrencies <br />there are no limits.
                        </Text>
                        <Image alt='ellipse_two' src={EllipseTwo} w='4rem' display={{ md: 'none', base: 'block' }} position={{ base: 'absolute' }} bottom={{ base: '0px' }} right={{ base: '0px' }} zIndex={{ base: '1' }} />
                    </Stack>
                </GridItem>

                <GridItem colSpan={[4, 4, 2, 2]}>
                    <Stack bg={'#E7F1EF'} p='1rem' position={{ base: 'relative' }} >
                        <Flex gap={'2rem'} alignItems='center'>
                            <Heading size={'md'}>Pay Bills</Heading>
                            <Text bg={'red'} p='.3rem' rounded={'2xl'} color='white' >Coming soon</Text>
                        </Flex>
                        <Text zIndex={{ base: '2' }}>
                            We trade different kinds of cryptocurrencies <br /> there are no limits.
                        </Text>
                        <Image alt='ellipse_three' src={EllipseThree} w='4rem' display={{ md: 'none', base: 'block' }} position={{ base: 'absolute' }} bottom={{ base: '0px' }} right={{ base: '0px' }} zIndex={{ base: '1' }} />
                    </Stack>
                </GridItem>

                <GridItem colSpan={[4, 4, 2, 2]}>
                    <Stack bg={'#DADDC6'} p='1rem' position={{ base: 'relative' }} >
                        <Heading size={'md'}>Refer and Earn</Heading>
                        <Text zIndex={{ base: '2' }}>
                            Refer a friend about the good things of tehlex and <br /> earn convertible points
                        </Text>
                        <Image alt='ellipse_four' src={EllipseFour} w='4rem' display={{ md: 'none', base: 'block' }} position={{ base: 'absolute' }} bottom={{ base: '0px' }} right={{ base: '0px' }} zIndex={{ base: '1' }} />
                    </Stack>
                </GridItem>
            </Grid>

            {/*Earn point  */}
            <Flex justify={'space-around'} gap={['.5rem', '.5rem', '1rem']} mt={'2rem'} bg={'#ECF0FF'} p='1rem'>
                <Image alt='trade_and_earn' src={earnpoint} w={['100px', '100px', '200px']} h={['130px', '120px', 'fit-content']} />
                <Stack gap={[0, 0, 2]} mt={[0, 0, '2rem']} >
                    <Heading size={['sm', 'sm', 'lg']}>Earn points on every trades</Heading>
                    <Text textAlign={'left'} fontSize='14px'>
                        Points accumulated gives you better chance <br /> of qualifying for the monthly
                    </Text>
                    <Text color={'blue'} textDecoration={{ base: 'underline' }}> <Link to='' >Learn more</Link></Text>
                </Stack>
            </Flex>
        </Box>
    )
}

export default DashHome;
