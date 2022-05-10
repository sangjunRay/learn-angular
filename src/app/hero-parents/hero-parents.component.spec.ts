import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParentsComponent } from './hero-parents.component';

describe('HeroParentsComponent', () => {
  let component: HeroParentsComponent;
  let fixture: ComponentFixture<HeroParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroParentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
