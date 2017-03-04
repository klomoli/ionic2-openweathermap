import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OpenWeatherMapProvider } from '../providers/openweathermap-provider';

@Component({
  selector: 'openweathermap',
  templateUrl: 'openweathermap.html',
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
