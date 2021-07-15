import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > header {
    h2 {
      font-size: 34px;
      font-weight: 700;
    }

    span {
      margin-top: 6px;
      font-size: 16px;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 650px) {
    flex-direction: row;
  }
`;

export const MainInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;
  padding: 20px 15px;

  > div {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 42px;
      font-weight: 600;
    }
  }
`;

export const InfoContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 2fr;

  background: hsla(0, 0%, 100%, 0.25);
  border-radius: 10px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px 12px;

    h4 {
      font-weight: 700;
    }

    span {
      font-weight: 300;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AllDayForecast = styled.div`
  width: 100%;
  margin: 50px 0 25px;

  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;

  overflow: auto;

  &::-webkit-scrollbar {
    margin-top: 5px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
  }

  scroll-behavior: smooth;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 12px;
    padding: 5px 25px;

    background: hsla(0, 0%, 100%, 0.25);
    border-radius: 6px;

    &:not(:first-child) {
      margin-left: 5px;
    }

    span {
      font-size: 12px;
      font-weight: 300;
    }

    p {
      font-size: 15px;
    }
  }
`;
