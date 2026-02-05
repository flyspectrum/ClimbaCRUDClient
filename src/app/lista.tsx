import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    nome: string,
    email: string,
    datanascimento: string,
    profissao: string,
    observacoes: string,
) {
    return { nome, email, datanascimento, profissao, observacoes };
}

const rows = [
    createData('Joao', 'joao@gmail.com', '19/05/2001', 'carcereiro', 'teste'),
    createData('Joao', 'joao@gmail.com', '19/05/2001', 'carcereiro', 'teste'),
    createData('Joao', 'joao@gmail.com', '19/05/2001', 'carcereiro', 'teste'),
];

export default function Lista() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Nome</TableCell>
                        <TableCell align="right">E-mail</TableCell>
                        <TableCell align="right">Data de Nascimento</TableCell>
                        <TableCell align="right">Profissão</TableCell>
                        <TableCell align="right">Observações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.nome}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.nome}
                            </TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.datanascimento}</TableCell>
                            <TableCell align="right">{row.profissao}</TableCell>
                            <TableCell align="right">{row.observacoes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}