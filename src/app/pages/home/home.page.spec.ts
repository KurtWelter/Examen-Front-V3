import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    imports: [AppRoutingModule];
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to see all page on register', () => {
    spyOn(router, 'navigate');

    //component.register();
    // I delete the botton to se all, I expect to the last class go down
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
