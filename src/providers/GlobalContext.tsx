import { createContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

export interface GlobalProviderProps {
  children: React.ReactNode;
}

export type GlobalContextProps = {
  database: ImcRegister[];
  setDatabase: React.Dispatch<React.SetStateAction<ImcRegister[]>>;
  createImcRegister: (peso: number, altura: number) => void;
};

export type ImcRegister = {
  id: string;
  peso: number;
  altura: number;
  imc: number;
  result: string;
};

export const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [database, setDatabase] = useState<ImcRegister[]>([]);

  const getPacientStatus = (imc: number) => {
    if (imc < 17) {
      return 'Muito abaixo do peso';
    }

    if (imc >= 17 && imc <= 18.49) {
      return 'Abaixo do peso';
    }

    if (imc >= 18.5 && imc <= 24.99) {
      return 'Peso normal';
    }

    if (imc >= 25 && imc <= 29.99) {
      return 'Acima do peso';
    }

    if (imc >= 30 && imc <= 34.99) {
      return 'Obesidade I';
    }

    if (imc >= 35 && imc <= 39.99) {
      return 'Obesidade II(severa)';
    }

    return 'Obesidade III(mórbida)';
  };

  const createImcRegister = (peso: number, altura: number) => {
    const imc = Number((peso / (altura * altura)).toFixed(2));

    const data = {
      id: uuidV4(),
      peso,
      altura,
      imc,
      result: getPacientStatus(imc),
    };

    setDatabase((prev) => [...prev, data]);
  };

  return (
    <GlobalContext.Provider
      value={{ database, setDatabase, createImcRegister }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
