import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposits-consult',
  templateUrl: './deposits-consult.component.html',
  styleUrls: ['./deposits-consult.component.scss']
})
export class DepositsConsultComponent implements OnInit {

  isSearchClick : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeIsSearchClick(){
    this.isSearchClick = !this.isSearchClick;
  }
}
