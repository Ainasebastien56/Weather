import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { faSquareArrowUpRight, faChevronCircleLeft, faChevronCircleRight, faThLarge} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-world-forecast',
  templateUrl: './world-forecast.component.html',
  styleUrls: ['./world-forecast.component.sass']
})
export class WorldForecastComponent implements OnInit {
  faSquareArrowUpRight = faSquareArrowUpRight;
  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight

  countries: any[] =[];
  pageSize : number = 10;
  currentPage : number =1
  total:number = 0

  constructor(private countryService : CountryService){}



  ngOnInit(): void {
      this.getCountries(this.currentPage, this.pageSize);
      this.getTotalCountries();
    }

  getCountries(currentPage:number, pageSize:number){
    this.countryService.getCountries(currentPage, pageSize).subscribe((data)=>{
      this.countries = data;
   })
  }

  getTotalCountries(){
    this.countryService.getTotalCountries().subscribe((total)=>{
        this.total = total;
        console.log(this.total);
    })
  }


  onPreviousClick(){
    if(this.currentPage > 1){
       this.currentPage = this.currentPage - 1;
       this.getCountries(this.currentPage, this.pageSize);
    }
  }
  onNextClick(){
    if(this.currentPage < 25)
    this.currentPage = this.currentPage + 1
    this.getCountries(this.currentPage, this.pageSize)
  }

}


