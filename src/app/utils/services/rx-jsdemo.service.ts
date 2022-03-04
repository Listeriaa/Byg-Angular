import { Injectable } from '@angular/core';
import { filter, map, Observable, of, reduce, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxJSDemoService {

  constructor() { }

  demoObservable(): void {
    const observable = new Observable<number>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      // async
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    }).pipe(
      map(x => x * 10)
    );

    const observerComplete = {
      next: (x: number) => console.log('Observer got a next value: ' + x),
      error: (err: any) => console.error('Observer got an error: ' + err),
      complete: (): void => console.log('Observer got a complete notification'),
    };

    observable.subscribe(observerComplete);

    observable.pipe(
      filter(x => x > 25),
      tap(x => console.log('log', x)),
      reduce((acc, x) => acc + x, 0)
    ).subscribe({
      next: x => console.log('Partial Observer got a next value: ' + x),
      complete: () => console.log('Partial Observer got a complete notification'),
    })

    observable.subscribe(x => console.log('Dynamic next Observer got a next value: ' + x))

    const observableOf = of(1,2,3);

  }
}
