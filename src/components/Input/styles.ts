import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: var(--white);
  box-shadow: 0px 8px 8px -8px hsl(0deg 0% 0%);
  border-radius: 18px;

  position: relative;

  > svg {
    margin-left: 12px;
  }

  > svg circle,
  > svg line {
    color: var(--gray) !important;
  }

  input {
    width: 100%;
    padding: 12px;

    background: none;
    border-radius: 18px;
    border: none;
    color: var(--gray);

    outline: 0;
  }
`;
