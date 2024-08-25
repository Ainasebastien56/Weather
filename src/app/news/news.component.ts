import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  faArrowRight = faArrowRight
    news : any[] =[]
    constructor(private newService: NewsService){}

    ngOnInit(): void {
      this.newService.getNews().subscribe((news)=>{
          this.news = news
          console.log(this.news)

      })
    }
}
