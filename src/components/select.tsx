import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [profissao, setProfissao] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setProfissao(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Profissão</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={profissao}
          label="Profissão"
          onChange={handleChange}
        >
          <MenuItem value={'Programador'}>Programador</MenuItem>
          <MenuItem value={'Consultor de Vendas'}>Consultor de Vendas</MenuItem>
          <MenuItem value={'SDR'}>SDR</MenuItem>
          <MenuItem value={'Suporte ao Cliente'}>Suporte ao Cliente</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}