import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxLeafletModule } from 'ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WorldForecastComponent } from './world-forecast/world-forecast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsComponent } from './news/news.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { WeeklyForecastComponent } from './weekly-forecast/weekly-forecast.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    WorldForecastComponent,
    NewsComponent,
    MainComponent,
    MapComponent,
    AboutComponent,
    WeeklyForecastComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxLeafletModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
