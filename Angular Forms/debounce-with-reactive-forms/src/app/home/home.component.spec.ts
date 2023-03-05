import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
        imports: [HttpClientModule,ReactiveFormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not send an httprequest before the debounceTime of 300ms', fakeAsync(async () => {
    spyOn(component, 'searchUsers');
    component.searchForm.get('username')?.setValue('iri');
    tick(component.searchDebounceTime - 10);
    //less than desired debounce time
    expect (component.searchUsers).not.toHaveBeenCalled();
    discardPeriodicTasks();
  }));

  it('should send an http request after the debounceTime of 300ms', fakeAsync(async () => {
    spyOn(component, 'searchUsers');
    component.searchForm.get('username')?.setValue('iri');
    tick(component.searchDebounceTime + 10); //more than desired debounce time
    expect(component.searchUsers).toHaveBeenCalled();
    discardPeriodicTasks();
  }))
});
