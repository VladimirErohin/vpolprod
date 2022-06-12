import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, cost, allCost) {
    return { name, cost, allCost };
}

const rows = [
    createData('Стяжка пола без подготовки','8 руб./м²', '-'),
    createData('Стяжка пола с армирующим волокном', '9 руб./м²', '-'),
    createData('Подготовка из пенополистерола', '2 руб./м²', '-'),
    createData('Подготовка из руллоных материалов(пленка/стенофон)', '0.5 руб./м²', '-'),
    createData('Подготовка керамзито-армированая', '11 руб./м²', '-'),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell style={{backgroundColor:'#75c7d0'}}>Виды услуг</StyledTableCell>
                        <StyledTableCell align="center" style={{backgroundColor:'#75c7d0'}}>Стоимость без материала</StyledTableCell>
                        <StyledTableCell align="center" style={{backgroundColor:'#75c7d0'}}>Стоимость c материалом</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center" >{row.cost}</StyledTableCell>
                            <StyledTableCell align="center">{row.allCost}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}