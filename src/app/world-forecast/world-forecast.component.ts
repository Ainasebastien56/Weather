import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { faSquareArrowUpRight, faChevronCircleLeft
  , faChevronCircleRight, faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-world-forecast',
  templateUrl: './world-forecast.component.html',
  styleUrls: ['./world-forecast.component.sass']
})
export class WorldForecastComponent implements OnInit {
  faSquareArrowUpRight = faSquareArrowUpRight;
  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;

  countries: any[] =[];
  selectedCountryWeather : any;
  pageSize : number = 10;
  currentPage : number =1;
  total:number = 0;
  totalPage : number =0;
  isOpen: boolean = false

  constructor(private countryService : CountryService,
              private weatherService : WeatherService
  ){}



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
        this.totalPage = this.total / 10;


    });
  }

onPreviousClick(){
  if(this.currentPage < this.totalPage){
    this.currentPage++
    this.getCountries(this.currentPage, this.pageSize)
  }
}

onnNextClick(){
  if(this.currentPage > 1){
    this.currentPage--
    this.getCountries(this.currentPage, this.pageSize)
  }
}
openModal(){
  this.isOpen = true;
}

closeModal(){
  this.isOpen = false;
}

  onClickCountry(contry:string){
    this.weatherService.getWeatherByCountry(contry).subscribe((weather)=>{
      this.selectedCountryWeather = weather;
      this.openModal()
      console.log(this.selectedCountryWeather)
    })
    this.openModal()
  }



}


