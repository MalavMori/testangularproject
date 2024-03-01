import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

if (environment.prodmode) {
  enableProdMode()
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
