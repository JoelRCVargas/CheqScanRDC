import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarAnimationService } from 'src/app/animations/sidebar-animation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isToggle : boolean = false;
  activeRoute : any;

  constructor(private sidebarAnimationService : SidebarAnimationService,
              private router : Router) { 
              }

  ngOnInit() {
    this.activeRoute = this.router.url;
    this.sidebarAnimationService.change.subscribe(isOpen => {
      this.isToggle = isOpen;    
    });
    //Get route
    console.log(this.activeRoute);
  }

}
