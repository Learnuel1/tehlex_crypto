import { Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';
import {AiOutlineHome, AiOutlineBarChart} from 'react-icons/ai';
import {BsWallet} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg'

const DashFooter = () => {
  return (
    <Flex maxW={'100vw'} px='2rem' p={'1.5rem'} justify={'space-around'}
     alignItems='center' mb={'3rem'} boxShadow='base' >
        <NavLink to={'/dashboard'} style={({isActive}) => isActive? {color:'blue'} : {color:'black'}} >
            <VStack>
            <AiOutlineHome size={'1.5rem'} />
            <Text >home</Text>
            </VStack>
        </NavLink>

        <NavLink to={"/wallet"} style={({isActive}) => isActive? {color:'blue'} : {color:'black'}} >
            <VStack>
                <BsWallet size={'1.5rem'} />
                <Text>Wallet</Text>
            </VStack>
            </NavLink>

        <NavLink to={"/transaction"} style={({isActive}) => isActive? {color:'blue'} : {color:'black'}} >
            <VStack>
                <AiOutlineBarChart size={'1.5rem'} />
                <Text >Transaction</Text>
            </VStack>
        </NavLink>

        <NavLink to={"/profile" } style={({isActive}) => isActive? {color:'blue'} : {color:'black'}} >
            <VStack>
                <CgProfile size={'1.5rem'} />
                <Text>Profile</Text>
            </VStack>
        </NavLink>
    </Flex>
  )
}

export default DashFooter
