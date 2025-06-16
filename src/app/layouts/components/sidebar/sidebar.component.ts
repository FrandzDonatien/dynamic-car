import { Component, OnInit } from '@angular/core';
import {faWindows} from '@fortawesome/free-brands-svg-icons';
import { faCar, faShapes} from '@fortawesome/free-solid-svg-icons' 
import { MenuItem } from './menu.model';
import { MENU } from './menu';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  
  faWindows = faWindows;
  faShapes = faShapes;
  vehiclesIcon = faCar;
  menuItems: MenuItem[] = [];
  navData: MenuItem[] = [];

  ngOnInit(): void {
    // Initialize the navData and menuItems
    this.navData = MENU;
    this.menuItems = this.navData;
  }

  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
}
