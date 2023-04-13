import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  background: ${({ theme }) => theme.colors.bgDark};

`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px 0;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 50px;
    font-size: 48px;
  }

  .container {
    display: flex;
    gap: 155px;

    .flex {
      display: flex;
      gap: 64px;

      .category {
        strong {
          font-size: 16px;
          color: ${({ theme }) => theme.colors.text};
        }

        ul {
          margin-top: 8px;
          line-height: 22px;
          list-style: none;

          li {
            margin-top: 8px;
            font-size: 14px;
            opacity: 0.8;
            color: ${({ theme }) => theme.colors.details};
          }
        }
      }
    }

    aside {
      display: flex;
      flex-direction: column;
      gap: 120px;

      .aside {
        display: flex;
        gap: 48px;

        .category {
          strong {
            font-size: 16px;
            color: ${({ theme }) => theme.colors.text};
          }

          ul {
            margin-top: 8px;
            list-style: none;
            line-height: 22px;

            li {
              font-size: 14px;
              margin-top: 8px;
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
            gap: 16px;
            margin-top: 24px;

            svg {
              font-size: 48px;
              color: ${({ theme }) => theme.colors.details};
            }
          }
        }
    }
  }

`;
