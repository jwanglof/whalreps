import {Component, Input, Output, EventEmitter} from "@angular/core";
import {SetModel} from "../../set.model";

@Component({
    selector: 'one-set-create',
    styles: [require('./one-set-create.component.css')],
    template: require('./one-set-create.component.html')
})
export class OneSetCreateComponent {
    @Input() setModel: SetModel;
    @Input() title: string;

    @Output() discardEmitter = new EventEmitter();

    constructor() {}

    discard() {
        console.log('Discard the discardEmitter!');
        this.discardEmitter.emit(this.setModel);
    }
}