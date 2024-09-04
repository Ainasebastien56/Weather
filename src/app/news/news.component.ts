import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  faArrowRight = faArrowRight
    isLoading:boolean = false;
    news : any[] = [];

    private backendUrl = 'https://weather-server-r8a2.onrender.com/news'
    constructor(private http : HttpClient){}

    ngOnInit(): void {
      this.getNews()
    }

    getNews(){
      this.isLoading = true;
      this.http.get(this.backendUrl).subscribe((data:any)=>{
        this.news = data.articles;
        this.isLoading = false;

      })
    }

}
