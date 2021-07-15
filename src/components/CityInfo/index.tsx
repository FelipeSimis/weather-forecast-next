import { useCallback, WheelEvent } from 'react';
import Image from 'next/image';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import {
  Container,
  Column,
  MainInfoContainer,
  InfoContainer,
  AllDayForecast,
  Carousel,
} from './styles';

import { WeatherHoursData } from '../../ts/interfaces/WeatherHoursData';
import { WeatherMainData } from '../../ts/interfaces/WeatherMainData';

interface Props {
  hourly: WeatherHoursData;
  main: WeatherMainData;
}

const CityInfo = ({ hourly, main }: Props): JSX.Element => {
  const convertTimestampToHumanDate = useCallback(
    (timestamp: number | string) => {
      return `${new Date(Number(timestamp) * 1000).toLocaleTimeString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })}`;
    },
    []
  );

  const handleCarousel = useCallback((event: WheelEvent<HTMLDivElement>) => {
    const body = document.querySelector('body');

    if (body !== null) {
      disableBodyScroll(body);

      // eslint-disable-next-line no-unused-expressions
      event.deltaY > 0
        ? event.currentTarget.scrollBy(285, 0)
        : event.currentTarget.scrollBy(-285, 0);
    }
  }, []);

  return (
    <Container>
      <header>
        <h2>{`${main.name}, ${main.sys.country}`}</h2>
        <span>{convertTimestampToHumanDate(main.dt).slice(0, -16)}</span>
      </header>

      <Column>
        <MainInfoContainer>
          <Image
            src={`https://openweathermap.org/img/wn/${main.weather[0].icon}@2x.png`}
            alt={main.weather[0].description}
            width={140}
            height={140}
            objectFit="cover"
            priority
          />

          <div>
            <h1>{main.main.temp.toFixed(0)}°C</h1>
            <span>
              {main.weather[0].description.charAt(0).toUpperCase() +
                main.weather[0].description.slice(1)}
            </span>
          </div>
        </MainInfoContainer>

        <InfoContainer>
          <div>
            <h4>{main.main.temp_max.toFixed(0)}°</h4>
            <span>Max</span>
          </div>

          <div>
            <h4>{main.wind.speed}mph</h4>
            <span>Wind</span>
          </div>

          <div>
            <h4>
              {convertTimestampToHumanDate(main.sys.sunrise).slice(-8, -3)}
            </h4>
            <span>Sunrise</span>
          </div>

          <div>
            <h4>{main.main.temp_min.toFixed(0)}°</h4>
            <span>Min</span>
          </div>

          <div>
            <h4>{main.main.humidity}%</h4>
            <span>Humidity</span>
          </div>

          <div>
            <h4>
              {convertTimestampToHumanDate(main.sys.sunset).slice(-8, -3)}
            </h4>
            <span>Sunset</span>
          </div>
        </InfoContainer>
      </Column>

      <AllDayForecast>
        <h2>Forecast</h2>

        <Carousel
          onMouseLeave={() => {
            const body = document.querySelector('body');

            if (body !== null) enableBodyScroll(body);
          }}
          onWheel={e => handleCarousel(e)}
        >
          {hourly.list.map(forecast => {
            const newDate = new Date(forecast.dt * 1000);

            return (
              <div key={forecast.dt}>
                <span>
                  {`${newDate.getUTCMonth() + 1}.${newDate.getDate()}`}
                </span>

                <span>
                  {convertTimestampToHumanDate(forecast.dt).slice(-8, -3)}
                </span>

                <Image
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  alt={forecast.weather[0].description}
                  width={40}
                  height={40}
                  objectFit="cover"
                />

                <p>{forecast.main.temp.toFixed(0)}°</p>
              </div>
            );
          })}
        </Carousel>
      </AllDayForecast>
    </Container>
  );
};

export default CityInfo;
