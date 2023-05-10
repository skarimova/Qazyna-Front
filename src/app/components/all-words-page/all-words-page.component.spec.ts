import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWordsPageComponent } from './all-words-page.component';

describe('AllWordsPageComponent', () => {
  let component: AllWordsPageComponent;
  let fixture: ComponentFixture<AllWordsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWordsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWordsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
