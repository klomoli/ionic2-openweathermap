import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OpenWeatherMapProvider } from '../providers/openweathermap-provider';

@Component({
  selector: 'openweathermap',
  styles: [`
    .content-box {
      background-color:#ddd;
      font-family: 'Open Sans', sans-serif;
      font-size:1.5rem;
    }
  `],
  template: 
    `<div class="content-box"> <p id="weatherDescription">Weather description: {{openweathermapProvider.weatherDescription}}</p>
      <p id="weatherGroup">Weather group: {{openweathermapProvider.weatherGroup}}</p>
      <p id="temperature">Current temperature: {{openweathermapProvider.temperature}}°</p>
      <p id="windSpeed">Wind speed: {{openweathermapProvider.windSpeed}} Km/h</p>
      <p id="humidity">Humidity: {{openweathermapProvider.humidity}}%</p>
      <p id="maxTemp">Max temperature: {{openweathermapProvider.minTemp}}°</p> 
      <p id="minTemp">Min temperature: {{openweathermapProvider.maxTemp}}°</p> 
      <p id="pressure">Atmospheric pressure: {{openweathermapProvider.athmosphericPressure}} hPa</p></div>`,
  providers: [OpenWeatherMapProvider]
  })

export class OpenWeatherMap {

  @Input('options') options: any;

  constructor(private openweathermapProvider: OpenWeatherMapProvider) {
    
  }

  ngAfterViewInit() {
    
    this.openweathermapProvider.load(this.options)
      .then(data => {
        this.openweathermapProvider.setWindSpeed(data.wind.speed);
        this.openweathermapProvider.setTemperature(data.main.temp);
        this.openweathermapProvider.setHumidity(data.main.humidity);
        this.openweathermapProvider.setMaxTemp(data.main.temp_max);
        this.openweathermapProvider.setMinTemp(data.main.temp_min);
        this.openweathermapProvider.setAthmosphericPressure(data.main.pressure);
        this.openweathermapProvider.setWeatherGroup(data.weather[0].main);
        this.openweathermapProvider.setWeatherDescription(data.weather[0].description);
      });
  }
}
