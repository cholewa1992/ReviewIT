
import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import { MessageService } from '../core';
import { ConfigService } from './config.service'

@Component({
    
    selector: 'app-config',
    templateUrl: 'config.component.html',
    styleUrls: ['config.component.css'],
})

export class ConfigComponent {

    studyId: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _msg: MessageService,
        private api: ConfigService
    ) { }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            this.studyId = +params['id'];
        })
    }

    startStudy(){
        this.api.startStudy(this.studyId).subscribe(
            num => {
                this._msg.addInfo(num+' tasks created successfully');
                console.log(num);
            },
            error => this._msg.addError(error)
        )
    }
}
