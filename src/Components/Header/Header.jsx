import styled from "styled-components";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--padding-base);
  background-color: var(--color-white-1);
  text-align: center;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));
`;
