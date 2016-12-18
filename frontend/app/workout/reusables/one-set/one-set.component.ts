import {Component, Input} from "@angular/core";
import {SetModel} from "../../set.model";

@Component({
    selector: 'one-set',
    styles: [require('./one-set.component.css')],
    template: require('./one-set.component.html')
})
export class OneSetComponent {
    @Input() setModel: SetModel;
    @Input() title: string;

    constructor() {}
}
