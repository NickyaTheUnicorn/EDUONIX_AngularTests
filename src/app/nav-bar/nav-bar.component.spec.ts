import { Location } from '@angular/common';
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { SigninFormComponent } from '../signin-form/signin-form.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { routes } from '../app-routing.module';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [ NavBarComponent, SignupFormComponent, SigninFormComponent, DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('Should work wit fakeAsync', fakeAsync(() => {
    const promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });

    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be signup form', fakeAsync(() => {
    router.navigate(['/register']).then(() => {
      expect(location.path()).toBe('/register');
    });
    tick();
  }));

  it('should be signin form', fakeAsync(() => {
    router.navigate(['/login']).then(() => {
      expect(location.path()).toBe('/login');
    });
    tick();
  }));

  it('should be dashboard', fakeAsync(() => {
    router.navigate(['/dashboard']).then(() => {
      expect(location.path()).toBe('/dashboard');
    });
    tick();
  }));
});
