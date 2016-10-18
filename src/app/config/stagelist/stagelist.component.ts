
import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { MessageService } from '../../core';
import { StageDetailsDTO } from '../../model/models'
import { StagelistService } from './stagelist.service'
import { Sharedstagelist } from './sharedstagelist.service'

@Component({
    
    selector: 'app-stageconfig',
    templateUrl: 'stagelist.component.html',
    styleUrls: ['stagelist.component.css'],
})

export class StagelistComponent {

    model: StageDetailsDTO[];
    selected: StageDetailsDTO;
    menu: number;

    constructor(
        private route: ActivatedRoute,
        private msg: MessageService,
        private api: StagelistService,
        private stagelist: Sharedstagelist
    ) { }

    ngOnInit() {
        this.route.parent.params.forEach((params: Params) => {
            let id = +params['id'];
            this.api.get(id).subscribe(
            dtos => {
                this.model = dtos;
                this.stagelist.details = dtos;
            },
            error => this.msg.addError(error)
        );
        });
    }

    select(detail){
        console.log(detail);
        this.selected = detail;
    }

    add(){
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            let dto = new StageDetailsDTO();
            this.api.create(id, dto).subscribe(
                id => {
                    dto.Id = id,
                    this.model.push(dto);
                },
                error => this.msg.addError(error)
            )
        });
    }
}
