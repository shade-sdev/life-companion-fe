import {Injectable, signal, WritableSignal} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {Sidebar} from "../models/sidebar-model";
import {filter} from "rxjs";

@Injectable()
export class SideBarService {

  private currentUrl: string;

  public sideBar: WritableSignal<Sidebar>;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    this.sideBar = signal(this.getSideBarItems());

    this.updateCurrentUrl();
  }

  private getSideBarItems(): Sidebar {
    return {
      appIconUrl: 'https://cdn-icons-png.flaticon.com/128/9436/9436365.png',
      sidebars: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          active: this.currentUrl.includes('dashboard'),
          authorities: [],
          icon: 'heroSquares2x2Solid'
        },
        {
          title: 'Setting',
          url: '/setting',
          active: this.currentUrl.includes('setting'),
          authorities: [],
          icon: 'heroSquares2x2Solid'
        }
      ]
    }
  }

  private updateCurrentUrl() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentUrl = (event as NavigationEnd).urlAfterRedirects;
        this.sideBar.update(() => this.getSideBarItems());
      });
  }

}
