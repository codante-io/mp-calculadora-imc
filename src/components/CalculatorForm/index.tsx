import { useContext, useState } from 'react';
import { GlobalContext } from '../../providers/GlobalContext';
import {
  FormContainer,
  FormInput,
  FormInputContainer,
  FormLabel,
  FormSubmitBtn,
} from './styles';

export const CalculatorForm = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const { createImcRegister } = useContext(GlobalContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createImcRegister(Number(weight), Number(height.replace(',', '.')));

    setHeight('');
    setWeight('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInputContainer>
        <FormLabel htmlFor="weight">Peso</FormLabel>
        <FormInput
          className={weight !== '' ? 'active' : ''}
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          type="number"
          step={0.01}
          name="weight"
          id="weight"
          min={0}
          placeholder="Seu peso em Kg"
          required
        />
      </FormInputContainer>
      <FormInputContainer>
        <FormLabel htmlFor="height">Altura</FormLabel>
        <FormInput
          className={height !== '' ? 'active' : ''}
          onChange={(e) => setHeight(e.target.value)}
          value={height}
          type="number"
          step={0.01}
          name="height"
          id="height"
          required
          placeholder="Sua altuma em metros"
        />
      </FormInputContainer>
      <FormSubmitBtn disabled={weight === '' || height === ''}>
        Calcular
      </FormSubmitBtn>
    </FormContainer>
  );
};
