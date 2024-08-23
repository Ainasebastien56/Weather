import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all';
  private countries:any[] =[]

  constructor(private http: HttpClient) { }

  loadCountries():Observable<any[]>{
    if(this.countries.length===0){
      return this.http.get<any[]>(this.apiUrl).pipe(
        map(data =>{
          this.countries = data
          return this.countries
        })
      )
    }else{
      return of(this.countries);
    }
  }
  getCountries(page: number, pageSize:number):Observable<any>{
    return this.loadCountries().pipe(
      map(countries =>{
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        return countries.slice(start,end);
      })
    )
  }

    getTotalCountries(): Observable<number> {
      return this.loadCountries().pipe(
        map(countries => countries.length)
      );
    }
}
