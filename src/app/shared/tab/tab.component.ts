import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gz-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() tabTitle: string = '';
  @Input() active: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  

}
