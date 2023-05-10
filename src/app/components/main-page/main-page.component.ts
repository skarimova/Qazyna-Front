import { Component, OnInit, ViewChild } from '@angular/core';
import { Translation } from 'src/app/models/translation.model';
import { LogicService } from 'src/app/services/logic.service';
import { DataService } from 'src/app/services/data.service';
import { InformationWindowComponent } from '../information-window/information-window.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @ViewChild(InformationWindowComponent) view!: InformationWindowComponent;

  translation: Translation = {
    id: '',
    word_kk: '',
    word_ru: '',
    meaning_kk: '',
    meaning_ru: '',
    meaning: ''
  };

  loading = false;

  save(): void {
    this.loading = true;
  }

  ngOnInit() { }

  async searchTranslation(): Promise<void> {
    let searchText = document.getElementById('search-word') as HTMLInputElement | null;
    let languageTypes = document.getElementById('language-type') as HTMLInputElement | null;
    if(searchText?.value == "") return;
    //TODO: check the english letters
    let payload = {
      text: searchText?.value,
      from: languageTypes?.value,
      to: languageTypes?.value == 'kk' ? 'ru' : 'kk' 
    };

    (await this.logicService.getTranslation(payload)).subscribe({
      next: async (res) => {
        await this.putTranslationValues(res)
      },
      error: (e) => console.error(e)
    })
  }

  async putTranslationValues(data: any){
    this.translation.id = data.id;
    this.translation.word_kk = data.word_kk;
    this.translation.word_ru = data.word_ru;
    this.translation.meaning_kk = (data.meaning_kk) ? data.meaning_kk : ''
    this.translation.meaning_ru = (data.meaning_ru) ? data.meaning_ru : ''
    this.translation.meaning = (data.meaning_kk && data.meaning_ru) ? `${data.meaning_kk} - ${data.meaning_ru}` : ''
    this.loading = false;
  }

  getTranslatedData(): void {
    this.dataService.myMethod(this.translation);
  }

  constructor(
    private logicService: LogicService,
    private dataService: DataService
  ){
    this.getTranslatedData();
  }

}
