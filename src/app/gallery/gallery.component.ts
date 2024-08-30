import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {
  images :any[] =[];

  constructor(private galleryService: GalleryService){}

  ngOnInit(): void {
    this.images = this.galleryService.getImages();
  }

}
