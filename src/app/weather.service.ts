import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '984a86c262154b129a9181358242108'
  private apiUrl = 'http://api.weatherapi.com/v1/forecast.json'

  constructor(private httpCliet: HttpClient) { }

  getCurrentWeather(city:string):Observable<any>{
      return this.httpCliet.get<any>(`${this.apiUrl}?key=${this.apiKey}&q=${city}&days=1`)
  }
}
