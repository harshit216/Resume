import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NewTCCComponent } from './new-tcc/new-tcc.component';
import { VersionOneComponent } from './version-one/version-one.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';

@NgModule({
  
  declarations: [ 
    AppComponent,
    NewTCCComponent,
    VersionOneComponent,
    ScreenshotsComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
