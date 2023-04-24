import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6.4rem;
  background: ${({ theme }) => theme.colors.bgDark};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 124rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem 0;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 5rem;
    font-size: 4.8rem;
  }

  .container {
    display: flex;
    gap: 15.5rem;

    .container-categories {
      display: flex;
      gap: 6.4rem;

      .category {
        strong {
          font-size: 1.6rem;
          color: ${({ theme }) => theme.colors.text};
        }

        ul {
          margin-top: 0.8rem;
          line-height: 2.2rem;
          list-style: none;

          li {
            margin-top: 0.8rem;
            font-size: 1.4rem;
            opacity: 0.8;
            color: ${({ theme }) => theme.colors.details};
          }
        }
      }
    }

    aside {
      font-weight: bold;
      display: flex;
      flex-direction: column;
      gap: 12rem;

      .others {
        display: flex;
        gap: 4.8rem;

        .category {
          strong {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.colors.text};
          }

          ul {
            margin-top: 0.8rem;
            list-style: none;
            line-height: 2.2rem;

            li {
              max-width: 90%;
              font-size: 1.4rem;
              margin-top: 0.8rem;
              opacity: 0.8;
              color: ${({ theme }) => theme.colors.details};
            }
          }
        }
      }

      .social-links {
          strong {
            color: ${({ theme }) => theme.colors.text};
          }

          div {
            display: flex;
            gap: 1.6rem;
            margin-top: 2.4rem;

            svg {
              font-size: 4.8rem;
              color: ${({ theme }) => theme.colors.details};
            }
          }
        }
    }
  }
`;
