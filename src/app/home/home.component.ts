import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() location = new EventEmitter<string>();

  faArrowAltCircleRight = faArrowAltCircleRight ;


  constructor(private weatherService : WeatherService ){}

  ngOnInit(): void {
    this.getCurrentWeather(this.city);

  }

  getCurrentWeather(city:string){
    this.weatherService.getWeather(city).subscribe(
      data=>{
        this.weather = data;
      }
    )
  }

  onSearch(city: string){
    this.location.emit(city);
      this.getCurrentWeather(city)

  }
}
