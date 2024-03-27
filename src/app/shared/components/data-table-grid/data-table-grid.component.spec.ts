import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DataTableGridComponent} from './data-table-grid.component';

describe('DataTableGridComponent', () => {
  let component: DataTableGridComponent;
  let fixture: ComponentFixture<DataTableGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTableGridComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataTableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
