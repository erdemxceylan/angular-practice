import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-intro',
   templateUrl: './intro.component.html',
   styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
   name: string = 'Erdem';
   age: number = 27;
   showDetails: boolean = false;

   constructor() { }

   ngOnInit(): void {
   }

   paragraph: string = 'I am a paragraph';

   onUpdateName(event: Event) {
      this.name = (<HTMLInputElement>event.target).value;
   }

   onUpdateAge(event: Event) {
      this.age = Number((<HTMLInputElement>event.target).value);
   }
}
