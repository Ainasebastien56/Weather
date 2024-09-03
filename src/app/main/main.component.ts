import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  location : string = 'Antananarivo';

  onLocation(city:string){
      this.location = city;
  }

}
