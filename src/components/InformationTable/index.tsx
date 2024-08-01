import {
  TableBody,
  TableContainer,
  TableHeader,
  TableRow,
} from '../GraphicTable/styles';
import { InfoTableData, InfoTableHeadRow } from './styles';

const infoData = [
  {
    id: 1,
    imc: 'Menos de 17',
    classification: 'Muito abaixo do peso',
  },
  {
    id: 2,
    imc: 'Entre 17 e 18,49',
    classification: 'Abaixo do peso',
  },
  {
    id: 3,
    imc: 'Entre 18,5 e 24,99',
    classification: 'Peso normal',
  },
  {
    id: 4,
    imc: 'Entre 25 e 29,99',
    classification: 'Acima do peso',
  },
  {
    id: 5,
    imc: 'Entre 35 e 39,99',
    classification: 'Obesidade II(severa)',
  },
  {
    id: 6,
    imc: 'Entre 30 e 34,99',
    classification: 'Obesidade I',
  },
  {
    id: 7,
    imc: 'Acima de 40',
    classification: 'Obesidade III(mórbida)',
  },
];

export const InformationTable = () => {
  return (
    <TableContainer className='info-table'>
      <TableHeader className='info-header'>
        <InfoTableHeadRow>
          <InfoTableData className="title">IMC</InfoTableData>
          <InfoTableData className="title">Classificação</InfoTableData>
        </InfoTableHeadRow>
      </TableHeader>
      <TableBody>
        {infoData.map((item) => (
          <TableRow key={item.id}>
            <InfoTableData>{item.imc}</InfoTableData>
            <InfoTableData>{item.classification}</InfoTableData>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};
