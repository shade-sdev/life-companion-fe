import {Component, ViewChild} from '@angular/core';
import {DataTableGridComponent} from "../../../../shared/components/data-table-grid/data-table-grid.component";
import {ALL, Header, SearchType} from "../../../../shared/models/common/table-model";
import {PersonSearchCriteria} from "../../../../shared/models/person/person-search-criteria";
import {AgeGroup, Gender} from "../../../../shared/models/person/person";
import {PersonService} from "../../services/person.service";
import {Observable} from "rxjs";
import {PersonSearchResult} from "../../../../shared/models/person/person-search-result";


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    DataTableGridComponent
  ],
  providers: [PersonService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  @ViewChild("userTableGrid") userTableGrid: DataTableGridComponent = new DataTableGridComponent();

  public personSearchCriteria = new PersonSearchCriteria();

  constructor(private personService: PersonService) {
    this.callService = this.callService.bind(this);
  }

  public callService(criteria: PersonSearchCriteria): Observable<PersonSearchResult> {
    return this.personService.searchPersons(criteria);
  }

  headers: Array<Header> = [
    {
      id: "picture",
      name: "Picture",
      shown: true,
      filter: {
        searchable: false,
      }
    },
    {
      id: "firstName",
      name: "First name",
      shown: true,
      filter: {
        searchable: true,
        searchType: SearchType.TEXT,
      }
    },
    {
      id: "lastName",
      name: "Last name",
      shown: true,
      filter: {
        searchable: true,
        searchType: SearchType.TEXT
      }
    },
    {
      id: "gender",
      name: "Gender",
      shown: true,
      filter: {
        searchable: true,
        searchType: SearchType.ENUM,
        translateKey: 'modules.person.gender.',
        enum: [...Object.values(ALL), ...Object.values(Gender)]
      }
    },
    {
      id: "ageGroup",
      name: "Age Group",
      shown: true,
      filter: {
        searchable: true,
        searchType: SearchType.ENUM,
        translateKey: 'modules.person.ageGroup.',
        enum: [...Object.values(ALL), ...Object.values(AgeGroup)]
      }
    }
  ]

}
