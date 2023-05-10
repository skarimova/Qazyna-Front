import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Translation } from 'src/app/models/translation.model';
import { LogicService } from 'src/app/services/logic.service';
import { InformationWindowComponent } from '../information-window/information-window.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent {
  wordKK = '';
  wordRU = '';
  meaningKK = '';
  meaningRU = '';

  @ViewChild(InformationWindowComponent) view!: InformationWindowComponent;

  @Input() translation: Translation = {
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

  @Output() onSelected = new EventEmitter<any>();

  ngOnInit() {}

  async addTranslation(): Promise<void> {
    let word_kk = document.getElementById('new-word-kk') as HTMLInputElement | null;
    let word_ru = document.getElementById('new-word-ru') as HTMLInputElement | null;
    let meaning_kk = document.getElementById('new-word-meainig-kk') as HTMLInputElement | null;
    let meaning_ru= document.getElementById('new-word-meaning-ru') as HTMLInputElement | null;

    if(word_kk?.value == "" || word_ru?.value == "" || meaning_kk?.value == "" || meaning_ru?.value ==""){
      //TODO: notification
      return;
    }
    let payload = {
      word_kk: word_kk?.value,
      word_ru: word_ru?.value,
      meaning_kk: meaning_kk?.value,
      meaning_ru: meaning_ru?.value
    }

    const data = (await this.logicService.add(payload)).subscribe({
      next: async (res) => {
        await this.putTranslationValues(res)
      },
      error: (e) => console.error(e)
    })
  }

  async putTranslationValues(data: any){
    this.translation.id = data.id
    this.translation.word_kk = data.word_kk;
    this.translation.word_ru = data.word_ru;
    this.translation.meaning_kk = data.meaning_kk ? data.meaning_kk : '',
    this.translation.meaning_ru = data.meaning_ru ? data.meaning_ru : ''
    this.translation.meaning = (data.meaning_kk && data.meaning_ru) ? `${data.meaning_kk} - ${data.meaning_ru}` : ''
    this.loading = false;
  }

  selectTranslation() {
    this.onSelected.emit(this.translation);
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
