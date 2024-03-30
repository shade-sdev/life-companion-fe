import {Component, ViewChild} from '@angular/core';
import {DataTableGridComponent} from "../../../shared/components/data-table-grid/data-table-grid.component";
import {AgeGroup, Gender, Person} from "../../../shared/models/person";
import {ALL, Header, SearchType} from "../../../shared/models/table-model";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    DataTableGridComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  @ViewChild("userTableGrid") userTableGrid: DataTableGridComponent = new DataTableGridComponent();

  public personChange(persons: Array<Person>) {
    console.log(persons);
  }

  headers: Array<Header> = [
    {
      id: "profilePicture",
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
        searchType: SearchType.TEXT
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

  persons: Array<Person> = [
    {
      firstName: "John",
      lastName: "Doe",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=JohnDoe",
      ageGroup: AgeGroup.CHILD
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=JaneDoe",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=AliceSmith",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=BobJohnson",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Emily",
      lastName: "Brown",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=EmilyBrown",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Michael",
      lastName: "Wilson",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=MichaelWilson",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Jessica",
      lastName: "Taylor",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=JessicaTaylor",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "William",
      lastName: "Martinez",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=WilliamMartinez",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Sophia",
      lastName: "Anderson",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=SophiaAnderson",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Daniel",
      lastName: "Thomas",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=DanielThomas",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Olivia",
      lastName: "Hernandez",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=OliviaHernandez",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Matthew",
      lastName: "Young",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=MatthewYoung",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Ava",
      lastName: "King",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=AvaKing",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "David",
      lastName: "Lee",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=DavidLee",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Emma",
      lastName: "Gonzalez",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=EmmaGonzalez",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Liam",
      lastName: "Rodriguez",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=LiamRodriguez",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Isabella",
      lastName: "Nelson",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=IsabellaNelson",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "James",
      lastName: "Perez",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=JamesPerez",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Mia",
      lastName: "Ramirez",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=MiaRamirez",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Benjamin",
      lastName: "Evans",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=BenjaminEvans",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Charlotte",
      lastName: "Stewart",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=CharlotteStewart",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Ethan",
      lastName: "Cook",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=EthanCook",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Amelia",
      lastName: "Morris",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=AmeliaMorris",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Alexander",
      lastName: "Rogers",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=AlexanderRogers",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Evelyn",
      lastName: "Reed",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=EvelynReed",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Daniel",
      lastName: "Cook",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=DanielCook",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Abigail",
      lastName: "Collins",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=AbigailCollins",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Matthew",
      lastName: "Bell",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=MatthewBell",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Emily",
      lastName: "Murphy",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=EmilyMurphy",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Christopher",
      lastName: "Ward",
      gender: Gender.MALE,
      profilePicture: "https://ui-avatars.com/api/?name=ChristopherWard",
      ageGroup: AgeGroup.ADULT
    },
    {
      firstName: "Harper",
      lastName: "Peterson",
      gender: Gender.FEMALE,
      profilePicture: "https://ui-avatars.com/api/?name=HarperPeterson",
      ageGroup: AgeGroup.ADULT
    }
  ];


}
