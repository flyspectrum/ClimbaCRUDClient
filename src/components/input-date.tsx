import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import React from 'react';

dayjs.locale('pt-br');

export default function InputDate({ label }: { label: string }) {
  const [date, setDate] = React.useState<Dayjs | null>(null);
  const [dateError, setDateError] = React.useState('');

  const handleDateChange = (value: Dayjs | null) => {
    setDate(value);

    if (!value) {
      setDateError('');
    } else if (!value.isValid()) {
      setDateError('Data inválida');
    } else if (value.isAfter(dayjs(new Date()).startOf('day'))) {
      setDateError('A data deve ser anterior a hoje');
    } else {
      setDateError('');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
          label={label} 
          value={date}
          onChange={handleDateChange}
          format="DD/MM/YYYY"
          slotProps={{
            textField: {
              error: !!dateError,
              helperText: dateError,
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}