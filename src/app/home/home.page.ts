import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    name: 'Awais',
    city: 'Rawalpindi',
    interests: ['Moviez', 'seasons', 'football']
  };

  constructor() {}

}
