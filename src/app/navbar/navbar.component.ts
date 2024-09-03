import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  faBars = faBars;
  active:string = "home";
  isMenuOpen:boolean = false;

ngOnInit(): void {
  this.active = window.location.pathname;
}

onActive(page: string){
  localStorage.setItem('page', page);
}

toogleMenu(){
  this.isMenuOpen = !this.isMenuOpen;
}

}
