import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading,   Input,  InputGroup,  InputRightElement,  Stack, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { thelex } from '../endpoint/thelex';
import { PASSWORD_RECOVERY } from '../endpoint/route';
import { LOCALSTORAGE } from '../endpoint/localstorage';

const NewPassword = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show);
    const toast = useToast();


   
     // handle confirm password
     const id = LOCALSTORAGE.id()?.toString();
    const handleConfrim = async (e:React.FormEvent) => {
        e.preventDefault();
