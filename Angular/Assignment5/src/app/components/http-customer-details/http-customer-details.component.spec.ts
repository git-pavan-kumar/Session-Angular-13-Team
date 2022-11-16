import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpCustomerDetailsComponent } from './http-customer-details.component';


describe('HttpCustomerDetailsComponent', () => {
  let component: HttpCustomerDetailsComponent;
  let fixture: ComponentFixture<HttpCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpCustomerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
