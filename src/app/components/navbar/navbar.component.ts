import { Component, OnInit } from '@angular/core';
import { SidebarAnimationService } from 'src/app/animations/sidebar-animation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private sidebarAnimationService : SidebarAnimationService) { }

  ngOnInit() {
  }

  changeToggle(){
    this.sidebarAnimationService.changeToggle();
  }

}
