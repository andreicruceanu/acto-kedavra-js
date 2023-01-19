import styled from "styled-components";
import { text } from "../../Styless/mixins";
export const Logo = () => {
  return <StyledLinkLogo href="/">ActoKedavra</StyledLinkLogo>;
};

const StyledLinkLogo = styled.a`
  font-weight: 700;
  /* font-size: var(--font-size-base);
  line-height: var(--line-height-base); */
  ${text({ size: "base" })}
`;
