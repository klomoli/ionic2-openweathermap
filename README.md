#An OpenWeatherMap Component for Ionic2

<img src="https://github.com/klomoli/ionic2-openweathermap/blob/master/1488494397_box.png">

An Angular2 component to visualize the **current weather data** for any location on Earth using **OpenWeatherMap**.


##Weather parameters in API respond
- Group of weather parameters (Rain, Snow, Extreme, etc)
- Weather description within the group
- Temperature
- Atmospheric pressure
- Humidity
- Minimum temperature at the moment
- Maximum temperature at the moment
- Wind speed

[API data information in OpenWeatherMap](http://openweathermap.org/current)

##Installation

Make sure you have Ionic and Angular installed.

```
npm install --save ionic-openweathermap
```

Add the `OpenWeatherMapComponent` in the declarations of your `app.module.ts`

```typescript
import { OpenWeatherMapModule } from 'ionic-openweathermap';
@NgModule({
  declarations: [
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    OpenWeatherMapModule
  ]
  ...
})
export class AppModule {}
```

The Weather Box use the OpenWeatherMapProvider

##Usage

Add the `openweathermap` property in your HTML .

```html
<openweathermap [options]="options"></openweathermap>
```

**`options`** is an array which should contains:

- `apikey`: apikey from openweathermap
- `city`: (the city name to get the data)
	- By city name
		- Parameters: **`name`**: *city name and country code divided by comma, use* **ISO 3166**  
	- By geographic coordinates:
		- Parameters: **`geo`** lat & lon coordinates of the location
	- By ZIP code
		- Parameters: **`zip`** zip code    
- `unitFormat`: (metric,imperial), by default is "metric"
- `lang`: parameter to get the output in your language, by default is `en`

Some examples:

```javascript
options = {
	apikey: "",
	city: {"name":["Granada"]},
	unitFormat: "metric",
	lang: "en"
}
```
```javascript
options2 = {
	apikey: "",
	city: {"geo":[{"lat":34,"lon":-23}]},
	unitFormat: "metric",
	lang: "es"
}
```
```javascript
options3 = {
	apikey: "",
	city: {"zip":[{"code":94040,"country":"us"}]},
	unitFormat: "metric",
	lang: "uk"
}
```

##Styles

The following styles are available to customize:

```css

#weatherDescription {

}

#weatherGroup {

}

#temperature {

}

#windSpeed {

}

#humidity {

}

#maxTemp {

}

#minTemp {

}
#pressure {

}

.content-box {

}

```


##Authors

 **Ismael Morales**

<a href="https://twitter.com/imailios">
  <img alt="Follow me on Twitter" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_twitter-32.png" height="32" width="32"/>
</a>

<a href="https://www.linkedin.com/in/ismael-morales-33342460/">
  <img alt="Find me on Linkedin" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_linked_in-32.png" height="32" width="32" />
</a>


##License

This project is licensed under the terms of the MIT license.
