import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarAnimationService {

  constructor() { }

  isToggle : boolean = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  changeToggle(){
    this.isToggle = !this.isToggle;
    this.change.emit(this.isToggle);
  }

}
