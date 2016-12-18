import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'are-you-sure-modal',
    template: require('./areYouSure.modal.html')
})
export default class AreYouSureModal implements OnInit {
    @Input() body: string = 'Are you sure?';

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}
}