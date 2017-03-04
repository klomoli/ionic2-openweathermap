import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 


@Injectable()
export class OpenWeatherMapProvider {
  
  private data: any;
  private apiURl: string = "http://api.openweathermap.org/data/2.5/weather?";

  public windSpeed: number;
  public temperature: number;
  public humidity: number;
  public minTemp: number;
  public maxTemp: number;
  public athmosphericPressure: number;
  public weatherGroup: string;
  public weatherDescription: string;

  city: any = "";
  unitFormat: string = "metric";
  lang: string = "en";

  constructor(private http: Http) {
    this.data = null; 
  }
 
  load(options) {
    
  	this.apiURl = this.formAPIUrl(options);

    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.apiURl)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  formCityQuery(cityParams) { 
    var query: string;
    if(cityParams.hasOwnProperty('name')) {
      query = "q="+cityParams['name'][0];
    }
    if(cityParams.hasOwnProperty('geo')) {
      var coordinates = cityParams['geo'];
      if(coordinates[0]) {
        query = "lat="+coordinates[0]['lat']+'&lon='+coordinates[0]['lon'];
      }
    }
    if(cityParams.hasOwnProperty('zip')) {
      var zip = cityParams['zip'];
      if(zip[0]) {
        query = "zip="+zip[0]['code']+','+zip[0]['country'];
      }
    }
    return query;
  }

  formAPIUrl(options) {
    var paramsCity: string;
    var url: string; 

    if(options.unitFormat) {
      this.unitFormat = options.unitFormat;
    }
    if(options.lang) {
      this.lang = options.lang;
    }
    if(options.city) {
      paramsCity = this.formCityQuery(options.city);
    }
    url = this.apiURl+paramsCity+'&units='+options.unitFormat+'&lang='+this.lang+'&appid='+options.apikey;
    return url;
  }

  setWindSpeed(windSpeed) {
  	this.windSpeed = windSpeed; 
  }

  setTemperature(temperature) {
  	this.temperature = temperature; 
  }

  setHumidity(humidity) {
    this.humidity = humidity; 
  }

  setMinTemp(minTemp) {
    this.minTemp = minTemp; 
  }

  setMaxTemp(maxTemp) {
    this.maxTemp = maxTemp; 
  }

  setAthmosphericPressure(athmosphericPressure) {
    this.athmosphericPressure = athmosphericPressure;
  }

  setWeatherGroup(weatherGroup) {
    this.weatherGroup = weatherGroup;
  }

  setWeatherDescription(weatherDescription) {
    this.weatherDescription = weatherDescription;
  }
}