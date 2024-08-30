import { Component, OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.sass']
})
export class WeeklyForecastComponent implements OnInit {
  weeklyForecast : any[] = [];
  city : string ='Antananarivo'
  constructor(private weatherService : WeatherService ){}

  ngOnInit(): void {
    this.getWeeklyForecast()


  }

  getWeeklyForecast(){
      this.weatherService.getWeather(this.city).subscribe((data:any)=>{
        this.weeklyForecast = data.forecast.forecastday.map((day:any)=>{
          return{
            date: new Date(day.date),
            dayOfWeek: new Date(day.date).toLocaleDateString('en-US',{weekday:'short'}),
            temp: day.day.avgtemp_c,
            icon:day.day.condition.icon,
          }
        });

        this.weeklyForecast.sort((a,b)=>{
          const daysOfWeekOrder = ['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          return daysOfWeekOrder.indexOf(a.dayOfWeek) - daysOfWeekOrder.indexOf(b.dayOfWeek);
        })
      });



  }


}
