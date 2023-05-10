import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationWindowComponent } from './information-window.component';

describe('InformationWindowComponent', () => {
  let component: InformationWindowComponent;
  let fixture: ComponentFixture<InformationWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
