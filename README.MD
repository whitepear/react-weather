This application is live at: https://glacial-peak-55457.herokuapp.com/

A responsively-designed React.js application that allows users to view a five-day forecast for a provided location. Users can view weather details for individual days within that forecast, such as maximum expected temperatures, humidity levels, etc.

The application architecture is designed around stateful container components with various degrees of nesting. Stateless functional components reside within these container components. React Router handles routing within the application, which consumes JSON data from the OpenWeather API. Application styling is achieved through the use of modular Sass stylesheets.

Note: An API key is required in order to receive weather data from the OpenWeather API. The key found within this repository is no longer valid.