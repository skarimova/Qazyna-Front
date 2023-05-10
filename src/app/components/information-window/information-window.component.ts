import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-window',
  templateUrl: './information-window.component.html',
  styleUrls: ['./information-window.component.scss']
})
export class InformationWindowComponent {

  @Input() word_kk: any;
  @Input() word_ru: any;
  @Input() meaning: any;
}
