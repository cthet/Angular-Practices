import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReleaseFormComponent } from './components/release-form/release-form.component';
import { ReleaseLogsComponent } from './components/release-logs/release-logs.component';
import { VersionControlComponent } from './components/version-control/version-control.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        VersionControlComponent,
        ReleaseLogsComponent,
        ReleaseFormComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing-reactive-forms'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing-reactive-forms');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span')?.textContent).toContain('testing-reactive-forms');
  });
});
