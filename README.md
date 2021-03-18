<h1 align="center">Weather Forecast</h1>

![Demo](https://github.com/FelipeSimis/weather-forecast-next/blob/assets/demo.gif)

## Prerequisites

- **NodeJS**: If you don't have it, just download it [here](https://nodejs.org/en/download/)
- **Yarn**: If you don't have it, just download it [here](https://classic.yarnpkg.com/lang/en/)

## Techs

- [x] [NextJS](https://nextjs.org/)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [Styled-Components](https://styled-components.com/)
- [x] [Axios](https://github.com/axios/axios)
- [x] [Unform](https://unform.dev/)
- [x] [React-Icons](https://react-icons.github.io/react-icons/)
- [x] [React-Loader-Spinner](https://www.npmjs.com/package/react-loader-spinner)
- [x] [Open-Weather-Map-API](https://openweathermap.org/api)

## Getting Started

**Generate a API KEY**
Access [OpenWeatherMap](https://home.openweathermap.org/api_keys) and sign in to your account, after that generate a new API key

**Clone the project and access the folder**

```bash
  $ git clone https://github.com/FelipeSimis/weather-forecast-next.git

  # After cloning the project, run the following command
  $ cd weather-app-next

  # Install the dependencies
  $ yarn

  # Open the project in Visual Studio Code
  $ code .

  # Rename the .env.example file to .env and add the API key you got from OpenWeatherMap
  NEXT_PUBLIC_OPEN_WEATHER_APIKEY={YOUR API KEY GOES HERE, WITHOUT THE BRACKETS}

  # To finish, run the project
  $ yarn dev
```

Project UI by https://github.com/rawfour/weather-app-react
