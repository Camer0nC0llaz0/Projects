import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1prob10',
  templateUrl: './hw1prob10.page.html',
  styleUrls: ['./hw1prob10.page.scss'],
})
export class Hw1prob10Page implements OnInit {

  message;
  constructor() { }

  ngOnInit() {
 
    let test1= Number(prompt('Type the fist Test score'))
    let test2= Number(prompt('Type the second Test score'))
    let test3= Number(prompt('Type the third Test score'))
 
 
 this.message=((test1+test2+test3)/3)
 
 
  }

}
