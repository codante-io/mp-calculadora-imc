import { useContext } from 'react';
import { GlobalContext } from '../../providers/GlobalContext';
import { GraphicTable } from '../GraphicTable';
import { GraphicContainer, VoidListMessage } from './styles';

export const ResultGraphic = () => {
  const { database } = useContext(GlobalContext);

  return (
    <GraphicContainer>
      {database.length > 0 ? (
        <GraphicTable data={database} />
      ) : (
        <VoidListMessage>
          Saiba agora se está no seu peso ideal!
        </VoidListMessage>
      )}
    </GraphicContainer>
  );
};
