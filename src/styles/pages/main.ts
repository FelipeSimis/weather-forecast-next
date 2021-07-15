import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  background: url('/background.jpg') no-repeat center;
  background-color: #89a7ef;
  background-size: cover;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;

  > header h2 {
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
  }

  > .loader {
    margin-top: 10px;
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  margin: 100px 0 30px;

  display: flex;
  justify-content: center;

  form {
    width: 100%;
    max-width: 700px;
  }
`;
