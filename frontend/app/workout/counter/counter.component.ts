import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {forEach} from 'lodash';

import getLocalDeepstreamClient from '../../deepstream.client';

@Component({
  selector: 'counter-comp',
  styles: [require('./counter.component.css')],
  template: require('./counter.component.html')
})
export default class CounterComponent implements OnInit, OnDestroy {
  counter = 0;

  private listeningExp: string = '^workout/.*';

  constructor(private cdf: ChangeDetectorRef) {}

  ngOnInit() {
    getLocalDeepstreamClient()
        .then(dsClient => {
          // Listen to when a workout-record is added and increment the counter
          dsClient.record.listen(this.listeningExp, (name, isSubscribed, response) => {
            if (isSubscribed) {
              response.accept();
              this.counter++;
              // Mark that there is a change
              this.cdf.markForCheck();
            }
          });

          dsClient.rpc.make('workout:get-all', {}, (error, result) => {
            if (error) {
              console.error('LOLZ ERROR:', error);
            } else {
              this.counter = result.length;
              // Mark that there is a change
              this.cdf.markForCheck();

              forEach(result, id => {
                // Subscribe on the record so we can decrement the counter on deletion
                const record = dsClient.record.getRecord(`workout/${id}`);
                record.whenReady(() => {
                  record.on('delete', () => {
                    // Decrement the counter
                    this.counter--;
                    // Mark that there is a change
                    this.cdf.markForCheck();
                  });
                });
                // })
              });
            }
          });
        });
  }


  ngOnDestroy() {
    // Remove the listener when the component is destroyed
    getLocalDeepstreamClient()
        .then(dsClient => {
          dsClient.record.unlisten(this.listeningExp);
        });
  }
}
