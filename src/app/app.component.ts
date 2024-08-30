import { Component , OnInit} from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit  {
  title = 'weater-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
