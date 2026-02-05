import { type SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React from 'react';
import BasicSelect from '../components/select';


export default function Cadastro() {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return <><>
        <TextField label={'Nome'}></TextField>
        <TextField label={'E-mail'}></TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Uncontrolled picker"
                defaultValue={dayjs('2022-04-17')}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        <BasicSelect></BasicSelect>
    </></>
}