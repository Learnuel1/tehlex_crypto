import { Button, Flex, HStack, Image } from '@chakra-ui/react'
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import MobileNav from './MobileNav';

const Navigation = () => {
  return (
    <nav>
        <HStack wrap={'wrap'} w='100vw' p='1rem'  
             px='1rem' boxShadow={'base'} >
            <Flex w='30%' alignItems={'center'} justify='left'>
                <Image alt='logo' src={logo} w={['200px','200px','150px','150px']}  />
            </Flex>

            <Flex w={'40%'} gap='2rem' alignItems={'center'} justify='center'
                display={['none','none','flex', 'flex']}
            >
                <NavLink to={'/'} style={({isActive}) => isActive? {color:'blue'}: {color:'black'}} >
                    About Us
                </NavLink>

                <NavLink to={'/'} style={({isActive}) => isActive? {color:'blue'}: {color:'black'}}>
                    Support
                </NavLink>
                
                <NavLink to={'/'} style={({isActive}) => isActive? {color:'blue'}: {color:'black'}}>
                   FAQs
                </NavLink>                
            </Flex>

            <Flex w={['65%', '65%', '25%', '28%']} gap='2rem' alignItems={'center'} 
            justify='right'>
                <Button color={'blue'} colorScheme='none' 
                 border={'1px'} rounded='2xl' size={['sm','sm','md','md']} >
                    launch  
                </Button>

                <Flex display={['flex','flex','none', 'none']}>
                 <MobileNav />
                </Flex>
                
            </Flex>

            
        </HStack>
    </nav>
  )
}

export default Navigation
