import {Component, OnInit, ViewChild} from '@angular/core';
import {DataTableGridComponent} from "../../../../shared/components/data-table-grid/data-table-grid.component";
import {ALL, Header, SearchType} from "../../../../shared/models/common/table-model";
import {PersonSearchCriteria} from "../../../../shared/models/person/person-search-criteria";
import {AgeGroup, Gender, Person} from "../../../../shared/models/person/person";
import {PersonServiceService} from "../../services/person-service.service";


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    DataTableGridComponent
  ],
  providers: [PersonServiceService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  @ViewChild("userTableGrid") userTableGrid: DataTableGridComponent = new DataTableGridComponent();

  personSearchCriteria = new PersonSearchCriteria();

  persons: Array<Person> = [];

  constructor(private personService: PersonServiceService) {
  }

  ngOnInit(): void {
    this.personService.searchPersons(this.personService.objectToHttpParams(this.personSearchCriteria))
      .subscribe({
        next: value => {
          this.persons = value.elements;
        }
      })
  }

  public onFilter() {
    this.personService.searchPersons(this.personService.objectToHttpParams(this.personSearchCriteria))
      .subscribe({
        next: value => {
          this.persons = value.elements;
        }
      })
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
      name: "FirstName",
      shown: true,
      filter: {
        searchable: true,
        searchType: SearchType.TEXT,
      }
    },
    {
      id: "lastName",
      name: "LastName",
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
