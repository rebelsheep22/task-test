import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedClientDisplayComponent } from './created-client-display.component';

describe('CreatedClientDisplayComponent', () => {
  let component: CreatedClientDisplayComponent;
  let fixture: ComponentFixture<CreatedClientDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedClientDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedClientDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
