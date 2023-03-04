import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ReleaseFormComponent } from '../release-form/release-form.component';
import { ReleaseLogsComponent } from '../release-logs/release-logs.component';

import { VersionControlComponent } from './version-control.component';

describe('VersionControlComponent', () => {
  let component: VersionControlComponent;
  let fixture: ComponentFixture<VersionControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionControlComponent,     ReleaseLogsComponent,
        ReleaseFormComponent ],
        imports: [ReactiveFormsModule]  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
