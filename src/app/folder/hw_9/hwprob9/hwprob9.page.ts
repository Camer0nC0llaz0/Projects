import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hwprob9',
  templateUrl: './hwprob9.page.html',
  styleUrls: ['./hwprob9.page.scss'],
})
export class Hwprob9Page implements OnInit {


  message;

  constructor() { }
  
  ngOnInit() {

let mile=Number(prompt('Type number of miles'))
let gallons=Number(prompt('Type amount of gallons of gas used'))

this.message =(mile/gallons)

  }

}
