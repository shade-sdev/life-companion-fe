import {Component, OnInit, ViewChild} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {SideBarComponent} from "../../../shared/components/sidebar/side-bar/side-bar.component";
import {NavBarComponent} from "../../../shared/components/navbar/nav-bar/nav-bar.component";
import {AlertService} from "../../../shared/services/alert.service";
import {SampleModalComponent} from "../../sample-modal/sample-modal.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIcon,
    SideBarComponent,
    NavBarComponent,
    SampleModalComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  @ViewChild('sampleModal') sampleModalComponent: SampleModalComponent = new SampleModalComponent();

  constructor(private alertService: AlertService) {
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sampleModalComponent.openModal();
    // }, 100)
    // this.alertService.success("Jazz", true);
  }

}
