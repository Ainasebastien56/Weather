import { Component, OnInit , AfterViewInit} from '@angular/core';
import * as L from 'leaflet'
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements AfterViewInit {
  private map!:L.Map;

  constructor(private weatherService : WeatherService){}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void{
    this.map = L.map('map').setView([-18.8792, 47.5079],  10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom:19,
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);


    this.map.on('click',(event: L.LeafletMouseEvent)=>{
      const lat = event.latlng.lat;
      const lon = event.latlng.lng;
      this.weatherService.getWeatherByCoordinates(lat,lon).subscribe((data)=>{
        console.log(data)
          this.addWeatherMarker(lat, lon, data);
      })
    })
  }

  private addWeatherMarker(lat:number, lon:number, weatherData : any): void{
    L.marker([lat, lon])
    .addTo(this.map)
    .bindPopup(`<b>Location:</b> ${weatherData.name} <br><b>Weather:</b> ${weatherData.weather[0].description}<br><b>Temperature:</b> ${weatherData.main.temp}°C`)
    .openPopup();
  }
}
