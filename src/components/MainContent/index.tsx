import { CalculatorForm } from '../CalculatorForm';
import { InformationTable } from '../InformationTable';
import { ResultGraphic } from '../ResultGrafic';
import { MainContainer, SectionContainer } from './styles';

export const MainContent = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <CalculatorForm />
        <ResultGraphic />
        <InformationTable />
      </SectionContainer>
    </MainContainer>
  );
};
