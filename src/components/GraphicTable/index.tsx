import { ImcRegister } from '../../providers/GlobalContext';
import {
  TableBody,
  TableContainer,
  TableData,
  TableHeader,
  TableHeadRow,
  TableRow,
} from './styles';

const tableheadsList = ['Peso', 'Altura', 'IMC', 'Resultado'];

type GraphicTableProps = {
  data: ImcRegister[];
};

export const GraphicTable = ({ data }: GraphicTableProps) => {
  return (
    <TableContainer>
      <TableHeader>
        {tableheadsList.map((item) => (
          <TableHeadRow key={item} className={item}>
            <td>{item}</td>
          </TableHeadRow>
        ))}
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableData>{item.peso}</TableData>
            <TableData>{item.altura}</TableData>
            <TableData>{item.imc}</TableData>
            <TableData>{item.result}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};
