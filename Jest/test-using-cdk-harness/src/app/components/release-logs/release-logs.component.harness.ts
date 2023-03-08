import { ComponentHarness } from '@angular/cdk/testing';
import { Apps } from 'src/app/constants/apps';
import 'zone.js/dist/proxy.js';
import 'zone.js';
import 'zone.js/testing';
import 'zone.js/dist/zone'

export class ReleaseLogsComponentHarness extends ComponentHarness {
  static hostSelector = 'app-release-logs';
  protected getLogsElements = this.locatorForAll('.logs__item');

  async getLogsLength() {
    const logsElements = await this.getLogsElements();
    return logsElements.length;
  }

  async getLatestLog() {
    const logsElements = await this.getLogsElements();
    return await logsElements[0].text();
  }

  async validateLatestLog(version: string, app: Apps) {
    const latestLogText = await this.getLatestLog();
    return (
      latestLogText.trim() === `Version ${version} released for app ${app}`
    );
  }
}
