import { Component } from '@angular/core';
import { Translation } from 'src/app/models/translation.model';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-all-words-page',
  templateUrl: './all-words-page.component.html',
  styleUrls: ['./all-words-page.component.scss']
})
export class AllWordsPageComponent {

  constructor(private logicService: LogicService){}

  translations: Translation[] = [];
  total: number = 0


  ngOnInit(): void {
    this.logicService.getAllWords().subscribe(res => {
      this.translations = res.data
      this.total = res.total
    })
  }
}
