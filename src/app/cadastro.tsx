import { type SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useParams } from 'react-router-dom';
import BasicSelect from '../components/select';
import InputDate from '../components/input-date';


export default function Cadastro() {
    const { clienteId } = useParams<{ clienteId?: string }>();
    const isEditing = !!clienteId;

    const [age, setAge] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            setEmailError('');
        } else if (!emailRegex.test(value)) {
            setEmailError('Email inválido');
        } else {
            setEmailError('');
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);
        validateEmail(value);
    };

    return <><>
        <TextField label={'Nome'}></TextField>
        <TextField 
            label={'E-mail'} 
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
        ></TextField>
        <InputDate label="Data de Nascimento"></InputDate>
        <BasicSelect></BasicSelect>
        <TextField label="Observações" multiline={true}> </TextField>
    </></>
}