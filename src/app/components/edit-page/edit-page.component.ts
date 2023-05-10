import { AfterViewInit, Component, ViewChild, Input, OnInit, ElementRef } from '@angular/core';
import { LogicService } from 'src/app/services/logic.service';
import { DataService } from 'src/app/services/data.service';
import { editTranslation } from 'src/app/models/editTranslation.model';
import { InformationWindowComponent } from '../information-window/information-window.component';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})

export class EditPageComponent implements OnInit{

  @ViewChild(InformationWindowComponent) view!: InformationWindowComponent;

  @ViewChild('input_ru')
  inputruReference!:ElementRef;

  @ViewChild('input_kk')
  inputkkReference!:ElementRef;

  @ViewChild('input_meaning_kk')
  inputmeaningkkReference!:ElementRef;

  @ViewChild('input_meaning_ru')
  inputmeaningruReference!:ElementRef;

  dataList: editTranslation = {
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

  public constructor(
    private dataService: DataService,
    private logicService: LogicService
  ) { }

  ngOnInit(): void {
    this.dataList = this.dataService.getData();
  }

  delete() {
    let id = this.dataList.id ? this.dataList.id : "";
    if(id == "") return;

    const data = (this.logicService.delete(id)).subscribe({
      error: (e) => console.error(e)
    })
  }

  async change() {
    let id = this.dataList.id ? this.dataList.id : "";
    if(id == "") return;
    let payload = {
      word_kk: this.inputkkReference.nativeElement.value,
      word_ru: this.inputruReference.nativeElement.value,
      meaning_kk: this.inputmeaningkkReference.nativeElement.value,
      meaning_ru: this.inputmeaningruReference.nativeElement.value
    }

    const data = (await this.logicService.update(id, payload)).subscribe({
      next: async (res) => {
        this.putChangableValues({
          ...res,
        })
      },
      error: (e) => console.error(e)
    })
  }

  putChangableValues(data: any){
    this.dataList.id = data.id;
    this.dataList.word_kk = data.word_kk;
    this.dataList.word_ru = data.word_ru;
    this.dataList.meaning_kk = (data.meaning_kk) ? data.meaning_kk : ''
    this.dataList.meaning_ru = (data.meaning_ru) ? data.meaning_ru : ''
    this.dataList.meaning = (data.meaning_kk && data.meaning_ru) ? `${data.meaning_kk} - ${data.meaning_ru}` : ''
    this.loading = false;
  }
}
