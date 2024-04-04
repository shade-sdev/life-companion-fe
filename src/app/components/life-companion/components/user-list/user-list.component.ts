import {Component, OnInit, ViewChild} from '@angular/core';
import {DataTableGridComponent} from "../../../../shared/components/data-table-grid/data-table-grid.component";
import {ALL, Header, SearchType} from "../../../../shared/models/common/table-model";
import {PersonSearchCriteria} from "../../../../shared/models/person/person-search-criteria";
import {AgeGroup, Gender, Person} from "../../../../shared/models/person/person";
import {PersonService} from "../../services/person.service";
import {PageNavigate} from "../../../../shared/models/common/pageable";


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
export class UserListComponent implements OnInit {

  @ViewChild("userTableGrid") userTableGrid: DataTableGridComponent = new DataTableGridComponent();

  public personSearchCriteria = new PersonSearchCriteria();

  public persons: Array<Person> = [];

  public maxPageNumber: number = 0;

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
    this.callService({
      pageNumber: 0,
      pageSize: 10
    });
  }

  public onFilter(pageNavigate: PageNavigate) {
    this.persons = [];
    this.callService(pageNavigate);
  }

  public callService(pageNavigate: PageNavigate) {
    const updatedCriteria = {
      ...this.personSearchCriteria,
      pageNumber: pageNavigate.pageNumber,
      pageSize: pageNavigate.pageSize
    };
    this.personService.searchPersons(updatedCriteria)
      .subscribe({
        next: value => {
          this.persons = [...this.persons, ...value.elements];
          this.maxPageNumber = value.totalPages;
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
