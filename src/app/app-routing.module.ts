import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { AllWordsPageComponent } from './components/all-words-page/all-words-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstPageComponent } from './components/first-page/first-page.component';

const routes: Routes = [
    {path: '', component: FirstPageComponent},
    {path: 'main', component: MainPageComponent},
    {path: 'add', component: AddPageComponent},
    {path: 'all-words', component: AllWordsPageComponent},
    {path: 'edit', component: EditPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }