import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {

   // String Interpolation
   title = 'Angular Practice';
   name: string = 'Erdem';
   age: number = 27;
   showDetails: boolean = false;

   // Property Binding
   paragraph: string = 'I am a paragraph';

   // Event Binding
   onUpdateName(event: Event) {
      this.name = (<HTMLInputElement>event.target).value;
   }

   onUpdateAge(event: Event) {
      this.age = Number((<HTMLInputElement>event.target).value);
   }

   onDetailsClicked() {
      this.showDetails = !this.showDetails;
   }
}
