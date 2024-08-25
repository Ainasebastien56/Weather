import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';

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
      {path:'about', component:AboutComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
