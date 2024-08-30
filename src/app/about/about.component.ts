import { Component } from '@angular/core';
import { faCloudSun, faMapLocation, faNewspaper,
        faLink, faUserCog, faCogs
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  faCloudSun = faCloudSun;
  faMapLocation = faMapLocation;
  faNewspaper = faNewspaper;
  faLink = faLink;
  faUserCog = faUserCog;
  faCogs = faCogs;



}
