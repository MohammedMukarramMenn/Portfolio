import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const LinkItem = styled.a`
  color: #6e07f3;
  margin-bottom: 16px;
  transition: 0.3s ease;
  left: 0;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: #6e07f3;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;
