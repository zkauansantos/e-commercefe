import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55rem;
  background: url('https://www.artwalk.com.br/arquivos/large-Banner_JD_Desktop.jpg') center center no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 124rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.light['200']};
  gap: 2.4rem;

  h3 {
    font-size: clamp(4rem, 10vw, 6.4rem);
    word-wrap: break-word;
    width: 25rem;
    text-align: center;
    font-style: italic;
  }

  p {
    font-style: italic;
    font-size: 1.7rem;
  }

  .button {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 17rem;
    height: 5rem;
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.light['100']};
    color: ${({ theme }) => theme.colors.blue['700']};
    font-weight: bold;
    border-radius: 4px;

    span:first-child {
      margin-left: 3rem;
    }

    :hover {
      background: ${({ theme }) => theme.colors.blue['700']};
      color: ${({ theme }) => theme.colors.light['200']};

      .arrow {
        background: ${({ theme }) => theme.colors.light['100']};
        color: ${({ theme }) => theme.colors.blue['700']};
      }
    }

    .arrow {
      background: ${({ theme }) => theme.colors.blue['700']};
      color: ${({ theme }) => theme.colors.light['200']};
      border-radius: 0px 4px 4px 0px;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4.4rem;

      svg {
        font-size: 2.4rem;
      }
    }
  }
`;
