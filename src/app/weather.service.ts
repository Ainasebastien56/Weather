import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '984a86c262154b129a9181358242108'
  private apiUrl = 'https://api.weatherapi.com/v1'

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city:string):Observable<any>{
      return this.httpClient.get<any>(`${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${city}&days=4`);
  }

  getWeatherByCounry(country: string):Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${country}`);
  }
}
