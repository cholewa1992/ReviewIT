
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import Globals = require('../shared/globals');
import { ApiHelper } from '../shared';
import { StudyDetailsDTO, StudyConfigDTO } from '../model/models';

@Injectable()
export class StudylistService {

    constructor(
        private apihelper: ApiHelper,
        private http: Http
    ) { }

    public get(): Observable<StudyDetailsDTO[]> {
        let url = `${Globals.api}study/list`;
        return this.http.get(url, this.apihelper.JsonOptions())
            .map(this.apihelper.extractJson)
            .catch(this.apihelper.handleError);
    }

    public postStudy(study: StudyConfigDTO): Observable<number> {
        let url = `${Globals.api}study/config`;
        let body = JSON.stringify(study);
        return this.http.post(url, body, this.apihelper.JsonOptions())
            .map(this.apihelper.extractJson)
            .catch(this.apihelper.handleError);
    }


}