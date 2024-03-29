import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckedContextMenuComponent} from './checked-context-menu.component';

describe('CheckedContextMenuComponent', () => {
  let component: CheckedContextMenuComponent;
  let fixture: ComponentFixture<CheckedContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckedContextMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckedContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
