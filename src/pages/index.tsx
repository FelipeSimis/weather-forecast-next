import { useCallback, useRef, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Loader from 'react-loader-spinner';

import api from '../services/api';

import Input from '../components/Input';
import CityInfo from '../components/CityInfo';

import { Container, Wrapper, FormContainer } from '../styles/pages/main';

import { WeatherHoursData } from '../ts/interfaces/WeatherHoursData';
import { WeatherMainData } from '../ts/interfaces/WeatherMainData';

interface Data {
  hourly: WeatherHoursData;
  main: WeatherMainData;
}

const Page: NextPage = () => {
  const formRef = useRef<FormHandles>(null);

  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(({ city }, { reset }) => {
    if (city === '') {
      return;
    }

    formRef.current?.setErrors({});

    setLoading(true);

    Promise.all([
      api.get(
        `forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_APIKEY}&units=metric`
      ),
      api.get(
        `weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_APIKEY}&units=metric`
      ),
    ])
      .then(async response => {
        const [hourlyResponse, mainResponse] = response;

        const hourly = await hourlyResponse.data;
        const main = await mainResponse.data;

        setData({
          hourly,
          main,
        });

        setLoading(false);
      })
      .catch(err => {
        formRef.current?.setFieldError('city', err.response.data.message);

        setLoading(false);
      });

    reset();
  }, []);

  return (
    <>
      <Head>
        <title>Weather App {data && `- ${data.main.name}`}</title>
      </Head>

      <Wrapper>
        <Container>
          <header>
            <h2>Weather App</h2>
          </header>

          <FormContainer>
            <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
              <Input
                name="city"
                placeholder="Search for a city or country..."
              />
            </Form>
          </FormContainer>

          {loading && (
            <Loader
              type="TailSpin"
              color="#069"
              height={60}
              width={60}
              className="loader"
            />
          )}

          {data && <CityInfo hourly={data.hourly} main={data.main} />}
        </Container>
      </Wrapper>
    </>
  );
};

export default Page;
