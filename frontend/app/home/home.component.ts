import {Component, OnInit} from '@angular/core';
import {client} from '../deepstream.client';

@Component({
  selector: 'home',
  styles: [require('./home.component.css')],
  template: require('./home.component.html')
})
export default class HomeComponent implements OnInit {
  public title: any;
  constructor() {
    this.title = { value: 'Angular 2' };
  }

  ngOnInit() {
    console.log('Hello Home component', client);

    client.rpc.make('create:workout', {hej: 'damp'}, ( error, result ) => {
      console.log(3333, error, result);
    });
  }
}
