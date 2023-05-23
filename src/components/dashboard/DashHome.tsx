import { Box,  Flex, Grid, GridItem, Heading, Image, List, ListIcon, ListItem, Stack, Text, } from '@chakra-ui/react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import earnpoint from "../../assets/images/tradeandearn.png";
import {BsCircle} from 'react-icons/bs';
import {FiArrowRightCircle} from 'react-icons/fi'

const DashHome = () => {
    const navigate = useNavigate();
  return (
    <Box maxW={'100vw'} minH='100vh' p={'2rem'}>
         {/* complete setup */}       
         <Box p={'2rem'} mx='1rem'>
         <Heading size={'md'}>Complete Setup</Heading>
         <Flex justify={'space-between'} alignItems='center' my={'2rem'}>
           <List  spacing='1rem' fontWeight={'semibold'}>
            <ListItem>
                <ListIcon as={BsCircle} />
                Transaction Pin
            </ListItem>

            <ListItem>
                <ListIcon as={BsCircle} />
                Add Bank Account
            </ListItem>

            <ListItem>
                <ListIcon as={BsCircle} />
                Add USD Wallet
            </ListItem>

            <ListItem>
                <ListIcon as={BsCircle}/>
                KYC Identity
            </ListItem>
           </List>

           <Text my='1rem' onClick={() => navigate('/dashboard/setup')}>
                <FiArrowRightCircle size={'2rem'} color='blue'               
            />
        </Text> 
         </Flex >
         </Box>

         {/* quick action */}
         <Grid templateColumns='repeat(4, 1fr)' gap={'1rem'} p='1rem'>
            <GridItem colSpan={[4,4,2,2]}>
                <Stack bg={'#E8EBFF'} p='1rem'>
                    <Heading size={'md'}>Sell gift cards</Heading>
                    <Text>
                    We trade xbox, walmart, moneycard, robolox, and footlocker cards—there are no limits.
                    </Text>
                </Stack>
            </GridItem>

            <GridItem colSpan={[4,4,2,2]}>
                <Stack bg={'#FFF8E8'} p='1rem' >
                        <Heading size={'md'}>Sell Crypto</Heading>
                        <Text>
                        We trade different kinds of cryptocurrencies there are no limits.
                        </Text>
                </Stack>
            </GridItem>

            <GridItem colSpan={[4,4,2,2]}>
                <Stack bg={'#E7F1EF'} p='1rem' >
                        <Flex gap={'2rem'} alignItems='center'>
                            <Heading size={'md'}>Pay Bills</Heading>
                            <Text bg={'red'} p='.3rem' rounded={'3xl'} color='white' fontSize={'.8rem'} >
                                Coming soon
                            </Text>
                        </Flex>
                        <Text>
                        We trade different kinds of cryptocurrencies  there are no limits.
                        </Text>
                </Stack>
            </GridItem>

            <GridItem colSpan={[4,4,2,2]}>
                <Stack bg={'#DADDC6'} p='1rem'>
                    <Heading size={'md'}>Refer and Earn</Heading>
                    <Text>
                    Refer a friend about the good things of tehlex and  earn convertible points
                    </Text>
                </Stack>
            </GridItem>
         </Grid>

         {/*Earn point  */}
         <Flex justify={'space-between'} gap={['.5rem','.5rem','1rem']} mt={'2rem'} 
            bg={'#ECF0FF'} p='1rem'>
            <Image alt='trade_and_earn' src={earnpoint} w={['100px','100px','200px']} 
                h={['130px','120px','fit-content']} />
            <Stack gap={[0,0,2]} mt={[0, 0,'2rem']} >
                <Heading size={['sm','sm','lg']}>Earn points on every trades</Heading>
                <Text textAlign={'left'} fontSize='14px'>
                Points accumulated gives you better chance  of qualifying for the monthly
                </Text>
                <Text color={'blue'}> <Link to=''>Learn more</Link></Text>
            </Stack>
         </Flex>
   </Box>
  )
}

export default DashHome;
