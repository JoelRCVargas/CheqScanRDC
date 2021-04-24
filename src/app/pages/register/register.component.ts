import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  marginLeft = 0;

  constructor() { }

  ngOnInit() {
  }

  nextBottom(){
    this.marginLeft += 100;
  }

  prevBottom(){
    this.marginLeft -= 100;
  }

}
