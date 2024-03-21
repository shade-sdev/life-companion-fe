import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCompanionComponent } from './life-companion.component';

describe('LifeCompanionComponent', () => {
  let component: LifeCompanionComponent;
  let fixture: ComponentFixture<LifeCompanionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCompanionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCompanionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
