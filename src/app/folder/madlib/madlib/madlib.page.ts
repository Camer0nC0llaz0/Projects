import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.page.html',
  styleUrls: ['./madlib.page.scss'],
})
export class MadlibPage implements OnInit {

  message;
  constructor() { }

  ngOnInit() {
    let containter = prompt('Enter a container')
    let adjective1 = prompt('Enter a adjective')
    let adjective2 = prompt('Enter another adjective')
    let noun = prompt('Enter an noun')
    let aniamal = prompt('Enter a animal')
    let vegetable = prompt('Enter a Vegetable')
    let vegetable2 = prompt('Enter a Vegetable')
    let color = prompt('Enter a Color')
    let adjective3 = prompt('Enter another Adjective')

    this.message = (`Make sure your lunch ${containter} is filled with nutritious ${adjective1} food. Do not go to the ${adjective2} food stand across the street from the school. The hamburgers they serve are fried in ${noun} and are made of ${aniamal} meat. So take a sandwich made of ${vegetable} or ${vegetable2} it's much healthier! Drink ${color} milk instead of ${adjective3} colas.`)
  }

}
