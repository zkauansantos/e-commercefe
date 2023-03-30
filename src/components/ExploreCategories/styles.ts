import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 830px;
  background: ${({ theme }) => theme.colors.bgDark};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .title {

    h3 {
      font-size: 28px;
      font-style: italic;
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.5;
    }
  }
`;

export const CategoryGroupContainer = styled.div<{ justify: string }>`
  width: 100%;
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: center;
  margin-top: 64px;
`;

export const Category = styled.div<{ width: string, bg: string }>`
  height: 300px;
  background: url(${({ bg }) => bg}) center center no-repeat;
  background-size: cover;
  width: ${({ width }) => width};
  position: relative;
  color: ${({ theme }) => theme.colors.details};
  transition: 0.5s ease-in-out ;
  cursor: pointer;

  &:hover {
    transition: background-size 0.5s ease-in;
    color: ${({ theme }) => theme.colors.text};
    background-size: 120%;
  }

  .title-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-style: italic;
    font-size: 42px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -80px;

    svg {
      font-size: 25px;
    }
  }
`;
