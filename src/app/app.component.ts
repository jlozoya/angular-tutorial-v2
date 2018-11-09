import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tutorial-v2';
  card = {
    title: 'Shiba Inu',
    subtitle: 'Dog Breed',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
    img: {
      url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      alt: 'Photo of a Shiba Inu'
    },
    buttons: [
      'like',
      'share'
    ]
  };
  hizoDobleClick(event) {
    console.log(`hizo doble click ${event}`);
  }
}
