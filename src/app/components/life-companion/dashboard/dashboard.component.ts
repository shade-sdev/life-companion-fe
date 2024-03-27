import {Component, ViewChild} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {SideBarComponent} from "../../../shared/components/side-bar/side-bar.component";
import {NavBarComponent} from "../../../shared/components/nav-bar/nav-bar.component";
import {AlertService} from "../../../shared/services/alert.service";
import {SampleModalComponent} from "../../sample-modal/sample-modal.component";
import {DataTableGridComponent} from "../../../shared/components/data-table-grid/data-table-grid.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIcon,
    SideBarComponent,
    NavBarComponent,
    SampleModalComponent,
    DataTableGridComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  @ViewChild('sampleModal') sampleModalComponent: SampleModalComponent = new SampleModalComponent();

  constructor(private alertService: AlertService) {
  }

  alert() {
    this.alertService.success("Jazz", true);
  }

  modal() {
    setTimeout(() => {
      this.sampleModalComponent.openModal();
    }, 100)
  }

}
