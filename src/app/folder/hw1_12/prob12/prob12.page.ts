import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prob12',
  templateUrl: './prob12.page.html',
  styleUrls: ['./prob12.page.scss'],
})
export class Prob12Page implements OnInit {
  leng
  upper
  lower
  first
  name
  constructor() { }

  ngOnInit() {
  

  let city = prompt('Enter your Favorite city')
 this.name =city
 this.leng = city.length
 this.upper= city.toUpperCase()
 this.lower = city.toLowerCase()
 this.first = city.charAt(0)


  

 }



}
