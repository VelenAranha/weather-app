import { Component, OnInit } from '@angular/core'
import { map, Observable } from 'rxjs'
// import { first} from 'lodash'
import { Weather, WeatherService } from './weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-report'

  cityWeather$: Observable<Weather> | null = null

  constructor(private weatherApi: WeatherService) {}

  ngOnInit(): void {}

  searchWeatherData(city: string) {
    this.cityWeather$ = this.weatherApi.getWeatherReport(city).pipe(
      map((data) => {
        return data.weather[0]
      })
    )
  }
}
