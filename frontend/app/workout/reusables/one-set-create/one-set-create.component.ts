import {Component, Input} from "@angular/core";
import {SetModel} from "../../set.model";

@Component({
    selector: 'one-set-create',
    styles: [require('./one-set-create.component.css')],
    template: require('./one-set-create.component.html')
})
export class OneSetCreateComponent {
    @Input() setModel: SetModel;
    @Input() title: string;

    constructor() {}

    discard() {
        console.log('Discard the fucker!');
    }
}