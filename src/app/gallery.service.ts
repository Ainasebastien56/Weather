import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private images =[

    {
      url:'assets/images/sunny.jpg',
      description:"Clear sky with bright sunshine. Perfect for an outdoor day."
    },
    {
      url:'assets/images/cloudy.jpg',
      description:"Overcast sky with grey clouds. Cool weather, idea for a walk."
    },
    {
      url:'assets/images/rainy.jpg',
      description:"Light rain with gentle drops falling. Ideals weather to stay indoors with a cup of tea."
    },
    {
      url:'assets/images/stormy.jpg',
      description:"Approaching storm with lightning illuminating the sky. Caution is advised."
    },
    {
      url:'assets/images/snow.jpg',
      description:"Snow-covered landscape with a thick blanker of snow. Perfect for snowball fight."
    },
    {
      url:'assets/images/windy.jpg',
      description:"Strong winds with leaves swirling in the air. Be prepared for sudden gusts."
    },
    {
      url:'assets/images/hail.jpg',
      description:"Hail striking the ground forcefully. An impressive sigh but best viewed from indoors."
    },
    {
      url:'assets/images/foggy.jpg',
      description:"Thick fog enveloping the city, reducing visibility. Drive carefully."
    }
  ]

  getImages(){
    return this.images;
  }

}
