export interface WeatherMainData {
  weather: Array<{
    description: string;
    icon: string;
  }>;
  main: {
    temp: 73.94;
    feels_like: 73.13;
    temp_min: 73;
    temp_max: 75;
    humidity: 53;
  };
  wind: {
    speed: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: string;
    sunset: string;
  };
  name: string;
}
