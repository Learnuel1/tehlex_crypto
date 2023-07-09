import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosHome } from 'react-icons/io';
import { FaWallet } from 'react-icons/fa';
import { IoIosSwap } from 'react-icons/io';
import { FaUser } from 'react-icons/fa'
const DashFooter = () => {
    return (
        <Flex maxW={'100vw'} px='2rem' p={'1.5rem'} justify={'space-around'}
            alignItems='center' mb={'3rem'} boxShadow='base' >
            <NavLink to={'/dashboard'} style={({ isActive }) => isActive ? { color: 'blue' } : { color: '#00000066' }} >
                <Flex align={{ base: 'center' }} flexDirection={{ base: 'column' }} display={{ base: 'flex' }}>
                    <IoIosHome />
                    <Text>
                        Home
                    </Text>
                </Flex>

            </NavLink >

            <NavLink to={"/wallet"} style={({ isActive }) => isActive ? { color: 'blue' } : { color: '#00000066' }} >
                <Flex align={{ base: 'center' }} flexDirection={{ base: 'column' }} display={{ base: 'flex' }}>
                    <FaWallet />
                    <Text>
                        Wallet
                    </Text>
                </Flex>
            </NavLink>

            <NavLink to={"/transaction"} style={({ isActive }) => isActive ? { color: 'blue' } : { color: '#00000066' }} >
                <Flex align={{ base: 'center' }} flexDirection={{ base: 'column' }} display={{ base: 'flex' }}>
                    <IoIosSwap />
                    <Text>
                        Transaction
                    </Text>
                </Flex>
            </NavLink>

            <NavLink to={"/profile"} style={({ isActive }) => isActive ? { color: 'blue' } : { color: '#00000066' }} >
                <Flex align={{ base: 'center' }} flexDirection={{ base: 'column' }} display={{ base: 'flex' }}>
                    <FaUser />
                    <Text>
                        Profile
                    </Text>
                </Flex>
            </NavLink>
        </Flex >
    )
}

export default DashFooter
