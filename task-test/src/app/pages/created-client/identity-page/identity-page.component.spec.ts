import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityPageComponent } from './identity-page.component';

describe('IdentityPageComponent', () => {
  let component: IdentityPageComponent;
  let fixture: ComponentFixture<IdentityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentityPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
