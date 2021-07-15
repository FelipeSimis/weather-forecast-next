import { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle, FiSearch } from 'react-icons/fi';

import ErrorTooltip from '../ErrorTooltip';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = ({ name, ...rest }: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue = '', error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <FiSearch size={20} />

      <input
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && (
        <ErrorTooltip title={error}>
          <FiAlertCircle size={20} />
        </ErrorTooltip>
      )}
    </Container>
  );
};

export default memo(Input);
