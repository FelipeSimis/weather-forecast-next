import { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  title: string;
  children: ReactNode;
}

const ErrorTooltip = ({ title, children }: Props): JSX.Element => {
  return (
    <Container>
      <span>{title.charAt(0).toUpperCase() + title.slice(1)}</span>

      {children}
    </Container>
  );
};

export default ErrorTooltip;
