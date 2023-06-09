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

  h3 {
    padding-left: 2.4rem;
    font-size: clamp(1.8rem, 4vw ,2.8rem);
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
  padding-left: 2.4rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    gap: 4.8rem;
    padding-left: 0;
    width: auto;
  }
`;

export const Category = styled.div<{ width: string; bg: string }>`
  height: 30rem;
  background: url(${({ bg }) => bg}) center center no-repeat;
  background-size: cover;
  width: clamp(15rem, 40vw, ${({ width }) => width});
  position: relative;
  color: ${({ theme }) => theme.colors.blue['700']};
  transition: 0.5s ease-in-out;
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
    font-size: clamp(2.4rem, 4vw, 4.2rem);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -15%;

    svg {
      font-size: 2.4rem;
    }
  }

  @media screen and (max-width: 850px) {
    width: 80%;
    border-radius: 0.8rem;
    height: 12rem;

    .title-arrow {
      left: -8%;
    }
  }
`;
