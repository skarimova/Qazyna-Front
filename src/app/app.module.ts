import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { AllWordsPageComponent } from './components/all-words-page/all-words-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { AppRoutingModule } from './app-routing.module';
import { InformationWindowComponent } from './components/information-window/information-window.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    MainPageComponent,
    AddPageComponent,
    AllWordsPageComponent,
    EditPageComponent,
    InformationWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
