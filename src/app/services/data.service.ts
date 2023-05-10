import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { editTranslation } from "../models/editTranslation.model";

@Injectable({
    providedIn: 'root'
})

export class DataService{

    edittranslation: editTranslation = {
        id: '',
        word_kk: '',
        word_ru: '',
        meaning_kk: '',
        meaning_ru: '',
        meaning: ''
      };

    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    async myMethod(tr: any) {
        this.edittranslation.id = tr.id;
        this.edittranslation.word_kk = tr.word_kk;
        this.edittranslation.word_ru = tr.word_ru;
        this.edittranslation.meaning_kk = tr.meaning_kk;
        this.edittranslation.meaning_ru = tr.meaning_ru;
        this.edittranslation.meaning = (tr.meaning_kk && tr.meaning_kk) ? `${tr.meaning_kk} - ${tr.meaning_ru}` : ''
    } 

    getData() {
        return this.edittranslation;
    }


}