import "core-js";
import "reflect-metadata";
import "zone.js/dist/zone.js"

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './Angular/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);