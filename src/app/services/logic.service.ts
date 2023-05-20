import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AddDto, GetTranslationDto } from "../dto/dto";
import { Translation } from "../models/translation.model";
import { Observable } from "rxjs";

const baseUrl = 'https://dolphin-app-tzvc7.ondigitalocean.app/';
@Injectable({
    providedIn: 'root'
 })
 export class LogicService{
    constructor(private http: HttpClient) {
    }

    async getTranslation(payload: GetTranslationDto){
        return this.http.post(`${baseUrl}gcp-translation/translate`, payload);
    }

    async add(payload: AddDto){
        return this.http.post(`${baseUrl}translation`, payload);
    }

    getAllWords() : Observable<{data:Translation[], total: number}>{
        return this.http.get<{data:Translation[], total: number}>(`${baseUrl}translation/words`);
    }

    async update(id: string, data: any){
        return this.http.patch(`${baseUrl}translation/${id}`, data);
    }

    delete(id: any): Observable<any> {
        return this.http.delete(`${baseUrl}translation/${id}`);
    }
 }