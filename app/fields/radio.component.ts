import {Component, Input, Output} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {NgForm} from 'angular2/common';
import {Task} from '../task';
import {Field} from '../field';
import {DisabledDirective} from './disabled.directive';
import {CheckedDirective} from './checked.directive';

@Component({
    selector: 'radio',
    templateUrl: './app/fields/radio.html',
    directives:[NgClass,DisabledDirective, CheckedDirective]
})
export class RadioComponent{
    @Input() field:Field;
    @Input() id:Number;
}
