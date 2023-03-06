import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const DashFooter = () => {
  return (
    <Flex maxW={'100vw'} px='2rem' p={'1.5rem'} justify={'space-around'}
     alignItems='center' mb={'3rem'} boxShadow='base' >
        <NavLink to={'/dashboard'} style={({isActive}) => isActive? {color:'blue'} : {color:'black'}} >
            <Text>
                Home
            </Text>
        </NavLink>

        <NavLink to={"/wallet"} style={({isActive}) => isActive? {color:'blue'} : {color:'black'}} >
            <Text>
            Wallet
            </Text>
        </NavLink>

        <NavLink to={"/transaction"} style={({isActive}) => isActive? {color:'blue'} : {color:'black'}} >
            <Text>
            Transaction
            </Text>
        </NavLink>

        <NavLink to={"/profile" } style={({isActive}) => isActive? {color:'blue'} : {color:'black'}} >
            <Text>
                Profile
            </Text>
        </NavLink>
    </Flex>
  )
}

export default DashFooter
