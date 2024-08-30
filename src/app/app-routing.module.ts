import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes =[
  {path:'', component:AppComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch: 'full',
      },
      {
        path:'home',
        component:MainComponent
      },
      {path:'news', component:NewsComponent},
      {path:'about', component:AboutComponent},
      {path:'picture', component:GalleryComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
