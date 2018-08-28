import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../common/menu/menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  links: any = ['Home', 'Contact'];

  constructor(
    public menuItems: MenuItems,
  ) { }

  ngOnInit() {
  }

  isOver(): boolean {
    if (window.matchMedia(`(max-width: 960px)`).matches) {
      return true;
    }
    return false;
  }

}
