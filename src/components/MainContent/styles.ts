import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const SectionContainer = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  background-color: var(--text-button);
  border-radius: 0.5rem;

  @media screen and (min-width: 768px) {
    width: 80%;
    height: auto;
    gap: 1rem;
    padding: 5% 8%;
    margin-top: 0;
  }

  @media screen and (min-width: 900px) {
    width: 60%;
    height: auto;
    gap: 0.5rem;
    padding: 2% 6%;
    margin-top: 0;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
    height: auto;
    gap: 0.5rem;
    padding: 2% 6%;
  }
`;
