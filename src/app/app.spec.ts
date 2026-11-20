import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router'; 

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      // decimos al test que provea el enrutador, ya que el componente usa <router-outlet>
      providers: [provideRouter([])] 
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
     expect(app).toBeTruthy();
  });

});