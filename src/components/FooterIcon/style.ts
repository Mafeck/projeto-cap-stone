import styled from "styled-components";

interface IconBoxProps {
  color: string;
}

export const IconBox = styled.div<IconBoxProps>`
  background-color: ${(props) => props.color};
  width: 36px;
  height: 36px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
