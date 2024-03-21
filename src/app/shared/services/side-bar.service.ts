import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Sidebar} from "../models/sidebar-model";

@Injectable()
export class SideBarService {

  private url: string;

  public constructor(router: Router) {
    this.url = router?.url;
  }

  public getSideBarItems(): Sidebar {
    return {
      appIconUrl: 'https://cdn-icons-png.flaticon.com/128/9436/9436365.png',
      sidebars: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          active: this.url.includes('dashboard'),
          authorities: [],
          icon: 'heroSquares2x2Solid'
        }
      ]
    }
  }
}
