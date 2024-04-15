import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLinkComponent } from './course-link.component';

describe('CourseLinkComponent', () => {
  let component: CourseLinkComponent;
  let fixture: ComponentFixture<CourseLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
