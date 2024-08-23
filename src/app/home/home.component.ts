import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  city:string = 'Antananarivo';
  weather:any;
  faArrowAltCircleRight = faArrowAltCircleRight ;

  constructor(private weatherService : WeatherService ){}

  ngOnInit(): void {
    this.weatherService.getCurrentWeather(this.city).subscribe(
      data=>{
        this.weather = data
        console.log(this.weather);

      }
    )
  }
}
