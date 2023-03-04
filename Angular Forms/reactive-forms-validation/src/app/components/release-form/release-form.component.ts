import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReleaseLog } from 'src/app/classes/release-log';
import { Apps } from 'src/app/constants/apps';
import { REGEXES } from 'src/app/constants/regexes';

@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.scss'],
})
export class ReleaseFormComponent implements OnInit {
  @Output() newReleaselog = new EventEmitter<ReleaseLog>();

  apps = Object.values(Apps);
  versionInputRegex = REGEXES.SEMANTIC_VERSION;
  releaseForm = new FormGroup({
    app: new FormControl('', [Validators.required]),
    version: new FormControl('', [Validators.required,Validators.pattern(this.versionInputRegex)]),
  })

  constructor() {}

  ngOnInit(): void {}

  formSubmit(form: FormGroup){
    const {app, version} = form.value;
    console.log({app, version});
    const newLog: ReleaseLog = new ReleaseLog(app, version)
    this.newReleaselog.emit(newLog);
  }
}
