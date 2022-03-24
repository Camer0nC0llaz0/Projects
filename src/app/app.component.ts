import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Madlib', url: '/folder/madlib/madlib' , icon: 'book' },
    { title: 'Test Average Hw1', url: '/folder/hw1_10/hw1prob10' , icon: 'calculator' },
    { title: 'Miles Per Gallon', url: '/folder/hw_9/hwprob9' , icon: 'car' },
    { title: 'Favorite City', url: '/folder/hw1_12/prob12' , icon: 'house' },
 
 
 
 
 
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
