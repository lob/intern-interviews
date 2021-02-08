import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicComponent } from './profile-pic.component';

describe('ProfilePicComponent', () => {
  let component: ProfilePicComponent;
  let fixture: ComponentFixture<ProfilePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
