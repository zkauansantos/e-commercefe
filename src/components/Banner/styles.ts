import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  background: url('https://www.artwalk.com.br/arquivos/large-Banner_JD_Desktop.jpg') center center no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  gap: 24px;

  h3 {
    font-size: 64px;
    word-wrap: break-word;
    width: 250px;
    text-align: center;
    font-style: italic;
  }

  p {
    font-style: italic;
    font-size: 17px;
  }

  .button {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 170px;
    height: 50px;
    background: ${({ theme }) => theme.colors.bgLight};
    color: ${({ theme }) => theme.colors.details};
    font-weight: bold;
    border-radius: 4px;

    span:first-child {
      margin-left: 30px;
    }

    :hover {
      background: ${({ theme }) => theme.colors.details};
      color: ${({ theme }) => theme.colors.text};

      .arrow {
        background: ${({ theme }) => theme.colors.bgLight};
        color: ${({ theme }) => theme.colors.details};
      }
    }

    .arrow {
      background: ${({ theme }) => theme.colors.details};
      color: ${({ theme }) => theme.colors.text};
      border-radius: 0px 4px 4px 0px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;

      svg {
        font-size: 25px ;
      }
    }
  }
`;
