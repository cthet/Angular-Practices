import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReleaseLog } from '../../classes/release-log';
import { Apps } from '../../constants/apps';
import { REGEXES } from '../../constants/regexes';

@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.scss']
})
export class ReleaseFormComponent implements OnInit {
  @Output() newReleaseLog = new EventEmitter<ReleaseLog>();
  apps = Object.values(Apps);
  versionInputRegex = REGEXES.SEMANTIC_VERSION;
  releaseForm = new FormGroup({
    app: new FormControl('', Validators.required),
    version: new FormControl('', [
      Validators.required,
      Validators.pattern(this.versionInputRegex)
    ]),
  })
  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(form: FormGroup): void {
    const { app, version } = form.value;
    console.log({app, version});
    const newLog: ReleaseLog = new ReleaseLog(app, version)
    this.newReleaseLog.emit(newLog);

  }


}
