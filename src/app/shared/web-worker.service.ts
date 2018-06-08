import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebWorkerService {
  worker: Worker;

  private eventMap: Map<string, any>;

  constructor(private ngZone: NgZone) {
    this.worker = new Worker('assets/web-worker.js');
    this.eventMap = new Map();

    this.worker.onmessage = (e) => {
      this.ngZone.run(() => {
        this.eventMap.get(e.data[0])(e.data[1]);
      });
    };
  }

  registerEvent(key: string, event: any) {
    this.eventMap.set(key, event);
  }

}
