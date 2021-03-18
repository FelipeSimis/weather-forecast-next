import { NextPage } from 'next';
import { Container } from './styles';

interface Props {
  title: string;
}

const ErrorTooltip: NextPage<Props> = ({ title, children }) => {
  return (
    <Container>
      <span>{title.charAt(0).toUpperCase() + title.slice(1)}</span>

      {children}
    </Container>
  );
};

export default ErrorTooltip;
