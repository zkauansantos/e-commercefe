import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 83rem;
  background: ${({ theme }) => theme.colors.dark['600']};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 124rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h3 {
    font-size: 2.8rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.light['200']};
    opacity: 0.5;
  }
`;

export const CategoryGroupContainer = styled.div<{ justify: string }>`
  width: 100%;
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: center;
  margin-top: 6.4rem;
`;

export const Category = styled.div<{ width: string, bg: string }>`
  height: 30rem;
  background: url(${({ bg }) => bg}) center center no-repeat;
  background-size: cover;
  width: ${({ width }) => width};
  position: relative;
  color: ${({ theme }) => theme.colors.blue['700']};
  transition: 0.5s ease-in-out ;
  cursor: pointer;

  &:hover {
    transition: background-size 0.5s ease-in;
    color: ${({ theme }) => theme.colors.light['200']};
    background-size: 120%;
  }

  .title-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-style: italic;
    font-size: 4.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -8rem;

    svg {
      font-size: 2.4rem;
    }
  }
`;
