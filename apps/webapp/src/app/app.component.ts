import { Component, OnInit } from '@angular/core';

import { foo } from '@myorg/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  ngOnInit(): void {
    console.log(foo());
  }
}
