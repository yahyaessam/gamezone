import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'gz-tabs-containter',
  templateUrl: './tabs-containter.component.html',
  styleUrls: ['./tabs-containter.component.css']
})
export class TabsContainterComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>
  constructor() { }

  ngAfterContentInit() {
    const activeTab = this.tabs?.filter(tab => tab.active);
    if (!activeTab || activeTab.length === 0) {
      this.selectTab(this.tabs.first);
    } 
  }

  selectTab(tab:TabComponent) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
    return false;
  }

  activeStyle(activeStatus:boolean) {
    return activeStatus? 'hover:text-white text-white bg-indigo-400': 'hover:text-indigo-400';
  }

}
