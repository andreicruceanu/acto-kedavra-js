import { Logo } from "../Logo/Logo";
import styled from "styled-components";
import dayjs from "dayjs";

const TODAY = dayjs().format("D MMMM YYYY");
export const Footer = () => {
  return (
    <StyledFooter>
      <StyledData>{TODAY}</StyledData>
      <Logo />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: var(--padding-lg);
  background-color: var(--color-white-1);

  border-top: 1px solid var(--color-gray-1);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
const StyledData = styled.p`
  font-weight: 600;
`;
