import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '984a86c262154b129a9181358242108';
  private apiKey2= 'd6a3c0062595cef597a06bfd243c62a7';
  private apiUrl = 'https://api.weatherapi.com/v1';
  private apiUrl2 = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city:string):Observable<any>{
      return this.httpClient.get<any>(`${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${city}&days=4`);
  }

  getWeatherByCountry(country: string):Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${country}`);
  }

  getWeatherByCoordinates(lat: number, lon:number):Observable<any>{
    return this.httpClient.get(`${this.apiUrl2}?lat=${lat}&lon=${lon}&appid=${this.apiKey2}&units=metric`);
  }
}
