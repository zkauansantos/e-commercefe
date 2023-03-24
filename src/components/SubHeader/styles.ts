import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.bgSemiDark};
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 12px;
    font-weight: 900;
    font-style: italic;
    font-size: 14px;
  }
`;
