import { Component, OnInit } from '@angular/core';
import { add, compose, dropLast, takeLast, range } from 'ramda'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rambda';

  ngOnInit() {
    const result = compose<any, any, any, any>(
      x => x.map(add(7)),
      takeLast(100),
      dropLast(500)
    )(range(1,1000))
    console.log({result})
  }
}
