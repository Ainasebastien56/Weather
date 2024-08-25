import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '2a45cfd87b3a4fefb32d7d651fe1477c';
  private apiUrl = 'https://newsapi.org/v2/everything';

  constructor(private httpClient : HttpClient) { }

  getNews():Observable<any>{
    const query ='weather OR climate OR storm OR rain OR temperature';
    return this.httpClient.get<any>(`${this.apiUrl}?q=${query}&pageSize=10&apikey=${this.apiKey}`)
  }
}
