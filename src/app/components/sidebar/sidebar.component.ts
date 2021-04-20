import { Component, OnInit } from '@angular/core';
import { SidebarAnimationService } from 'src/app/animations/sidebar-animation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isToggle : boolean = false;

  constructor(private sidebarAnimationService : SidebarAnimationService) { }

  ngOnInit() {
    this.sidebarAnimationService.change.subscribe(isOpen => {
      this.isToggle = isOpen;
      console.log("asasas");
    });
  }

}
