import styled from 'styled-components';

export const InfoTableHeadRow = styled.tr`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const InfoTableData = styled.td`
  width: 50%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  color: var(--text-one);
  font-size: 0.8rem;

  &.title {
    color: var(--border-and-btn-bg);
    font-weight: 600;
    font-size: 1rem;

    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
    }

    @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: .8rem;
  }
`;
