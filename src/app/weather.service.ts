import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  backendUrl = 'https://weather-server-r8a2.onrender.com';


  constructor(private httpClient: HttpClient) { }

  getWeather(city:string):Observable<any>{
      let params = new HttpParams()
      .set('city', city)
      .set('days',7)
      return this.httpClient.get<any>(`${this.backendUrl}/weather`, {params})
  }

  getWeatherByCoordinates(lat: number, lon:number):Observable<any>{
    let params = new HttpParams()
        .set('lat', lat)
        .set('lon',lon);

    return this.httpClient.get(`${this.backendUrl}/weather_map`,{params});
  }
}
