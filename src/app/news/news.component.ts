import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  faArrowRight = faArrowRight
    news : any[] = [];

    private backendUrl = 'https://weather-server-r8a2.onrender.com/news'
    constructor(private newService: NewsService, private http : HttpClient){}

    ngOnInit(): void {
      console.log(localStorage.getItem('page'))
      this.getNews()
    }

    getNews(){
      this.http.get(this.backendUrl).subscribe((data:any)=>{
        this.news = data.articles

      })
    }

}
