import 'jest-preset-angular';
import './jest-global-mocks';

import 'zone.js';
import 'zone.js/dist/proxy.js';
import 'zone.js/testing';
import 'zone.js/dist/zone'
import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());