import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationProductComponent } from './navigation-product.component';

describe('NavigationProductComponent', () => {
  let component: NavigationProductComponent;
  let fixture: ComponentFixture<NavigationProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
