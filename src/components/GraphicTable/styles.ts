import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.info-table {
    margin-bottom: 1rem;
  }
`;

export const TableHeader = styled.thead`
  width: 100%;
  display: flex;
  padding: 0 5%;
  border-bottom: 1px solid var(--border-and-btn-bg);
  color: var(--text-one);

  &.info-header {
    border-bottom: none;
  }
`;

export const TableHeadRow = styled.tr`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--text-one);

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: .8rem;
  }
`;

export const TableBody = styled.tbody`
  width: 100%;
  display: flex;
  padding: 0 5%;
  flex-direction: column;
`;

export const TableRow = styled.tr`
  width: 100%;
  min-height: 2rem;
  height: auto;
  display: flex;
  align-items: center;
  color: var(--text-one);
`;

export const TableData = styled.td`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.75rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: .75rem;
  }
`;
